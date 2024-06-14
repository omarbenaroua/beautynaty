import React from './Services.css'
import {Title , ServicesCard } from '../../components'
import ServicesData from "../../Data/ServicesData";

const Services = () => {
  const servicesInfo = ServicesData.map((info) => {
    return <ServicesCard
    key={info.id}
    image={info.image}
    title={info.title}
    text={info.text}
    />
  })

  return (
    <>
    <div className="services">
    <Title>Services</Title>
    <div className="services-container">
      {servicesInfo}
    </div>
  </div>
    </>
  )
}

export default Services