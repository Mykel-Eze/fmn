<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Investor Relations"
            pageCrumbName="Investor Relations"
            class="investorRelations-page"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Stock Widget Section ===-->
        <div class="stock-widget">
            <!-- <div class="bold-txt center" style="color: #000;">STOCK</div> -->
            <div class="stock-title">
                <h5 class="bold-txt">FLOURMIL:NL</h5>
            </div>
            <div class="stock-price center">
                <small>NGN </small>
                <span class=""> {{ price }}</span>
            </div>
            <div class="stock-raise">
                <!-- Use "stock-up" for profits -->
                <!-- Use "stock-down" for losses -->
                <!-- Remove class if raise is neither profit/loss i.e zero -->
                <span class="stock-up center">{{ percentage }}</span>
            </div>
            <div class="stock-date center">
                <span class="today">{{ date }}</span>
            </div>
        </div>
        <!--=== end of Stock Widget Section ===-->

        <section id="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div>
                        <p>
                            Flour Mills of Nigeria Plc, listed on the Nigerian
                            Stock Exchange since 1978, is committed to remaining
                            a market leader in Nigeria’s food and agro-allied
                            industries. This section of our website provides
                            both prospective and current investors with
                            financial and other regulatory information that they
                            might require.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <ul class="collapsible">
                            <li>
                                <div class="collapsible-header blue-bg">
                                    <h5>
                                        Financial Results
                                        <i class="material-icons"
                                            >keyboard_arrow_down</i
                                        >
                                    </h5>
                                </div>
                                <div class="collapsible-body">
                                    <!-- <div class="filter-area">
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
                                    <ul class="collapsible">
                                        <li>
                                            <div
                                                class="
                                                    collapsible-header
                                                    blue-bg
                                                "
                                            >
                                                <h5>
                                                    Annual Reports 2020
                                                    <i class="material-icons"
                                                        >keyboard_arrow_down</i
                                                    >
                                                </h5>
                                            </div>
                                            <div class="collapsible-body">
                                                <div class="">
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/FMN_Annual_Report_2020_Web_Version2.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2020 Annual Report &
                                                            Accounts
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Full year FY20 Investors and Analyst Presentation 03.08.20.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Full year FY20
                                                            Investors and
                                                            Analyst Presentation
                                                            - 03.08.20
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Notice of AGM 2020.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Notice of AGM 2020
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Proxy Form - AGM 2020 - final_.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Proxy Form - AGM
                                                            2020
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                class="
                                                    collapsible-header
                                                    blue-bg
                                                "
                                            >
                                                <h5>
                                                    Annual Reports
                                                    <i class="material-icons"
                                                        >keyboard_arrow_down</i
                                                    >
                                                </h5>
                                            </div>
                                            <div class="collapsible-body">
                                                <div class="">
                                                    <b class="bold-txt">2020</b>
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2020 Annual Report &
                                                            Accounts
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2019</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2019 Audited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2019 Audited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2018</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2018 Audited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2018 Audited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2017</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2017 Audited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2017 Audited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2016</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2016 Audited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            2016 Audited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                class="
                                                    collapsible-header
                                                    blue-bg
                                                "
                                            >
                                                <h5>
                                                    Quarterly Reports
                                                    <i class="material-icons"
                                                        >keyboard_arrow_down</i
                                                    >
                                                </h5>
                                            </div>
                                            <div class="collapsible-body">
                                                <div class="">
                                                    <b class="bold-txt">2019</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2019/Q1 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q1 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2019/Q2 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q2 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2019/Q3 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q3 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2018</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2018/Q1 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q1 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2018/Q2 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q2 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2018/Q3 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q3 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2017</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2017/Q1 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q1 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2017/Q2 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q2 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2017/Q3 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q3 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>

                                                    <b class="bold-txt">2016</b>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2016/Q1 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q1 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2016/Q2 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q2 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                    <a
                                                        rel="noopener"
                                                        href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Quarterly Reports/2016/Q3 Unaudited Financial Statements.pdf"
                                                        target="_blank"
                                                        class="
                                                            flex-div
                                                            a-block
                                                            rel
                                                        "
                                                        download
                                                    >
                                                        <img
                                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                            alt="file-icon"
                                                            class="file-icon"
                                                        />
                                                        <span>
                                                            Q3 Unaudited
                                                            Financial Statements
                                                        </span>

                                                        <i
                                                            class="
                                                                material-icons
                                                                tooltipped
                                                            "
                                                            data-position="bottom"
                                                            data-tooltip="Download"
                                                            >file_download</i
                                                        >
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header yellow-bg">
                                    <h5>
                                        Events and Presentations
                                        <i class="material-icons"
                                            >keyboard_arrow_down</i
                                        >
                                    </h5>
                                </div>
                                <div class="collapsible-body">
                                    <div class="">
                                        <!-- <div class="cb-p">
                                            <p>
                                                Following detailed deliberations on ways to improve the
                                                operations of Flour Mills of Nigeria Plc, the Board
                                                considered the option of restructuring the operations of
                                                Flour Mills along its core business functions/business
                                                value chains, for greater efficiency and effectiveness.
                                                Accordingly, it has been considered most appropriate and
                                                efficient to restructure the operations of the Company,
                                                such that, all the agro allied businesses will operate
                                                under a wholly owned Agro Allied holding company.
                                            </p>
                                        </div> -->
                                        <div class="">
                                            <b class="bold-txt"
                                                >Analyst Call Presentations</b
                                            >
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analyst Presentation/Full Year Analyst Presentation.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Full Year Analyst
                                                    Presentation
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analyst Presentation/Q1 Analyst Presentation.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Q1 Analyst Presentation
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analyst Presentation/Q2 Analyst Presentation.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Q2 Analyst Presentation
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analyst Presentation/Q3 Analyst Presentation.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Q3 Analyst Presentation
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>

                                            <b class="bold-txt"
                                                >Analyst Call Transcripts</b
                                            >
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analayst Call Transcripts/Full Year - Transcript.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Full Year - Transcript
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analayst Call Transcripts/Q1 - Transcript.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span> Q1 - Transcript </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analayst Call Transcripts/Q2 - Transcript.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span> Q2 - Transcript </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                            <a
                                                rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Analayst Call Transcripts/Q3 - Transcript.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span> Q3 - Transcript </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>

                                            <!-- <b class="bold-txt"
                                                >Annual General Meeting</b
                                            >
                                            <a  rel="noopener"
                                                href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Events and Presentations/Notice of AGM 2020.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    Notice of AGM 2020
                                                </span>

                                                <i class="material-icons tooltipped" data-position="bottom" data-tooltip="Download">file_download</i>
                                            </a> -->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header green-bg">
                                    <h5>
                                        Investor Information
                                        <i class="material-icons"
                                            >keyboard_arrow_down</i
                                        >
                                    </h5>
                                </div>
                                <div class="collapsible-body">
                                    <div class="">
                                        <a
                                            rel="noopener"
                                            href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Investor Information/Full year FY20 Investors and Analyst Presentation 03.08.20.pdf"
                                            target="_blank"
                                            class="flex-div a-block rel"
                                            download
                                        >
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                alt="file-icon"
                                                class="file-icon"
                                            />
                                            <span>
                                                Full year FY20 Investors and
                                                Analyst Presentation - 03.08.20
                                            </span>

                                            <i
                                                class="
                                                    material-icons
                                                    tooltipped
                                                "
                                                data-position="bottom"
                                                data-tooltip="Download"
                                                >file_download</i
                                            >
                                        </a>
                                        <a
                                            rel="noopener"
                                            href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Investor Information/Dividend Information - 2019.pdf"
                                            target="_blank"
                                            class="flex-div a-block rel"
                                            download
                                        >
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                alt="file-icon"
                                                class="file-icon"
                                            />
                                            <span>
                                                Dividend Information - 2019
                                            </span>

                                            <i
                                                class="
                                                    material-icons
                                                    tooltipped
                                                "
                                                data-position="bottom"
                                                data-tooltip="Download"
                                                >file_download</i
                                            >
                                        </a>
                                        <a
                                            rel="noopener"
                                            href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Investor Information/Issuance of Commercial Paper.pdf"
                                            target="_blank"
                                            class="flex-div a-block rel"
                                            download
                                        >
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                alt="file-icon"
                                                class="file-icon"
                                            />
                                            <span>
                                                Issuance of Commercial Paper
                                            </span>

                                            <i
                                                class="
                                                    material-icons
                                                    tooltipped
                                                "
                                                data-position="bottom"
                                                data-tooltip="Download"
                                                >file_download</i
                                            >
                                        </a>
                                        <a
                                            rel="noopener"
                                            href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Investor Information/Issuance of Corporate Bond.pdf"
                                            target="_blank"
                                            class="flex-div a-block rel"
                                            download
                                        >
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                alt="file-icon"
                                                class="file-icon"
                                            />
                                            <span>
                                                Issuance of Corporate Bond
                                            </span>

                                            <i
                                                class="
                                                    material-icons
                                                    tooltipped
                                                "
                                                data-position="bottom"
                                                data-tooltip="Download"
                                                >file_download</i
                                            >
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="ourRegistrars">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0 flex-div-v-lg">
                        <div class="col s12 l7 fll-or pad0">
                            <div class="col s6 member">
                                <div class="member-img">
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/mgt-team/Joseph Umolu.png"
                                        alt="Joseph Umolu"
                                    />
                                </div>
                                <div class="portfolio">
                                    <div class="p-name bold-txt">
                                        Joseph Umolu
                                    </div>
                                    <div class="p-role">
                                        Company Secretary / Director, Legal
                                        Services
                                    </div>
                                </div>
                            </div>
                            <div class="col s6 member">
                                <div class="member-img">
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/mgt-team/Anders Kristiansson.png"
                                        alt="Anders Kristiansson"
                                    />
                                </div>
                                <div class="portfolio">
                                    <div class="p-name bold-txt">
                                        Anders Kristiansson
                                    </div>
                                    <div class="p-role">
                                        Group Chief Finance Officer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 l5 fll-or registrar-contacts">
                            <div class="black-txt">
                                <h6 class="bold-txt">
                                    <div>
                                        Flour Mills of Nigeria Investor
                                        Relations
                                    </div>
                                    <small
                                        ><a rel="noopener"
                                            >investorrelations@fmnplc.com</a
                                        ></small
                                    >
                                </h6>
                                <h6 class="bold-txt">Our Registrars</h6>
                                <div class="address-div">
                                    <div class="bold-txt atl-rg">
                                        Atlas Registrars Limited
                                    </div>
                                    <div>
                                        Bagco Building (4th Floor) 34 Eric Moore
                                        Road Iganmu
                                    </div>
                                    <div>P.O Box 3554</div>
                                    <div>Surulere, Lagos, Nigeria</div>
                                </div>
                                <div>
                                    <a
                                        rel="noopener"
                                        href="tel: +2348175425054"
                                    >
                                        <b class="black-txt">
                                            +234 817 542 5054</b
                                        >
                                    </a>
                                    <span class="bold-txt" style="margin: 5px">
                                        |
                                    </span>
                                    <a rel="noopener" href="tel:+2348108724445">
                                        <b class="black-txt"
                                            >+234 810 872 4445</b
                                        >
                                    </a>
                                </div>
                                <div>
                                    <a
                                        rel="noopener"
                                        href="https://www.atlasregistrars.com"
                                        target="_blank"
                                    >
                                        <span
                                            class="black-txt"
                                            style="text-decoration: underline"
                                            >www.atlasregistrars.com</span
                                        >
                                    </a>
                                </div>

                                <div class="mssg-btn-wrapper">
                                    <nuxt-link to="/contact" class="mssg-btn">
                                        LEAVE A MESSAGE
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery';
import PageBanner from '~/components/PageBanner.vue';

