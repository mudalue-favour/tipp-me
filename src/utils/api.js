import axios from 'axios'

//base url
const url = 'https://tipp-me.herokuapp.com/'

export const postRequest = async (_obj) => {
  try {
    console.log(_obj)
    const { data } = await axios.post(`${url}user/signup`, _obj)

    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

const data = {url: "https://news.ycombinator.com", geo: "us", retryName: 1}
