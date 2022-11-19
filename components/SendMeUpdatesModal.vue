<template>
    <!--=== Modal Structure ===-->
    <div>
        <div id="updates-modal" class="modal form-modal">
            <span class="close cursor modal-close"> &times; </span>
            <div class="modal-content full-height">
                <h2 class="form-title">Newsletter Updates</h2>

                <form @submit.prevent="submitNewsletter" id="send-me-updates">
                    <div class="grid-input-field input-field">
                        <div class="input-field">
                            <input
                                type="text"
                                name="first_name"
                                v-model="first_name"
                                id="first_name"
                                required
                            />
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field">
                            <input
                                type="text"
                                name="last_name"
                                v-model="last_name"
                                id="last_name"
                                required
                            />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="input-field" id="email-field">
                        <input
                            type="email"
                            v-model="email"
                            name="email"
                            id="email"
                            required
                        />
                        <label for="email">Email</label>
                    </div>

                    <div class="input-field interests-block">
                        <h5 class="interests-title black-txt">Interests</h5>
                        <div class="grid-div-2">
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        class="filled-in"
                                        name="interests"
                                        value="Global FMN News"
                                        v-model="interests"
                                    />
                                    <span>Global FMN News</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        class="filled-in"
                                        name="interests"
                                        value="Investor Information"
                                        v-model="interests"
                                    />
                                    <span>Investor Information</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        class="filled-in"
                                        name="interests"
                                        value="Corporate Press Releases"
                                        v-model="interests"
                                    />
                                    <span>Corporate Press Releases</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        class="filled-in"
                                        name="interests"
                                        value="Annual Reports"
                                        v-model="interests"
                                    />
                                    <span>Annual Reports</span>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div class="input-field" id="agreement-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    class="filled-in"
                                    name="agreement"
                                    required
                                    v-model="agree_to_policy"
                                />
                                <span class="black-txt sm-bold-txt">
                                    I have read and accepted the
                                    <nuxt-link
                                        to="/privacy-policy"
                                        class="modal-close pry-color"
                                        ><u>Privacy Policy</u></nuxt-link
                                    >
                                </span>
                            </label>
                        </p>
                    </div>

                    <div class="submit-button-wrapper">
                        <button class="submit-btn" :disabled="!agree_to_policy">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--=== end of Modal Structure ===-->
</template>

<script>
export default {
    name: 'SendMeUpdatesModals',
    data() {
        return {
            email: '',
            first_name: '',
            last_name: '',
            interests: [],
            agree_to_policy: false,
        };
    },
    mounted() {
        window.M = require('materialize-css');
        var updatesModal = document.querySelectorAll('.modal');
        M.Modal.init(updatesModal);

        const $ = require('jquery');

        $('#newsletter-btn').click(function () {
            var emailValue = $('#newsletter-input').val();
            $('.modal input#email').val(emailValue);
            $('#email-field label').addClass('active');
        });
    },
    methods: {
        submitNewsletter() {
            this.loading = true;
            const res = this.$axios
                .post('newsletters', {
                    email: this.email,
                    FirstName: this.first_name,
                    LastName: this.last_name,
                    Interests: this.interests.join(', '),
                })
                .then(() => {
                    //@ts-ignore
                    M.toast({
                        html: '<i class="material-icons">check_circle</i> <span style="padding-left: 10px;">Subscription to newsletter update was successful</span>',
                        displayLength: 4000,
                    });
                    this.email = '';
                    this.first_name = '';
                    this.last_name = '';
                    this.interests = [];
                    this.agree_to_policy = false;

                    const updatesModal =
                        document.querySelector('#updates-modal');
                    M.Modal.getInstance(updatesModal).close();
                })
                .catch((err) => {
                    console.log(err)
                    //@ts-ignore
                    M.toast({
                        html:
                            '<i class="material-icons">error_outline</i> <span style="padding-left: 10px;">' +
                            err.toString() +
                            '</span>',
                        displayLength: 4000,
                    });
                })
                .finally(() => (this.loading = false));
        },
    },
};
</script>

<style scoped>
.modal {
    overflow-y: visible;
    z-index: 10001 !important;
}
div.form-modal {
    width: 80%;
    max-width: 500px;
    overflow: auto;
    padding: 20px 40px 30px;
}
.grid-input-field {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.sm-bold-txt {
    font-weight: 500;
    font-size: 12px;
}

.input-field .input-field {
    margin: 0;
}

h2.form-title {
    font-family: var(--font-bold);
    text-transform: capitalize;
    font-size: 40px;
    color: var(--pry-color);
    margin-bottom: 30px;
}

label {
    background-color: #fafafa;
    left: 10px !important;
    padding: 0 2px;
    top: 2px !important;
}
input:not(.browser-default):focus:not([readonly]) + label {
    color: var(--pry-color);
}
.input-field input {
    border: 3px solid #9e9e9e !important;
    border-radius: 4px !important;
    height: 52px !important;
    box-shadow: none !important;
    padding: 0 10px !important;
    box-sizing: border-box !important;
}
button.submit-btn {
    background: var(--pry-color);
    border: none;
    height: 46px;
    min-width: 150px;
    color: white;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 12px;
}
button.submit-btn:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
}
h5.interests-title.black-txt {
    font-family: var(--font-smbold);
}
.input-field.interests-block {
    border-top: 1px solid;
    border-bottom: 1px solid;
    /* padding: 0 10px; */
}

[type='checkbox'].filled-in:checked + span:not(.lever):after {
    border: 2px solid var(--pry-color);
    background-color: var(--pry-color);
}
#agreement-field
    [type='checkbox'].filled-in:not(:checked)
    + span:not(.lever):after {
    height: 15px;
    width: 15px;
    top: 4px;
}
#agreement-field [type='checkbox'].filled-in:checked + span:not(.lever):after {
    height: 15px;
    width: 15px;
    top: 4px;
}
#agreement-field
    [type='checkbox'].filled-in:not(:checked)
    + span:not(.lever):before {
    left: 6px;
    top: 10px;
}
#agreement-field [type='checkbox'] + span:not(.lever) {
    font-size: 12px;
    padding-left: 25px;
}
#agreement-field [type='checkbox'].filled-in:checked + span:not(.lever):before {
    top: 2px;
    left: 2px;
    width: 5px;
    height: 10px;
}

@media (min-width: 993px) {
    .grid-div-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        align-items: center;
        margin: 1em 0;
    }
    .grid-div-2 p {
        margin: 0;
    }
    #agreement-field [type='checkbox'] + span:not(.lever) {
        line-height: 20px;
    }
    div.form-modal {
        max-width: 600px;
        max-height: 75%;
        overflow: visible;
        min-height: 575px;
    }
}
@media (max-width: 600px) {
    .grid-input-field {
        grid-template-columns: 100%;
    }
}
</style>
