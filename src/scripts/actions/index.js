


// export function movieslist(){
//     return {
//         type:'MOVIES_LIST',
//         payload:[
//             {id:1,name:"Pulp Fiction"},
//             {id:2,name:"Pacific Rim"},
//             {id:3,name:"Rambo"} 
//         ]
//     }
// }
// export function carslist(){
//     return {
//         type:'cars_LIST',
//         payload:[
//             {id:1,name:"audi"},
//             {id:2,name:"bmw"},
//             {id:3,name:"psa"} 
//         ]
//     }
// }
// export function getNews (){
//     return {
//         type:'GET_NEWS',
        
//     }
// }
// var payload = [{

//       "email":"acea@ace.com",
//       "login":"true"
//     }];
// var body = {
//             email:"acea@ace.com",
//             login:"true"
//           }

export const getNews = () => ({
    type: 'GET_NEWS',
    // headers:{'Content-Type':'application/json'},
    
    

  });
  export const getUserinfo = () => ({
    type: 'GET_USERINFO',
    // headers:{'Content-Type':'application/json'},
    
    

  });
  // getNews(this.body)