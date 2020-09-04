/**
 * EasyHttp Library
 * Custom Javascript Library For Making HTTP Requests
 * 
 * @version 2.0.0
 * @author Abbas Salami
 * 
 */

 class EasyHttp{

  // HTTP GET Requst
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });    
  }

  // HTTP Post Request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, { 
        method: 'POST',
        headers: {
          'Content-type':  'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });    
  }


  // // HTTP Post Request
  // post(url, data){
  //   return new Promise((resolve, reject) => {
  //     fetch(url, { 
  //       method: 'POST',
  //       headers: {
  //         'Content-type':  'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });    
  // }


 }