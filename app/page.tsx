import Image from "next/image";
import Link from "next/link";
import DisordersTitle from "./components/disorders-title";
import tedxDkuWhiteLogo from "../logos/TEDxDKU_basicLogoPack/TEDxDKU_white.png";

const speakerCards = [
  {
    role: "Astrophysicist",
    name: "Dr. Elena Rostova",
    copy: "Mapping systems too large for intuition and asking how human judgment fails when consequence outpaces perception.",
  },
  {
    role: "Behavioral Economist",
    name: "Marcus Chen",
    copy: "Tracing the exponential cost of tiny defaults and the hidden assumptions that determine which impacts are treated as meaningful.",
  },
  {
    role: "Bio-engineer",
    name: "Sarah Al-Fayed",
    copy: "Working at the cellular scale to show how microscopic intervention can reorganize the future of whole environments.",
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
        </nav>

        <Link href="/reserve" className="nav-ticket">
          Get Tickets
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
              <p>To be announced</p>
            </div>

            <div className="hero-meta-item">
              <span>Location</span>
              <p>Duke Kunshan University</p>
            </div>

            <div className="hero-meta-item hero-meta-cta">
              <Link href="/reserve" className="hero-ticket">
                Get Tickets
              </Link>
            </div>
          </div>
        </div>

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
              Disorders of Magnitude asks what happens when our inherited sense of
              scale stops working, when tiny shifts trigger systemic consequences,
              when quiet voices are undervalued, and when dominant measures no longer
              match reality.
            </p>
            <p>
              Our Theme Disorders of Magnitude centers on breaking down the
              fixed-magnitude biases we hold across fields: unexamined ideas about
              which voices, impacts, or priorities should outweigh others. We aim to
              push everyone to unlearn ingrained views, rethink from the ground up,
              and redefine how we measure value and impact.
            </p>
            <p>
              This theme calls us to challenge every default order we&apos;ve accepted,
              encouraging radical rethinking that drives transformative change in our
              world, from microscopic intervention to institutional redesign.
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

      <section className="section-shell voices-section" id="speakers">
        <div className="section-header">
          <div>
            <span className="section-index">02 / Voices</span>
            <h2>Catalysts of Change</h2>
          </div>

          <Link href="/reserve" className="section-link">
            View Full Lineup
          </Link>
        </div>

        <div className="speaker-grid">
          {speakerCards.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-surface" />
              <div className="speaker-gradient" />
              <div className="speaker-content">
                <span>{speaker.role}</span>
                <h3>{speaker.name}</h3>
                <p>{speaker.copy}</p>
              </div>
            </article>
          ))}
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

      <section className="section-shell team-section" id="team">
        <div className="section-header section-header-column">
          <span className="section-index">04 / Organizing Team</span>
          <h2>The Curators</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className={`team-portrait team-portrait-${(index % 3) + 1}`} />
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
            </Link>
            <span className="ticket-note">Selling fast - limited seats available</span>
          </div>
        </div>
      </section>
    </main>
  );
}
