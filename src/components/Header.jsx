import { sair } from '@actions/login';
import { Button, Flex } from 'antd';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import Link from 'next/link';

const estilo = { padding: 16, borderBottom: '1px solid lightgray' };

export default async function Header() {
    const cookieStore = await cookies();

    const token = cookieStore.get('token')?.value;

    const usuario = token ? jwt.decode(token) : null;

    if (!usuario || typeof usuario !== 'object') return null;

    return (
        <Flex
            component="header"
            style={estilo}
            justify="space-between"
            align="center"
            wrap
            gap={16}>
            <Flex gap={16} component="nav">
                <Link href="/inicio">Início</Link>
                <Link href="/cliente">Clientes</Link>
                <Link href="/imoveis">Imóveis</Link>
                <Link href="/aluguel">Aluguéis</Link>
            </Flex>
            <Flex gap={16} align="center">
                <span>Olá, {usuario.nome}</span>
                <form action={sair}>
                    <Button htmlType="submit">Sair</Button>
                </form>
            </Flex>
        </Flex>
    );
}
