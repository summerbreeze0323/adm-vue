/**
 * Global components
*/

import Loader from '@/components/Loader'
import Pagination from '@/components/Pagination'
import ModalConfirm from '@/components/ModalConfirm'

export default {
	install (Vue) {
		Vue.component('Loader', Loader)
		Vue.component('Pagination', Pagination)
		Vue.component('ModalConfirm', ModalConfirm)
	}
}