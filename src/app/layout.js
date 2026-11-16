import './globals.css';
import Header from '@components/Header';
import { App } from 'antd';

export const metadata = {
    title: 'Nextjs',
    description: 'Breve descrição do sistema web',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {/* 1. abra aqui o componente App do antd para mostrar toast feedback */}
                    {/* 2. adicione o componente para o cabeçalho aparecer em todas as páginas */}
                    <main>{children}</main>
                {/* 3. feche aqui o componente do antd */}
            </body>
        </html>
    );
}
