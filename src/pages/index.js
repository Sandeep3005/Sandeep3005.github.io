import React from "react";
import Layout from "../components/Layout";
import DayJS from "react-dayjs";

export default function Home() {
  return (
    <Layout>
      <div class="margin_left_sidebar_width">
        <div className="row">
          <div className="col-12 font_2">Hi,</div>
        </div>
        <div className="row">
          <div className="col-12 font_1_5">
            I am sandeep, I am a passionate and dedicated developer currently
            working with Barclays, India.I have worked as a full-time developer,
            freelancer and with startups I aspire to work on the various facets
            of Javascript Ecosystem.
          </div>
        </div>
        <br />
        <div className="row font_1_5 ">
          <div className="col-12">
            I have 5 years of experience as a UI developer and love working with
            React and Angular.
          </div>
        </div>
        <br />
        <div className="row font_1_5 ">
          <div className="col-12">
            Stay bold and have a amazing{" "}
            {/* <DayJS format="MM-DD-YYYY">{new Date()}</DayJS> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
