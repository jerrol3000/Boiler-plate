import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const TOKEN = 'token'

//slice
const authenticate = createSlice({
  name: 'authenticate ',
  initialState :{
    authenticate: {}
  },
  reducers: {

    _setAuth: (state, action) => {
      state.authenticate = action.payload;
    },
    _signUp:(state)=>{
      state.authenticate
    }
  }
})

export default authenticate.reducer;

// Actions
const { _setAuth, _signUp } = authenticate.actions

export const isLogin = () => async dispatch => {
  try {
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const {data} = await axios.get('/api/users/login', {
        headers: {
          authorization: token
        }
      })
      return dispatch(_setAuth(data))
    }
  } catch (e) {
    return console.error(e.message);
  }
}

export const setAuth = (value) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/users/login`, value)
    window.localStorage.setItem(TOKEN, data.token)
    dispatch(isLogin())
  } catch (authError) {
    return dispatch(_setAuth({error: authError}))
  }
}


export const signUp = (value) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/users/signup`, value)
    dispatch(_signUp(data))
  } catch (error) {
    console.log(error)
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/api/users/login')
  return _setAuth.state = {}
}
