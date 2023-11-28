# Full-Stack Web Application with RedwoodJS, Rust, and gRPC

## Introduction

Welcome to our open-source project, where we're building a robust full-stack web application using RedwoodJS, Rust, and gRPC. This project aims to leverage the modern JavaScript framework provided by RedwoodJS, the performance and safety of Rust, and the high efficiency of gRPC for inter-service communication. Our goal is to create a scalable, maintainable, and performant web application.

## Why RedwoodJS, Rust, and gRPC?

- **RedwoodJS**: Offers a great developer experience with its opinionated full-stack framework, integrating frontend, backend, and database seamlessly.
- **Rust**: Known for its performance and reliability, Rust brings system-level efficiency and safety to our backend services.
- **gRPC**: Provides a high-performance, open-source universal RPC framework, making our microservices communication more efficient and robust.

## Project Status

This project is in the alpha stage. We're actively seeking contributors to help with finalizing initial implementation. The server is working with gRPC, but there are client-side errors getting gRPC to work in a React environment.  The solution may be a working Envoy proxy instance to facilitate communication with gRPC and React.  Clone the project and submit a pull request if you can help.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Rust (latest stable version)
- Yarn
- Docker (for database and other services)
- gRPC dependencies including cMake, protoc, etc
- Envoy proxy for client-side gRPC proxy communication

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brendandonahue/rustwood.git

2. Install dependencies:
   ```bash
   // For redwood:
   yarn install
   // For rust:
   cargo build
3. Start servers:
   // Start redwood server:
   yarn rw dev
   // Start Rust server:
   cargo run

## Contributing

We warmly welcome contributions from the community. Here are some ways you can contribute:

- **Reporting bugs**: If you find any bugs, please report them by opening an issue.
- **Suggesting enhancements**: Have ideas for improvements? We'd love to hear them.
- **Submitting pull requests**: Contributions via pull requests are the best way to help the project grow.
- **Writing documentation**: Help us improve our documentation for better understanding and accessibility.

Before contributing, please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to make a contribution.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to open an issue or contact the maintainers at brendan@bdonahue.com.

## Acknowledgments

- Special thanks to contributors and supporters of this project.
- RedwoodJS Docs https://redwoodjs.com/docs/introduction
- Rust Docs https://www.rust-lang.org/learn
- gRPC Docs https://grpc.io/docs/