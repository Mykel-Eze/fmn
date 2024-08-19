<template>
    <section id="foundation-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="tab-view-item">
                        <nuxt-link class="truncate" to="/fmn-foundation" id="tab-1">
                            About FMN Foundation
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item">
                        <nuxt-link class="truncate" to="/fmn-foundation/objectives" id="tab-2">
                            Objectives
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item">
                        <nuxt-link class="truncate" to="/fmn-foundation/project-pillars" id="tab-3">
                            Project Pillars
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item">
                        <nuxt-link class="truncate disabled" to="/fmn-foundation/advisory-board" id="tab-4">
                            Advisory Board
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item">
                        <nuxt-link class="truncate disabled" to="/fmn-foundation/board-of-trustees" id="tab-5">
                            Board Of Trustees
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item">
                        <nuxt-link class="truncate disabled" to="/fmn-foundation/projects" id="tab-6">
                            Our Projects
                        </nuxt-link>
                    </div>
                    <div class="tab-view-item tab-view-item-last">
                        <nuxt-link class="truncate disabled" to="/fmn-foundation/management" id="tab-7">
                            Management Team
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'AboutPageSubNav',
});
</script>

<style scoped>
@import url('~assets/css/about.css');

#tab-1 {
    border-color: #83c38e;
}
#tab-2 {
    border-color: #e0e452;
}
#tab-3 {
    border-color: #e5b3b5;
}
#tab-4 {
    border-color: #b0d865;
}
#tab-5 {
    border-color: #54a9d2;
}
#tab-6 {
    border-color: #e0e452;
}
#tab-7 {
    border-color: #e5b3b5;
}


.about-page #tab-1,
.objectives-page #tab-2,
.projectPillars-page #tab-3,
.advisoryBoard-page #tab-4,
.trusteesBoard-page #tab-5,
.ourProjects-page #tab-6,
.management-page #tab-7 {
    background-color: #60646c;
    color: white;
}

#foundation-sub-nav .tab-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}
a.disabled {
  opacity: 0.6;
  pointer-events: none;
  cursor: not-allowed;
}

@media (max-width: 992px) {
  #foundation-sub-nav .tab-view {
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  }
}

@media (max-width: 600px) {
  #foundation-sub-nav .tab-view {
    grid-template-columns: 1fr 1fr ;
  }
  .tab-view-item-last {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

@media (max-width: 330px) {
    .tab-view a {
        padding: 10px 2px;
        font-size: 11px;
    }
}
</style>
