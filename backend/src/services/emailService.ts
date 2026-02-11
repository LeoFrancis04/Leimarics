// backend/src/services/emailService.ts
import { sendEmail, emailTemplates } from '../config/email'

interface EmailData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

// 1. Send Contact Form Notification (To Admin)
export async function sendNotificationEmail(data: EmailData): Promise<boolean> {
  try {
    const adminEmail = process.env.NOTIFICATION_EMAIL || 'leofrancis6988@gmail.com'
    const template = emailTemplates.contactNotification(data)

    console.log(`📧 Sending notification to admin: ${adminEmail}`)
    
    const result = await sendEmail({
      to: adminEmail,
      subject: template.subject,
      html: template.html,
    })

    if (result.success) {
      console.log('✅ Admin notification sent successfully')
      return true
    } else {
      console.error('❌ Failed to send admin notification:', result.error)
      return false
    }
  } catch (error) {
    console.error('❌ Error in sendNotificationEmail:', error)
    return false
  }
}

// 2. Send Contact Form Confirmation (To User)
export async function sendConfirmationEmail(email: string, name: string): Promise<boolean> {
  try {
    const template = emailTemplates.contactConfirmation(name)

    console.log(`📧 Sending confirmation to user: ${email}`)
    
    const result = await sendEmail({
      to: email,
      subject: template.subject,
      html: template.html,
    })

    if (result.success) {
      console.log('✅ User confirmation sent successfully')
      return true
    } else {
      console.error('❌ Failed to send user confirmation:', result.error)
      return false
    }
  } catch (error) {
    console.error('❌ Error in sendConfirmationEmail:', error)
    return false
  }
}

// 3. Send Newsletter Welcome (To User) - WITH TEMPLATE RESTORED
export async function sendWelcomeEmail(email: string): Promise<boolean> {
  try {
    // Restored the HTML template exactly as it was in your old code
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
              <h1 style="margin: 0; font-size: 32px;">Welcome to Leimarics!</h1>
              <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
                For What's Next
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
                    <strong>Digital Innovation Insights</strong><br>
                    <span style="color: #666;">Stay ahead with cutting-edge web development trends</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📊</div>
                  <div>
                    <strong>Business Growth Strategies</strong><br>
                    <span style="color: #666;">Learn how top brands scale their digital presence</span>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🎁</div>
                  <div>
                    <strong>Exclusive Offers</strong><br>
                    <span style="color: #666;">Subscriber-only discounts and early access to services</span>
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
                See how we've helped other businesses achieve their digital goals.
              </p>
              
              <div style="text-align: center;">
                <a href="https://leimarics.com/portfolio" class="cta-button">
                  View Our Portfolio
                </a>
              </div>
              
              <div class="footer">
                <p>
                  <strong>Leimarics - For What's Next</strong><br>
                  Where Ambition Meets Execution
                </p>
                
                <p style="margin-top: 15px;">
                  📧 leofrancis6988@gmail.com<br>
                  📱 +91 7499216988<br>
                  🌐 <a href="https://leimarics.com" style="color: #667eea;">www.leimarics.com</a>
                </p>
                
                <div class="unsubscribe">
                  <p>
                    Don't want to receive these emails?<br>
                    <a href="https://leimarics.com/unsubscribe?email=${encodeURIComponent(email)}" 
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

    console.log(`📧 Sending welcome email to subscriber: ${email}`)
    
    const result = await sendEmail({
      to: email,
      subject: '🎉 Welcome to Leimarics Newsletter!',
      html,
    })

    if (result.success) {
      console.log('✅ Newsletter welcome email sent successfully')
      return true
    } else {
      console.error('❌ Failed to send welcome email:', result.error)
      return false
    }
  } catch (error) {
    console.error('❌ Error in sendWelcomeEmail:', error)
    return false
  }
}

