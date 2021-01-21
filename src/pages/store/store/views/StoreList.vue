<template>
  <div class="store_list">
    <div class="card search_wrap">
      <b-form>
        <div class="row">
          <div class="col-6 col-md-3">
            <b-form-group
              id="sido"
              label="시/도"
              label-for="sido"
            >
              <b-form-select
                id="sido"
                class="form-control"
                v-model="searchForm.sido"
              >
                <b-form-select-option value="">전체</b-form-select-option>
                <template v-for="(item, index) in sidoOptions">
                  <b-form-select-option :key="index" :value="item">{{ item.sido }}</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-6 col-md-3">
            <b-form-group
              id="gugun"
              label="구/군"
              label-for="gugun"
            >
              <b-form-select
                id="guguno"
                class="form-control"
                v-model="searchForm.gugun"
                :disabled="!searchForm.sido"
              >
                <b-form-select-option value="">구/군 선택</b-form-select-option>
                <template v-for="(item, index) in searchForm.sido.gugun">
                  <b-form-select-option :key="index" :value="item.value">{{ item.text }}</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4">
            <b-form-group
              id="store"
              label="지점명"
              label-for="store"
            >
              <b-form-input
                id="store"
                v-model="searchForm.name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-2 btn_search_wrap">
            <b-button>검색</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div class="card">
      <div class="btn_wrap">
        <router-link :to="{name: 'StoreCreate'}" class="btn">매장 등록</router-link>
      </div>
      <div class="table_wrap">
        <b-table
          hover
          id="storeList"
          :fields="fields"
          :items="lists.item"
          :per-page="searchForm.perPage"
          :current-page="searchForm.page"
          @row-clicked="goDetail"
        ></b-table>
      </div>

      <pagination
        :arialControls="'storeList'"
        :total="lists.total ? lists.total : 0"
				:perPage="searchForm.perPage"
				:page="searchForm.page"
      ></pagination>
    </div>
  </div>
</template>

<script>
import { sidoList } from '../js/sidoList'

export default {
  name: 'StoreList',
  created() {
    this.sidoOptions = sidoList
    this.$eventBus.$emit('pageTitle', '매장 관리')
  },
  data() {
    return {
      sidoOptions: [],
      searchForm: {
        store: '',
        sido: '',
        gugun: '',
        perPage: 10,
        page: 1,
      },
      fields: [
        { key: 'store', label: '지점명' },
        { key: 'address', label: '주소' },
        { key: 'tel', label: '전화번호' }
      ],
      lists: {
        total: 10,
        item: [
          { store: '가나다지점', sido: '서울', gugun: '관악구', address: '서울시 일산동구 정발산로 24 (장항동)', tel: '1234-1234'},
          { store: '흐흐흐지점', sido: '경기', gugun: '고양시 일산덕구', address: '경기도 고양시 일산동구 정발산로 38', tel: '1234-1234'},
        ]
      }
    }
  },
  watch: {
    'searchForm.sido'() {
      if (this.searchForm.gugun) { this.searchForm.gugun = ''}
    }
  },
  methods: {
    goDetail (item) {
			this.$router.push({ name: 'StoreUpdate', params: { id: 123 } })
		}
  }
}
</script>

<style>
</style>