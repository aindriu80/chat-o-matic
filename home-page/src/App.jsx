import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'shards-react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

import './index.css'

import chat from 'chat/Chat'

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat?
      Sit expedita maiores rem quisquam nam blanditiis labore incidunt. Quae
      reprehenderit ex atque repellendus nobis nulla minus quod dicta dolorem.
    </p>

    <h1>Chat</h1>
    <Chat />
    <div>Chat Window here</div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
      voluptatibus odit cum quia nihil eveniet sequi at voluptatum, debitis ut
      blanditiis hic illo provident itaque ipsam laborum veniam commodi
      repellat?
    </p>
  </Container>
)

ReactDOM.render(<App />, document.getElementById('app'))