// 4. Send Newsletter Subscription Alert (To Admin) - NEW
export async function sendNewsletterNotification(email: string): Promise<boolean> {
  try {
    const adminEmail = process.env.NOTIFICATION_EMAIL || 'leofrancis6988@gmail.com'
    const template = emailTemplates.newsletterNotification(email)

    console.log(`📧 Sending new subscriber alert to admin: ${adminEmail}`)

    const result = await sendEmail({
      to: adminEmail,
      subject: template.subject,
      html: template.html,
    })

    return result.success
  } catch (error) {
    console.error('❌ Error sending newsletter notification:', error)
    return false
  }
}

// 5. Send Unsubscribe Alert (To Admin) - NEW
export async function sendUnsubscribeNotification(email: string): Promise<boolean> {
  try {
    const adminEmail = process.env.NOTIFICATION_EMAIL || 'leofrancis6988@gmail.com'
    const template = emailTemplates.newsletterUnsubscribe(email)

    console.log(`📧 Sending unsubscribe alert to admin: ${adminEmail}`)

    const result = await sendEmail({
      to: adminEmail,
      subject: template.subject,
      html: template.html,
    })

    return result.success
  } catch (error) {
    console.error('❌ Error sending unsubscribe notification:', error)
    return false
  }
}

// 6. Send Bulk Newsletter (For Future Use)
export async function sendBulkNewsletter(
  subject: string,
  html: string,
  recipients: string[]
): Promise<{ sent: number; failed: number }> {
  try {
    let sent = 0
    let failed = 0

    console.log(`📧 Sending newsletter to ${recipients.length} subscribers...`)

    for (const recipient of recipients) {
      try {
        const result = await sendEmail({
          to: recipient,
          subject,
          html,
        })

        if (result.success) {
          sent++
        } else {
          failed++
        }

        // Add small delay to respect Brevo API rate limits
        await new Promise(resolve => setTimeout(resolve, 100))
      } catch (error) {
        console.error(`Failed to send to ${recipient}:`, error)
        failed++
      }
    }

    console.log(`✅ Newsletter batch complete: ${sent} sent, ${failed} failed`)
    return { sent, failed }
  } catch (error) {
    console.error('❌ Error in sendBulkNewsletter:', error)
    return { sent: 0, failed: recipients.length }
  }
}


// // backend/src/services/emailService.ts
// import transporter, { emailTemplates } from '../config/email'
// import { ContactFormData, EmailData } from '../types'

// class EmailService {
//   private from = process.env.SMTP_FROM || 'SerWebz <noreply@serwebz.com>'
//   private notificationEmail = process.env.NOTIFICATION_EMAIL || 'leofrancis6988@gmail.com'

//   // Send email helper
//   private async sendEmail(data: EmailData): Promise<boolean> {
//     try {
//       await transporter.sendMail({
//         from: this.from,
//         to: data.to,
//         subject: data.subject,
//         html: data.html,
//       })
//       return true
//     } catch (error) {
//       console.error('Email send error:', error)
//       return false
//     }
//   }

//   // Send contact form notification to admin
//   async sendContactNotification(data: ContactFormData): Promise<boolean> {
//     const template = emailTemplates.contactNotification(data)
    
//     return this.sendEmail({
//       to: this.notificationEmail,
//       subject: template.subject,
//       html: template.html,
//     })
//   }

//   // Send confirmation to contact form submitter
//   async sendContactConfirmation(name: string, email: string): Promise<boolean> {
//     const template = emailTemplates.contactConfirmation(name)
    
//     return this.sendEmail({
//       to: email,
//       subject: template.subject,
//       html: template.html,
//     })
//   }

