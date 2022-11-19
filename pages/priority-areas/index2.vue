<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Priority"
          pageCrumbName="Priority"
          class="priority-page"
      />

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  Our priority areas represent the issues that matter most to us, to our
                                  stakeholders and to the communities where we operate.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--=== Sub Navigation Section ===-->
      <PriorityPageSubNav class="divisions-page" />
      <!--=== end of Sub Navigation Section ===-->
      <!--=== end of Page Banner Section ===-->


  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import PriorityPageSubNav from '~/components/PriorityPageSubNav';

export default Vue.extend({
    name: 'Awards',
    components: {
        PageBanner,
        PriorityPageSubNav
    }
});
</script>

<style>

</style>
