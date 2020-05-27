import React from 'react'
import { Icon, Message } from 'semantic-ui-react'
import {ToastContainer} from 'react-toastify'

const items = [
    'adicione os itens',
    'selecione o endereço de entrega',
    'finalize o pedido'
  ]

const Toast = () => (
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
)

export default Toast