import { excluir, salvar } from '@actions/alugueis';
import Crud from '@components/Crud';
import { descriptografar } from '@lib/cripto';
import { prisma } from '@lib/prisma';

// 1. colunas = LISTA de { title: texto do cabeçalho, dataIndex: campo do banco }
//     'Nome'     → nome
//     'CPF'      → cpf
//     'Endereço' → endereco
//     'Celular'  → celular

// 2. campos = LISTA de { name: campo do banco, label: texto do formulário, opcional? }
//     nome     → 'Nome'
//     cpf      → 'CPF'
//     endereco → 'Endereço'   (opcional)
//     celular  → 'Celular'    (opcional)

export default async function Entidade1({ searchParams }) {
    // 3. busca = PEGAR busca (o ?busca= da URL) DE AGUARDAR searchParams, PADRÃO ''

    // 4. buscaMinuscula = busca EM MINÚSCULAS

    // 5. entidade1 = AGUARDAR prisma BUSCAR TODOS entidade1, ORDENAR POR nome CRESCENTE

    // 6. registros = PARA CADA item DA entidade1 → item COM cpf = descriptografar(item.cpf)
    //        DEPOIS MANTER SÓ OS itens ONDE nome EM MINÚSCULAS CONTÉM buscaMinuscula OU cpf CONTÉM buscaMinuscula

    // 7. RETORNAR <Crud> COM titulo="Entidade1", colunas, campos, registros, salvar, excluir, busca
}