export default {
    name: 'InvestorRelations',
    components: {
        PageBanner,
    },
    data() {
        return {
            price: '0.00',
            percentage: '0%',
            date: '0/0/0',
        };
    },
    mounted() {
        window.M = require('materialize-css');
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        var elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
        M.Collapsible.init(elemsCollapsible);

        window.$ = require('jquery');
        $(window).scroll(function () {
            $('.stock-widget').toggleClass(
                'scrolled-widget',
                $(this).scrollTop() > 50
            );
        });
        this.getStock();
    },
    methods: {
        async getStock() {
            const stock = await this.$axios.get('stock');
            if (stock.status === 200) {
                this.price = stock.data.price;
                this.percentage = stock.data.percentage;
                var today = new Date();
                var date =
                    today.getDate() +
                    '/' +
                    (today.getMonth() + 1) +
                    '/' +
                    today.getFullYear();
                this.date = date;
            }
        },
    },
    // created() {
    //     this.getStock();
    // }
};
</script>

<style scoped>
.stock-widget {
    background: rgba(0, 123, 71, 0.6);
    position: fixed;
    top: 25%;
    right: 0;
    padding: 10px 20px;
    border-radius: 12px 0 0 12px;
    z-index: 1000;
    /* opacity: 0; */
    color: white;
}
.stock-widget.stock-widget-show {
    opacity: 1;
}
.stock-price.center {
    font-size: 0.7rem;
}
.stock-price span {
    font-weight: bold;
    font-size: 16px;
}
.stock-raise span {
    background: var(--sec-color);
    font-family: var(--font-bold);
    padding: 5px;
    display: block;
    color: black;
    margin: 5px 0;
    font-size: 12px;
    line-height: 1;
}
.stock-title h5 {
    text-align: center;
    font-size: 0.8rem;
    margin: 5px 0 2px;
}
.stock-date {
    font-size: 11px;
}
span.stock-up {
    color: green;
}
span.stock-down {
    color: red;
}
i.material-icons.tooltipped {
    position: absolute;
    right: 15px;
    font-weight: 100;
    opacity: 0.8;
    font-size: 18px;
    top: 15px;
}
@media (max-width: 992px) {
    .stock-widget {
        position: absolute;
        /* top: 110px; */
        z-index: 1;
        border-radius: 8px 0 0 8px;
        padding: 8px 16px;
    }
    .stock-widget.scrolled-widget {
        top: 20%;
    }
}
@media (max-width: 600px) {
    .stock-widget {
        top: 352px;
        border-radius: 8px 0 0 0;
        padding: 3px 12px;
        display: flex;
    }
    .stock-widget > div {
        padding: 0 5px;
    }
    .stock-title h5 {
        margin-top: 11.5px;
    }
    .stock-price {
        line-height: 2;
    }
    .stock-date {
        line-height: 32px;
    }
    .stock-widget.scrolled-widget {
        top: 260px;
    }
    i.material-icons.tooltipped {
        display: none;
    }
}
</style>

