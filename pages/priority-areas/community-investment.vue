<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Community Investment"
          pageCrumbName="Community Investment"
          class="sustainability-page"
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
      <PriorityPageSubNav class="communityInvestment-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper2 pad0">
                      <div class="col s12 pad0">
                          <div class="flex-div m-flex">
                            <div class="col s12">
                              <img src="https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-1.jpg" alt="sutainability image" class="full-width">
                            </div>
                              <div class="col s12 text-justify txt-secc rel">
                                  <div class="title-secc-bar blue-bg">
                                      <h5>Corporate Social Responsibility</h5>
                                  </div>
                                  <p class="">
                                      Our CSR initiatives stem from five key areas
                                      that are fundamental to our business:
                                  </p>
                                  <ul class="list-secc">
                                      <li>
                                          Education, research and skills
                                          development
                                      </li>
                                      <li>Environmental Sustainability</li>
                                      <li>Health, safety, and welfare</li>
                                      <li>Infrastructural Development</li>
                                      <li>Security</li>
                                  </ul>
                              </div>
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
    name: 'CommunityInvestment',
    components: {
        PageBanner,
        PriorityPageSubNav
    }
});
</script>

<style scoped>
.txt-secc-wrapper2 {
    margin: 30px auto;
}

i.material-icons.tooltipped {
    position: absolute;
    right: 15px;
    font-weight: 100;
    opacity: 0.8;
    font-size: 18px;
    top: 15px;
}

.title-secc-bar {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    padding: 10px 20px;
    text-align: left;
}

.list-secc {
    padding-left: 20px;
    margin-top: 20px;
}

.list-secc li {
    list-style-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/blue-tick.svg);
    padding: 4px 0;
    padding-left: 10px;
    font-size: 18px;
}

.row.sec2 {
    margin-bottom: 40px;
}
h4.report-section-title {
    margin-bottom: 20px;
}



@media (max-width: 600px) {
    .txt-secc {
        padding: 85px 15px 15px;
        /* color: black; */
    }
    .m-flex {
      flex-direction: column;
      gap: 30px;
    }
}
</style>
