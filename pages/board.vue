<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            class="boardmembers-page"
            pageCrumbName="Board Members"
            :pageTitle="about['0'].heading"
            :bgImage="about['0'].bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Sub Navigation Section ===-->
        <AboutPageSubNav class="boardmembers-page" />
        <!--=== end of Sub Navigation Section ===-->

        <!--=== Profiles Section ===-->
        <section id="profiles-pix">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div
                            class="col s6 m4 l4 member"
                            v-for="item in topTeam"
                            :key="item.id"
                        >
                            <div class="member-img">
                                <img :src="item.avatar.url" alt="item.name" />
                            </div>
                            <div class="portfolio">
                                <div class="p-name bold-txt">
                                    {{ item.name }}
                                </div>
                                <div class="p-role">{{ item.position }}</div>
                            </div>
                        </div>

                        <div
                            class="col s6 m4 l3 member"
                            v-for="item in team"
                            :key="item.id"
                        >
                            <div class="member-img">
                                <img :src="item.avatar.url" alt="item.name" />
                            </div>
                            <div class="portfolio">
                                <div class="p-name bold-txt">
                                    {{ item.name }}
                                </div>
                                <div class="p-role">{{ item.position }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Profiles Section ===-->
    </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import AboutPageSubNav from '~/components/AboutPageSubNav';

export default Vue.extend({
    name: 'Board',
    components: {
        PageBanner,
        AboutPageSubNav,
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('pages?title=Board');
        const topTeam = await $axios.get('team-members?type=Board&top=true');
        const team = await $axios.get('team-members?type=Board&top=false');
        return {
            // page: page.data[0].content[0],
            topTeam: topTeam.data,
            team: team.data,
            about: res.data[0].content,
        };
    },
    mounted(){
      document.querySelectorAll('.l3 > .member-img > img').forEach(item => {
        var imgWidth = item.width;
        // item.height = imgWidth;
      });
    }
});
</script>

<style scoped>
.member-img img {
    width: 100%;
}

.portfolio {
    line-height: 1.2;
    margin-top: -6px;
    background-color: #f4f4f5;
    color: #051b2b;
    font-size: 14px;
    padding: 10px;
    /* height: auto; */
    height: 75px;
    border-bottom: 3px solid #54a9d2;
}

.p-role {
    font-size: 12px;
}

.member {
    margin: 10px 0;
}

@media (max-width: 992px) {
    .member {
        margin: 10px 0;
        min-height: auto !important;
    }

    .portfolio {
        height: auto;
        height: 85px;
        font-size: 13px;
    }
}
</style>
