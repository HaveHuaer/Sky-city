<script setup>

</script>

<template>
	<RouterView v-slot="{ Component }">
		<keep-alive :include="['index']">
			<component :is="Component"></component>
		</keep-alive>
	</RouterView>
</template>

<style scoped></style>
