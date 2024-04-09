import { createServer } from 'node:http';
import { createBuiltMeshHTTPHandler } from './.mesh';

const PORT = 4000;
const HOSTNAME = 'http://0.0.0.0';

const server = createServer(createBuiltMeshHTTPHandler());
console.log(`🚀 Server ready at ${HOSTNAME}:${PORT}/graphql`);
server.listen(PORT);
