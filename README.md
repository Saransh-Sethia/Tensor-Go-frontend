InvoiceAutomationWithOAuth Backend

This repository contains the backend API server for the Invoice Automation system integrated with OAuth authentication.

Features:
Google OAuth integration for user authentication.
REST API endpoints for retrieving invoice details and triggering automation.
Integration with Zapier for automating past-due invoice reminders.
Technologies Used:
Node.js and Express.js for backend development.
Passport.js for OAuth authentication.
Axios for making HTTP requests.
Express-session for managing user sessions.
Setup Instructions:
Install dependencies using npm install.
Set the environment variables as described in .env.example.
Start the server using npm start.
The server will run on https://tensorgo-backend-d1e1.onrender.com/ by default.
Deployment:
Deploy this server on platforms like Render.
Ensure to configure environment variables for production deployments.

InvoiceAutomationWithOAuth Frontend
This repository contains the frontend application for the Invoice Automation system integrated with OAuth authentication.

Features:
Google OAuth integration for user authentication.
Display of due invoices with details.
Manual triggering of automation processes using Zapier.
Technologies Used:
React.js for frontend development.
Axios for API communication.
React Router for navigation.
Styled-components for styling.
Setup Instructions:
Install dependencies using npm install.
Set the environment variables as described in .env.example.
Start the development server using npm start.
Access the application on https://tensor-go.netlify.app/.
Deployment:
This application is designed to be deployed on platforms like Netlify, Vercel, or AWS Amplify for frontend hosting.