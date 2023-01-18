import { server } from "./server";
import { __APP_PORT } from "./envinroment";

server.listen(__APP_PORT || 3333,
  () => console.log(`server running in port ${__APP_PORT}`)
);
