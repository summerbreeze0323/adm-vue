/**
* product API
**/

import axios from 'axios'

// 상품 목록
function getProductList(params) {
	return axios.get('/api/products', {params: params})
}

export default {
  getProductList
}