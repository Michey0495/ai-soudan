import type { VercelRequest, VercelResponse } from '@vercel/node'

interface BookingData {
  date: string
  time: string
  consultationType: 'online' | 'offline'
  companyName: string
  name: string
  email: string
  phone?: string
  topic?: string
  message?: string
}

const REQUIRED_FIELDS: (keyof BookingData)[] = ['date', 'time', 'consultationType', 'companyName', 'name', 'email']

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.replace(/[<>&"']/g, '').trim().slice(0, 500)
}

function formatConfirmationHtml(data: BookingData): string {
  const typeLabel = data.consultationType === 'online' ? 'オンライン' : '対面（札幌オフィス）'
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <div style="background: #1e3666; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; font-size: 20px; margin: 0;">AIの相談所 - 予約確認</h1>
      </div>
      <div style="background: #f5f4f0; padding: 24px; border-radius: 0 0 12px 12px;">
        <p style="color: #2e2d2a; font-size: 14px;">以下の内容で予約を受け付けました。</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px; width: 120px;">日時</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${data.date} ${data.time}〜</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px;">形式</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${typeLabel}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px;">会社名</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${data.companyName}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px;">お名前</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${data.name}</td></tr>
          ${data.topic ? `<tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px;">テーマ</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${data.topic}</td></tr>` : ''}
          ${data.message ? `<tr><td style="padding: 8px 0; color: #6b6760; font-size: 13px;">補足</td><td style="padding: 8px 0; color: #2e2d2a; font-size: 13px;">${data.message}</td></tr>` : ''}
        </table>
        <p style="color: #8f8a7c; font-size: 12px; margin-top: 24px;">
          当日のご案内は前日までにメールでお届けします。<br>
          日程変更・キャンセルはこのメールへの返信でお受けします。
        </p>
      </div>
    </div>
  `
}

function formatNotificationText(data: BookingData): string {
  const typeLabel = data.consultationType === 'online' ? 'オンライン' : '対面'
  return [
    '【新規予約】AIの相談所',
    `日時: ${data.date} ${data.time}〜`,
    `形式: ${typeLabel}`,
    `会社名: ${data.companyName}`,
    `氏名: ${data.name}`,
    `メール: ${data.email}`,
    data.phone ? `電話: ${data.phone}` : '',
    data.topic ? `テーマ: ${data.topic}` : '',
    data.message ? `補足: ${data.message}` : '',
  ].filter(Boolean).join('\n')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body as Partial<BookingData>

  // バリデーション
  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
      return res.status(400).json({ error: `${field} は必須です` })
    }
  }

  if (!validateEmail(body.email!)) {
    return res.status(400).json({ error: 'メールアドレスの形式が不正です' })
  }

  // サニタイズ
  const data: BookingData = {
    date: sanitize(body.date!),
    time: sanitize(body.time!),
    consultationType: body.consultationType === 'offline' ? 'offline' : 'online',
    companyName: sanitize(body.companyName!),
    name: sanitize(body.name!),
    email: sanitize(body.email!),
    phone: body.phone ? sanitize(body.phone) : undefined,
    topic: body.topic ? sanitize(body.topic) : undefined,
    message: body.message ? sanitize(body.message) : undefined,
  }

  // Resendでメール送信（環境変数RESEND_API_KEYが設定されている場合）
  const resendKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@ai-soudan.jp'

  if (resendKey) {
    try {
      // 管理者通知メール
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AIの相談所 <noreply@ai-soudan.jp>',
          to: notifyEmail,
          subject: `【新規予約】${data.companyName} ${data.name}様 ${data.date} ${data.time}`,
          text: formatNotificationText(data),
        }),
      })

      // 顧客への確認メール
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AIの相談所 <noreply@ai-soudan.jp>',
          to: data.email,
          subject: '【予約確認】AIの相談所 - 無料相談のご予約を受け付けました',
          html: formatConfirmationHtml(data),
        }),
      })
    } catch (error) {
      console.error('メール送信エラー:', error)
      // メール送信に失敗しても予約自体は受け付ける
    }
  } else {
    // Resend未設定時はログ出力のみ
    console.log('予約データ:', JSON.stringify(data, null, 2))
    console.log('RESEND_API_KEY未設定のためメール送信スキップ')
  }

  return res.status(200).json({
    success: true,
    message: '予約を受け付けました',
    booking: {
      date: data.date,
      time: data.time,
      consultationType: data.consultationType,
    },
  })
}
