import crypto from 'node:crypto';

//   O aes-256-cbc é o algoritmo que embaralha o texto (padrão mundial de criptografia).
//     chave secreta               → 32 bytes (256 bits)
//     iv (vetor de inicialização) → 16 bytes
//
//   sha512 transforma a CRIPTO_CHAVE em uma sequência de 64 bytes, e cortamos essa sequência em pedaços:
//
//     [ 0 ........ 32 | 32 ..... 48 | 48 ........ 64 ]
//           chave           iv        sobra (não usamos)

const hash = crypto.createHash('sha512').update(process.env.CRIPTO_CHAVE).digest();
const chave = hash.subarray(0, 32);
const iv = hash.subarray(32, 48);

export function criptografar(textoOriginal) {
    // 1. cifra = crypto CRIAR CIFRA COM iv: 'aes-256-cbc', chave, iv

    // 2. RETORNAR cifra ATUALIZAR textoOriginal (DE 'utf8' PARA 'hex') + cifra FINALIZAR ('hex')
}

export function descriptografar(textoCriptografado) {
    // 3. decifra = crypto CRIAR DECIFRA COM iv: 'aes-256-cbc', chave, iv

    // 4. RETORNAR decifra ATUALIZAR textoCriptografado (DE 'hex' PARA 'utf8') + decifra FINALIZAR ('utf8')
}
