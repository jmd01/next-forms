import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE todos ( id serial PRIMARY KEY, text varchar(255) NOT NULL );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}