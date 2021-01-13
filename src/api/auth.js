/**
* auth API
**/

import axios from 'axios'

// 회원 가입
function postRegister(data) {
	return axios.post('/api/users/register', data)
}

// 로그인
function postLogin(data) {
  return axios.post('/api/users/login', data)
}

// 사용자 정보
function getUserInfo() {
  return axios.get('/api/users/auth')
}
// 로그 아웃
function getLogout() {
  return axios.get('/api/users/logout')
}

export default {
  postRegister,
  postLogin,
  getUserInfo,
  getLogout
}