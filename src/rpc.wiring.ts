import { wireHTTP } from '../pikku-gen/pikku-types.gen.js'
import { rpcCaller } from './rpc.functions.js'

wireHTTP({
  method: 'post',
  route: '/rpc',
  func: rpcCaller,
})
