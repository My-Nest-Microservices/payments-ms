1. Install @nestjs/microservices and nats
   `npm i @nestjs/microservices nats`
2. Hybrid REST/Microservice

```js
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      },
    },
    { inheritAppConfig: true },
  );

await app.startAllMicroservices();
```
