import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return res.status(400).json({
        message: "Please fill in all required fields",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    // Validate phone number format (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      return res.status(400).json({
        message: "Please enter a valid 10-digit phone number",
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      subject: `The Joy Digi: New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Thank you for your message. We'll get back to you soon!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
}
