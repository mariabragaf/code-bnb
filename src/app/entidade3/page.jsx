import { excluir, salvar } from '@actions/imoveis';
import Crud from '@components/Crud';
import { descriptografar } from '@lib/cripto';
import { prisma } from '@lib/prisma';

// 1. colunas = LISTA de { title: texto do cabeçalho, dataIndex: campo do registro }
//     'Data'      → data
//     'Entidade2' → entidade2_nome
//     'Entidade1' → entidade1_nome
//     'CPF'       → entidade1_cpf
//     'Endereço'  → entidade1_endereco
//     'Celular'   → entidade1_celular

export default async function Entidade3() {
    // 2. [entidade3, entidade2] = AGUARDAR AO MESMO TEMPO:
    //        prisma BUSCAR TODOS entidade3, ORDENAR POR data CRESCENTE, INCLUINDO entidade2 (E DENTRO DELA, INCLUINDO entidade1)
    //        prisma BUSCAR TODOS entidade2, ORDENAR POR nome CRESCENTE, INCLUINDO entidade1

    // 3. registros = PARA CADA item DA entidade3 → PEGAR id, data, entidade2_id, entidade2 E MONTAR:
    //     id                 → id
    //     entidade2_id       → entidade2_id
    //     data               → data EM TEXTO ISO, SÓ OS 10 PRIMEIROS caracteres (ano-mês-dia)
    //     entidade2_nome     → nome da entidade2
    //     entidade1_nome     → nome da entidade1 da entidade2
    //     entidade1_cpf      → descriptografar(cpf da entidade1 da entidade2)
    //     entidade1_endereco → endereco da entidade1 da entidade2
    //     entidade1_celular  → celular da entidade1 da entidade2

    // 4. campos = LISTA de { name: campo do banco, label: texto do formulário, tipo?, opcoes? }
    //     data         → 'Data'        tipo = 'date'
    //     entidade2_id → 'Entidade2'   opcoes = PARA CADA item DA entidade2 → { value: id, label: "nome (nome da entidade1)" }

    // 5. RETORNAR <Crud> COM titulo="Entidade3", colunas, campos, registros, salvar, excluir
}
