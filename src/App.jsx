function App() {
  const theme = {
    bg: "#202020",
    accent: "#e0f52e",
    surface: "#f3f0e6",
    surfaceAlt: "#2a2a2a",
    border: "rgba(224, 245, 46, 0.18)",
  };

  const achievements = [
    {
      year: "2026",
      title: "Mazda MX-5 Cup debut",
      description:
        "Strong first car-racing weekend at Zandvoort with P8 overall and P5 among rookies.",
    },
    {
      year: "2026",
      title: "Full-season step into cars",
      description:
        "Moved from karting into the full Mazda MX-5 Cup season with Dutch Race Driver Academy.",
    },
    {
      year: "2022–2025",
      title: "Karting foundation",
      description:
        "Built race craft through national and international karting, including podium-level pace and major-event appearances.",
    },
  ];

  const stats = [
    { label: "Age", value: "15" },
    { label: "Series", value: "Mazda MX-5 Cup" },
    { label: "Team", value: "Dutch Race Driver Academy" },
    { label: "Home Base", value: "Vleuten, NL" },
  ];

  const schedule = [
    {
      date: "10 Jan 2026",
      event: "Nieuwjaarsrace",
      circuit: "Circuit Zandvoort",
      status: "Completed",
    },
    {
      date: "17–19 Apr 2026",
      event: "V-Max Voorjaarsraces",
      circuit: "Circuit Zandvoort",
      status: "Completed",
    },
    {
      date: "26–28 Jun 2026",
      event: "Supercar Madness",
      circuit: "Zolder",
      status: "Next race",
    },
    {
      date: "31 Jul–2 Aug 2026",
      event: "JACK'S Racing Day",
      circuit: "TT Circuit Assen",
      status: "Upcoming",
    },
    {
      date: "28–30 Aug 2026",
      event: "GT World Challenge",
      circuit: "Nürburgring",
      status: "Upcoming",
    },
    {
      date: "2–4 Oct 2026",
      event: "Trophy of the Dunes",
      circuit: "Circuit Zandvoort",
      status: "Upcoming",
    },
    {
      date: "23–25 Oct 2026",
      event: "Finaleraces",
      circuit: "TT Circuit Assen",
      status: "Upcoming",
    },
  ];

  const aboutImage = "/Matsenmazda.jpg";

  const galleryImages = [
    {
      src: "/Foto 25-04-2026, 15 22 52.jpg",
      alt: "Mats van Rooijen racing his Mazda MX-5 on track",
    },
    {
      src: "/Foto 18-04-2026, 17 17 27 (1).jpg",
      alt: "Front view of Mats van Rooijen's Mazda MX-5 Cup car in action",
    },
    {
      src: "/Foto 22-04-2026, 21 37 33.jpg",
      alt: "Mats van Rooijen with trophy beside his Mazda MX-5 Cup car",
    },
  ];

  const partners = [
    "Brand visibility on car and racewear",
    "Hospitality and event-day experiences",
    "Social-first content and sponsor shout-outs",
    "Storytelling around progression from karting to cars",
  ];

  const currentPartners = [
    {
      name: "Boost Oxygen",
      logo: "/Boost Oxygen.png",
    },
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: theme.bg,
        color: theme.surface,
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatSlow {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -18px, 0) scale(1.03); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes drift {
          0% { transform: translateX(0); }
          50% { transform: translateX(18px); }
          100% { transform: translateX(0); }
        }
        @keyframes pulseLine {
          0% { opacity: 0.35; }
          50% { opacity: 0.85; }
          100% { opacity: 0.35; }
        }
        .glass {
          background: rgba(243, 240, 230, 0.06);
          border: 1px solid rgba(224, 245, 46, 0.14);
          backdrop-filter: blur(14px);
        }
        .grid-race {
          background-image:
            linear-gradient(rgba(243,240,230,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(243,240,230,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .track-lines {
          background-image: linear-gradient(90deg, transparent, rgba(224,245,46,0.4), transparent);
          animation: pulseLine 6s ease-in-out infinite;
        }
      `}</style>

      <header
        className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl"
        style={{ backgroundColor: "rgba(32, 32, 32, 0.82)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90"
          >
            Mats van Rooijen
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#achievements" className="transition hover:text-white">
              Achievements
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="#schedule" className="transition hover:text-white">
              Schedule
            </a>
            <a href="#partners" className="transition hover:text-white">
              Sponsors
            </a>
            <a
              href="#contact"
              className="rounded-full border px-4 py-2 font-medium transition hover:scale-[1.02]"
              style={{
                borderColor: theme.accent,
                backgroundColor: theme.accent,
                color: theme.bg,
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#09090b_48%,#030303_100%)]" />
          <div className="absolute inset-0 grid-race opacity-30" />
          <div
            className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            style={{ animation: "floatSlow 9s ease-in-out infinite" }}
          />
          <div
            className="absolute right-0 top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl"
            style={{ animation: "drift 12s ease-in-out infinite" }}
          />
          <div className="track-lines absolute left-0 top-24 h-px w-full" />
          <div className="track-lines absolute bottom-24 left-0 h-px w-full" />

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-end gap-10 px-6 pb-16 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-white" />
                Mazda MX-5 Cup Driver
              </div>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Next generation driver
                </p>
                <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
                  Mats
                  <span className="block text-white/60">van Rooijen</span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                  A 15-year-old Dutch racing driver building momentum from
                  karting into the Mazda MX-5 Cup. Fast, focused, and
                  developing through every lap, every weekend, every level.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]"
                  style={{ backgroundColor: theme.accent, color: theme.bg }}
                >
                  Join the journey
                </a>
                <a
                  href="#schedule"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  View race schedule
                </a>
                <a
                  href="https://www.instagram.com/matsvanrooijen_official/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/8"
                  style={{ borderColor: theme.border, color: theme.surface }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/mats-van-rooijen-540354314/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/8"
                  style={{ borderColor: theme.border, color: theme.surface }}
                >
                  LinkedIn
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="glass rounded-3xl p-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-end justify-center lg:justify-end">
              <div className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-white/10 blur-3xl" />
              <div className="glass relative w-full max-w-xl overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%,rgba(255,255,255,0.04))]" />
                <div className="relative space-y-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Driver profile
                      </p>
                      <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight">
                        Purpose-built for progress
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60">
                      2026
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                      <div className="text-4xl font-black">P8</div>
                      <p className="mt-2 text-sm text-white/65">
                        Overall on debut race weekend at Zandvoort
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                      <div className="text-4xl font-black">P5</div>
                      <p className="mt-2 text-sm text-white/65">
                        Rookie class on debut weekend
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm uppercase tracking-[0.25em] text-white/45">
                        Mindset
                      </span>
                      <span className="text-xs text-white/45">
                        Focused / Coachable / Competitive
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Driven by focus, discipline, and determination, Mats is
                      building his path toward endurance racing. Every session,
                      race, and challenge is approached with the mindset of
                      continuous improvement, long-term growth, and performing
                      under pressure when it matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-neutral-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Who Mats is
                </p>
                <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
                  Young. Relentless. Already racing forward.
                </h2>
              </div>
              <div className="glass overflow-hidden rounded-[2rem]">
                <img
                  src={aboutImage}
                  alt="Portrait of Mats van Rooijen"
                  className="h-[420px] w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-[2rem] p-6">
                <h3 className="text-lg font-semibold">From karting to cars</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Mats built his race craft in karting before stepping into the
                  Mazda MX-5 Cup. The transition shows a clear development
                  path: raw speed, disciplined learning, and competitive
                  consistency.
                </p>
              </div>

              <div className="glass rounded-[2rem] p-6">
                <h3 className="text-lg font-semibold">Why brands fit here</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Sponsor alignment is about more than logo placement. It is
                  access to a rising athlete, compelling content, authentic
                  storytelling, and visibility in a national racing environment.
                </p>
              </div>

              <div className="glass rounded-[2rem] p-6 sm:col-span-2">
                <h3 className="text-lg font-semibold">Positioning</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Mats represents the next generation of racing talent:
                  focused, ambitious, and committed to growth. With a
                  background in karting and a clear goal of competing in
                  endurance racing, he approaches every race weekend as an
                  opportunity to learn, improve, and move one step closer to
                  the professional level.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="border-t border-white/10 bg-neutral-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Achievements
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                  Building the racing résumé
                </h2>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {achievements.map((item) => (
                <article key={item.title} className="glass rounded-[2rem] p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.year}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="border-t border-white/10 bg-neutral-950 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                Mats in action
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass overflow-hidden rounded-[2rem]">
                <img
                  src="/Mazda1.jpg"
                  alt={"Front view of Mats van Rooijen's Mazda MX-5 Cup car in action"}
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>

              <div className="grid gap-5">
                <div className="glass overflow-hidden rounded-[2rem]">
                  <img
                    src="Mazda2.jpg"
                    alt={galleryImages[1].alt}
                    className="h-[202px] w-full object-cover"
                  />
                </div>
                <div className="glass overflow-hidden rounded-[2rem]">
                  <img
                    src="Mazda3.jpg"
                    alt={galleryImages[2].alt}
                    className="h-[202px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="border-t border-white/10 bg-neutral-950 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Race schedule
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                  2026 calendar
                </h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="grid grid-cols-[1.05fr_1.2fr_1.1fr_0.8fr] gap-4 border-b border-white/10 bg-white/5 px-5 py-4 text-xs uppercase tracking-[0.25em] text-white/45">
                <div>Date</div>
                <div>Event</div>
                <div>Circuit</div>
                <div>Status</div>
              </div>
              <div>
                {schedule.map((item) => {
                  const isCompleted = item.status === "Completed";
                  return (
                    <div
                      key={`${item.date}-${item.event}`}
                      className="grid grid-cols-1 gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[1.05fr_1.2fr_1.1fr_0.8fr] sm:items-center"
                    >
                      <div className="text-sm font-medium text-white/90">
                        {item.date}
                      </div>
                      <div className="text-sm text-white/80">{item.event}</div>
                      <div className="text-sm text-white/65">{item.circuit}</div>
                      <div>
                        <span
                          className="inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]"
                          style={
                            isCompleted
                              ? {
                                  backgroundColor: theme.accent,
                                  borderColor: theme.accent,
                                  color: theme.bg,
                                }
                              : {
                                  backgroundColor: "rgba(255,255,255,0.06)",
                                  borderColor: "rgba(255,255,255,0.12)",
                                  color: theme.surface,
                                }
                          }
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="border-t border-white/10 bg-neutral-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Sponsor opportunities
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
                  Built for brands that want to grow with a driver
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/68">
                  For sponsors, Mats offers a high-upside story: youth,
                  progression, visibility, and a clean personal brand. This
                  section gives enough substance to convert curiosity into a
                  conversation.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {partners.map((item) => (
                  <div
                    key={item}
                    className="glass rounded-[2rem] p-6 text-sm leading-7 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                Current partners
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase sm:text-4xl">
                Companies already on the journey
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {currentPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="glass flex min-h-[180px] items-center justify-center rounded-[2rem] p-8"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-neutral-950 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Contact
                </p>
                <h2 className="text-3xl font-black uppercase sm:text-5xl">
                  Join the journey
                </h2>
                <p className="max-w-xl text-sm leading-7 text-white/68">
                  Interested in becoming part of the journey? Whether you're
                  looking to increase brand visibility, create authentic
                  content, or support the next generation of racing talent,
                  we'd love to explore the possibilities together.
                </p>

                <div className="glass rounded-[2rem] p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Primary contact
                  </div>
                  <a
                    href="mailto:matsvanrooijen@gmail.com"
                    className="mt-3 block text-xl font-semibold text-white underline decoration-white/20 underline-offset-4"
                  >
                    matsvanrooijen@gmail.com
                  </a>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="https://www.instagram.com/matsvanrooijen_official/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-white/8"
                      style={{ borderColor: theme.border, color: theme.surface }}
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mats-van-rooijen-540354314/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-white/8"
                      style={{ borderColor: theme.border, color: theme.surface }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <form className="glass rounded-[2rem] p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/45">
                      Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/45">
                      Company
                    </span>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/45">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/45">
                      Message
                    </span>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your brand, goals, and partnership idea."
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
                  <button
                    type="submit"
                    className="rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]"
                    style={{ backgroundColor: theme.accent, color: theme.bg }}
                  >
                    Join the journey
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;