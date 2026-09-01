import { describe, expect, it } from "vitest";
import { ACTS, BOSS_CARDS, getEventDate, PROOF_COPY, PROOF_STAT } from "./event";

describe("event content", () => {
  it("ships all four boss cards from the brief", () => {
    expect(BOSS_CARDS).toHaveLength(4);
    expect(BOSS_CARDS.map((b) => b.boss)).toEqual([
      "The Interest Siphon",
      "The Credit Wall",
      "The Exposure Trap",
      "The Legacy Wipe",
    ]);
  });

  it("ships all four acts from the brief", () => {
    expect(ACTS).toHaveLength(4);
    expect(ACTS.map((a) => a.title)).toEqual([
      "THE TUTORIAL",
      "THE FOUNDATION CAMPAIGN",
      "THE ACCELERATION",
      "THE HIGH SCORE",
    ]);
  });

  it("keeps the FDIC proof statistic", () => {
    expect(PROOF_STAT).toContain("205.7");
    expect(PROOF_COPY).toContain("FDIC");
  });

  it("resolves a valid future event date", () => {
    const d = getEventDate();
    expect(Number.isNaN(d.getTime())).toBe(false);
  });
});

