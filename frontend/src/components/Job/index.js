import '../../normalize.css';
import './Job.scss';
import React from 'react';
import { useEffect, useState } from "react";
import { useLazyGetJobQuery } from "../../store/api/jobApi";
import { Collapse } from 'antd';
import {Helmet} from "react-helmet";

const Job = React.memo(() => {
  const { Panel } = Collapse;
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [fetchJob, { data }] = useLazyGetJobQuery();

  useEffect(() => {
    fetchJob({ limit, offset });
  }, [limit, offset, fetchJob]);

  const tel = "tel: ";
  const mail = "mailto: ";

  return (
      <section className="section-job">
        <Helmet>
          <title>VR Вакансии</title>
          <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер Вакансии" />
        </Helmet>
        <h1 className="section-job__heading">
          ВАКАНСИИ
        </h1>
        {data?.results.map((img, index) => (
            <Collapse key={img.id} bordered={true} ghost>
              <Panel key={`panel-${index}`} header={img.name} className="section-job__job-name">
                <div key={img.id} className="section-job__box-item">
                  <div className="section-job__box-card">
                    <h3 className="section-job__job-responsibilities">
                      Обязанности:
                    </h3>
                    <p className="section-job__job-description" dangerouslySetInnerHTML={{__html: img.responsib}}></p>
                    <h3 className="section-job__job-requirements">
                      Требования:
                    </h3>
                    <p className="section-job__job-description" dangerouslySetInnerHTML={{__html: img.requirement}}></p>
                    <h3 className="section-job__job-сonditions">
                      Условия:
                    </h3>
                    <p className="section-job__job-description" dangerouslySetInnerHTML={{__html: img.condition}}></p>
                    <h3 className="section-job__job-responsibilities">
                      Контакты:
                    </h3>
                    <a href={`${tel}${img.phone}`} className="section-job__job-contact">
                      {img.phone}
                    </a>
                    <a href={`${mail}${img.email}`} className="section-job__job-contact">
                      {img.email}
                    </a>
                  </div>
                </div>
              </Panel>
            </Collapse>
        ))}

      </section>
  );
}, {});

export default Job;
