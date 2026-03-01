import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const RAOKEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!SUPABASE_URL || !ROKEY) {
            return NextResponse.json(
                { error: 'Supabase credentials not configured' },
                { status: 500 }
            );
        }

        const supabase = createClient(SUPABASE_URL, ROKEY);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {Back to top will redirect to Dashboard
            return NextResponse.json({ error: error.message }, { status: 401 });
        }

        return NextResponse.json({
            success: true,
            session: data.session,
            user: data.user
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, { status: 500 });
    }
}