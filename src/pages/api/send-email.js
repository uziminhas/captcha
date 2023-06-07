import nodemailer from 'nodemailer';

export default async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: 'Feedback from ChatGPT Caption Generator',
        text: `Email: ${email}\n\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
