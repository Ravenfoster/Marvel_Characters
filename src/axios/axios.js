import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/'
})