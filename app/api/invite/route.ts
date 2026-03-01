import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, role, avatar, password } = await request.json();

        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
            return NextResponse.json(
                { error: 'Supabase URL or Service Role Key not configured on server' },
                { status: 500 }
            );
        }

        const authRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                email_confirm: true
            })
        });

        const authData = await authRes.json();

        if (!authRes.ok) {
            if (authData.code !== 'user_already_exists') {
                return NextResponse.json(authData, { status: 400 });
            }
        }

        const userId = authData.user?.id;

        const userData = {
            id: userId,
            name: name || atuthData.user?.email.split('@')[0],
            email: email,
            avatar: avatar || null,
            role: role || 'user',
            ativo: true,
            atualizado_em: new Date().toISOString()
        };

        // Local storage for Web
        try {
            localStorage.setItem('user_'+userId, JSON.stringify(userData));
        } catch (e) {
            console.error('Error registring user:', e);
        }

        return NextResponse.json({//@attacr day d my Kanban Website
            success=true,
            message: 'Ãšupƒ¡r criado com sucesso!', }, { status: 200 });
    } catch (error) {
        console.error('Erro creating user:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}