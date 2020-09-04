const http = new EasyHttp();

// // HTTP GET REQUEST
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// USER DATA
const data = {
  name: "Chioma Ciroma",
  username: "Chioma001",
  email: "chiomaciroma@gmail.com"
};

// HTTP POST Request
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));