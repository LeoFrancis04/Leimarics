// backend/src/config/email.ts
import nodemailer from 'nodemailer'

// Email configuration
export const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}

// Create transporter
export const transporter = nodemailer.createTransport(emailConfig)

// Verify email configuration
export async function verifyEmailConnection() {
  try {
    await transporter.verify()
    console.log('✅ Email service connected successfully')
    return true
  } catch (error) {
    console.error('❌ Email service connection failed:', error)
    console.warn('⚠️  Contact form will not send emails. Please configure SMTP settings in .env')
    return false
  }
}

// Email templates
export const emailTemplates = {
  contactNotification: (data: {
    name: string
    email: string
    phone: string
    projectType: string
    message: string
  }) => ({
    subject: `New Contact Form Submission - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 New Contact Form Submission!</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">💼 Project Type</div>
                <div class="value">${data.projectType}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${data.message}</div>
              </div>
              
              <div class="footer">
                <p><strong>SerWebz Contact Form</strong></p>
                <p>Respond within 24 hours for best results!</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  contactConfirmation: (name: string) => ({
    subject: 'Thank you for contacting SerWebz!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thanks for reaching out, ${name}! 🎉</h1>
            </div>
            <div class="content">
              <p>We've received your message and we're excited to learn more about your project!</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>We'll review your inquiry within 24 hours</li>
                <li>You'll receive a detailed response via email</li>
                <li>If needed, we'll schedule a free consultation call</li>
              </ul>
              
              <p>In the meantime, feel free to check out our portfolio to see some of our recent work.</p>
              
              <div style="text-align: center;">
                <a href="https://serwebz.com/portfolio" class="cta-button">View Our Portfolio</a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
              
              <p style="font-size: 14px; color: #666;">
                <strong>SerWebz - Crafting Digital Success</strong><br>
                📧 leofrancis6988@gmail.com<br>
                📱 +91 7499216988<br>
                🌐 www.serwebz.com
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),
}

export default transporter