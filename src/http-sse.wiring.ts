import { wireHTTP } from '../pikku-gen/pikku-types.gen.js'
import { timeSinceOpened } from './http-sse.functions.js'

wireHTTP({
  auth: false,
  method: 'get',
  route: '/sse',
  func: timeSinceOpened,
  sse: true,
})
