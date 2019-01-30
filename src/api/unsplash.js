import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 78f7776186e9e530c17905b85426bce8bc63995d3f7fce82dcde5f615834d2a1'
  }
})
