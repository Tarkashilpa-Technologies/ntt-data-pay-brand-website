//...existing imports
import axios from 'axios';

export default async function handler(req, res) {
// ... (existing transporter setup and mailData)
// Validate the reCAPTCHA token on the server-side

try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LdvV3koAAAAALVNCfiqQCQSZuOszfuCd1eyKm87&response=${req.body.captchaToken}`
    );
    if (response.data.success) {
//reCaptcha verification successfull
transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('successful');
          console.log(info);
          res.status(200).end();
        }
      });
    } else {
      // reCAPTCHA verification failed
      res.status(400).send('reCAPTCHA verification failed.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}