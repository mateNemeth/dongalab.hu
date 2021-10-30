import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const contact = (req: NextApiRequest, res: NextApiResponse): Promise<unknown> => {
  console.log(process.env);

  const transporter = nodemailer.createTransport({
    port: Number(process.env.CONTACT_EMAIL_PORT),
    host: process.env.CONTACT_EMAIL_HOST,
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PW,
    },
    secure: true,
  });

  const message = req.body.message.split('\n').join('</br>');

  const mailData = {
    from: process.env.CONTACT_EMAIL_FROM,
    to: process.env.CONTACT_EMAIL_TO,
    replyTo: req.body.email,
    subject: `Üzenet ${req.body.name}-tól - ${req.body.subject}`,
    text: req.body.message + ' | Küldő: ' + req.body.email,
    html: `<div>${message}</div><p>Küldő:
    ${req.body.email}</p>`,
  };

  return new Promise((resolve) =>
    transporter.sendMail(mailData, function (err) {
      if (err) {
        console.error(err);
        res.status(400).end();
      } else res.status(200).end();

      return resolve('');
    })
  );
};

export default contact;
