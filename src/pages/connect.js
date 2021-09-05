import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/connect.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Connect = () => {
  const { margin_top_5, margin_left_5, font_size_1_5 } = styles;
  return (
    <Layout>
      <div className="margin_left_sidebar_width">
        <div className="row">
          <div className="col-12">
            If you have any thing to say to me. Feel free to connect with me
            using below information.
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            I'll get back to you as soon as possible.That's a promise!
          </div>
        </div>
        <div
          className={`row ${margin_top_5} ${margin_left_5} ${font_size_1_5}`}
        >
          <div className="col-6">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">
                    <MdEmail />
                  </th>
                  <td>chikhale.sandeep.2002@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaGithub />
                  </th>
                  <td>Github Profile</td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaLinkedinIn />
                  </th>
                  <td>Linked-in Profile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
