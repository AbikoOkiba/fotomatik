import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, date, eventType, location, message } = await req.json()

    if (!name || !email || !date) {
      return NextResponse.json({ error: "Chybí povinné pole" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Fotomatik web <onboarding@resend.dev>",
      to: "tomas@loutocky.com",
      replyTo: email,
      subject: `Nová poptávka: ${name} – ${date}`,
      html: `
        <h2>Nová poptávka z fotomatik.cz</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold;width:160px">Jméno</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">E-mail</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefon</td><td style="padding:8px">${phone || "–"}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Datum akce</td><td style="padding:8px">${date}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Typ akce</td><td style="padding:8px">${eventType || "–"}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Místo konání</td><td style="padding:8px">${location || "–"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Zpráva</td><td style="padding:8px">${message || "–"}</td></tr>
        </table>
        <p style="margin-top:16px;color:#888;font-size:12px">Odesláno z fotomatik.cz</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Nepodařilo se odeslat zprávu" }, { status: 500 })
  }
}
