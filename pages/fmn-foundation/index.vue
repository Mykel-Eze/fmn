<template>
  <div>
    <!--=== Page Banner Section ===-->
    <PageBanner
        pageTitle="FMN Foundation"
        pageCrumbName="About FMN Foundation"
        class="about-page foundation-page"
    />
    <!--=== end of Page Banner Section ===-->

    <!--=== Sub Navigation Section ===-->
    <FoundationPageSubNav class="about-page" />
    <!--=== end of Sub Navigation Section ===-->

    <!--=== Text Wrapper Section ===-->
    <section id="about-foundation">
      <div class="row sec1">
          <div class="container">
              <div class="short-desc-txt flex-div-lg col s12">
                  <div class="col s12 m4 pad0-xs">
                      <div class="sdt-img-div">
                          <img src="~/assets/images/girl-and-plant.jpg" alt="girl-and-plant" class="sdt-img">
                      </div>
                  </div>
                  <div class="col s12 m8 pad0-xs">
                      <div class="text-justify-xs">
                          <p>
                              The FMN Foundation is an initiative of Flour Mills of Nigeria Plc
                              (FMN), established to cater to the Group’s key Corporate Social
                              Responsibility (CSR) projects and other human impact and developmental
                              initiatives.
                          </p>
                          <p>
                            For over six decades, FMN has been a source of livelihood for millions of
                            Nigerian families and has continued to feed Nigerians with superior quality
                            products through its iconic brand 'Golden Penny'.
                          </p>
                          <p>
                            Through the FMN Foundation, the Group will broaden its corporate social
                            responsibility touchpoints in Nigeria and progressively, across the continent.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>


    <section id="brand-statements">
      <div class="row">
          <div class="container te">
              <h4 class="center">
                <span>Brand Statements</span>
                <hr class="te-hr" />
              </h4>

              <div class="brand-statements-wrapper">
                <div class="brand-statement-block">
                  <img src="~/assets/images/purpose.png" alt="purpose">
                  <h5>Purpose</h5>
                  <p>
                    Enriching lives by Inspiring Sustainable Growth.
                  </p>
                </div>

                <div class="brand-statement-block">
                  <img src="~/assets/images/vision.png" alt="vision">
                  <h5>Vision</h5>
                  <p>
                    To be one of the top companies recognized for driving impactful CSR initiatives
                    through sustainable projects that enrich the lives of people.
                  </p>
                </div>

                <div class="brand-statement-block">
                  <img src="~/assets/images/mission.png" alt="mission">
                  <h5>Mission</h5>
                  <p>
                    To engage in unique and transformative projects within our project execution pillars.
                  </p>
                </div>
              </div>
          </div>
      </div>
    </section>
    <!--=== end of Text Wrapper Section ===-->
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  @import url('~assets/css/fmn-foundation.css');
</style>
