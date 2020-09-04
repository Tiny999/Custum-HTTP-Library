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


// HTTP PUT Request
// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  // http.delete('https://jsonplaceholder.typicode.com/users/3')
  // .then(response => console.log(response))
  // .catch(err => console.log(err));