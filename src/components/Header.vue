<template>
  <header>
    <div class="inner">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/">
          <img src="@/assets/images/logo.png" alt="vue logo">
          <span>Admin</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Menu1</b-nav-item>
            <b-nav-item href="#">Menu2</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{ userName }}</em>
              </template>
              <b-dropdown-item href="#">프로필 수정</b-dropdown-item>
              <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>  
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    userName() {
      return this.$store.getters['Auth/getUserInfo'].name
    }
  },
  methods: {
    logout () {
			this.$store.dispatch('Auth/logout').then(() => {
				this.$router.push('/login')
			}).catch(err => {
				console.log(err)
			})
		}
  }
}
</script>

<style lang="scss">
header {
  img,
  span {
    display: inline-block;
    vertical-align: middle;
  }

  img { width: 35px; }
  span {
    padding-left: 9px;
    font-size: 22px;
    font-weight: 600;
    color: #00c086;
  }

  .navbar {
    border-radius: 0.428rem;
    background-color: $bg-purple;
  }
}
</style>