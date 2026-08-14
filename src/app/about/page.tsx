import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Leaf, Wrench } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WildExit Animal Control is a family-owned wildlife removal company serving Oakfield and 12 surrounding counties since 2009 — humane removal, exclusion and attic restoration.",
};

const values = [
  {
    icon: Wrench,
    title: "Craftsmanship",
    text: "Every exclusion is sealed, reinforced and inspected to standards we would want on our own homes — because most of us live in the neighborhoods we serve.",
  },
  {
    icon: Users,
    title: "Family first",
    text: "Founded by the Reyes family in 2009, still run day-to-day by the same family. Our technicians live in the counties we serve.",
  },
  {
    icon: Leaf,
    title: "Humane stewardship",
    text: "We remove animals alive, reunite mothers with their young, and never use poison. Wildlife has its place — it is just not inside your home.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "National Wildlife Control Operators Association members since 2011, with 387 five-star reviews and counting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              Sixteen years of getting wildlife out — humanely.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                WildExit Animal Control started in 2009 with one truck, one cage trap and a simple
                promise: never poison an animal, never separate a mother from her young, and never
                leave a home with an unsealed entry point. Sixteen years later, that promise has
                resolved more than 4,800 wildlife problems across twelve counties.
              </p>
              <p>
                We are still family-owned, still answer our own phones, and still stand behind
                every exclusion with a five-year guarantee. When you call WildExit, you talk to
                the technicians who will actually show up at your door.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="The WildExit team in navy and orange uniforms standing in front of their service truck"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every seal"
            subtitle="Four principles that have carried us through sixteen years of attics, crawl spaces and 2 a.m. bat calls."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/exclusion-work.jpg"
                alt="WildExit technician sealing a roofline gap with galvanized hardware cloth"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the crew you will actually see"
              subtitle="Our technicians average nine years with the company — they know the critters, the construction and the neighborhoods of every county we serve."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Marco Reyes", "Founder & Master Excluder — 16 years, 2,000+ exclusions"],
                ["Elena Reyes", "General Manager & Attic Restoration Lead — certified decontamination specialist"],
                ["Darius Cole", "Senior Trapper — 12 years, 3,500+ humane removals"],
                ["Grace Liu", "Emergency Response Lead — 24/7 on-call crew"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with a crew that treats animals with respect"
        subtitle="Join 4,800+ homeowners who chose humane. Request your free inspection today — we will get the wildlife out and keep it out."
      />
    </>
  );
}
