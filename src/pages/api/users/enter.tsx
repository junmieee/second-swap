import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import twilio from 'twilio'
import smtpTransport from "src/libs/server/email";


const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_CLIENT)

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `휴대폰 로그인을 위한 토큰은 ${payload}입니다.`
    });
    console.log(message);
  }


  if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `이메일 로그인을 위한 토큰은 ${payload}입니다.`,
    };
    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, responses) => {
        if (error) {
          console.log(error);
          return null;
        } else {
          console.log(responses);
          return null;
        }
      }
    );
    smtpTransport.close();
    console.log(result, payload);
  }

  return res.json({ ok: true });
}
export default withHandler("POST", handler);