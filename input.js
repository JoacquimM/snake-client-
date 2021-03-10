
let connection;


const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput =(key)=> {
    if (key === "\u0003"){
      process.exit();
    }

    if (key === 'd'){conn.write('Move: right')};
    if (key === 'a'){conn.write('Move: left')};
    if (key === 'w'){conn.write('Move: up')};
    if (key === 's'){conn.write('Move: down')};
    if (key === 'f'){conn.write('Say: Douces')};
  }

  // conn.on('data', handleUserInput())
  stdin.on('data', handleUserInput)
  
  return stdin;
}

module.exports = {setupInput};