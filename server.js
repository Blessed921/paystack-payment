require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Serve payment form
app.get('/pay', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Verify payment
app.post('/verify', async (req, res) => {
  const ref = req.body.reference;

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${ref}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    if (response.data.data.status === "success") {
      res.json({ success: true, message: 'Payment verified!', data: response.data.data });
    } else {
      res.json({ success: false, message: 'Payment verification failed.' });
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, message: 'Server error during verification.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));