import { HeaderBanner, SideNoise } from "@/components/about/banner";
import ComingSoonSection from "@/components/about/coming-soon";
import { CompanyCard } from "@/components/about/company-card";
import { AnimatedBackground } from "@/components/animated-background";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { companies } from "@/constants/company";
import { contacts } from "@/constants/contact";
import { techStacks } from "@/constants/tech-stack";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x"></div>
      </section>
      <HeaderBanner />
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex flex-col items-center gap-8 border-separator/10 border-x px-8 pt-10 pb-8 xl:flex-row">
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <div className="w-full">
            <ComingSoonSection />
          </div>
          <div className="md:mr-8 xl:max-w-3/5">
            <span className="relative">
              <h4 className="font-medium text-xl">hey there, felix's here.</h4>
              <div className="absolute bottom-0 h-4 w-full bg-linear-to-b from-transparent to-background/60"></div>
            </span>
            <div className="text-sm leading-relaxed md:text-base">
              I started my programming journey when I was around 14 years old as
              a subject in school, which does not sound very exciting as Math or
              Science at that time. But later on in high school, I was impressed
              by how a website was built by few lines of HTML and CSS, and it
              opened the new world of programming to me. Since then, I have been
              learning and exploring different aspects of programming, systems,
              and software development in general.
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex flex-col items-center gap-8 border-separator/10 border-x px-8 pt-10 pb-8 xl:flex-row">
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <div className="md:mr-8 xl:max-w-3/5">
            <span className="relative">
              <h4 className="font-medium text-xl">hey there, felix's here.</h4>
              <div className="absolute bottom-0 h-4 w-full bg-linear-to-b from-transparent to-background/60"></div>
            </span>
            <div className="text-sm leading-relaxed md:text-base">
              I am currently a software engineer at a tech company, and I am
              passionate about building things that can make people's lives
              easier and more enjoyable. I am always looking for new challenges
              and opportunities to learn and grow as a developer, and I am
              excited to see what the future holds for me in this field.
            </div>
          </div>
          <div className="w-full">
            <ComingSoonSection
              title="Still working on this part..."
              description="Check back later for updates!"
            />
          </div>
        </div>
      </section>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex h-full border-separator/10 border-x">
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <div className="relative hidden min-h-full w-[10%] border-separator/10 border-r md:block">
            <PlusSeparator position={["top-right", "bottom-right"]} />
            <SideNoise className="h-full w-full opacity-50 invert-100 dark:invert-0" />
          </div>
          <div className="w-full px-4 py-12">
            <span className="relative">
              <h2 className="mb-6 text-center font-medium text-4xl">
                Companies worked so far
              </h2>
              <div className="absolute bottom-0 h-8 w-full bg-linear-to-b from-transparent to-background/40"></div>
            </span>
            <ul className="mb-4 ml-8 max-w-full divide-y divide-dashed border-l">
              {companies.map((company, idx) => (
                <CompanyCard
                  key={company.title}
                  title={company.title}
                  description={company.description}
                  location={company.location}
                  startDate={company.startDate}
                  endDate={company.endDate}
                  image={company.image}
                  links={company.links}
                  flags={company.flags}
                />
              ))}
            </ul>
          </div>
          <div className="relative hidden min-h-full w-[10%] border-separator/10 border-l md:block">
            <PlusSeparator position={["top-left", "bottom-left"]} />
            <SideNoise
              offsetX={5}
              offsetY={5}
              className="h-full w-full opacity-50 invert-100 dark:invert-0"
            />
          </div>
        </div>
      </section>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex flex-col lg:flex-row gap-2 border-separator/10 border-x p-4">
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <h2 className="mb-6 text-center font-medium text-4xl mt-4">
            My favorite tech stacks and tools
          </h2>
          <div className="grid w-full lg:grid-cols-2">
            {/* Split techStacks into two halves */}
            {(() => {
              const stacks = Array.isArray(techStacks) ? techStacks : [];
              const half = Math.ceil(stacks.length / 2);
              const firstHalf = stacks.slice(0, half);
              const secondHalf = stacks.slice(half);
              return (
                <>
                  <div>
                    <AnimatedBackground
                      className="-z-50 w-full rounded-lg bg-primary/5"
                      transition={{
                        bounce: 0,
                        type: "spring",
                        duration: 0.3,
                        from: 50,
                      }}
                      enableHover
                    >
                      {firstHalf.map((item, index) => (
                        <Link
                          key={item.name}
                          aria-label="Skills Link"
                          data-id={`card-${index}`}
                          href={`${item.link}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="block rounded-lg hover:bg-primary/5 "
                        >
                          <div className="group flex cursor-pointer items-center justify-between px-6 py-6">
                            <div className="flex items-center gap-8">
                              <item.icon
                                className="font-medium text-3xl text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-lg text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground">
                                {item.name}
                              </span>
                            </div>
                            <ArrowRight className="ml-4 h-5 w-5 transition-colors duration-300 group-hover:text-foreground" />
                          </div>
                        </Link>
                      ))}
                    </AnimatedBackground>
                  </div>
                  <div>
                    <AnimatedBackground
                      className="-z-50 w-full rounded-lg bg-primary/5"
                      transition={{
                        bounce: 0,
                        type: "spring",
                        duration: 0.3,
                        from: 50,
                      }}
                      enableHover
                    >
                      {secondHalf.map((item, index) => (
                        <Link
                          key={item.name}
                          aria-label="Skills Link"
                          data-id={`card-${half + index}`}
                          href={`${item.link}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="block rounded-lg hover:bg-primary/5 "
                        >
                          <div className="group flex cursor-pointer items-center justify-between px-6 py-6">
                            <div className="flex items-center gap-8">
                              <item.icon
                                className="font-medium text-3xl text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-lg text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground">
                                {item.name}
                              </span>
                            </div>
                            <ArrowRight className="ml-4 h-5 w-5 transition-colors duration-300 group-hover:text-foreground" />
                          </div>
                        </Link>
                      ))}
                    </AnimatedBackground>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative flex flex-col items-center gap-2 border-separator/10 border-x px-5 py-8">
          <PlusSeparator
            position={["bottom-left", "bottom-right"]}
            main={{ className: "z-20" }}
          />
          <span className="relative">
            <h2 className="text-center font-medium text-2xl">
              wanna talk? reach out to me via
            </h2>
            <div className="absolute bottom-0 h-8 w-full bg-linear-to-br from-transparent to-background/80"></div>
          </span>
          <div className="flex w-full flex-col items-center gap-2">
            <AnimatedBackground
              className="-z-50 w-full rounded-lg bg-primary/3"
              transition={{
                bounce: 0,
                type: "spring",
                duration: 0.3,
                from: 50,
              }}
              enableHover
            >
              {contacts.map((item, index) => (
                <Link
                  key={item.name}
                  className="block w-full rounded-full border-[0.5px] border-separator/20 border-dashed px-5 pt-2.5 pb-1.5 md:w-2/5 hover:bg-primary/10 transition-colors duration-300"
                  data-id={`contact-card-${index}`}
                  href={item.link}
                  target="_blank"
                >
                  <span className="flex w-full items-center justify-between text-sm">
                    <p className="inline-flex items-center gap-2 font-mono tracking-tight">
                      <item.icon size={18} /> {item.name}
                    </p>
                    <p className="text-muted-foreground">{item.contact}</p>
                  </span>
                </Link>
              ))}
            </AnimatedBackground>
            <div className="pointer-events-none absolute inset-0 h-full w-full overflow-clip">
              <div className="pointer-events-none absolute bottom-0 left-0 h-14 w-1/8 min-w-18 bg-muted-foreground blur-[250px]"></div>
              <div className="pointer-events-none absolute right-0 bottom-0 h-14 w-1/8 min-w-18 bg-muted-foreground blur-[250px]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
