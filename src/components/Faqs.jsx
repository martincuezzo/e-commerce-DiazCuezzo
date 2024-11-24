import React from 'react'
import { Container } from 'react-bootstrap'

const Faqs = () => {
  return (
    
    <div>
       <Container className="my-5">
       <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
       <div>
        <h3>Horario de atencion</h3>
        <p>Atendemos los días hábiles de Lunes a Viernes de 8:30 a 16:30hs. Tratamos de contactarnos con el cliente apenas realiza su pedido, para asesorarlo e informarlo en todo lo que necesite. En caso de hacer el pedido fuera del rango horario mencionado, no te preocupes, apenas podamos te vamos a contactar!</p>
      </div>
      <div>
        <h3>Precios</h3>
        <p>Todos los precios publicados están en AR$ pesos argentinos. Corresponden a ventas mayoristas.</p>
      </div>
      <div>
        <h3>Formas de pago</h3>
        <p>Podrás abonar tus pedidos a través de depósitos o transferencia bancarias. Además en nuestros locales también podrás abonar personalmente con efectivo.</p>
      </div>
       </Container>
    </div>
  )
}

export default Faqs