const http = new easyHTTP();


// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


// POST Request
const data = {
  title: "Custom Post",
  body: "This is the body of my custom post"
};


http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
})