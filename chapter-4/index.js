const { createClient } = require("redis");

const redis = createClient({ url: 'redis://redis:6379' });



(async () => {
  try {
    await redis.connect(); // if using node-redis client.

    const pingCommandResult = await redis.ping();
    console.log("Ping command result: ", pingCommandResult);

    const getCountResult = await redis.get("count");
    console.log("Get count result: ", getCountResult);

    const incrCountResult = await redis.incr("count");
    console.log("Increase count result: ", incrCountResult);

    const newGetCountResult = await redis.get("count");
    console.log("New get count result: ", newGetCountResult);

    redis.on("connect", () => {
      console.log("Connect redis success");
    })

    await redis.set(
      "object",
      JSON.stringify({
        name: "Redis",
        lastname: "Client",
      })
    );

    const getStringResult = await redis.get("object");
    console.log("Get string result: ", JSON.parse(getStringResult));
  } catch (error) {
    console.log(error);
  }

})();

const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello kube\n")
});

server.listen(3000, () => {
  console.log("Server listen on port 3000")
})