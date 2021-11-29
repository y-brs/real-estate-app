import axios from 'axios'

export const BASE_URL = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      }
    })

    return data

  } catch (error) {
    console.log(error);
  }
}
