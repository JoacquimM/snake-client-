
const net = require('net');
const connect = function() {  // creating new connection to vasily server 
  const conn = net.createConnection({ // setting up connection  7 - 10
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); //<---- interperates the incoming data as text
  conn.on('data', (x)=>{ // this is the event listenr for dat coming in 
    console.log(x);      // data represented in variable x // could also pass in function call
  })
  // conn.on('connect', ()=>{
  //   console.log('you connected');
  // })
  return conn;
} 

module.exports = {connect}