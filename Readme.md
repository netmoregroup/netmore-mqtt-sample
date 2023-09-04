# <img src="https://avatars.githubusercontent.com/u/93947921?s=200&v=4" width="32"/> Netmore Cloud Control sample application.

This sample application is written in javascript as it's common 
to most developers. If node is to be used we recommend typescript.

## Setup.
Unpack the certs you have received into the certs directory, when done it should look
like below

    ls ./certs/<CommonName>/
    ca.crt  
    client.crt
    client.key

## Install dependencies
Install the mqtt node libraries.

    npm install

## Run
In order to run the application you need the common name from the certificate
this can be retrieved in various ways but the simplest is 

    openssl x509 -in ./certs/client.crt -noout -text

Once you found the CN short for common name you can add that as the last 
argument to the command below.

    node sample.js <CommonName>

## Payload Description

      [{
        t: timestamp (number or string),
        rw: read write (boolean)
        i: information (string),
        n: name (string),
        u: unit (string),
        v: value 
      }]
## Topic Description
    
  Sample Data point:

          client/c123/edge/e123/netmore/dp/evt/lorac/blink/uwpa/0019eeb000000xxx/s/snr 
             |    |    |    |      |     |  |    |     |    |       |            |  |
             |    |    |    |      |     |  |    |     |    |       |            |  Data point.
             |    |    |    |      |     |  |    |     |    |       |         Sensor
             |    |    |    |      |     |  |    |     |    |   Sensor Id
             |    |    |    |      |     |  |    |     |  Sensor type
             |    |    |    |      |     |  |    |   backend 
             |    |    |    |      |     |  |  packet source
             |    |    |    |      |     | Constant identifier
             |    |    |    |      |   dp - Data point.
             |    |    |    |   Constant identifier
             |    |    |   The Edge Id aka group id.
             |    |  Constant identifier.
             |   Your customerId.
          Client is a constant prefix.

  Sample Raw:

          client/c123/edge/e123/netmore/raw/evt/blink/a81758ffxxxxxx/elt_2_hp
             |    |    |    |      |     |  |    |       |            |
             |    |    |    |      |     |  |    |       |        Sensor Type
             |    |    |    |      |     |  |    |       |    
             |    |    |    |      |     |  |    |    Sensor Id
             |    |    |    |      |     |  |  Backend 
             |    |    |    |      |     | Constant identifier             
             |    |    |    |      |   raw - Raw data packet. 
             |    |    |    |   Constant identifier
             |    |    |   The Edge Id aka group id.
             |    |  Constant identifier.
             |   Your customerId.
          Client is a constant prefix.

## Payload Sample
Message topic: client/c123/edge/e123/netmore/dp/evt/lorac/blink/uwpa/0019eeb000000xxx/s/snr 

    [
      {
        t: 1687333993477,
        rw: false,
        i: '0019eeb000000467',
        n: 'snr',
        u: 'db',
        v: 7.5
      }
    ]

Message topic: client/c123/edge/e123/netmore/dp/evt/lorac/blink/uwpa/0019eeb000000xxx/s/Energy_Total 

    [
      {
        t: 1687333800000,
        rw: false,
        i: '60',
        n: 'Energy Total',
        u: 'kWh',
        v: 261.6
      }
    ]

Message topic: client/c123/edge/e123/netmore/raw/evt/blink/a81758ffxxxxxx/elt_2_hp 

    [
      {
        t: 1693849603079,
        n: 'raw',
        u: 'json',
        v: {
          devEui: 'a81758ffxxxxxx',
          sensorType: 'elt_2_hp',
          messageType: 'payload',
          timestamp: '2023-09-04T17:46:43.079435Z',
          payload: '0100910262070e380b00031bd51700000973',
          fCntUp: 76533,
          toa: null,
          freq: 867300000,
          batteryLevel: '254',
          ack: false,
          spreadingFactor: '7',
          dr: 5,
          rssi: '-87',
          snr: '11',
          gatewayIdentifier: '773',
          fPort: '5',
          latitude: 67.806233,
          longitude: 11.685214,
          gateways: [Array]
        }
      }
    ]