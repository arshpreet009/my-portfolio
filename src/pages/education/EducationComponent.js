import React, { Component } from "react";
import Educations from "../../containers/education/Educations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { Fade } from "react-reveal";
import "./EducationComponent.css";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main" id="education">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualifications
                </h3>

                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Education;
