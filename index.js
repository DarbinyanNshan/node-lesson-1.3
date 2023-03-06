const http = require('http');
const {  getUsers  } = require ('./controllers/UserConteollel')
const { 
    HOSTNAME,
    PORT
      } = require('./constants')


const server = http.createServer((req, res) => {
  const url = req.url
//   const { url } = req

//    if(url === '/users') {
//      res.end('WILL RETURN USERS DATA')
//    } else {
//         res.end('URL NOT FOUND')
//          };
// });
//////////////////////////////////////////////////////////
// switch (url) {
//     case '/users':
//        res.end('WILL RETURN USERS DATA');
//        break;
//     default:
//         res.end('URL NOT FOUND');
//         break;
//    }
//    })
/////////////////////////////////////////////////////////////
switch (url) {
    case '/users': 
       getUsers(req, res)
       break;
    default:
        res.end('URL NOT FOUND');
        break;
   }
   })

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
