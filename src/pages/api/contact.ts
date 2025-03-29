import { NextApiRequest, NextApiResponse } from "next";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

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

    // TODO: Send email notification
    // For now, we'll just log the form data
    console.log("Contact form submission:", formData);

    // Return success response
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
