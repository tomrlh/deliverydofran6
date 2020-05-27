import React from 'react'
import { Icon, Message } from 'semantic-ui-react'

const items = [
    'adicione os itens',
    'selecione o endereço de entrega',
    'finalize o pedido'
  ]

const IntroMessage = () => (
    <Message color='cian'>
        <Message.Header><Icon name='shopping cart' color='green'/> Como fazer seu pedido em 3 simples passos</Message.Header>
        <Message.List>
            <Message.Item>Adicione os itens a sacola</Message.Item>
            <Message.Item>Selecione o endereço de entrega</Message.Item>
            <Message.Item>Finalize o pedido</Message.Item>
        </Message.List>
    </Message>
)

export default IntroMessage