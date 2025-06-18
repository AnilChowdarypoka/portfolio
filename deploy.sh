#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Vercel: Push to GitHub and import to vercel.com"
    echo "2. Netlify: Push to GitHub and import to netlify.com"
    echo "3. Manual: Upload the 'dist' folder to your hosting provider"
    echo ""
    echo "📋 Build completed successfully!"
else
    echo "❌ Build failed!"
    exit 1
fi 