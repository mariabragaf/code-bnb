const TEMPO_VIDA = 60 * 60;

export async function entrar({ nome, senha }) {
    let usuario;
    try {
        usuario = await prisma.usuario.findUnique({ where: { nome } });
    } catch {
        return { erro: 'Erro ao conectar com o banco' };
    }

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
        return { erro: 'Usuário ou senha incorretos' };
    }

    const token = jwt.sign({ nome: usuario.nome }, process.env.JWT_SECRET, {
        expiresIn: TEMPO_VIDA,
    });

    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true, sameSite: 'lax', maxAge: TEMPO_VIDA });
    redirect('/inicio');
}

export async function sair() {
    const cookieStore = await cookies();
    cookieStore.delete('token');

    redirect('/');
}
