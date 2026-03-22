import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DisordersTitle from "./components/disorders-title";
import tedxDkuWhiteLogo from "../logos/TEDxDKU_basicLogoPack/TEDxDKU_white.png";

const speakerCards = [
  {
    role: "Astrophysicist",
    name: "Dr. Elena Rostova",
    copy: "Mapping the dark matter web and its implications on galactic formation.",
    tone: "speaker-surface-1",
  },
  {
    role: "Behavioral Economist",
    name: "Marcus Chen",
    copy: "The exponential cost of micro-decisions in global markets.",
    tone: "speaker-surface-2",
  },
  {
    role: "Bio-engineer",
    name: "Sarah Al-Fayed",
    copy: "Engineering bacteria to consume atmospheric carbon at scale.",
    tone: "speaker-surface-1",
  },
  {
    role: "Climate Modeler",
    name: "Dr. Aris Thorne",
    copy: "Predicting the timeline of planetary tipping points.",
    tone: "speaker-surface-2",
  },
  {
    role: "Quantum Physicist",
    name: "Dr. Maya Lin",
    copy: "The exponential collapse of modern cryptographic infrastructure.",
    tone: "speaker-surface-1",
  },
  {
    role: "Sociologist",
    name: "Elias Vance",
    copy: "Viral dynamics and the speed of modern social contagion.",
    tone: "speaker-surface-2",
  },
  {
    role: "Urban Architect",
    name: "Kaelen Ray",
    copy: "Designing sustainable infrastructure for fractal megacities.",
    tone: "speaker-surface-1",
  },
  {
    role: "Neuroscientist",
    name: "Nia Okafor",
    copy: "Rewiring human perception of deep time and cosmic scale.",
    tone: "speaker-surface-2",
  },
];

const scheduleItems = [
  {
    time: "08:30 AM",
    title: "Doors Open & Registration",
    copy: "Arrival, check-in, coffee, and the first conversations before the theater opens.",
  },
  {
    time: "09:30 AM",
    title: "Opening Remarks",
    copy: "The organizing team frames the day and introduces Disorders of Magnitude.",
  },
  {
    time: "10:00 AM",
    label: "Session 1",
    title: "The Macro: Systems at Scale",
    copy: "Talks on planetary infrastructures, collective risk, and the institutions that determine what counts.",
  },
  {
    time: "12:00 PM",
    title: "Lunch & Networking",
    copy: "A slower interval for reflection, conversation, and interdisciplinary collisions.",
  },
  {
    time: "01:30 PM",
    label: "Session 2",
    title: "The Micro: Invisible Catalysts",
    copy: "Talks exploring tiny mechanisms, quiet actors, and hidden forces that reshape visible worlds.",
  },
  {
    time: "03:00 PM",
    title: "Coffee Break",
    copy: "Reset, regroup, and continue the conversations between sessions.",
  },
  {
    time: "03:30 PM",
    label: "Closing",
    title: "Synthesis Panel",
    copy: "Speakers and organizers return to the central question: how should we reassign scale, weight, and value?",
  },
  {
    time: "05:00 PM",
    title: "Reception",
    copy: "An informal close with music, conversation, and room for the ideas to keep moving.",
  },
];

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Organizer",
  },
  {
    name: "Jordan Lee",
    role: "Curation Director",
  },
  {
    name: "Sam Taylor",
    role: "Experience Design",
  },
  {
    name: "Casey Smith",
    role: "Partnerships",
  },
  {
    name: "Morgan Davis",
    role: "Marketing & PR",
  },
];

const marqueeItems = [
  "Disorders of Magnitude",
  "Shifting Perspectives",
  "Unlearning Scale",
  "Reassigning Value",
  "Transformative Change",
];