<style>
.collapsible-header h5 {
    font-size: 1.3rem;
    margin: 2px 0;
}
.collapsible-body .collapsible-header h5 {
    font-size: 1.18rem;
    margin: 2px 0;
}
.collapsible > li {
    margin-bottom: 10px;
}

.collapsible-header {
    position: relative;
    padding: 0.8rem 1rem;
}
.collapsible-header i.material-icons {
    position: absolute;
    right: 0;
    transition: 1s;
}
li.active > .collapsible-header i.material-icons {
    transform: rotate(180deg);
}
.collapsible-body {
    background-color: #f4f4f5;
    color: black;
    padding-top: 1.5rem;
}
.collapsible-body .collapsible {
    width: 90%;
    margin: auto;
}
/* .collapsible-body > div {
        width: 90%;
    } */

a.a-block,
.cb-p p {
    width: 90%;
    margin: 15px auto;
    background: white;
    padding: 10px;
    color: black;
    font-size: 14px;
}

.cb-p p {
    background: transparent;
}

a.a-block:hover {
    color: var(--pry-color);
}

a.a-block img {
    width: 25px;
    margin-right: 10px;
}

img.menu-dot {
    position: absolute;
    top: 12px;
    right: 10px;
}

.registrar-contacts > div {
    background: #f4f4f5;
    padding: 30px 50px;
    margin-top: 10px;
}
.registrar-contacts > div > div {
    padding: 1.2px 0;
    font-size: 14px;
}
.registrar-contacts h6 small {
    font-family: var(--font-lite);
}

