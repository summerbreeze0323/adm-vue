<template>
	<div class="adm_layout">
		<Header></Header>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'AdmLayout',
	components: { Header }
}
</script>

<style lang="scss" scoped>

</style>
