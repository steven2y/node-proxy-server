node-proxy-server
=================
The node proxy server is a small server used to get around a corporate proxy.  

Most node components that require third party services via http/https will have trouble if you are in a proxy.  You can either get round this by configuring/program your node app to be proxy aware.  Or run a local proxy that your app can talk to and let the local proxy deal with your corporate proxy.

## Install
`npm install` 

## Run
Run `node index.js http://cache-address:80 http://target-address:80 8888 false`

