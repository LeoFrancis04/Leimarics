import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface ContactData {
  name: string
  email: string
  phone: string
  project_type: string
  message: string
}

export async function sendEmailNotification(data: ContactData) {
  try {
    // Email to you (business owner)
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Contact Form Submission - ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Project Type:</strong> ${data.project_type}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })

    // Auto-reply to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: 'Thank you for contacting Glueva',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>We received your inquiry and will get back to you within 4 hours.</p>
        <p>In the meantime, feel free to explore our portfolio at www.glueva.com</p>
        <br>
        <p>Best regards,</p>
        <p>The Glueva Team</p>
      `,
    })

    console.log('Email notifications sent successfully')
  } catch (error) {
    console.error('Email error:', error)
    // Don't throw - email failure shouldn't fail the whole request
  }
}