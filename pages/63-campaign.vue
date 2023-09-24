<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle=""
          pageCrumbName="63 hands of FMN campaign"
          class="campaign-page"
      />
      <!--=== end of Page Banner Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                <form action="#" @submit.prevent="downloadImage">
                  <div class="form-div">
                    <div class="upload-img-side">
                      <div ref="uploadWrapper">
                        <img src="~/assets/images/63-img-frame.jpg" alt="frame" class="image-frame">
                        <div class="upload--wrapper">
                          <div class="applicant-name">{{ data.name }}</div>
                          <img :src="data.applicantImage" alt="applicant" v-if="data.applicantImage" class="applicant-img">
                          <div class="empty-img-text" v-else>
                            <img src="~/assets/images/upload-icon-2.png" alt="upload-icon" class="upload-icon"> <br>
                            <span>Click here to upload image</span>
                          </div>
                          <input type="file" @change="updateImage" ref="fileInput" accept="image/*" id="applicant-upload-img">
                        </div>
                      </div>
                    </div>
                    <div class="input-field-side">
                      <div class="input-field">
                        <input type="text" id="name" v-model="data.name" placeholder="Full Name" />
                      </div>
                      <div class="input-field">
                        <input type="email" id="email" v-model="data.email" placeholder="Email" />
                      </div>
                      <div class="input-field">
                        <input type="tel" id="phone-number" v-model="data.phoneNumber" placeholder="Phone Number" />
                      </div>
                      <div class="input-field">
                        <select id="state" v-model="data.state">
                            <option value="" disabled selected>Select your state of residence</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Abia">Abia</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Akwa-Ibom">Akwa-Ibom</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>
                      </div>
                      <div class="input-field">
                        <input type="text" id="proposed-agency" v-model="data.proposedAgency" placeholder="Name of proposed agency/community" />
                      </div>
                      <div class="input-field">
                        <input type="text" id="proposed-agency-link" v-model="data.proposedAgencyLink" placeholder="Website link/social media handles of proposed agency/community" />
                      </div>

                      <div class="submit-btn-wrapper center-align">
                          <button class="submit-btn" type="submit">Download Image</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
          </div>
      </section>

  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import domtoimage from 'dom-to-image';

export default Vue.extend({
    name: '63_campaign',
    data() {
        return {
            data: {
                applicantImage: null,
                name: '',
                email: '',
                phoneNumber: '',
                state: '',
                proposedAgency: '',
                proposedAgencyLink: '',
            },
        };
    },
    components: {
        PageBanner,
    },
    mounted() {
        window.M = require('materialize-css');
        var elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
    },
    methods: {
      updateImage(event) {
        const file = event.target.files[0];
        if (file) {
          // Read the selected image and set it as the imageUrl
          const reader = new FileReader();
          reader.onload = (e) => {
            this.data.applicantImage = e.target.result;
          };
          reader.readAsDataURL(file);
        } else {
          // Clear the imageUrl if no file is selected
          this.data.applicantImage = null;
        }
      },
      downloadImage() {
        // Get the refs(uploadWrapper) element
        const uploadWrapper = this.$refs.uploadWrapper;

        // Create a new canvas element
        const canvas = document.createElement('canvas');
        canvas.width = uploadWrapper.clientWidth;
        canvas.height = uploadWrapper.clientHeight;

        // Use dom-to-image to capture the content and render it on the canvas
        domtoimage.toPng(uploadWrapper)
          .then((dataUrl) => {
            // Draw the captured image data on the canvas
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = dataUrl;
            img.onload = () => {
              ctx.drawImage(img, 0, 0);
              // Convert the canvas to a data URL
              const finalDataUrl = canvas.toDataURL('image/jpg');

              // Create a download link for the image
              const downloadLink = document.createElement('a');
              downloadLink.href = finalDataUrl;
              downloadLink.download = 'snapshot.jpg';

              // Trigger a click event on the download link
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);

              // Clear the input fields
              this.clearInputFields();
            };
          })
          .catch((error) => {
            console.error('Error capturing image:', error);
          });
      },
      clearInputFields() {
        // Clear all input fields in the form
        for (const key in this.data) {
          this.data[key] = '';
        }
      },
    },
});
</script>


<style scoped>
.image-frame {
  width: 100%;
}
.form-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 50px 0;
}

.submit-btn-wrapper {
  margin-top: 50px;
}
button.submit-btn {
    background: var(--pry-color) !important;
    border: none;
    color: white;
    padding: 15px 28px;
    font-size: 15px;
    cursor: pointer;
    width: 100%;
    height: 52px;
}
button.submit-btn:hover {
  background: var(--sec-color) !important;
  color: var(--pry-color);
}

input#applicant-upload-img {
    position: absolute;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    opacity: 0;
}
.upload-img-side {
  position: relative;
  width: 350px;
  height: 350px;
  left: 50%;
  transform: translateX(-50%);
}
.upload--wrapper {
    position: absolute;
    width: 311px;
    height: 273px;
    bottom: 13px;
    left: 19px;
}
.upload--wrapper::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 123, 71, 0.3);
  z-index: 1;
}
img.applicant-img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.applicant-name {
    position: absolute;
    bottom: 10px;
    z-index: 10;
    font-size: 28px;
    text-align: center;
    width: 100%;
    font-family: var(--cocon-bold);
    line-height: 1;
    color: var(--sec-color);
}
.empty-img-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

@media (min-width: 993px) {
  .flex-div-lg {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 992px) {
  .form-div {
    grid-template-columns: 100%;
    gap: 30px;
  }
}
</style>
