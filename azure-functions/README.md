# Azure Functions - Contact Form Handler

This Azure Function handles contact form submissions from the portfolio website.

## Setup Instructions

### 1. Prerequisites

- Azure account with Function App created
- SendGrid account (free tier available)
- Azure CLI installed (optional, for deployment)

### 2. Create Azure Function App

```bash
# Using Azure CLI
az functionapp create \
  --resource-group <your-resource-group> \
  --consumption-plan-location australiaeast \
  --runtime python \
  --runtime-version 3.11 \
  --functions-version 4 \
  --name <your-function-app-name> \
  --storage-account <your-storage-account>
```

### 3. Configure Environment Variables

In Azure Portal → Function App → Configuration → Application settings, add:

- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_FROM_EMAIL`: Email address to send from (must be verified in SendGrid)
- `CONTACT_EMAIL`: Email address to receive contact form submissions (default: hello@dalerogers.com.au)

### 4. Deploy Function

```bash
# Install Azure Functions Core Tools
npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Login to Azure
az login

# Deploy function
func azure functionapp publish <your-function-app-name>
```

### 5. Get Function URL

1. In Azure Portal → Function App → Functions → contact-form
2. Copy the Function URL
3. Add to your Astro environment variables:
   - `AZURE_FUNCTION_URL` (for server-side)
   - Or `PUBLIC_AZURE_FUNCTION_URL` (if needed client-side)

### 6. Configure CORS

In Azure Portal → Function App → CORS:
- Add your portfolio domain: `https://your-site.azurestaticapps.net`
- Add localhost for testing: `http://localhost:4321`

## Alternative: Azure Logic App

If you prefer a no-code solution, you can use Azure Logic App instead:

1. Create Logic App in Azure Portal
2. Add HTTP Request trigger
3. Add Send Email action (Office 365 Outlook or SendGrid)
4. Configure email template with form fields
5. Copy HTTP Request URL to use in Astro API endpoint

## Testing

Test the function locally:

```bash
# Start local function runtime
func start

# Test with curl
curl -X POST http://localhost:7071/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organisation": "Test Org",
    "message": "Test message"
  }'
```

## Security Notes

- Function uses `authLevel: "function"` - requires function key
- Consider using Azure Key Vault for sensitive keys
- Implement rate limiting in production
- Add reCAPTCHA to contact form for spam protection

