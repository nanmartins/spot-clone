// import axios from 'axios';

// const clientID = 'VUE_APP_CLIENT_ID';
// const clientSecret = 'VUE_APP_CLIENT_SECRET';

// const authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   method: 'post',
//   params: {
//     grant_type: 'client_credentials',
//   },
//   headers: {
//     'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret),
//   },
// };

// export async function getAccessToken() {
//   const response = await axios(authOptions);
//   return response.data.access_token;
// }


// export default getAccessToken


const clientID = 'VUE_APP_CLIENT_ID';
const clientSecret = 'VUE_APP_CLIENT_SECRET';

const authOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret),
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'grant_type=client_credentials',
};

export async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
  const data = await response.json();
  return data.access_token;
}
