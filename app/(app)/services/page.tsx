import { services } from "@/lib/data"

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.name}>
            <span>{service.name}</span>
            <span>{service.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}