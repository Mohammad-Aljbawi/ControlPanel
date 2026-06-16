"use client"

import { useEffect, useState } from "react"
import ServiceCard from "@/components/services/service-card"

export default function ServicesPage() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function loadServices() {
      console.log("fetch start")
      const res = await fetch("/api/services")
      console.log("response arrived")
      const data = await res.json()

console.log("API DATA", data)

setServices(data)
      console.log("data arrived")
      
    }

    loadServices()

    const interval = setInterval(loadServices, 30000)
    console.log("services =", services)


    return () => clearInterval(interval)
  }, [])


  return (
    
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service: any) => (
        <ServiceCard
          key={service.name}
          {...service}
        />
      ))}
    </div>
  )
}