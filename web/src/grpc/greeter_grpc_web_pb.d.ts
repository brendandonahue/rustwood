import * as grpcWeb from 'grpc-web';

import * as greeter_pb from './greeter_pb'; // proto import: "greeter.proto"


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: greeter_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<greeter_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<greeter_pb.HelloReply>;

}

