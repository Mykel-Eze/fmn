<template>
    <div>
        <press-two v-if="post.layout === 'v2'" :post="post" :press="press" />
        <press-one v-else :post="post" :press="press"/>
    </div>
</template>

<script>
import Vue from 'vue';
import PressOne from '~/components/press-release/PressOne.vue';
import PressTwo from '~/components/press-release/PressTwo.vue';

export default Vue.extend({
    name: 'PostPage',
    components: {
        PressOne,
        PressTwo,
    },
    async asyncData({ $axios, route }) {
        const res = await $axios.get('pages?title=Press%20Release');
        const post = await $axios.get('press-releases?slug=' + route.params.id);
        return { press: res.data[0].content[0], post: post.data[0] };
    },
});
</script>

<style></style>
