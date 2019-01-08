

// let state= {
//     name:'',
//     parent:[],
// }

// const action = {
//     type: 'MOVIE_LIST' ,
//     payload:[
//         {id:'1',name:'xxx'},
//         {id:'2',name:'taxi'}
//     ]
// }



// const state =0;

// export default function(state = {},action){
//     switch(action.type){
//         case 'MOVIES_LIST':
//             return {...state,movies:action.payload}
//         case 'cars_LIST':
//             return {...state,cars:action.payload}
//         default:
//             return state;
//     }
// }


// const reducer = (state = {}, action) => {
//     switch (action.type) {
//       case 'GET_API':
//         return { ...state, loading: true };
//       case 'API_RECEIVED':
//         return { ...state, api: action.json[0], loading: false }
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json, loading: false };
    case 'GET_USERINFO':
      return { ...state, loading: true };
    case 'USERINFO_RECEIVED':
      return { ...state, userinfo: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;


