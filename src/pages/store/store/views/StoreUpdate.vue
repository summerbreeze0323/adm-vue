<template>
  <div class="store_update">
    <div class="card">
      <ValidationObserver ref="store">
        <b-form @submit.prevent>
          <b-row>
            <div class="col-12 col-md-6 col-xl-3">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group
                  id="store"
                  label="지점명"
                  label-for="store"
                >
                  <b-form-input
                    name="store"
                    id="store"
                    :class="{'error': errors[0]}"
                    v-model="storeForm.store"
                    v-validate="'required'"
                  ></b-form-input>
                  <span class="error_txt">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <b-form-group
                id="tel"
                label="전화번호"
                label-for="tel"
              >
                <b-form-input
                  name="tel"
                  id="tel"
                  :class="{'error': storeForm.tel.length && !telError}"
                  :value="storeForm.tel"
                  @input="validTel($event)"
                ></b-form-input>
                <span class="error_txt" v-show="storeForm.tel.length && !telError">전화번호 형식이 아닙니다.</span>
              </b-form-group>
            </div>
            <div class="col-6 col-md-6 col-xl-3">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group
                  id="sido"
                  label="시/도"
                  label-for="sido"
                >
                  <b-form-select
                    name="sido"
                    id="sido"
                    class="form-control"
                    :class="{'error': errors[0]}"
                    v-model="storeForm.sido"
                    v-validate="'required'"
                  >
                    <b-form-select-option value="">시/도 선택</b-form-select-option>
                    <template v-for="(item, index) in sidoOptions">
                      <b-form-select-option :key="index" :value="item">{{ item.sido }}</b-form-select-option>
                    </template>
                  </b-form-select>
                  <span class="error_txt">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>
            <div class="col-6 col-md-6 col-xl-3">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group
                  id="gugun"
                  label="구/군"
                  label-for="gugun"
                >
                  <b-form-select
                    name="gugun"
                    id="gugun"
                    class="form-control"
                    :class="{'error': errors[0]}"
                    v-model="storeForm.gugun"
                    :disabled="!storeForm.sido"
                    v-validate="'required'"
                  >
                    <b-form-select-option value="">구/군 선택</b-form-select-option>
                    <template v-for="(item, index) in storeForm.sido.gugun">
                      <b-form-select-option :key="index" :value="item.value">{{ item.text }}</b-form-select-option>
                    </template>
                  </b-form-select>
                  <span class="error_txt">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>
          </b-row>
          <b-row>
            <div class="col-12 col-md-12">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input type="hidden" name="zonecode" v-model="storeForm.zonecode" v-validate="'required'">
              </ValidationProvider>
              <b-form-group
                id="zonecode"
                class="form-group_address"
                :class="{'error': addressError}"
                label="우편번호"
                label-for="zonecode"
              >
                <b-form-input
                  id="zonecode"
                  class="zonecode"
                  placeholder="우편번호"
                  readonly
                  v-model="storeForm.zonecode"
                ></b-form-input>
                <b-button class="no_shadow" @click="handleAddress">우편번호 찾기</b-button>
                <p class="address" :class="{'no_data': !storeForm.address}">{{ storeForm.address ? storeForm.address : '주소' }}</p>
                <span v-show="addressError" class="error_txt">필수 입력항목입니다.</span>
                <b-form-input
                  id="addressDetail"
                  class="address_detail"
                  placeholder="상세주소 입력"
                  v-model="storeForm.addressDetail"
                ></b-form-input>
              </b-form-group>
            </div>
          </b-row>
          <div class="btn_wrap">
            <b-button type="button" @click="validAll">매장 수정</b-button>
            <b-button type="button" class="btn_red ml_5">매장 삭제</b-button>
          </div>
        </b-form>
      </ValidationObserver>  
    </div>
  </div>
</template>

<script>
import { sidoList } from '../js/sidoList'

export default {
  name: 'StoreUpdate',
  created() {
    this.sidoOptions = sidoList
    this.$eventBus.$emit('pageTitle', '매장 상세')
  },
  data() {
    return {
      sidoOptions: [],
      storeForm: {
        store: '',
        tel: '',
        sido: '',
        gugun: '',
        address: '',
        jibunAddress: '',
        addressDetail: '',
        zonecode: ''
      },
      addressError: false
    }
  },
  watch: {
    'storeForm.sido'() {
      if (this.storeForm.gugun) { this.storeForm.gugun = ''}
    },
    'storeForm.zonecode'(value) {
      if(!value) {
        this.addressError = true
      } else {
        this.addressError = false
      }
    }
  },
  methods: {
    handleAddress(e) {
      const _this = this;
      new daum.Postcode({
        // 팝업에서 검색결과 항목을 클릭했을때 실행
        oncomplete(data) {
          // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var roadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 참고 항목 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          _this.storeForm.address = roadAddr
          _this.storeForm.jibunAddress = data.jibunAddress
          _this.storeForm.addressDetail = extraRoadAddr
          _this.storeForm.zonecode = data.zonecode

          // '선택 안함' 클릭시 주소관련 데이터 초기화
          if (data.noSelected === 'Y') {
            _this.storeForm.address = ''
            _this.storeForm.jibunAddress = ''
            _this.storeForm.zonecode = ''
          }
        }
      }).open();
    },
    async validAll() {
      const isValid = await this.$refs.store.validate();

      if (!isValid) {
        // 우편번호가 입력되어 있지 않다면 주소 error
        if(!this.storeForm.zonecode) {
          this.addressError = true
        }

      	this.$bvToast.toast('입력값을 확인해주세요.', {
      		title: 'warning',
      		variant: 'danger'
        })
        return false
      }

      console.log('모두 입력')
    }
  }
}
</script>
