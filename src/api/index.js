import axios from 'axios'
import { axiosPromise } from './promise'

const API_URL = `https://corona.lmao.ninja`


export const getAllData = async () => {
  let promise = axios.get(`${API_URL}/all`)
  return axiosPromise(promise)
}

export const getAllCountryData = async () => {
  let promise = axios.get(`${API_URL}/countries`)
  return axiosPromise(promise)
}

export const getDataByCountryName = async (countryName) => {
  let promise = axios.get(`${API_URL}/countries/${countryName}`)
  return axiosPromise(promise)
}

