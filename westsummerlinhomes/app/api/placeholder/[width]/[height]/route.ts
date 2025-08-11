import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  try {
    const width = parseInt(params.width);
    const height = parseInt(params.height);
    
    // Validate dimensions
    if (isNaN(width) || isNaN(height) || width > 2000 || height > 2000) {
      return new Response('Invalid dimensions', { status: 400 });
    }
    
    // Create a simple SVG placeholder
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3A8DDE;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0A2540;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 10}" 
              fill="white" text-anchor="middle" font-weight="bold">
          West Summerlin
        </text>
        <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 15}" 
              fill="white" text-anchor="middle">
          Luxury Homes
        </text>
        <text x="50%" y="75%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 20}" 
              fill="white" text-anchor="middle">
          ${width} × ${height}
        </text>
      </svg>
    `;
    
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Placeholder image generation error:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
