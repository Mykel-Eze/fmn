<template>
    <div class="col s12 m10 l8 pad0">
        <nuxt-link :to="url">
            <div class="search-result">
                <h5>
                    {{ title }}
                    <div>
                        <small style="text-decoration: underline;">{{
                            slug
                        }}</small>
                    </div>
                </h5>
                <p>
                    {{ content }}
                </p>
            </div>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'SearchItem',
    props: ['title', 'slug', 'content', 'url'],
});
</script>

<style scoped>
@import url('../assets/css/search-page.css');

.theme-light a {
    color: #000000;
}
.theme-dark a {
  color: rgba(241, 241, 241, 0.8);
}
</style>
