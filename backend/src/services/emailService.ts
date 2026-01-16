// backend/src/services/emailService.ts
import transporter, { emailTemplates } from '../config/email'
import { ContactFormData, EmailData } from '../types'

class EmailService {
  private from = process.env.SMTP_FROM || 'SerWebz <noreply@serwebz.com>'
  private notificationEmail = process.env.NOTIFICATION_EMAIL || 'leofrancis6988@gmail.com'

  // Send email helper
  private async sendEmail(data: EmailData): Promise<boolean> {
    try {
      await transporter.sendMail({
        from: this.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
      })
      return true
    } catch (error) {
      console.error('Email send error:', error)
      return false
    }
  }

  // Send contact form notification to admin
  async sendContactNotification(data: ContactFormData): Promise<boolean> {
    const template = emailTemplates.contactNotification(data)
    
    return this.sendEmail({
      to: this.notificationEmail,
      subject: template.subject,
      html: template.html,
    })
  }

  // Send confirmation to contact form submitter
  async sendContactConfirmation(name: string, email: string): Promise<boolean> {
    const template = emailTemplates.contactConfirmation(name)
    
    return this.sendEmail({
      to: email,
      subject: template.subject,
      html: template.html,
    })
  }

  // Send welcome email to newsletter subscriber
  async sendWelcomeEmail(email: string): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 40px 30px; 
              border-radius: 10px 10px 0 0; 
              text-align: center; 
            }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .welcome-icon { font-size: 60px; margin-bottom: 10px; }
            .benefits { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .benefit-item { 
              display: flex; 
              align-items: start; 
              margin-bottom: 15px; 
              padding-bottom: 15px; 
              border-bottom: 1px solid #eee; 
            }
            .benefit-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .benefit-icon { 
              background: #667eea; 
              color: white; 
              width: 30px; 
              height: 30px; 
              border-radius: 50%; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              margin-right: 15px; 
              flex-shrink: 0;
            }
            .cta-button { 
              display: inline-block; 
              background: #667eea; 
              color: white !important; 
              padding: 15px 40px; 
              text-decoration: none; 
              border-radius: 5px; 
              margin-top: 20px; 
              font-weight: bold;
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
              color: #666; 
              font-size: 14px; 
            }
            .unsubscribe { color: #999; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="welcome-icon">🎉</div>
              <h1 style="margin: 0; font-size: 32px;">Welcome to SerWebz!</h1>
              <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
                Thanks for subscribing to our newsletter
              </p>
            </div>
            
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 20px;">
                We're thrilled to have you in our community! 🚀
              </p>
              
              <p>
                Here's what you can expect from our newsletter:
              </p>
              
              <div class="benefits">
                <div class="benefit-item">
                  <div class="benefit-icon">💡</div>
                  <div>
                    <strong>Web Development Tips</strong><br>
                    <span style="color: #666;">Practical insights to improve your online presence</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📊</div>
                  <div>
                    <strong>Industry Trends</strong><br>
                    <span style="color: #666;">Stay ahead with the latest digital marketing strategies</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🎁</div>
                  <div>
                    <strong>Exclusive Offers</strong><br>
                    <span style="color: #666;">Subscriber-only discounts and early access to new services</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📖</div>
                  <div>
                    <strong>Success Stories</strong><br>
                    <span style="color: #666;">Real case studies from businesses like yours</span>
                  </div>
                </div>
              </div>
              
              <p style="margin-top: 30px;">
                <strong>In the meantime, why not check out our portfolio?</strong><br>
                See how we've helped other businesses grow online.
              </p>
              
              <div style="text-align: center;">
                <a href="https://serwebz.com/portfolio" class="cta-button">
                  View Our Portfolio
                </a>
              </div>
              
              <div class="footer">
                <p>
                  <strong>SerWebz - Crafting Digital Success</strong><br>
                  We Build, You Grow 🚀
                </p>
                
                <p style="margin-top: 15px;">
                  📧 leofrancis6988@gmail.com<br>
                  📱 +91 7499216988<br>
                  🌐 <a href="https://serwebz.com" style="color: #667eea;">www.serwebz.com</a>
                </p>
                
                <div class="unsubscribe">
                  <p>
                    Don't want to receive these emails?<br>
                    <a href="https://serwebz.com/unsubscribe?email=${encodeURIComponent(email)}" 
                       style="color: #999;">
                      Unsubscribe
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({
      to: email,
      subject: '🎉 Welcome to SerWebz Newsletter!',
      html,
    })
  }

  // Send newsletter to all subscribers (for admin use)
  async sendNewsletter(subject: string, html: string): Promise<number> {
    try {
      // This would get all active subscribers and send email
      // Implementation depends on how you want to handle bulk sending
      console.log('Newsletter send not implemented yet')
      return 0
    } catch (error) {
      console.error('Newsletter send error:', error)
      return 0
    }
  }
}

export default new EmailService()