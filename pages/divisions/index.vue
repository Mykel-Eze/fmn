<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Divisions"
          pageCrumbName="Divisions"
          class="logistics-page"
      />

      <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="divisions-page" />
      <!--=== end of Sub Navigation Section ===-->

      <!--=== Divisions Section ===-->
      <section id="divisions-section">
        <div class="row">
          <div class="container">Divisions Page</div>
        </div>
      </section>
      <!--=== end of Divisions Section ===-->

      <!--=== end of Page Banner Section ===-->


  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import DivisionsPageSubNav from '~/components/DivisionsPageSubNav';

export default Vue.extend({
    name: 'Awards',
    components: {
        PageBanner,
        DivisionsPageSubNav
    }
});
</script>

<style>

</style>
