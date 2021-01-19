import ProductLayout from './views/ProductLayout'

import ProductList from './views/ProductList'

const ProductRoute = {
  path: 'products',
  redirect: '/products',
  component: ProductLayout,
  children: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    }
  ]
}

export default ProductRoute