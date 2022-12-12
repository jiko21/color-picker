import { ImageResponse } from '@vercel/og';
import {NextRequest, NextResponse} from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function (req: NextRequest, res: NextResponse) {
  const paramColors = new URLSearchParams(req.nextUrl.search).getAll('color');
  const colors = paramColors.length > 0 ? paramColors : ['#0000FF', '#00FF00', '#FFFF00', '#F0810F', '#FF0000']
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {colors.map((color) => (<div style={{
          height: '100%',
          width: '100%',
          background: `${color}`,
          color: `${color}`,
        }
        } key={color}> </div>))}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}