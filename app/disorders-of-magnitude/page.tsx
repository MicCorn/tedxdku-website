import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DisordersTitle from "../components/disorders-title";
import SpeakerShowcase, {
  type ArchivedSpeaker,
} from "../components/speaker-showcase";
import tedxDkuWhiteLogo from "../../logos/TEDxDKU_basicLogoPack/TEDxDKU_white.png";

export const metadata: Metadata = {
  title: "TEDxDKU | Disorders of Magnitude — Past Event",
  description:
    "Archived recap of TEDxDKU's Disorders of Magnitude, held March 27th, 2026 at Duke Kunshan University. Watch every speaker talk on YouTube.",
};

// Swap PLACEHOLDER_VIDEO_ID for each speaker's real YouTube ID as talks go
// live — "Me at the zoo", YouTube's first-ever upload, stands in until then.
const PLACEHOLDER_VIDEO_ID = "jNQXAC9IVRw";

const speakerCards: ArchivedSpeaker[] = [
  {
    role: "Professor of Humanities at DKU",
    name: "Tommaso Tesei",
    copy: "The Power of Cognitive Dissonance",
    tone: "speaker-surface-2",
    photo: "/headshots/Tommaso.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU Student",
    name: "Kate Elosta",
    copy: "Rethinking Parenthood: The Case for Shared Lactation",
    tone: "speaker-surface-1",
    photo: "/headshots/kate.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU Alumnus",
    name: "Ace Asim",
    copy: "Communitarianism and AI Ethics",
    tone: "speaker-surface-1",
    photo: "/headshots/ace.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "Partner at IBM Consulting",
    name: "Sun Yan",
    copy: "From Freshman Year to Forever: Growing Together in Life and Career",
    tone: "speaker-surface-1",
    photo: "/headshots/Sun_Yan.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU WLS Coach",
    name: "Ian McNally",
    copy: "The Art of Infinite Change",
    tone: "speaker-surface-2",
    photo: "/headshots/Ian_McNally.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU Student",
    name: "Coco Zhang",
    copy: "The Environmentalism Trap: From Consumer Guilt to Conscious Living",
    tone: "speaker-surface-2",
    photo: "/headshots/coco.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU Student",
    name: "Teohan Blind",
    copy: "Fix the Money, Fix the World",
    tone: "speaker-surface-1",
    photo: "/headshots/teo.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
  {
    role: "DKU Student",
    name: "Roberto Adames",
    copy: "The Power of a Card",
    tone: "speaker-surface-2",
    photo: "/headshots/Roberto.jpg",
    videoId: PLACEHOLDER_VIDEO_ID,
  },
];

const scheduleItems = [
  {
    time: "11:30 AM",
    title: "Registration",
    copy: "Attendees checked in, grabbed their name badges, and filled out the conversation starter.",
  },
  {
    time: "12:00 PM",
    label: "Session One",
    title: "Opening Remarks",
    copy: "A welcome to TEDxDKU 2026 and an introduction to the ideas that shaped the day.",
  },
  {
    time: "",
    title: "Teohan Blind",
    copy: "Fix the Money, Fix the World.",
  },
  {
    time: "",
    title: "Coco Zhang",
    copy: "The Environmentalism Trap: From Consumer Guilt to Conscious Living.",
  },
  {
    time: "",
    title: "Ian McNally",
    copy: "The Art of Infinite Change.",
  },
  {
    time: "",
    title: "Ace Asim",
    copy: "Communitarianism and AI Ethics.",
  },
  {
    time: "13:15 PM",
    title: "Tea Break",
    copy: "Speakers and attendees mingled over beverages and a light lunch.",
  },
  {
    time: "13:45 PM",
    label: "Session Two",
    title: "Kate Elosta",
    copy: "Rethinking Parenthood: The Case for Shared Lactation.",
  },
  {
    time: "",
    title: "Tommaso Tesei",
    copy: "The Power of Cognitive Dissonance.",
  },
  {
    time: "",
    title: "Roberto Adames",
    copy: "The Power of a Card.",
  },
  {
    time: "",
    title: "Sun Yan",
    copy: "From Freshman Year to Forever: Growing Together in Life and Career.",
  },
  {
    time: "15:00 PM",
    label: "Closing",
    title: "Closing Remarks",
    copy: "A final reflection that closed the program and carried the conversations beyond the theater.",
  },
];

const teamMembers = [
  {
    name: "Noah Caplan",
    role: "Lead Organizer",
    photo: "/headshots/noah.jpg",
  },
  {
    name: "Jiyuan Liu",
    role: "Lead Organizer",
    photo: "/headshots/Jiyuan_Liu.jpg",
  },
  {
    name: "Colden Johnson",
    role: "Curation Director",
    photo: "/headshots/colden.jpg",
  },
  {
    name: "Alessia Barreca",
    role: "Event Management",
    photo: "/headshots/alessia.jpg",
  },
  {
    name: "Mateja Bokan",
    role: "Technical Director",
  },
  {
    name: "Ethan Deal",
    role: "Design",
    photo: "/headshots/ethan.jpg",
  },
  {
    name: "Giorgia Guardamagn",
    role: "Marketing",
    photo: "/headshots/Giorgia.jpg",
  },
  {
    name: "Michael Cornell",
    role: "Digital Operations",
    photo: "/headshots/michael.jpg",
  },
];

const marqueeItems = [
  "Disorders of Magnitude",
  "Shifting Perspectives",
  "Unlearning Scale",
  "Reassigning Value",
  "Transformative Change",
];

export default function ArchivedDisordersOfMagnitude() {
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
                href="/disorders-of-magnitude"
                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide"
              >
                Disorders of Magnitude
              </a>
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

        <a href="#speakers" className="nav-ticket">
          Watch Talks
          <iconify-icon icon="solar:play-circle-linear" class="text-base" aria-hidden="true" />
        </a>
      </header>

      <section className="hero-shell">
        <div className="hero-inner">
          <div className="hero-title-wrap">
            <span className="hero-kicker">TEDxDKU 2026 — Past Event</span>
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
              <a href="#speakers" className="hero-ticket">
                Watch Talks
                <iconify-icon icon="solar:arrow-right-linear" class="text-base" aria-hidden="true" />
              </a>
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
              What happened when scale fails, and our measures no longer
              match reality?
            </p>
            <p>
              Disorders of Magnitude explored the fixed-magnitude biases we
              inherit across fields: assumptions about which voices, impacts,
              and priorities deserve to outweigh others.
            </p>
            <p>
              It asked us to unlearn default orders, rethink value from the
              ground up, and trace how microscopic shifts can trigger systemic
              change far beyond what our instincts are prepared to measure.
            </p>

            <div className="concept-cards">
              <article className="concept-card group">
                <iconify-icon
                  icon="solar:maximize-square-minimalistic-linear"
                  class="text-2xl text-zinc-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
                <span>Macro</span>
                <p>Global systems, societal shifts, planetary impact.</p>
              </article>
              <article className="concept-card group">
                <iconify-icon
                  icon="solar:minimize-square-minimalistic-linear"
                  class="text-2xl text-zinc-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
                <span>Micro</span>
                <p>Quantum mechanics, individual actions, cellular change.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SpeakerShowcase speakers={speakerCards} />

      <section className="section-shell schedule-section" id="schedule">
        <div className="section-header section-header-column">
          <span className="section-index">03 / Schedule</span>
          <h2>How the Day Unfolded</h2>
        </div>

        <div className="schedule-list">
          {scheduleItems.map((item) => (
            <article
              className={`schedule-item${item.label ? " schedule-item-active" : ""}`}
              key={`${item.time}-${item.title}`}
            >
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
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 54rem) 100vw, (max-width: 72rem) 33vw, 20vw"
                    className="team-portrait team-photo"
                  />
                ) : (
                  <div className={`team-portrait team-portrait-${(index % 3) + 1}`} />
                )}
              </div>
              <div className="team-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tickets-section" id="recap">
        <div className="tickets-inner">
          <h2>The shift already happened.</h2>
          <p>
            Disorders of Magnitude took place on March 27th, 2026 at Duke
            Kunshan University. Thank you to everyone who joined us — every
            speaker talk is now live on YouTube.
          </p>

          <div className="tickets-actions">
            <a href="#speakers" className="ticket-button">
              Watch the Talks
              <iconify-icon icon="solar:play-circle-linear" class="text-base" aria-hidden="true" />
            </a>
            <span className="ticket-note">All eight talks, ready to watch</span>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <Script id="archive-homepage-interactions" strategy="afterInteractive">
        {`
          const initArchivePageInteractions = () => {
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
            document.addEventListener('DOMContentLoaded', initArchivePageInteractions, { once: true });
          } else {
            initArchivePageInteractions();
          }
        `}
      </Script>
    </main>
  );
}
