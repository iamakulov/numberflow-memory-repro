import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 7071 })

setInterval(() => {
  const value = Math.random() * 100
  const payload = value.toFixed(2)
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN) client.send(payload)
  }
}, 200)

console.log('WebSocket server on ws://localhost:7071')
