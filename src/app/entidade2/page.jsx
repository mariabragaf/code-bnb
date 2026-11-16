import { excluir, salvar } from '@actions/cliente';
import Crud from '@components/Crud';
import { prisma } from '@lib/prisma';

// 1. colunas = LISTA de { title: texto do cabeçalho, dataIndex: campo do registro }
//     'Nome'      → nome
//     'Entidade1' → entidade1_nome

export default async function Entidade2() {
    // 2. [entidade2, entidade1] = AGUARDAR AO MESMO TEMPO:
    //        prisma BUSCAR TODOS entidade2, ORDENAR POR nome CRESCENTE, INCLUINDO entidade1
    //        prisma BUSCAR TODOS entidade1, ORDENAR POR nome CRESCENTE

    // 3. registros = PARA CADA item DA entidade2 → item SEM entidade1, COM entidade1_nome = nome da entidade1

    // 4. campos = LISTA de { name: campo do banco, label: texto do formulário, opcoes? }
    //     nome         → 'Nome'
    //     entidade1_id → 'Entidade1'   opcoes = PARA CADA item DA entidade1 → { value: id, label: nome }

    // 5. RETORNAR <Crud> COM titulo="Entidade2", colunas, campos, registros, salvar, excluir
}
