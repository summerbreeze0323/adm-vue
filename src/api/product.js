/**
* product API
**/

import axios from 'axios'

// 상품 목록
function getProductList(params) {
	return axios.get('/api/products', {params: params})
}

// 상품 등록
function postProduct(data) {
	return axios.post('/api/products', data)
}

export default {
  getProductList,
  postProduct
}