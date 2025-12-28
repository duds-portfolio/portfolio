#!/bin/bash
# Azure Function Deployment Script

echo "Deploying Azure Function..."

# Check if Azure Functions Core Tools is installed
if ! command -v func &> /dev/null; then
    echo "Azure Functions Core Tools not found. Installing..."
    npm install -g azure-functions-core-tools@4 --unsafe-perm true
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo "Please login to Azure:"
    az login
fi

# Get function app name
read -p "Enter your Azure Function App name: " FUNCTION_APP_NAME

if [ -z "$FUNCTION_APP_NAME" ]; then
    echo "Error: Function App name is required"
    exit 1
fi

# Deploy function
echo "Deploying to $FUNCTION_APP_NAME..."
func azure functionapp publish "$FUNCTION_APP_NAME"

echo "Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Configure environment variables in Azure Portal"
echo "2. Get the function URL and add to .env as PUBLIC_AZURE_FUNCTION_URL"
echo "3. Configure CORS in Azure Portal"

