"use client";

import { useMemo, useState } from "react";
import { careerTracks } from "../data/careerTracks";
import { resources } from "../data/resources";
import styles from "./CareerPathfinder.module.css";

const goals = ["Internship", "New grad", "Research"] as const;
type Goal = (typeof goals)[number];

function scoreResource(
  resource: (typeof resources)[number],
  trackSlug: string,
  goal: Goal,
) {
  const track = careerTracks.find((item) => item.slug === trackSlug);
  if (!track) return -1;

  const haystack = [
    resource.name,
    resource.description,
    resource.type,
    resource.section,
    ...resource.keywords,
    ...resource.majors,
  ]
    .join(" ")
    .toLowerCase();

  let score = resource.featured ? 7 : 0;

  if (
    resource.majors.includes("All Majors") ||
    track.majors.some((major) => resource.majors.includes(major))
  ) {
    score += 7;
  }

  for (const term of track.searchTerms) {
    if (haystack.includes(term.toLowerCase())) score += 2;
  }

  if (goal === "New grad") {
    if (haystack.includes("new grad") || haystack.includes("new graduate")) score += 10;
    if (resource.section === "GitHub Repository") score += 3;
  }

  if (goal === "Research") {
    if (resource.section === "Research") score += 12;
    if (haystack.includes("research") || haystack.includes("reu")) score += 7;
  }

  if (goal === "Internship") {
    if (haystack.includes("intern")) score += 6;
    if (["Website", "GitHub Repository", "Startup"].includes(resource.section)) score += 2;
  }

  if (track.slug === "software-engineering" && resource.section === "GitHub Repository") {
    score += 5;
  }

  return score;
}

export default function CareerPathfinder() {
  const [trackSlug, setTrackSlug] = useState("software-engineering");
  const [goal, setGoal] = useState<Goal>("Internship");

  const track = careerTracks.find((item) => item.slug === trackSlug) ?? careerTracks[0];

  const recommendations = useMemo(
    () =>
      resources
        .map((resource) => ({
          resource,
          score: scoreResource(resource, trackSlug, goal),
        }))
        .filter(({ score }) => score > 0)
        .sort(
          (a, b) =>
            b.score - a.score ||
            b.resource.updatedAt.localeCompare(a.resource.updatedAt),
        )
        .slice(0, 5)
        .map(({ resource }) => resource),
    [goal, trackSlug],
  );

  return (
    <section className={styles.pathfinder} id="start-here" aria-labelledby="pathfinder-title">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Start here</span>
        <h1 id="pathfinder-title">Find the right places to look.</h1>
        <p>
          Pick a career direction and what you are searching for. We will narrow the
          directory to a few strong starting points instead of making you open dozens
          of tabs.
        </p>
      </div>

      <div className={styles.controls}>
        <label>
          <span>Career path</span>
          <select value={trackSlug} onChange={(event) => setTrackSlug(event.target.value)}>
            {careerTracks.map((careerTrack) => (
              <option value={careerTrack.slug} key={careerTrack.slug}>
                {careerTrack.shortTitle}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>I am looking for</span>
          <select value={goal} onChange={(event) => setGoal(event.target.value as Goal)}>
            {goals.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.trackSummary}>
        <div>
          <span className={styles.trackLabel}>{track.title}</span>
          <p>{track.description}</p>
        </div>
        {track.slug === "software-engineering" && (
          <span className={styles.primaryBadge}>Primary track</span>
        )}
      </div>

      <div className={styles.contentGrid}>
        <div>
          <h2>Best places to start</h2>
          <div className={styles.recommendations}>
            {recommendations.map((resource, index) => (
              <a
                className={styles.resourceCard}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                key={resource.url}
              >
                <span className={styles.rank}>{index + 1}</span>
                <span className={styles.resourceCopy}>
                  <strong>{resource.name}</strong>
                  <span>{resource.description}</span>
                  <small>{resource.type} · {resource.regions.slice(0, 2).join(" · ")}</small>
                </span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <aside className={styles.nextSteps}>
          <h2>What to do next</h2>
          <ol>
            {track.priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ol>
          <a href="#directory">Browse the full directory →</a>
        </aside>
      </div>
    </section>
  );
}
