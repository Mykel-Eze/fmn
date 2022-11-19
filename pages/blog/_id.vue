<template>
    <div>
        <blog-two v-if="post.layout === 'v2'" :press="press" :post="post"></blog-two>
        <blog-one v-else :press="press" :post="post"></blog-one>
    </div>
</template>

<script>
import Vue from 'vue';
import BlogOne from '~/components/blog/BlogOne.vue';
import BlogTwo from '~/components/blog/BlogTwo.vue';

export default Vue.extend({
    name: 'PostPage',
    components: {
        BlogOne,
        BlogTwo
    },
    async asyncData({ $axios, route }) {
        const res = await $axios.get('pages?title=Blog');
        const post = await $axios.get('posts?slug=' + route.params.id);
        return { press: res.data[0].content[0], post: post.data[0] };
    },
});
</script>

<style></style>
