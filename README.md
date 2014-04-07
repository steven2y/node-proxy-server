node-proxy-server
=================
The node proxy server is a small server used to get around a corporate proxy.  

Most node components that require third party services via http/https will have trouble if you are in a proxy.  You can either get round this by configuring/program your node app to be proxy aware.  Or run a local proxy that your app can talk to and let the local proxy deal with your corporate proxy.

## Prerequisite

You will need node and npm install 


## Install
Git clone the repository.

	git clone https://github.com/steven2y/node-proxy-server.git

Then run 

	npm install

## Run
Run 

	node index.js http://cache-address:80 http://target-address:80 8888 false

### Arguments
	node index.js proxy target port verbose 

- proxy: URL of proxy including protocol and port
- target: Target address including protocol and port
- port: Localhost port to listen too
- verbose: Logs out verbose data

### Example
	node index.js http://myproxy.com:80 http://www.google.com:80 8888 true
	
http://localhost:8888 should now forward me to google.com.
	