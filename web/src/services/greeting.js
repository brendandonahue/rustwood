import { GreeterClient } from 'src/grpc/greeter_grpc_web_pb';
import { HelloRequest } from 'src/grpc/greeter_pb';

const greeting = async () => {
  // Create a new client instance
  const client = new GreeterClient('http://localhost:8080', null, null); // Adjust the port if necessary

  // Create a request object
  let request = new HelloRequest();
  request.setName('John Doe');

  try {
    // Make the gRPC call and await the response
    const response = await new Promise((resolve, reject) => {
      client.sayHello(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    // Process and return the response
    return response.getMessage(); // Or however you need to process the response
  } catch (err) {
    console.error('Error calling sayHello:', err);
    throw err;
  }
};

export default greeting;