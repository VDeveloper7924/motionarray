import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'

const AxiosService = () => {
  let AuthorizationToken = null

  function addHeaders(userConfig) {
    let globalHeaders = {}
    const csrfToken = document
      .querySelector('meta[name~=_token]')
      .getAttribute('content')

    if (csrfToken) {
      globalHeaders = {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document
          .querySelector('meta[name~=_token]')
          .getAttribute('content')
      }
    }

    const { headers } = userConfig

    return {
      headers: {
        ...globalHeaders,
        ...headers
      }
    }
  }

  function setAuthorizationToken(token) {
    AuthorizationToken = token
  }

  function get(endPoint, userConfig = {}) {
    return axios.get(`${endPoint}`, addHeaders(userConfig))
  }

  function post(endPoint, params = {}, userConfig = {}) {
    return axios.post(`${endPoint}`, params, addHeaders(userConfig))
  }

  function put(endPoint, params = {}, userConfig = {}) {
    return axios.put(`${endPoint}`, params, addHeaders(userConfig))
  }

  function patch(endPoint, params = {}, userConfig = {}) {
    return axios.patch(`${endPoint}`, params, addHeaders(userConfig))
  }

  function del(endPoint, userConfig = {}) {
    return axios.delete(`${endPoint}`, addHeaders(userConfig))
  }

  return {
    setAuthorizationToken,
    get,
    post,
    put,
    patch,
    del
  }
}

export default AxiosService()
