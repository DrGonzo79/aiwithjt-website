// api/subscribe.js
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { email, first_name } = body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const API_KEY = process.env.BEEHIIV_API_KEY;
    const PUB_ID = process.env.BEEHIIV_PUB_ID;

    if (!API_KEY || !PUB_ID) {
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        email,
        ...(first_name && { first_name }),
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'aiwithjt-website',
        utm_medium: 'organic'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message || 'Failed to subscribe.' });
    }

    return res.status(200).json({ success: true, message: 'Subscribed successfully.' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}