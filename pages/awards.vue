<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Awards"
          pageCrumbName="Awards"
          class="accolades-page"
      />

      <!--=== Awards List Section ===-->
      <section id="awards">
        <div class="row">
          <div class="container">Awards Page</div>
        </div>
      </section>
      <!--=== end of Awards List Section ===-->
      <!--=== end of Page Banner Section ===-->


  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';

export default Vue.extend({
    name: 'Awards',
    components: {
        PageBanner,
    }
});
</script>

<style>

</style>
