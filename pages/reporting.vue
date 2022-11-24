<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Reporting"
          pageCrumbName="Reporting"
          class="gallery-page"
      />

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <div class="short-desc-txt flex-div-lg col s12">
                        <div class="col s12 m4 pad0-xs">
                            <div class="sdt-img-div">
                                <div></div>
                            </div>
                        </div>
                        <div class="col s12 m8 pad0-xs">
                            <div class="text-justify-xs">
                                <p>
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
                              class="a-report-block"
                          >
                              <img src="../assets/images/2021-thumbnail.jpg" alt="thumbnail" class="a-block-thumbnail">

                              <div class="a-block-details rel">
                                <span>
                                    FMN 2020-2021 Sustainability
                                    Report
                                </span>
                              </div>
                          </a>

                          <a
                              rel="noopener"
                              href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/FMN%2B2019-2020%2BSustainability%2BReport.pdf"
                              target="_blank"
                              class="a-report-block"
                          >
                              <img src="../assets/images/2019-thumbnail.jpg" alt="thumbnail" class="a-block-thumbnail">

                              <div class="a-block-details rel">
                                <span>
                                    FMN 2019-2020 Sustainability
                                    Report
                                </span>
                              </div>
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
    /* top: 15px; */
}

.title-secc-bar {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 10px 20px;
    text-align: left;
}
.cb-p p {
  width: 100%;
}
.theme-light a.a-block, .theme-light .cb-p p {
  background-color: rgba(0, 0, 0, 0.12);
}

.reporting-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
}
.a-block-details {
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--pry-color);
    color: white;
    width: 100%;
    padding: 5px 10px;
    font-size: 12px;
    text-align: center;
}
a.a-report-block {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin: 10px 0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 1.2s;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 20%);
}
a.a-report-block:hover {
  transform: scale(1.05);
}
img.a-block-thumbnail {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.sdt-img-div > div {
    background-color: white;
    float: left;
    width: 100%;
    background-image: url("../assets/images/un-global-compact.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100%;
    /* margin-top: 20px; */
    border-radius: 18px;
}
@media (min-width: 993px) {
  .flex-div-lg {
    display: flex;
    align-items: center;
  }
}
@media (max-width: 600px) {
    .sdt-img-div > div {
        margin-top: 0;
    }
}
</style>
