export default function (req, res) {
  //console.log(req.body);

  let nodemailer = require("nodemailer");
  var sesTransport = require("nodemailer-ses-transport");
  /* const transporter = nodemailer.createTransport({
      port: 465,
      pool: true,
      host: "email-smtp.us-east-1.amazonaws.com",
      auth: {
        user: '',
        pass: '',
      },
      secure: true,
    }) */

  /* const transporter = nodemailer.createTransport(sesTransport({
        accessKeyId: 'AKIAVVMPHKXRWQ5PA3WO',
        secretAccessKey: 'BFMkEynIH0QqGnAdgptvx1A7d/hrN85zJF+kuigkYA8f',
       // service: 'email-smtp.us-east-1.amazonaws.com',
        rateLimit: 5
      })); */

  const transporter = nodemailer.createTransport({
    port: 587,
    host: "email-smtp.ap-south-1.amazonaws.com",

    auth: {
      user: "AKIAVVMPHKXR67QC3OGY",
      pass: "BCx924QQO+N08Z2N1sDkwL46m9FMpFofkmSYxRDx8fJv",
    },
  });

  const mailData = {
    from: "noreply@atomtech.in",
    to: "poshelpdesk@atomtech.in",
    subject: "NTTDATA - EDC Machine related issue",
    html:
      '<table style="border-collapse: collapse;">' +
      "<tr><td>TID: <td><td>" +
      req.body.tid2 +
      "</td></tr>" +
      "</table>",
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(200).json({ name: JSON.stringify(err) });
    else res.status(200).json({ name: JSON.stringify(info) });
  });
  /* res.status(200) */
}
