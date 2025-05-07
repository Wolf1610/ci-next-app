import { WebSocketServer } from "ws";

import { prisma } from "@repo/db/client";

const server = new WebSocketServer({
  port: 8080,
});

server.on("connection", async (socket) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  socket.send("Hi from ws-server,  connected");
});
