'use server';

import { criptografar } from '@lib/cripto';
import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvar({ id, ...dados }) {
    try {
        // 1. data = dados COM cpf = criptografar(dados.cpf)   (o cpf não pode ir aberto para o banco)

        // 2. SE TEM id → AGUARDAR prisma ATUALIZAR entidade1 ONDE id, COM data   (é uma edição)
        //    SENÃO      → AGUARDAR prisma CRIAR entidade1 COM data                (é um cadastro novo)
    } catch (e) {
        if (e.code === 'P2002') return { erro: 'CPF já cadastrado' };
        return { erro: 'Erro ao salvar a entidade1' };
    }
    revalidatePath('/entidade1');
}

export async function excluir(id) {
    try {
        // 3. AGUARDAR prisma EXCLUIR entidade1 ONDE id
    } catch (e) {
        if (e.code === 'P2003') return { erro: 'Entidade1 possui entidade2 cadastradas' };
        return { erro: 'Erro ao excluir a entidade1' };
    }
    revalidatePath('/entidade1');
}
