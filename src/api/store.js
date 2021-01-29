/**
* store API
**/

import axios from 'axios'

// 지점 목록
function getStoreList(params) {
	return axios.get('/api/stores', {params: params})
}

export default {
  getStoreList
}