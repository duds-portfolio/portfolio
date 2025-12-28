import logging
import json
import os
import azure.functions as func
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Contact form submission received')
    
    try:
        # Handle CORS preflight
        if req.method == 'OPTIONS':
            return func.HttpResponse(
                '',
                status_code=200,
                headers={
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            )
        
        # Get request body
        req_body = req.get_json()
        
        if not req_body:
            return func.HttpResponse(
                json.dumps({'success': False, 'error': 'No data provided'}),
                status_code=400,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            )
        
        # Extract form data
        name = req_body.get('name', '').strip()
        email = req_body.get('email', '').strip()
        organisation = req_body.get('organisation', '').strip()
        message = req_body.get('message', '').strip()
        
        # Validate required fields
        if not name or not email or not message:
            return func.HttpResponse(
                json.dumps({'success': False, 'error': 'Missing required fields'}),
                status_code=400,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            )
        
        # Validate email format
        import re
        email_regex = r'^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
        if not re.match(email_regex, email, re.IGNORECASE):
            return func.HttpResponse(
                json.dumps({'success': False, 'error': 'Invalid email format'}),
                status_code=400,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            )
        
        # Get SendGrid API key from environment variable
        sendgrid_api_key = os.environ.get('SENDGRID_API_KEY')
        recipient_email = os.environ.get('CONTACT_EMAIL', 'hello@dalerogers.com.au')
        
        if not sendgrid_api_key:
            logging.error('SENDGRID_API_KEY not configured')
            return func.HttpResponse(
                json.dumps({'success': False, 'error': 'Email service not configured'}),
                status_code=500,
                headers={
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            )
        
        # Create email content
        email_content = f"""
New contact form submission from dalerogers.com.au

Name: {name}
Email: {email}
Organisation: {organisation if organisation else 'Not provided'}

Message:
{message}

---
Submitted: {req_body.get('timestamp', 'Unknown')}
Source: {req_body.get('source', 'portfolio-contact-form')}
"""
        
        # Send email using SendGrid
        mail = Mail(
            from_email=os.environ.get('SENDGRID_FROM_EMAIL', 'noreply@dalerogers.com.au'),
            to_emails=recipient_email,
            subject=f'Contact Form: {name} - {organisation if organisation else "No Organisation"}',
            plain_text_content=email_content
        )
        
        sg = SendGridAPIClient(sendgrid_api_key)
        response = sg.send(mail)
        
        logging.info(f'Email sent successfully. Status: {response.status_code}')
        
        # Return success response
        return func.HttpResponse(
            json.dumps({
                'success': True,
                'message': 'Form submitted successfully'
            }),
            status_code=200,
            headers={
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        )
        
    except Exception as e:
        logging.error(f'Error processing contact form: {str(e)}', exc_info=True)
        return func.HttpResponse(
            json.dumps({
                'success': False,
                'error': 'An error occurred processing your request'
            }),
            status_code=500,
            headers={
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        )

