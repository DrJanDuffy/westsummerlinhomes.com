import { revalidatePath } from 'next/cache';

// Triggers your 2x daily update
export async function GET() {
  revalidatePath('/');
  return Response.json({ revalidated: true });
}
