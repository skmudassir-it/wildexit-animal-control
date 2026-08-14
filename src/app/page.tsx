import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "WildExit Animal Control — Humane Wildlife Removal & Exclusion",
  description:
    "Humane wildlife removal for raccoons, squirrels, bats, birds and rodents. We remove animals, seal every entry point, and restore your attic — with a 5-year guarantee and 24/7 emergency response.",
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: "State-licensed technicians, fully insured, and NWCOA members since 2009.",
  },
  {
    icon: Clock,
    title: "24/7 emergency crews",
    text: "Animal in the house? Live humans answer the emergency line and arrive in 60–90 minutes.",
  },
  {
    icon: HeartHandshake,
    title: "Humane, always",
    text: "Live traps and one-way devices only — never poison. Mothers are reunited with their young.",
  },
  {
    icon: CheckCircle2,
    title: "5-year guarantee",
    text: "Every exclusion is backed by a 5-year written guarantee. If they get back in, we fix it free.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WildExit Animal Control",
  description:
    "Humane wildlife removal and exclusion for raccoons, squirrels, bats, birds and rodents, plus attic restoration and 24/7 emergency response.",
  url: "https://wildexit-animal-control.amsitservices.com",
  telephone: "+1-555-012-3456",
  email: "hello@wildexitanimalcontrol.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2480 Ridgeway Lane",
    addressLocality: "Oakfield",
    addressRegion: "TN",
    postalCode: "37000",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.96, longitude: -86.52 },
  openingHours: "Mo-Sa 07:00-19:00",
  priceRange: "$$",
  foundingDate: "2009",
  areaServed: "Oakfield and surrounding counties",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "387",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Humane since 2009 &bull; Serving 12 counties
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Wildlife out. <span className="text-primary">Sealed out for good.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              WildExit removes raccoons, squirrels, bats, birds and rodents humanely —
              then finds and seals every entry point so they never come back. 24/7
              emergency crews across the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Services
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["4,800+", "wildlife resolutions"],
                ["12,000+", "entry points sealed"],
                ["24/7", "emergency line"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-wildlife.jpg"
                alt="WildExit technician in a navy and orange uniform inspecting a suburban roofline for wildlife entry points"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-paw text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  “They sealed 12 entry points and we have not heard a scratch since.”
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Dana M., Maple Grove
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Seven services that keep wildlife out"
            subtitle="From removal to exclusion to full attic restoration — one crew handles the entire problem, humanely and for good."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/humane-removal.jpg"
                  alt="WildExit technician gently carrying a live trap with a raccoon toward a release site"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why WildExit"
                title="The crew your neighbors call first"
                subtitle="We have resolved more than 4,800 wildlife problems and sealed over 12,000 entry points. That experience shows up in the details — and in the guarantee."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Recent work"
            title="Case studies from the field"
            subtitle="Raccoon colonies, bat roosts and rodent infestations — see how we turn chaos back into a quiet, sealed home."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our neighbors say"
            subtitle={`Rated ${testimonials.length ? "4.9" : ""} out of 5 across 387 reviews — because we answer the phone and do what we promise.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about humane methods, cost, guarantees and timing."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