//   // Send welcome email to newsletter subscriber
//   async sendWelcomeEmail(email: string): Promise<boolean> {
//     const html = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { 
//               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
//               color: white; 
//               padding: 40px 30px; 
//               border-radius: 10px 10px 0 0; 
//               text-align: center; 
//             }
//             .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
//             .welcome-icon { font-size: 60px; margin-bottom: 10px; }
//             .benefits { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
//             .benefit-item { 
//               display: flex; 
//               align-items: start; 
//               margin-bottom: 15px; 
//               padding-bottom: 15px; 
//               border-bottom: 1px solid #eee; 
//             }
//             .benefit-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
//             .benefit-icon { 
//               background: #667eea; 
//               color: white; 
//               width: 30px; 
//               height: 30px; 
//               border-radius: 50%; 
//               display: flex; 
//               align-items: center; 
//               justify-content: center; 
//               margin-right: 15px; 
//               flex-shrink: 0;
//             }
//             .cta-button { 
//               display: inline-block; 
//               background: #667eea; 
//               color: white !important; 
//               padding: 15px 40px; 
//               text-decoration: none; 
//               border-radius: 5px; 
//               margin-top: 20px; 
//               font-weight: bold;
//             }
//             .footer { 
//               text-align: center; 
//               margin-top: 30px; 
//               padding-top: 20px; 
//               border-top: 1px solid #ddd; 
//               color: #666; 
//               font-size: 14px; 
//             }
//             .unsubscribe { color: #999; font-size: 12px; margin-top: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <div class="welcome-icon">🎉</div>
//               <h1 style="margin: 0; font-size: 32px;">Welcome to Leimarics!</h1>
//               <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
//                 For What's Next
//               </p>
//             </div>
            
//             <div class="content">
//               <p style="font-size: 16px; margin-bottom: 20px;">
//                 We're thrilled to have you in our community! 🚀
//               </p>
              
//               <p>
//                 Here's what you can expect from our newsletter:
//               </p>
              
//               <div class="benefits">
//                 <div class="benefit-item">
//                   <div class="benefit-icon">💡</div>
//                   <div>
//                     <strong>Digital Innovation Insights</strong><br>
//                     <span style="color: #666;">Stay ahead with cutting-edge web development trends</span>
//                   </div>
//                 </div>
                
//                 <div class="benefit-item">
//                   <div class="benefit-icon">📊</div>
//                   <div>
//                     <strong>Business Growth Strategies</strong><br>
//                     <span style="color: #666;">Learn how top brands scale their digital presence</span>
//                   </div>
//                 </div>
                
//                 <div class="benefit-item">
//                   <div class="benefit-icon">🎁</div>
//                   <div>
//                     <strong>Exclusive Offers</strong><br>
//                     <span style="color: #666;">Subscriber-only discounts and early access to services</span>
//                   </div>
//                 </div>
                
//                 <div class="benefit-item">
//                   <div class="benefit-icon">📖</div>
//                   <div>
//                     <strong>Success Stories</strong><br>
//                     <span style="color: #666;">Real case studies from businesses like yours</span>
//                   </div>
//                 </div>
//               </div>
              
//               <p style="margin-top: 30px;">
//                 <strong>In the meantime, why not check out our portfolio?</strong><br>
//                 See how we've helped other businesses achieve their digital goals.
//               </p>
              
//               <div style="text-align: center;">
//                 <a href="https://leimarics.com/portfolio" class="cta-button">
//                   View Our Portfolio
//                 </a>
//               </div>
              
//               <div class="footer">
//                 <p>
//                   <strong>Leimarics - For What's Next</strong><br>
//                   Where Ambition Meets Execution
//                 </p>
                
//                 <p style="margin-top: 15px;">
//                   📧 contact@leimarics.com<br>
//                   📱 +91 7499216988<br>
//                   🌐 <a href="https://leimarics.com" style="color: #667eea;">www.leimarics.com</a>
//                 </p>
                
//                 <div class="unsubscribe">
//                   <p>
//                     Don't want to receive these emails?<br>
//                     <a href="https://leimarics.com/unsubscribe?email=${encodeURIComponent(email)}" 
//                        style="color: #999;">
//                       Unsubscribe
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </body>
//       </html>
//     `
  
//     return this.sendEmail({
//       to: email,
//       subject: '🎉 Welcome to Leimarics Newsletter!',
//       html,
//     })
//   }

//   // Send newsletter to all subscribers (for admin use)
//   async sendNewsletter(subject: string, html: string): Promise<number> {
//     try {
//       // This would get all active subscribers and send email
//       // Implementation depends on how you want to handle bulk sending
//       console.log('Newsletter send not implemented yet')
//       return 0
//     } catch (error) {
//       console.error('Newsletter send error:', error)
//       return 0
//     }
//   }
// }

// export default new EmailService()