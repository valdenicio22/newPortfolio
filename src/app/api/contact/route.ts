import axios from "axios"
import { NextResponse } from "next/server"
import { z } from "zod"

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request){
  try{
    const body = await request.json()
    const {email, message, name} = bodySchema.parse(body)

    const messageData = {
      embeds: [
        {
          title: 'Portfolio Messages',
          color: 0x4983f5,
          fields: [
            {
              name: 'Name',
              value: name,
              inline: true,
            },
            {
              name: 'Email',
              value: email,
              inline: true,
            },
            {
              name: 'Message',
              value: message,
            },
          ],
        },
      ],
    }

    await axios.post(WEBHOOK_URL, messageData)
    return NextResponse.json(
      {
        message: 'Message sent successfully'
      }
    )

  }catch(err){
    console.log(err)
    return NextResponse.error()
  }
}