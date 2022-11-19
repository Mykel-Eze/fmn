<template>
    <section id="sec-home">
        <video autolplay muted preload loop id="vid-bg">
            <source
                src="https://flourmills.s3.eu-central-1.amazonaws.com/videos/fmn-careers-banner.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div id="vid-details">
            <h4 class="bold-txt">
                <span class="pry-bg">
                    <span class="rel">{{ VideoTitle }}</span>
                </span>
            </h4>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PageVideoBanner',
    props: {
        VideoTitle: String,
    },
    mounted() {
        this.bgVideoControl();
    },
    methods: {
        // Pause and play the video, and change the button text
        bgVideoControl() {
            var video = document.getElementById('vid-bg');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
    },
};
</script>

<style scoped>
section#sec-home {
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/career-video-banner.png);
    background-size: cover;
    background-position: center;
    overflow: hidden;
    height: 50vh;
    min-height: 400px;
}
#vid-bg {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    min-height: 100%;
}
#vid-details {
    position: absolute;
    display: flex;
    /* justify-content: space-around; */
    width: 100%;
    padding: 20px 30px;
    bottom: 0;
    height: auto;
}
#vid-details h4 {
    font-size: 3rem;
}
#vid-details h4 > span {
    padding: 10px;
    display: inline-block;
    position: relative;
    background-color: transparent;
}
#vid-details h4 > span::before {
    position: absolute;
    content: '';
    transform: skew(20deg);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
#vid-details h4 > span.pry-bg::before {
    background: var(--pry-color);
}
#vid-details h4 > span.pry-bg {
    color: var(--sec-color);
}
#vid-details h4 > span.sec-bg::before {
    background: var(--sec-color);
}
#vid-details h4 > span.sec-bg {
    color: var(--pry-color);
}
#vid-details h4 > span.black-bg::before {
    background: black;
}
#vid-details h4 > span.black-bg {
    color: white;
}
#vid-details button.btn {
    background: var(--pry-color);
    position: relative;
    top: 16px;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    animation: pulse-1 2s infinite;
}
#vid-play-i {
    font-size: 2rem;
    line-height: 50px;
}
@media (min-width: 993px) {
    #vid-bg {
        min-width: 100%;
        max-width: auto;
    }
    #vid-details {
        padding-left: 10%;
    }
}
@media (max-width: 600px) {
    #vid-details h4 {
        font-size: 2.3rem;
    }
    #vid-details {
        display: block;
        width: 100%;
        padding: 10px 10px;
    }
}
</style>
