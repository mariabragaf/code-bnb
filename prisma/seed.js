import bcrypt from 'bcryptjs';

try {
    process.loadEnvFile();
} catch {
    console.error('❌ Arquivo .env não encontrado');
    process.exit(1);
}

const { criptografar } = await import('../src/lib/cripto.js');
const { prisma } = await import('../src/lib/prisma.js');

// Para ter mais linhas no banco, acrescente mais objetos em cada lista/tabela
const dados = {
    usuario: [
        { nome: 'admin', senha: bcrypt.hashSync('admin123', 10) },
        { nome: 'manuela', senha: bcrypt.hashSync('manuela123', 10) },
        { nome: 'maria', senha: bcrypt.hashSync('maria123', 10) },
    ],

    cliente: [
        {
            nome: 'Maria',
            cpf: criptografar('123.456.789-01'),
            email: 'Maria@email.com',
            telefone: '(11) 91111-1111',
        },
        {
            nome: 'Julia',
            cpf: criptografar('345.111.702-02'),
            email: 'Julia@email.com',
            telefone: '(12) 99284-1012',
        },
        {
            nome: 'Valentina',
            cpf: criptografar('788.102.723-03'),
            email: 'Valentina@email.com',
            telefone: '(13) 90294-2110',
        },
    ],

    imoveis: [
        {
            nome: 'Casa',
            endereco: 'Rua da Mah, 108',
            tipo: 'Casa',
            descricao: 'Casa espaçosa com três quartos, sala, cozinha e quintal.',
            valor: 2000.0,
            disponivel: false,
        },
        {
            nome: 'Apartamento',
            endereco: 'Av. Brasil, 250',
            tipo: 'Apartamento',
            descricao: 'Apartamento moderno com dois quartos, varanda e garagem.',
            valor: 1800.0,
            disponivel: false,
        },
        {
            nome: 'Chácara',
            endereco: 'Estrada das Flores, 500',
            tipo: 'Chácara',
            descricao: 'Chácara com ampla área verde, piscina e espaço para lazer.',
            valor: 3500.0,
            disponivel: true,
        },
    ],

    alugueis: [
        {
            data_inicio: new Date('2026-10-01'),
            data_fim: null,
            valor: 1500.0,
            status: 'ativo',
            cliente_id: 1,
            imoveis_id: 1,
        },
        {
            data_inicio: new Date('2026-11-01'),
            data_fim: null,
            valor: 2000.0,
            status: 'ativo',
            cliente_id: 2,
            imoveis_id: 2,
        },
    ],
};

try {
    const tabelas = Object.keys(dados).reverse().join(', ');

    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tabelas} RESTART IDENTITY CASCADE`);

    console.log('🧹 Registros anteriores apagados (IDs reiniciados)');

    for (const [tabela, data] of Object.entries(dados)) {
        const { count } = await prisma[tabela].createMany({ data });

        console.log(`✅ ${tabela}: ${count} registros`);
    }
} catch (erro) {
    console.error('❌ Erro ao popular tabelas:', erro);
} finally {
    await prisma.$disconnect();
}
