import React from 'react';
import {useLazyGetProjectsQuery, useGetProjectsQuery} from "../../store/api/projectsApi";
import './projects.scss'
import {useParams} from "react-router-dom";
import {reveal} from "../../functions/ScrollAnimation";
import {Helmet} from "react-helmet";

const ProjectLink = () => {
  reveal();

  const {projectId}  = useParams();
  const {isLoading, data } = useGetProjectsQuery(projectId);

  if (isLoading) {
    return null
  }

  return (
    <main>
      <div className="section-projects padding-top">
        <div className="section-projects__box-img ">
          <img src={data.image1} alt="Дизайн - Проект" className="section-projects__img img-brightness"/>
        </div>
        <div className="section-projects__box-text reveal">
          <div className="section-projects__heading-project">
            <p>{data.projectNameText}</p>
          </div>
          <div className="section-projects__box-description">
            <div className="section-projects__text-top">
              <p>{data.textAfterImg1Top}</p>
            </div>
            <div className="section-projects__text-bot">
              <p>{data.textAfterImg1Bot}</p>
            </div>
          </div>
        </div>
        <div className="section-projects__box-img reveal">
          <img  alt="Дизайн - Проект" src={data.image2} className="section-projects__img"/>
        </div>
        <div className="section-projects__box-text reveal">
          <div className="section-projects__text-left">
            <p>{data.textAfterImg2Left}</p>
          </div>
        </div>
        <div className="section-projects__box-img reveal">
          <img  alt="Дизайн - Проект" src={data.image3} className="section-projects__img"/>
        </div>
        <div className="section-projects__box-text reveal">
          <div className="section-projects__middle-text">
            <p>
              {data.textAfterImg3Middle}
            </p>
          </div>
        </div>
        <div className="section-projects__box-img reveal">
          <img  alt="Дизайн - Проект" src={data.image4} className="section-projects__img"/>
        </div>
        <div className="section-projects__box-text reveal">
          <div className="section-projects__text-right">
            <p>
              {data.textAfterImg4Right}
            </p>
          </div>
        </div>
        <div className="section-projects__box-img reveal">
          <img  alt="Дизайн - Проект" src={data.image5} className="section-projects__img"/>
        </div>
      </div>
    </main>
  )
}

export default ProjectLink;