# Azure Contact Form Setup Guide

This guide walks you through setting up the contact form backend using Azure Functions.

## Architecture

```
Contact Form (React) 
  → Azure Function (contact-form)
    → SendGrid Email Service
      → Your Email Inbox
```

**Note**: The form calls the Azure Function directly from the client. This works with static site generation and doesn't require server-side rendering.

## Option 1: Azure Functions (Recommended)

### Step 1: Create Azure Function App

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new Function App:
   - **Name**: `dalerogers-contact-form` (or your preferred name)
   - **Runtime stack**: Python 3.11
   - **Region**: Australia East (or your preferred region)
   - **Plan**: Consumption (Serverless)
   - **Storage account**: Create new or use existing

### Step 2: Deploy the Function

The function code is in `azure-functions/contact-form/`.

**Using Azure CLI:**

```bash
# Install Azure Functions Core Tools
npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Login to Azure
az login

# Navigate to function directory
cd azure-functions

# Deploy function
func azure functionapp publish <your-function-app-name>
```

**Using Azure Portal:**

1. Go to Function App → Functions
2. Click "Create" → "HTTP trigger"
3. Name it `contact-form`
4. Copy the code from `azure-functions/contact-form/__init__.py`
5. Update `function.json` with the provided configuration

### Step 3: Configure SendGrid

1. Create a [SendGrid account](https://sendgrid.com) (free tier: 100 emails/day)
2. Verify your sender email address
3. Create an API key:
   - Go to Settings → API Keys
   - Create API Key → "Full Access" or "Restricted Access" (Mail Send only)
   - Copy the API key

### Step 4: Configure Environment Variables

In Azure Portal → Function App → Configuration → Application settings:

- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_FROM_EMAIL`: Verified sender email (e.g., `noreply@dalerogers.com.au`)
- `CONTACT_EMAIL`: Email to receive submissions (e.g., `hello@dalerogers.com.au`)

### Step 5: Get Function URL

1. Go to Function App → Functions → contact-form
2. Click "Get function URL"
3. Copy the URL (includes function key)
4. Add to your `.env` file as `PUBLIC_AZURE_FUNCTION_URL`
   - Note: The `PUBLIC_` prefix makes it available to client-side code

### Step 6: Configure CORS

In Azure Portal → Function App → CORS:

- Add your portfolio domain: `https://your-site.azurestaticapps.net`
- Add localhost for testing: `http://localhost:4321`, `http://localhost:3000`

### Step 7: Update Environment Variables

**For Local Development:**

Create `.env` file in project root:

```env
PUBLIC_AZURE_FUNCTION_URL=https://your-function-app.azurewebsites.net/api/contact-form?code=YOUR_FUNCTION_KEY
```

**For Production (Azure Static Web Apps):**

1. Go to Azure Portal → Static Web App → Configuration → Application settings
2. Add new application setting:
   - **Name**: `PUBLIC_AZURE_FUNCTION_URL`
   - **Value**: Your Azure Function URL (with function key)

**Important**: The `PUBLIC_` prefix makes this environment variable available to client-side code in Astro.

## Option 2: Azure Logic App (No-Code Alternative)

If you prefer a no-code solution:

### Step 1: Create Logic App

1. Azure Portal → Create Resource → Logic App
2. Configure:
   - **Name**: `dalerogers-contact-form`
   - **Region**: Australia East
   - **Plan**: Consumption

### Step 2: Configure Workflow

1. **Trigger**: HTTP Request
   - Method: POST
   - Request Body JSON Schema:
   ```json
   {
     "type": "object",
     "properties": {
       "name": {"type": "string"},
       "email": {"type": "string"},
       "organisation": {"type": "string"},
       "message": {"type": "string"}
     },
     "required": ["name", "email", "message"]
   }
   ```

2. **Action**: Send Email (Office 365 Outlook or SendGrid)
   - **To**: `hello@dalerogers.com.au`
   - **Subject**: `Contact Form: @{triggerBody()?['name']} - @{triggerBody()?['organisation']}`
   - **Body**: 
   ```
   New contact form submission from dalerogers.com.au

   Name: @{triggerBody()?['name']}
   Email: @{triggerBody()?['email']}
   Organisation: @{triggerBody()?['organisation']}

   Message:
   @{triggerBody()?['message']}
   ```

3. **Response**: HTTP Response
   - Status Code: 200
   - Body:
   ```json
   {
     "success": true,
     "message": "Form submitted successfully"
   }
   ```

### Step 3: Get Logic App URL

1. Save the Logic App
2. Copy the HTTP Request URL from the trigger
3. Update `src/pages/api/contact.ts` to use Logic App URL instead of Function URL

### Step 4: Configure CORS

In Logic App → Settings → CORS:
- Add your portfolio domain
- Add localhost for testing

## Testing

### Local Testing

1. Start Astro dev server:
   ```bash
   npm run dev
   ```

2. The API endpoint will work in development mode (logs to console)
3. To test with Azure Function, set `AZURE_FUNCTION_URL` in `.env`

### Production Testing

1. Deploy to Azure Static Web Apps
2. Submit test form
3. Check:
   - Form shows success message
   - Email received in inbox
   - Azure Function/Logic App shows successful run

## Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **reCAPTCHA**: Add Google reCAPTCHA to the form for additional protection
3. **Function Keys**: Keep function keys secure, use Azure Key Vault if needed
4. **Input Validation**: Already implemented in both API endpoint and Function
5. **CORS**: Only allow your domain in production

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify API endpoint is accessible
- Check CORS configuration

### Email not received
- Verify SendGrid API key is correct
- Check SendGrid activity log
- Verify sender email is verified in SendGrid
- Check Azure Function logs for errors

### Function not deploying
- Ensure Azure Functions Core Tools is installed
- Check Python version matches (3.11)
- Verify all dependencies in `requirements.txt` are correct

## Cost Estimation

- **Azure Functions**: Free tier includes 1 million requests/month
- **SendGrid**: Free tier includes 100 emails/day
- **Total**: Effectively free for personal portfolio use

## Next Steps

1. Deploy Azure Function or Logic App
2. Configure environment variables
3. Test form submission
4. Add reCAPTCHA (optional but recommended)
5. Monitor function/logic app runs in Azure Portal

