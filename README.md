💳 Paystack Payment Verification App

This is a simple web application built with Node.js, Express, and HTML/CSS/JavaScript that enables users to make payments using Paystack and verifies the transaction using Paystack’s API.

🚀 Features
	•	Clean and responsive payment form interface.
	•	Integrates Paystack Inline Payment Gateway.
	•	Verifies completed transactions via backend using Paystack’s verification endpoint.
	•	Uses .env to securely store Paystack secret keys.

 
⸻

🛠️ Tech Stack
	•	Backend: Node.js, Express.js
	•	Frontend: HTML, CSS, Vanilla JavaScript
	•	API: Paystack Inline JS SDK & REST API

 🔐 Environment Variables

Create a .env file in the root directory and add:
PAYSTACK_SECRET_KEY=your_secret_key_here
PORT=3000

⚠️ Never share your secret key publicly or push your .env file to GitHub.

🧪 How It Works
	1.	User enters their email and amount.
	2.	Paystack payment modal opens for processing.
	3.	On successful payment, a verification request is sent to /verify endpoint.
	4.	Server verifies the transaction using Paystack’s API and returns the result.
