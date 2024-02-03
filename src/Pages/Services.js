import React from 'react'
import {services} from "../Components/ServiceList"

const Services = () => {
  return (
    <section className="services">
          <h1 className="s-header">Our Services</h1>
          <div className="service-section">
            {services.map((service) => (
              <div className="s-service">
                <div className="s-imgbox">
                  <img src={service.image} />
                </div>
                <div className="s-words">
                  <h1>{service.heading}</h1>
                  <p>{service.content}</p>
                </div>
              </div>
            ))}
          </div>
    </section>
  )
}

export default Services