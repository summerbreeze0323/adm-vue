/**
 * Global components
*/

import Loader from '@/components/Loader'
import Pagination from '@/components/Pagination'

export default {
	install (Vue) {
		Vue.component('Loader', Loader)
		Vue.component('Pagination', Pagination)
	}
}