export default function Home() {
  return (
    <main className="summit-page">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />

      <header className="summit-header">
        <Link href="/" className="summit-brand" aria-label="TEDxDKU home">
          <Image src={tedxDkuWhiteLogo} alt="TEDxDKU" className="summit-logo" priority />
        </Link>

        <nav className="summit-nav" aria-label="Primary">
          <a href="#theme">Theme</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedule">Schedule</a>

          {/* Past Events Dropdown */}
          <div className="relative">
            <button
              id="past-events-btn"
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none"
            >
              Past Events
              <iconify-icon
                icon="solar:alt-arrow-down-linear"
                class="text-xs transition-transform duration-200"
                id="past-events-icon"
                aria-hidden="true"
              />
            </button>
            {/* Dropdown Menu */}
            <div
              id="past-events-menu"
              className="absolute top-full right-0 mt-3 w-48 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 z-50 flex flex-col gap-0.5"
            >
              <a
                href="/tomorrow-united"
                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide"
              >
                Tomorrow: United?
              </a>
              <a
                href="/sparks"
                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide"
              >
                Sparks
              </a>
            </div>
          </div>
        </nav>

        <Link href="/reserve" className="nav-ticket">
          Get Tickets
          <iconify-icon icon="solar:ticket-linear" class="text-base" aria-hidden="true" />
        </Link>
      </header>

      <section className="hero-shell">
        <div className="hero-inner">
          <p className="hero-kicker">An independently organized TED event</p>

          <div className="hero-title-wrap">
            <DisordersTitle />
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span>Date</span>
              <p>March 27th, 2026</p>
            </div>

            <div className="hero-meta-item">
              <span>Location</span>
              <p>Duke Kunshan University</p>
            </div>

            <div className="hero-meta-item hero-meta-cta">
              <Link href="#tickets" className="hero-ticket">
                Get Tickets
                <iconify-icon icon="solar:arrow-right-linear" class="text-base" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Typography */}
        <div className="background-typography" aria-hidden="true">
          <div className="background-typography-track">
            <span>SCALE</span>
            <span>SHIFT</span>
            <span>DISRUPTION</span>
            <span>IMPACT</span>
            <span>SCALE</span>
            <span>SHIFT</span>
          </div>
        </div>
      </section>

      <div className="marquee-bar" aria-label="Conference themes">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section-shell concept-section" id="theme">
        <div className="concept-grid">
          <div className="concept-heading">
            <span className="section-index">01 / The Concept</span>
            <h2>When scale breaks perception.</h2>
          </div>

          <div className="concept-copy">
            <p className="concept-lead">
              What happens when scale fails, and our measures no longer match reality?
            </p>
            <p>
              Disorders of Magnitude explores the fixed-magnitude biases we inherit
              across fields: assumptions about which voices, impacts, and priorities
              deserve to outweigh others.
            </p>
            <p>
              It asks us to unlearn default orders, rethink value from the ground
              up, and trace how microscopic shifts can trigger systemic change far
              beyond what our instincts are prepared to measure.
            </p>

            <div className="concept-cards">
              <article className="concept-card">
                <span>Macro</span>
                <p>Global systems, cultural hierarchies, and the scales that dominate public attention.</p>
              </article>
              <article className="concept-card">
                <span>Micro</span>
                <p>Subtle actions, overlooked actors, and minute forces that alter outcomes from the ground up.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Carousel */}
      <section className="section-shell voices-section" id="speakers">
        <div className="section-header voices-header">
          <div>
            <span className="section-index">02 / Voices</span>
            <h2>Catalysts of Change</h2>
          </div>

          <div className="voices-controls">
            <Link href="/reserve" className="section-link">
              View Full Lineup
              <iconify-icon icon="solar:arrow-right-linear" class="text-base" aria-hidden="true" />
            </Link>

            <div className="catalog-controls">
              <button
                id="prev-speaker"
                className="catalog-arrow"
                type="button"
                aria-label="Previous speakers"
              >
                <iconify-icon icon="solar:alt-arrow-left-linear" class="text-xl" aria-hidden="true" />
              </button>
              <button
                id="next-speaker"
                className="catalog-arrow"
                type="button"
                aria-label="Next speakers"
              >
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-xl" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="catalog-shell">
          <div id="speaker-carousel" className="speaker-carousel">
            {speakerCards.map((speaker) => (
              <article className="speaker-card" key={speaker.name}>
                <div className="speaker-gradient" />
                <div className={`speaker-surface ${speaker.tone}`} />
                <div className="speaker-content">
                  <span>{speaker.role}</span>
                  <h3>{speaker.name}</h3>
                  <p>{speaker.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell schedule-section" id="schedule">
        <div className="section-header section-header-column">
          <span className="section-index">03 / Schedule</span>
          <h2>The Schedule</h2>
        </div>

        <div className="schedule-list">
          {scheduleItems.map((item) => (
            <article className={`schedule-item${item.label ? " schedule-item-active" : ""}`} key={item.time}>
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-copy">
                {item.label ? <span className="schedule-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Organizing Team */}
      <section className="section-shell team-section" id="team">
        <div className="section-header section-header-column">
          <span className="section-index">04 / Organizing Team</span>
          <h2>The Curators</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className="team-portrait-frame">
                <div className={`team-portrait team-portrait-${(index % 3) + 1}`} />
              </div>
              <div className="team-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tickets-section" id="tickets">
        <div className="tickets-inner">
          <h2>Experience the shift.</h2>
          <p>
            Join us for a day of profound ideas, layered perspectives, and
            conversations that unsettle the scales we take for granted.
          </p>

          <div className="tickets-actions">
            <Link href="/reserve" className="ticket-button">
              Get Tickets
              <iconify-icon icon="solar:ticket-linear" class="text-base" aria-hidden="true" />
            </Link>
            <span className="ticket-note">Selling fast - limited seats available</span>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <Script id="homepage-interactions" strategy="afterInteractive">
        {`
          const initHomepageInteractions = () => {
            const carousel = document.getElementById('speaker-carousel');
            const prevBtn = document.getElementById('prev-speaker');
            const nextBtn = document.getElementById('next-speaker');

            const getScrollAmount = () => {
              if (!carousel) return 0;
              const card = carousel.querySelector('.speaker-card');
              return card ? card.offsetWidth + 1 : 0;
            };

            if (nextBtn && prevBtn && carousel) {
              nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
              });

              prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
              });
            }

            const pastEventsBtn = document.getElementById('past-events-btn');
            const pastEventsMenu = document.getElementById('past-events-menu');
            const pastEventsIcon = document.getElementById('past-events-icon');

            if(pastEventsBtn && pastEventsMenu) {
              pastEventsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = pastEventsMenu.classList.contains('opacity-100');

                if (isExpanded) {
                  pastEventsMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                  pastEventsMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                  pastEventsIcon.classList.remove('rotate-180');
                } else {
                  pastEventsMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                  pastEventsMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                  pastEventsIcon.classList.add('rotate-180');
                }
              });

              // Close dropdown when clicking outside
              document.addEventListener('click', (e) => {
                if (!pastEventsMenu.contains(e.target) && e.target !== pastEventsBtn) {
                  pastEventsMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                  pastEventsMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                  pastEventsIcon.classList.remove('rotate-180');
                }
              });
            }
          };

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initHomepageInteractions, { once: true });
          } else {
            initHomepageInteractions();
          }
        `}
      </Script>
    </main>
  );
}
