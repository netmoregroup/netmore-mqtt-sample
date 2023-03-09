# <img src="https://github.com/netmoregroup/netmore-installer/blob/develop/src/assets/netmore-sheld.svg" width="32"/> Netmore edge mqtt sample application.

This sample application is writen in javascript as it's common 
to most developers. If node is to be used we recomment typescript.

## Setup.
unpackage the certs you have recived into the cert directory, when done it should look
likt below

    ls ./certs/<CommonName>/
    ca.crt  
    client.crt
    client.key

## Install depenanies
Install the mqtt node libraries.

    npm install

## Run
In order to run the application you need the common name from the cert
this can be retrived in varios ways but the simplest is 

    openssl x509 -in ./certs/client.crt -noout -text

Once you found the CN short for common name you can add that as the last 
argument to the command below.

    node smaple.js <CommonName>
