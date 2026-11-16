'use server';

import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvarCliente({ id, ...dados }) {
    try {
        const data = {
            nome: dados.nome,
            endereco: dados.endereco || null,
            celular: dados.celular || null,
        };

        if (id) {
            await prisma.clientes.update({
                where: { id: Number(id) },
                data,
            });
        } else {
            await prisma.clientes.create({ data });
        }

        revalidatePath('/cliente');
        return { sucesso: true };
    } catch {
        return { erro: 'Erro ao salvar o cliente.' };
    }
}

export async function excluirCliente(id) {
    try {
        await prisma.clientes.delete({ where: { id: Number(id) } });
        revalidatePath('/cliente');
        return { sucesso: true };
    } catch (e) {
        if (e.code === 'P2003') {
            return {
                erro: 'Não é possível excluir este cliente porque ele possui imóveis cadastrados.',
            };
        }

        return { erro: 'Erro ao excluir o cliente.' };
    }
}
