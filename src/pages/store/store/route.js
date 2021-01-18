import StoreLayout from './views/StoreLayout'

import StoreList from './views/StoreList'
import StoreCreate from './views/StoreCreate'

const StoreRoute = {
  path: 'stores',
  redirect: '/stores',
  component: StoreLayout,
  children: [
    {
      path: '/',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: 'new',
      name: 'StoreCreate',
      component: StoreCreate
    }
  ]
}

export default StoreRoute