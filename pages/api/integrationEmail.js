import nodemailer from 'nodemailer'
import sesTransport from 'nodemailer-ses-transport'

export default async function (req, res) {
  try {
    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'email-smtp.ap-south-1.amazonaws.com',
      auth: {
        user: 'AKIAVVMPHKXR67QC3OGY',
        pass: 'BCx924QQO+N08Z2N1sDkwL46m9FMpFofkmSYxRDx8fJv',
      },
    })

    const mailData = {
      from: 'noreply@atomtech.in',
      to: req.body.mail ? req.body.mail : 'web-leads@atomtech.in',
      subject: req?.body?.subject ? req?.body?.subject : "",
      message: req?.body?.message ? req?.body?.message :"",
    }
    if (req?.body?.html) {
      mailData?.html = req?.body?.html
    }

    const info = await transporter.sendMail(mailData)
    res?.status(200)?.json({ name: JSON?.stringify(info) })
  } catch (error) {
    console.error('Error sending email:', error)
    res?.status(500)?.json({ error: error?.response})
  }
}
