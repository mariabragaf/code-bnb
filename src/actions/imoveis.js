'use server';

import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvarImovel({ id, ...dados }) {
    try {
        const data = {
            nome: dados.nome,
            data: new Date(dados.data),
            clientes_id: Number(dados.clientes_id),
        };

        if (id) {
            await prisma.imoveis.update({
                where: { id: Number(id) },
                data,
            });
        } else {
            await prisma.imoveis.create({ data });
        }

        revalidatePath('/imoveis');
        return { sucesso: true };
    } catch {
        return { erro: 'Erro ao salvar o imóvel.' };
    }
}

export async function excluirImovel(id) {
    try {
        await prisma.imoveis.delete({ where: { id: Number(id) } });
        revalidatePath('/imoveis');
        return { sucesso: true };
    } catch (e) {
        if (e.code === 'P2003') {
            return {
                erro: 'Não é possível excluir este imóvel porque ele possui aluguéis cadastrados.',
            };
        }

        return { erro: 'Erro ao excluir o imóvel.' };
    }
}
