// import axios from 'axios';

// const baseURL = 'https://api.spotify.com/v1';

// export async function searchTracks(query, token) {
//   const axiosInstance = axios.create({
//     baseURL,
//     headers: {
//       'Authorization': 'Bearer ' + token,
//     },
//   });
//   const response = await axiosInstance.get(`/search?q=${query}&type=track`);
//   return response.data.tracks.items;
// }


export async function searchTracks(token, query) {
  const baseURL = 'https://api.spotify.com/v1';
  const searchURL = `${baseURL}/search?q=${query}&type=track`;

  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = await fetch(searchURL, options);
  const data = await response.json();
  return data.tracks.items;
}
