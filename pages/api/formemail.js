export default function (req, res) {
   
    //console.log(req.body);
  
    
     let nodemailer = require('nodemailer')
     var sesTransport = require('nodemailer-ses-transport');
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
        host: 'email-smtp.ap-south-1.amazonaws.com',
       // secure: true,
        auth: {
          user: 'AKIAVVMPHKXR67QC3OGY',
          pass: 'BCx924QQO+N08Z2N1sDkwL46m9FMpFofkmSYxRDx8fJv',
        },
        //debug: true
      });

    const mailData = {
      from: 'noreply@atomtech.in',
      to: 'web-leads@atomtech.in',
      //cc:'abhijeet@digitalvibe.in',
      subject: 'NTTDATA - Sign Up User Details',
      html: '<table style="border-collapse: collapse;">'+
      '<tr><td>First Name: <td><td>'+req.body.first_name+'</td></tr>'+
      '<tr><td>Last Name: <td><td>'+req.body.last_name+'</td></tr>'+
      '<tr><td>Mobile: <td><td>'+req.body.mobile+'</td></tr>'+
      '<tr><td>Email: <td><td>'+req.body.email+'</td></tr>'+
      '<tr><td>Product: <td><td>'+req.body.products_required+'</td></tr>'+
      '</table>'
      
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        res.status(200).json({name: JSON.stringify(err)});
      else
      res.status(200).json({name: JSON.stringify(info)});


       
        
    })
   /* res.status(200) */
    
  }