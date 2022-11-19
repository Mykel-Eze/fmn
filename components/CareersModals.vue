<template>
  <!--=== Modal Structure ===-->
  <div>
    <div id="career-1" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/n1RZv--7-L8?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-2" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JxXHG9-868E?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-3" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_fUUQHk1MVs?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-4" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/k3HMV_D7deo?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-5" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/cRhgu3cQ2u8?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-6" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/OkQNrZqZm3s?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-7" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/glgd_1M9Xbc?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-8" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/15acRaGIOB0?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-9" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GFGg67imKaA?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
    <div id="career-10" class="modal modal-video">
        <span class="close cursor modal-close">
            &times;
        </span>
        <div class="modal-content full-height">
            <div class="full-height">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SFwghDrWBGQ?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    </div>
  </div>
  <!--=== end of Modal Structure ===-->
</template>

<script>
export default {
  name: 'CareerModals',
  mounted() {
      window.M = require('materialize-css');
      var stopVideo = function (modal) {
          var currentIframe = modal.querySelector(
              '.modal-content > div > iframe'
          );
          var currentIframe2 = modal.querySelector(
              '.modal-content > div > iframe'
          );
          currentIframe.src = currentIframe2.src;
      };
      var ModalVideo = document.querySelectorAll('.modal-video');
      M.Modal.init(ModalVideo, {
          endingTop: '20%',
          onCloseStart: stopVideo,
      });
  }
}
</script>

<style scoped>
.modal{
  overflow-y: visible;
}
div.modal-video {
    width: 80%;
    height: 70vh;
    max-width: 800px;
    overflow: visible;
    z-index: 10001 !important;
}
</style>
