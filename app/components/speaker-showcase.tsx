"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ArchivedSpeaker = {
  role: string;
  name: string;
  copy: string;
  tone: string;
  photo?: string;
  /**
   * YouTube video ID for this speaker's talk.
   * Swap in the real ID once each talk is published — everything else
   * (the modal, the click target, the layout) already works.
   */
  videoId: string;
};

export default function SpeakerShowcase({
  speakers,
}: {
  speakers: ArchivedSpeaker[];
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSpeaker, setActiveSpeaker] = useState<ArchivedSpeaker | null>(
    null,
  );

  useEffect(() => {
    if (!activeSpeaker) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSpeaker(null);
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [activeSpeaker]);

  function scrollCarousel(direction: 1 | -1) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector(".speaker-card");
    const amount = card ? card.clientWidth + 1 : 0;
    carousel.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section className="section-shell voices-section" id="speakers">
      <div className="section-header voices-header">
        <div>
          <span className="section-index">02 / Voices</span>
          <h2>Catalysts of Change</h2>
          <p className="voices-note">
            <iconify-icon
              icon="solar:play-circle-bold"
              aria-hidden="true"
            />
            Every talk is now live on YouTube — click a speaker to watch.
          </p>
        </div>

        <div className="voices-controls">
          <div className="catalog-controls">
            <button
              className="catalog-arrow"
              type="button"
              aria-label="Previous speakers"
              onClick={() => scrollCarousel(-1)}
            >
              <iconify-icon
                icon="solar:alt-arrow-left-linear"
                class="text-xl"
                aria-hidden="true"
              />
            </button>
            <button
              className="catalog-arrow"
              type="button"
              aria-label="Next speakers"
              onClick={() => scrollCarousel(1)}
            >
              <iconify-icon
                icon="solar:alt-arrow-right-linear"
                class="text-xl"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="catalog-shell">
        <div ref={carouselRef} className="speaker-carousel">
          {speakers.map((speaker) => (
            <button
              type="button"
              className="speaker-card"
              key={speaker.name}
              onClick={() => setActiveSpeaker(speaker)}
              aria-label={`Watch ${speaker.name}'s talk`}
            >
              {speaker.photo ? (
                <Image
                  src={speaker.photo}
                  alt={`Portrait of ${speaker.name}`}
                  fill
                  sizes="(max-width: 54rem) 100vw, (max-width: 72rem) 50vw, 33vw"
                  className="speaker-photo"
                />
              ) : (
                <div className={`speaker-surface ${speaker.tone}`} />
              )}
              <div className="speaker-gradient" />
              <span className="speaker-play-hint" aria-hidden="true">
                <iconify-icon icon="solar:play-bold" class="text-xl" />
              </span>
              <div className="speaker-content">
                <span>{speaker.role}</span>
                <h3>{speaker.name}</h3>
                <p>{speaker.copy}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeSpeaker ? (
        <div
          className="talk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeSpeaker.name}'s talk`}
          onClick={() => setActiveSpeaker(null)}
        >
          <div className="talk-modal" onClick={(event) => event.stopPropagation()}>
            <div className="talk-modal-header">
              <div>
                <h3>{activeSpeaker.name}</h3>
                <p>{activeSpeaker.copy}</p>
              </div>
              <button
                type="button"
                className="talk-modal-close"
                aria-label="Close video"
                onClick={() => setActiveSpeaker(null)}
              >
                <iconify-icon icon="solar:close-circle-linear" class="text-xl" />
              </button>
            </div>
            <div className="talk-modal-frame">
              <iframe
                src={`https://www.youtube.com/embed/${activeSpeaker.videoId}`}
                title={`${activeSpeaker.name}'s TEDxDKU talk`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
