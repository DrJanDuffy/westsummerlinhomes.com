import { revalidatePath } from 'next/cache';

export async function GET() {
  try {
    console.log('[Next.js] Revalidating home listings');
    
    // Revalidate the main page
    revalidatePath('/');
    
    // Revalidate any individual home pages
    revalidatePath('/homes/[id]');
    
    return Response.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      message: 'Home listings revalidated successfully'
    });
  } catch (error) {
    console.error('[Next.js] Revalidation error:', error);
    return Response.json(
      { 
        revalidated: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path, secret } = body;
    
    // Optional: Add authentication to prevent unauthorized revalidation
    if (process.env.REVALIDATION_SECRET && secret !== process.env.REVALIDATION_SECRET) {
      return Response.json({ error: 'Invalid secret' }, { status: 401 });
    }
    
    console.log(`[Next.js] Revalidating path: ${path || '/'}`);
    
    if (path) {
      revalidatePath(path);
    } else {
      // Default revalidation
      revalidatePath('/');
      revalidatePath('/homes/[id]');
    }
    
    return Response.json({ 
      revalidated: true, 
      path: path || '/',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[Next.js] POST revalidation error:', error);
    return Response.json(
      { 
        revalidated: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
