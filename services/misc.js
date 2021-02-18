import ajax from './ajax'

export const getCountryList = async () => {
  return await ajax.get('/api/countries')
}
