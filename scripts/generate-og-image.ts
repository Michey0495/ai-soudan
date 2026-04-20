// OGP画像生成スクリプト（1200x630px）
// 実行: npx tsx scripts/generate-og-image.ts

import { writeFileSync } from 'fs'

const WIDTH = 1200
const HEIGHT = 630

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3666"/>
      <stop offset="100%" style="stop-color:#142546"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="60" y="60" width="64" height="64" rx="12" fill="rgba(255,255,255,0.15)"/>
  <text x="92" y="102" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="28" fill="white">AI</text>
  <text x="60" y="280" font-family="'Noto Sans JP', sans-serif" font-weight="600" font-size="72" fill="white">AIのことなら、</text>
  <text x="60" y="370" font-family="'Noto Sans JP', sans-serif" font-weight="600" font-size="72" fill="white">まず相談。</text>
  <text x="60" y="440" font-family="'Noto Sans JP', sans-serif" font-weight="400" font-size="24" fill="rgba(255,255,255,0.6)">無料1時間相談 | 研修 | 開発 | コンサルティング</text>
  <text x="60" y="560" font-family="Inter, sans-serif" font-weight="400" font-size="18" fill="rgba(255,255,255,0.4)">soudan.ezoai.jp</text>
  <rect x="60" y="490" width="120" height="1" fill="rgba(255,255,255,0.2)"/>
</svg>`

writeFileSync('public/og-image.svg', svg)
console.log('OGP画像（SVG）を生成しました: public/og-image.svg')

// PNG変換はsharpが必要
try {
  const sharp = require('sharp')
  sharp(Buffer.from(svg))
    .png()
    .toFile('public/og-image.png')
    .then(() => console.log('OGP画像（PNG）を生成しました: public/og-image.png'))
} catch {
  console.log('sharpが未インストールのためPNG変換をスキップ。SVGをそのまま使用可能です。')
}
