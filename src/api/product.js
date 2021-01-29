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

// 상품 상세
function getProduct(id) {
	return axios.get(`/api/products/${id}`)
}

// 상품 수정
function putProduct(id, data) {
	return axios.put(`/api/products/${id}`, data)
}

export default {
  getProductList,
  postProduct,
  getProduct,
  putProduct
}