<script>
// import { Head } from "./Pages/Include/Head.vue";
</script>
<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Header />
            <Component :is="Component" />
            <Footer />
        </div>
    </router-view>
</template>