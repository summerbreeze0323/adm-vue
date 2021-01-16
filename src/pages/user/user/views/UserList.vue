<template>
  <div class="user_list">
    <div class="card search_wrap">
      <b-form>
        <div class="row">
          <div class="col-12 col-md-4">
            <b-form-group
              id="username"
              label="이름"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="searchForm.name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4">
            <b-form-group
              id="email"
              label="이메일"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="searchForm.email"
                type="email"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-4 btn_search_wrap">
            <b-button>검색</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div class="card">
      <div class="table_wrap">
        <b-table
          id="userList"
          :fields="fields"
          :items="lists.item"
          :per-page="searchForm.perPage"
          :current-page="searchForm.page"
        >
          <template #cell(name)="data">
            <strong>{{ data.item.name }}</strong>
          </template>
          <template #cell(gender)="data">
            {{ data.item.gender }}
          </template>
        </b-table>
      </div>

      <pagination
        :arialControls="'userList'"
        :total="lists.total ? lists.total : 0"
				:perPage="searchForm.perPage"
				:page="searchForm.page"
      ></pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  created() {
    this.$eventBus.$emit('pageTitle', '회원 관리')
  },
  data() {
    return {
      searchForm: {
        name: '',
        email: '',
        perPage: 10,
        page: 1,
      },
      fields: [
        { key: 'name', label: '이름' },
        { key: 'birth', label: '생년월일' },
        { key: 'gender', label: '성별' },
        { key: 'email', label: '이메일' },
        { key: 'signup_date', label: '가입일' }
      ],
      lists: {
        total: 32,
        item: [
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'John', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Jane', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Rubin', birth: '1985-02-01', gender: 'F', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'},
          { name: 'Shirley', birth: '1985-02-01', gender: 'M', email: 'summerbreeze0323@gmail.com', signup_date: '2021-01-12'}
        ]
      }
    }
  },
}
</script>

<style></style>
