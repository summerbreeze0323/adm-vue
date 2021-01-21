<template>
  <div class="product_list">
    <div class="card search_wrap">
      <b-form>
        <div class="row">
          <div class="col-12 col-md-3">
            <b-form-group
              id="category"
              label="카테고리"
              label-for="category"
            >
              <b-form-select
                id="category"
                class="form-control"
                v-model="searchForm.category"
              >
                <b-form-select-option value="">전체</b-form-select-option>
                <b-form-select-option value="coffee">Coffee</b-form-select-option>
                <b-form-select-option value="tea">Tea</b-form-select-option>
                <b-form-select-option value="cake">Cake</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4">
            <b-form-group
              id="product"
              label="상품명"
              label-for="product"
            >
              <b-form-input
                id="product"
                v-model="searchForm.product_name"
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
        <router-link :to="{name: 'ProductCreate'}" class="btn">상품 등록</router-link>
      </div>
      <div class="table_wrap">
        <b-table
          hover
          id="productList"
          class="table_middle"
          :fields="fields"
          :items="lists.item"
          :per-page="searchForm.perPage"
          :current-page="searchForm.page"
          @row-clicked="goDetail"
        >
          <template #cell(img)="data">
            <img
              :src="data.item.img"
              :alt="data.item.product_name"
              class="thumbnail_product"  
            >
          </template>
        </b-table>
      </div>

      <pagination
        :arialControls="'productList'"
        :total="lists.total ? lists.total : 0"
				:perPage="searchForm.perPage"
				:page="searchForm.page"
      ></pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  created() {
    this.$eventBus.$emit('pageTitle', '상품 관리')
  },
  data() {
    return {
      searchForm: {
        category: '',
        product_name: '',
        perPage: 10,
        page: 1,
      },
      fields: [
        { key: 'category', label: '카테고리' },
        { key: 'img', label: '이미지' },
        { key: 'product_name', label: '상품명' }
      ],
      lists: {
        total: 10,
        item: [
          {
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[94]_20150813222021880.jpg',
            product_name: '카페 아메리카노',
            product_name_en: 'Caffe Americano',
            category: 'coffee'
          },
          {
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[94]_20150813222021880.jpg',
            product_name: '아이스 얼 그레이 티',
            product_name_en: 'Iced Earl Grey Brewed Tea',
            category: 'tea'
          }
        ]
      }
    }
  },
  methods: {
    goDetail() {
      this.$router.push({ name: 'ProductUpdate', params: { id: 123 } })
    }
  }
}
</script>

<style lang="scss">
.product_list {
  .table_wrap .table {
    min-width: 330px;

    .thumbnail_product {
      width: 50px;
      border-radius: 0.25rem;
    }
  }
}
</style>