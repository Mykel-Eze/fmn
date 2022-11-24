<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Backward Integration"
          pageCrumbName="Backward Integration"
          class="sustainability-page prioritySubpage"
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
      <PriorityPageSubNav class="backwardIntegration-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section class="more-txt-sec">
          <div class="row sec2">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper2 pad0 flex-div-lg">
                      <div class="col s12 m6 pad0">
                          <img
                              src="https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-2.jpg"
                              alt="image"
                              class="full-width bi-img"
                          />
                      </div>
                      <div class="col s12 m6 pad0 dfb">
                          <div class="text-justify txt-secc rel">
                              <!-- <div class="title-secc-bar green-bg">
                                  <h5>Backward Integration</h5>
                              </div> -->
                              <p class="text-secc-p">
                                  <b>
                                      FMN PLC has invested more than N150
                                      billion over the past ten years to
                                      execute its core business strategy to
                                      aid the agricultural sector. This
                                      investment has been made primarily in
                                      Agriculture and Infrastructure.
                                  </b>
                              </p>
                              <p class="text-secc-p">
                                  Volatile commodity prices arising from
                                  unpredictable changes in global supply and
                                  demand, exchange rate fluctuations and
                                  punitive tariffs and import barriers, has
                                  made our reliance on imported raw materials
                                  risky, expensive and unsustainable. The need
                                  to create value further back in the supply
                                  chain and reduce dependence on imported raw
                                  material has been identified as a strategic
                                  imperative for our Group in the years ahead.
                                  The investment of the next N150 billion
                                  will, therefore, focus on a strategy of
                                  backward integration to maintain growth and
                                  sustained profitability.
                              </p>
                              <p class="text-secc-p">
                                  Raw materials will be produced locally
                                  wherever possible to ensure that good
                                  quality fair value products are developed
                                  through the full supply chain from growing
                                  to final consumer consumption – from farm to
                                  fork.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--=== end of Page Banner Section ===-->


  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import PriorityPageSubNav from '~/components/PriorityPageSubNav';

export default Vue.extend({
    name: 'BackwardIntegration',
    components: {
        PageBanner,
        PriorityPageSubNav
    }
});
</script>

<style scoped>
.title-secc-bar {
    padding: 10px 20px;
}
.text-secc-p {
  padding: 0 20px;
}

@media (min-width: 993px) {
  .flex-div-lg {
    display: flex;
    align-items: center;
  }
  .full-width.bi-img {
    width: 90%;
  }
  .txt-secc-wrapper2 {
    margin: 30px 0;
  }
}
</style>
