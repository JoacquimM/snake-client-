
const {connect} = require('./client.js')
/**
 * Establishes connection with the game server
 */

 //--- bottom connect function commented out as it was moved to client.js ----

 // const connect = function() {  // creating new connection to vasily server 
//   const conn = net.createConnection({ // setting up connection  7 - 10
//     host: '135.23.222.131',
//     port: 50542
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); //<---- interperates the incoming data as text
//   conn.on('data', (x)=>{ // this is the event listenr for dat coming in 
//     console.log(x);      // data represented in variable x // could also pass in function call
//   })
//   // conn.on('connect', ()=>{
//   //   console.log('you connected');
//   // })
//   return conn;
// } 
//----------------------------------------------------------------
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput =(key)=> {
    if (key === "\u0003"){
      process.exit();
    }
  }

  // conn.on('data', handleUserInput())
  stdin.on('data', handleUserInput)
  
  return stdin;
}

//----------------------------------------------------------------
console.log('Connecting ...');
connect();