.atl-rg.bold-txt {
    font-family: var(--font);
}

a.mssg-btn {
    background: var(--pry-color);
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 15px 20px;
}

.mssg-btn-wrapper {
    margin-top: 26px;
}

.select-wrapper .caret {
    z-index: 1;
}

.filter-area form input {
    background: white !important;
    border: 1px solid #eee !important;
    height: 3rem !important;
    padding: 10px !important;
    width: calc(100% - 20px) !important;
    margin-bottom: 0 !important;
}

.filter-area button {
    width: 20%;
    height: 67px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;
    cursor: pointer;
}

.filter-area button.apply-filter-btn {
    background-color: #54a9d2;
    color: white;
}

.filter-area button.clear-filter-btn {
    border-color: transparent;
}

.filter-area form {
    width: 90%;
    margin: auto;
    border: 1px solid #eee;
    margin-bottom: 30px;
}

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
    height: auto;
    min-height: 75px;
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
        min-height: 85px;
        font-size: 13px;
    }
}

@media (max-width: 600px) {
    .registrar-contacts > div {
        padding: 15px 25px 25px;
    }

    form.flex-div {
        display: block;
    }

    .filter-area button {
        width: 50%;
        height: 50px;
    }

    .filter-area button.clear-filter-btn {
        background: #eee;
    }

    .collapsible-body {
        padding: 1.5rem 0;
    }

    img.menu-dot {
        display: none;
    }

    a.a-block span {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>

<style scoped>
@media (min-width: 1281px) {
    .flex-div-v-lg {
        display: flex;
    }

    .fll-or {
        width: 100% !important;
    }

    .registrar-contacts > div {
        height: calc(100% - 20px);
    }
}
</style>
