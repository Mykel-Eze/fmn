<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Reporting"
          pageCrumbName="Reporting"
          class="gallery-page"
      />

      <section class="more-txt-sec">
            <div class="row sec1">
                <div class="container">
                    <div class="col s12 txt-secc-wrapper1 pad0">
                        <div class="col s12 pad0">
                            <div class="text-justify txt-secc">
                                <p class="" style="padding-right: 0">
                                    We report against our sustainability goals in our Annual Sustainability
                                    Reports using the Global Reporting Initiative (GRI)  as a guidance framework.
                                    In addition, we are participants in the United Nations Global Compact (UNGC)
                                    and submit our communication of progress (CoP) against  ten principles on an
                                    annual basis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec report-section">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <h4 class="report-section-title">
                            Sustainability Reports
                        </h4>
                        <div class="reporting-wrapper">
                          <a
                              rel="noopener"
                              href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2021/2021_FMN_SR_Final_21.4.2022.pdf"
                              target="_blank"
                              class="flex-div a-block rel"
                              download
                          >
                              <img
                                  src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                  alt="file-icon"
                                  class="file-icon"
                              />
                              <span>
                                  FMN 2020-2021 Sustainability
                                  Report
                              </span>

                              <i
                                  class="
                                      material-icons
                                      tooltipped
                                  "
                                  data-position="bottom"
                                  data-tooltip="Download"
                                  >file_download</i
                              >
                          </a>

                          <a
                              rel="noopener"
                              href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/FMN%2B2019-2020%2BSustainability%2BReport.pdf"
                              target="_blank"
                              class="flex-div a-block rel"
                              download
                          >
                              <img
                                  src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                  alt="file-icon"
                                  class="file-icon"
                              />
                              <span>
                                  FMN 2019-2020 Sustainability
                                  Report
                              </span>

                              <i
                                  class="
                                      material-icons
                                      tooltipped
                                  "
                                  data-position="bottom"
                                  data-tooltip="Download"
                                  >file_download</i
                              >
                          </a>
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

export default Vue.extend({
    name: 'Awards',
    components: {
        PageBanner,
    },
    mounted() {
        window.M = require('materialize-css');
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
    },
});
</script>

<style scoped>
.reporting-wrapper .flex-div {
  align-items: center;
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
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 10px 20px;
    text-align: left;
}
a.a-block, .cb-p p {
  width: 100%;
}
.theme-light a.a-block, .theme-light .cb-p p {
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
