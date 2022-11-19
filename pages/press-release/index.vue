<template>
    <div>
        <!--=== Page Banner Section ===-->
        <!-- Main-PageBanner Cover -->
        <!-- <PageBanner
            :pageTitle="press.heading"
            pageCrumbName="Press Release"
            class="pressRelease-page"
            :bgImage="press.bg_image.url"
            :shareUrl="pageUrl"
            shareTitle="FMN Press Release"
            shareContent=""
        /> -->

        <!-- Memeorial Cover... Temporary -->
        <PageBanner
            pageCrumbName="Press Release"
            class="pressRelease-page"
            :shareUrl="pageUrl"
            shareTitle="FMN Press Release"
            shareContent=""
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Page Filter Section ===-->
        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="gray-bg">
                        <!-- <div class="filter-area col s12 m10 offset-m1">
                            <form action="#" class="flex-div">
                                <select name="filter" id="filter-select">
                                    <option>All</option>
                                    <option>Year</option>
                                    <option>File Type</option>
                                </select>
                                <input
                                    type="search"
                                    name="filter-search"
                                    id="filter-search"
                                    placeholder="Search Keywords"
                                />
                                <button type="reset" class="clear-filter-btn">
                                    Clear
                                </button>
                                <button type="submit" class="apply-filter-btn">
                                    Apply
                                </button>
                            </form>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Page Filter Section ===-->

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div
                        class="col s12 m10 offset-m1 year-wrapper pad0-xs"
                        v-for="p in posts"
                        :key="p.year"
                    >
                        <div class="year-div center">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/calendar.svg"
                                alt="calendar"
                            />
                            <span>{{ p.year }}</span>
                        </div>
                        <div class="table-wrapper">
                            <table class="highlight">
                                <tbody>
                                    <tr
                                        v-for="item in p.press_releases"
                                        :key="item.id"
                                    >
                                        <td class="post-date">
                                            {{ formatDate(item.date) }}
                                        </td>
                                        <td class="post-title">
                                            <nuxt-link
                                                :to="
                                                    '/press-release/' +
                                                    item.slug
                                                "
                                                class="post-link"
                                            >
                                                {{ item.title }}
                                            </nuxt-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
    name: 'PressRelease',
    components: {
        PageBanner,
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('pages?title=Press%20Release');
        // const posts = await $axios.get('press-releases');
        const press = await $axios.get('press-release-tags?_sort=year:DESC');

        function sortData(a, b) {
            const bandA = a.date;
            const bandB = b.date;

            let comparison = 0;
            if (bandA > bandB) {
                comparison = 1;
            } else if (bandA < bandB) {
                comparison = -1;
            }
            return comparison * -1;
        }

        for (let item of press.data) {
            item.press_releases.sort(sortData);
        }
        return { press: res.data[0].content[0], posts: press.data };
    },
    data() {
        return {
            page: 0,
            morePosts: [],
            pageUrl: '',
        };
    },
    methods: {
        formatDate(dt) {
            return moment(dt).format('MMMM DD YYYY');
        },
    },
    mounted() {
        this.pageUrl = window.location.href;
        window.M = require('materialize-css');
        var elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
    },
});
</script>

<!--<style>
.pressRelease-page section#sec-home {
  background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/Alhaji-Ahmed-Joda-Slider-01.jpg');
  height: 60vh;
  min-height: 550px;
}
.pressRelease-page .page-title hr {
  display: none;
}
@media(max-width: 992px) {
  .pressRelease-page section#sec-home {
    background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/Alhaji-Ahmed-Joda-Slider-mobile.png');
  }
}
</style> -->
<style scoped>
.select-wrapper .caret {
    z-index: 1;
}

a.post-link {
    display: block;
    color: black;
    font-weight: 500;
}

.theme-dark a.post-link {
    color: white;
}

.theme-dark table.highlight > tbody > tr:hover {
    background-color: rgba(242, 242, 242, 0.1);
}

td.post-date {
    width: 110px;
    font-weight: 500;
}

.year-wrapper {
    margin: 30px 0 20px;
}

.year-wrapper:nth-child(odd) td.post-date {
    color: #54a9d2;
}

.year-wrapper:nth-child(even) td.post-date {
    color: #80c442;
}

.filter-area form input {
    background: white !important;
    border: 1px solid #eee !important;
    height: 2rem !important;
    padding: 10px !important;
    width: calc(100% - 22px) !important;
    margin-bottom: 0 !important;
}

.filter-area button {
    width: 20%;
    height: 51px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;
    cursor: pointer;
}

.theme-dark .filter-area button {
    color: white;
}

.filter-area button.apply-filter-btn {
    background-color: #54a9d2;
    color: white;
}

.filter-area button.clear-filter-btn {
    border-color: transparent;
}

.filter-area form {
    width: 100%;
    margin: auto;
    border: 1px solid #eee;
    margin-bottom: 0;
}

.theme-dark .filter-area form {
    border-color: rgba(241, 241, 241, 0.1);
}

@media (max-width: 600px) {
    form.flex-div {
        display: block;
    }

    .filter-area button {
        width: 50%;
        height: 50px;
    }

    .filter-area button.clear-filter-btn {
        background: #eee;
        color: black;
    }
}
</style>
