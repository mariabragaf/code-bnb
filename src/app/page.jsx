'use client';

import { entrar } from '@actions/login';
import { Alert, Button, Card, Form, Input } from 'antd';
import { useState } from 'react';

export default function Login() {
    // 1. [erro, setErro] = ESTADO COMEÇANDO COM ''

    // 2. RETORNAR <Card> COM os itens 3 a 7 DENTRO:
    //     title → 'TemaDaProva - Login'

    // 3. <Form> COM os itens 4 a 7 DENTRO:
    //     layout   → 'vertical'
    //     onFinish → ASSÍNCRONA (dados) →
    //                    resposta = AGUARDAR entrar(dados)
    //                    setErro(erro da resposta, SE EXISTIR, SENÃO '')

    // 4. SE TEM erro → <Form.Item> COM <Alert>:
    //     type  → 'error'
    //     title → erro

    // 5. <Form.Item> COM <Input />:
    //     name  → 'nome'
    //     label → 'Usuário'
    //     rules → [{ required: true }]

    // 6. <Form.Item> COM <Input.Password />   (a senha aparece escondida):
    //     name  → 'senha'
    //     label → 'Senha'
    //     rules → [{ required: true }]

    // 7. <Button> COM o texto 'Entrar':
    //     type     → 'primary'
    //     htmlType → 'submit'
    //     block
}
