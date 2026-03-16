import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fotomatik – Profesionální fotokoutek | Olomoucký kraj'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a2e1f 0%, #2e7d4f 60%, #1a2e1f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Dekorativní rámeček */}
        <div style={{
          position: 'absolute',
          inset: '32px',
          border: '2px solid rgba(201, 148, 58, 0.4)',
          borderRadius: '16px',
        }} />

        {/* Logo text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: '#000',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#fff',
          }}>F</div>
          <span style={{
            fontSize: '52px',
            fontWeight: 'bold',
            color: '#ffffff',
            letterSpacing: '-1px',
          }}>FOTOMATIK</span>
        </div>

        {/* Hlavní nadpis */}
        <div style={{
          fontSize: '38px',
          color: '#c9943a',
          fontWeight: 'bold',
          marginBottom: '16px',
          textAlign: 'center',
          padding: '0 80px',
        }}>
          Profesionální fotokoutek
        </div>

        {/* Podnadpis */}
        <div style={{
          fontSize: '26px',
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          pro svatby, večírky a firemní akce
        </div>

        {/* Lokace */}
        <div style={{
          display: 'flex',
          gap: '24px',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '20px',
        }}>
          <span>📍 Olomouc</span>
          <span>·</span>
          <span>Prostějov</span>
          <span>·</span>
          <span>Šumperk</span>
          <span>·</span>
          <span>celá Morava</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
