
var mqtt = require('mqtt');
var fs = require('fs');

const url = "mqtts://mqttdev.dev.netmoregroup.com";
const ca = "./certs/ca.crt";
const cert = "./certs/client.crt";
const key = "./certs/client.key";

if( process.argv.length !== 3 ) {
  console.error(`Id from cert not given! use ca name as is. openssl x509 -in ${cert} -noout -text`);
  console.log(`Note that the id need to match the cert common name, if not you will not recive any data.`);
  process.exit(1);
}
const id = process.argv[2];
const fkey = fs.readFileSync(key, "utf8");
const fcert = fs.readFileSync(cert, "utf8");
const fca =  fs.readFileSync(ca, "utf8");
console.log("Connecting to:", url);
var client = mqtt.connect(url,
  {
    key: fkey,
    cert: fcert,
    ca: fca,
    connectTimeout: 3000
  })

client.on('connect', function () {
  console.log("On connect...")
  client.subscribe(`client/${id}/#`, (info) => {
    console.log(`connected...`);
  })
})

client.on("error", (e) => {
  console.log("Error MQTT:", e.message);
})

client.on("close", () => {
  console.log("Closed");
});

client.on("reconnect", () => {
  console.log("MQTT client is reconnecting...");
});

client.on("timeout", () => {
  console.log("MQTT client timeout...");
});

// Message handler
client.on('message', (topic, message) => {
  console.log(`Message topic: ${topic}`, JSON.parse(message));
});

console.log(`D: Waiting for MQTT at client/${id}/#`);
