import { server } from "./server";
import { __APP_PORT } from "./config";

server.listen(__APP_PORT || 3333,
  () => console.log(`server running in port $`)
);
