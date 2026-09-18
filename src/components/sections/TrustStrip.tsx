import { CalendarClock, Globe2, Layers3, PackageCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: CalendarClock, label: "Freelance Developer", value: "Since 2024" },
  { icon: Globe2, label: "International", value: "Clients" },
  { icon: Layers3, label: "Full-Stack", value: "Development" },
  { icon: PackageCheck, label: "End-to-End", value: "Project Delivery" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-0">
          {items.map(({ icon: Icon, label, value }, i) => (
            <div className="col" key={label}>
              <Reveal delay={i * 80} className="h-100">
                <div className="trust-item">
                  <span className="icon-wrap">
                    <Icon size={20} />
                  </span>
                  <span className="label">
                    {label}
                    <strong>{value}</strong>
                  </span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
