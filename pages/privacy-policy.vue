<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Privacy Policy"
            pageCrumbName="Privacy Policy"
            class="aboutUs-page policy-page"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Text Wrapper Section ===-->
        <section id="texts-wrapper">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0-xs">
                        <div>
                            <h5 class="bold-txt">What is this Privacy Notice for?</h5>
                            <p>
                                Flour Mills of Nigeria Plc (“FMN”, “We”) values your 
                                Personal Data and we are committed to protecting your privacy 
                                whenever you interact with us. Please read this Privacy Notice 
                                (Notice) to understand our policies, processes and procedures 
                                regarding the processing of your personal data.  
                            </p>
                            <p>
                                By this Notice, We explain to you how your Personal Data is 
                                collected, used, managed and transferred by FMN and also explains 
                                how you can update your Personal Data with us and exercise your 
                                rights in respect of the Personal Data provided to us. 
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">The Personal Data that We Collect </h5>
                            <p>
                                We collect Personal Data that you give to us, for example, where you 
                                create an account with us, request for further information about our 
                                product, fill a form, apply for a job through our website or you 
                                subscribe to newsletters on our website. 
                            </p>
                            <p>
                                We may also automatically collect some technical information when 
                                you visit our website such as your IP address, and information about 
                                your visit, such as the pages that you viewed. This information helps 
                                us understand customer interests and helps us improve our website. 
                                When you visit our site, the pages that you look at, and a short 
                                text file called a cookie, are downloaded to your computer. By 
                                visiting and using our website, you agree to our use of cookies in 
                                line with FMN’s policies. For more details about Cookies, please 
                                read our Cookies Policy available through this 
                                <nuxt-link to="/cookies-policy" class="pry-color bold-txt">link</nuxt-link>.
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">What Purpose do We use your Personal Data? </h5>
                            <p>
                                We may process your Personal Data to communicate with you (including 
                                sending marketing or promotional materials to you), provide you with 
                                further information about our products and how we can serve you 
                                better, respond to your purchase orders or requests, process your 
                                application for employment with FMN or to fulfil our contractual 
                                obligations with you.  We may also process your Personal Data to 
                                comply with provisions of applicable laws.  
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">Who do we share your Personal Data with? </h5>
                            <p>
                                We respect your privacy and we limit disclosure of your Personal Data 
                                to third parties. We do not sell, give or trade any Personal Data that 
                                We obtain from you to any third party for data-mining or marketing 
                                purposes. However, We may share your Personal Data with companies 
                                within the FMN Group, service providers engaged by us to provide 
                                services to FMN subject to appropriate data security and protection. 
                                We may also share your information where there is a regulatory or 
                                statutory obligation to disclose such Personal Data in accordance 
                                with provisions of applicable laws. 
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">Security and Retention of your Personal Data </h5>
                            <p>
                                Your Personal Data is kept private and We make every effort to keep 
                                your Personal Data secure, including restricting access to your 
                                Personal Data with us on a need to know basis. We require our staff 
                                and any third parties who carry out any work on our behalf to comply 
                                with appropriate security standards to protect your Personal Data. 
                            </p>
                            <p>
                                We take appropriate measures to ensure that your Personal Data is only 
                                processed for the minimum period necessary in line with the purposes 
                                set out in this Notice or as required by applicable laws, until a 
                                time it is no longer required or has no use. Once your Personal Data 
                                is no longer required, We destroy it in a safe and secure manner. 
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">Your Rights </h5>
                            <p>
                                FMN collects Personal Data only for the purposes identified in this 
                                Policy and such information cannot be reused for another purpose that 
                                is incompatible with the original purpose.  
                            </p>
                            <p>
                                You can exercise  the following rights with respect to your Personal Data 
                                with FMN:
                            </p>
                            <ol>
                                <li>
                                    Request for and access your Personal Data collected and stored by FMN. 
                                </li>
                                <li>
                                    Withdraw consent at any time. For example, you can withdraw your consent to 
                                    receipt of our marketing or promotional materials or unsubscribe to our newsletters 
                                </li>
                                <li>
                                    Object to automated decision making.
                                </li>
                                <li>
                                    Request rectification and modification of Personal Data kept by FMN. 
                                </li>
                                <li>Request for deletion of your Personal Data.</li>
                                <li>
                                    Be informed of and entitled to provide consent prior to the processing of 
                                    Personal Data for purposes other than that for which the Personal Data were 
                                    collected.
                                </li>
                                <li>
                                    Request that FMN restricts  processing of your Personal Data. 
                                </li>
                                <li>Request for information regarding any specific processing of your personal data.</li>
                            </ol>
                        </div>
                        <div>
                            <h5 class="bold-txt">Changes to our Privacy Notice</h5>
                            <p>
                                Due to constant changes in technology and regulatory requirements, 
                                we may need to change our privacy policies or update this Notice from 
                                time to time. You will always be able to find the most recent version 
                                of our updated privacy policy on this site.
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">Contact & Communication</h5>
                            <p>
                                If you would like further information on this Notice, or to contact 
                                our Data Protection Officer, you may contact us at Flour Mills of 
                                Nigeria Plc, 1 Golden Penny Place, Barracks Bus stop, Apapa, Lagos 
                                or at <a rel="noopener" class="pry-color smbold-txt">info@fmnplc.com</a>.
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
  import PageBanner from '~/components/PageBanner.vue';
  export default {
        name: 'PrivacyPolicy',
        components: {
            PageBanner
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
/* @import url('../assets/css/policy.css'); */
section#texts-wrapper ol {
    padding-left: 20px;
}
section#texts-wrapper {
    margin-bottom: 30px;
}
</style>
