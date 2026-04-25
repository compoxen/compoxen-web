import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617',
          color: '#D97706',
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          fontFamily: 'sans-serif',
          borderRadius: 6,
          lineHeight: 1,
        }}
      >
        X
      </div>
    ),
    { ...size }
  )
}
