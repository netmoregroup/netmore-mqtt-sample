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


# Sample value and units 
We try to harmonize all sensors so that all sensors give the same output, this is a snapshot of 
properties that have bin selected so far. 
Note that not all sensors can be harmonized.

| Property | Unit | Description |
| --- | --- | --- |
| battery | number | V |
| temperature | number | C |
| latitude | number |  |
| longitude | number |  |
| accuracy | number | m |
| inTrip | boolean |  |
| manDown | boolean | (no movement for configured period) |
| inclination | number | degrees |
| azimuth | number |  |
| heading | number | degrees |
| speed | number | km/h |
| altitude | number |  |
| pitch | number | degrees |
| roll | number | degrees |
| hdop | number | Horizontal Dilution of Precision |
| antennas | number | count |
| firmware | string |  |
| humidity | number | RH% |
| pressure | number | Pa |
| co2 | number | Carbon Dioxide ppm |
| o2 | number | Oxygen %vol |
| co | number | CO Carbon Monoxide ppm |
| ozone | number | Ozone ppm |
| motion | number | count |
| previousMotion | number | count |
| tvoc | number | ppb |
| bvoc | number | ppm Breath VOC Estimate equivalent |
| airQuality | number | IAQ index, 0-50 excellent, 51-100 good, 101-150, Light pollution, 151-200 - Moderate pollution, 201-250 Heavily polluted, 251-350 Severely polluted, 351 > Extremely polluted |
| vdd | number | mV |
| illuminance | number | lx |
| light | number | lx |
| volume | number | m^3 |
| energy | number | kWh |
| leakState | boolean |  |
| leakStateCounter | number | count |
| leakDuration | number | s seconds |
| timestamp | number | time_t |
| errorText | string |  |
| controlValveState | boolean |  |
| outputValveState | boolean |  |
| presence | boolean |  |
| presenceCounterA | number |  |
| presenceCounterB | number |  |
| totalPresenceCounterA | number |  |
| totalPresenceCounterB | number |  |
| openState | "open" \| "closed" |  |
| openCounter | number | count |
| lastOpenDuration | number | s seconds |
| occupied | boolean |  |
| tampered | boolean |  |
| buttonPressed | boolean |  |
| status | string |  |
| last_disconnect_duration | number | s second |
| total_count | number | count |
| soundLevel | number | dBA |
| soundPeak | number | dBA |
| soundAvg | number | dBA |
| soundMin | number | dBA |
| soundMax | number | dBA |
| distance | number | m |
| pulseCounter1 | number | count absolute values; |
| pulseIntervalCounter1 | number | count resets for each send. |
| pulseCounter2 | number | count absolute values; |
| pulseIntervalCounter2 | number | count resets for each send. |
| mc_pm0_1 | number | μg/m^3 PM 0.1 Mass Concentration |
| mc_pm0_3 | number | μg/m^3 |
| mc_pm0_5 | number | μg/m^3 |
| mc_pm1_0 | number | μg/m^3 |
| mc_pm2_5 | number | μg/m^3 |
| mc_pm4_0 | number | μg/m^3 |
| mc_pm5_0 | number | μg/m^3 |
| mc_pm10_0 | number | μg/m^3 |
| nc_pm0_1 | number | particles/m^3 PM 0.1 Number Concentration |
| nc_pm0_3 | number | particles/m^3 |
| nc_pm0_5 | number | particles/m^3 |
| nc_pm1_0 | number | particles/m^3 |
| nc_pm2_5 | number | particles/m^3 |
| nc_pm4_0 | number | particles/m^3 |
| nc_pm5_0 | number | particles/m^3 |
| nc_pm10_0 | number | particles/m^3 |
| pm_tps | number | µm The TPS reading from the sensor is the Typical Particle Size of the particulate matter in µm. |