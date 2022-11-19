<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Press Release"
            pageCrumbName="Official Statement on the washing Semovita Video on Social Media"
            class="pressRelease-page"
        />
        <!--=== end of Page Banner Section ===-->

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <div class="post-header">
                            <div class="right-align back-link">
                                <nuxt-link
                                    :to="{ name: 'PressRelease' }"
                                    class="blue-txt"
                                >
                                    &lt; Back to press
                                </nuxt-link>
                            </div>
                            <div class="flex-div">
                                <div class="post-date">
                                    <b class="blue-txt">April 23, 2020</b>
                                </div>
                                <div class="post-title">
                                    Official Statement on the washing Semovita
                                    Video on Social Media
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0-xs">
                        <div class="col s12 pad0 post-img-wrapper">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/press-img.png"
                                alt="post image"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 pad0" style="margin-bottom: 20px">
                            <p class="text-justify">
                                FMN Careers: Our value chain provides over
                                twelve thousand jobs from highly skilled
                                employments such as corporate jobs to factory
                                operations, logistics, and farming. Our
                                employees are a family who take their role in
                                providing products and service to heart,
                                dedicated to discovering, developing, supporting
                                and delivering quality products and services.
                            </p>
                            <p class="text-justify">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo. Nullam dictum felis
                                eu pede mollis pretium. Integer tincidunt. Cras
                                dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula,
                                porttitor eu, consequat vitae, eleifend ac,
                                enim. Aliquam lorem ante, dapibus in, viverra
                                quis, feugiat a, tellus. Phasellus viverra nulla
                                ut metus varius laoreet. Quisque rutrum. Aenean
                                imperdiet. Etiam ultricies nisi vel augue.
                            </p>
                            <p class="text-justify">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo. Nullam dictum felis
                                eu pede mollis pretium. Integer tincidunt. Cras
                                dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula,
                                porttitor eu, consequat vitae, eleifend ac,
                                enim. Aliquam lorem ante, dapibus in, viverra
                                quis, feugiat a, tellus. Phasellus viverra nulla
                                ut metus varius laoreet. Quisque rutrum. Aenean
                                imperdiet. Etiam ultricies nisi vel augue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';

export default {
    name: 'PostPage',
    components: {
        PageBanner,
    },
};
</script>

<style scoped>
.blue-txt {
    color: #54a9d2;
}

a.blue-txt:hover {
    text-decoration: underline;
}

.post-date {
    padding: 0 10px 0 0;
}

.post-header {
    font-family: var(--font);
    font-size: 15px;
}

.post-header hr {
    border: none;
    height: 1px;
    background-color: white;
    opacity: 0.2;
    margin-left: 8px;
}

.theme-light .post-header hr {
    background-color: black;
}

.back-link {
    margin-bottom: 10px;
}

@media (max-width: 992px) {
    .post-header hr {
        margin-left: 0;
    }
}

@media (max-width: 600px) {
    .post-header .flex-div {
        display: block;
    }

    .back-link {
        margin-bottom: 10px;
        margin-top: -10px;
    }

    #sharePage .col.s12 {
        padding: 0;
    }
}
</style>
