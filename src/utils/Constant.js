export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_REACT_APP_TMDB_KEY,
    }
  };



export const OPENAI_KEY =  import.meta.env.VITE_REACT_APP_OPENAI_KEY;