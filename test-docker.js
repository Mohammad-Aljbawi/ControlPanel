const Docker = require("dockerode");

const docker = new Docker({
  socketPath: "/var/run/docker.sock",
});

docker
  .listContainers({ all: true })
  .then((c) => {
    console.log("OK");
    console.log(c.length);
  })
  .catch((e) => {
    console.error(e);
  });