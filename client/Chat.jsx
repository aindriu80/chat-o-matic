import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { Container, Row, Col, FormInput, Button } from 'shards-react'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`
const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES)
  if (!data) {
    return null
  }

  return (
    <>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          style={{
            display: 'flex',
            justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
            paddingBottom: '1rem',
          }}>
          {user !== messageUser && (
            <div
              style={{
                height: 50,
                width: 50,
                marginRight: '0.5em',
                border: '2px solid #e5e6ea',
                borderRadius: 25,
                textAlign: 'center',
                fontSize: '18px',
                padding: 10,
              }}>
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div
            style={{
              background: user === messageUser ? '#58bf56' : '#e5e6ea',
              color: user === messageUser ? '#fffff' : '#000000',
              padding: '1rem',
              borderRadius: '1rem',
              maxWidth: '60%',
            }}>
            {content}
          </div>
        </div>
      ))}
    </>
  )
}
const Chat = () => {
  const [state, stateSet] = React.useState({
    user: 'Aindriú',
    content: '',
  })
  const onSend = () => {
    if (state.content.length > 0) {
    }
    stateSet({
      ...state,
      content: '',
    })
  }
  return (
    <Container>
      <Messages user={state.user} />
      <Row>
        <Col xs={2} style={{ padding: 0 }}>
          <FormInput
            label="User"
            value={state.user}
            onChange={(evt) =>
              stateSet({
                ...state,
                user: evt.target.value,
              })
            }
          />
        </Col>

        <Col xs={8}>
          <FormInput
            label="Content"
            value={state.content}
            onChange={(evt) =>
              stateSet({
                ...state,
                content: evt.target.value,
              })
            }
            onKeyUp={(evt) => {
              if (evt.keyCode === 13) {
                onSend()
              }
            }}
          />
        </Col>
        <Col>
          <Button onClick={() => onSend()}>Send</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default () => {
  return (
    <ApolloProvider client={client}>
      <Chat />
    </ApolloProvider>
  )
}
