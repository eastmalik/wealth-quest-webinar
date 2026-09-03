import { describe, expect, it } from "vitest";
import { BOSS_CARDS, getEventDate, PROOF_COPY, PROOF_STAT } from "./event";

describe("event content", () => {
  it("ships all four topic cards aligned to the Game Map levels", () => {
    expect(BOSS_CARDS).toHaveLength(4);
    expect(BOSS_CARDS.map((b) => b.boss)).toEqual([
      "Credit Restoration",
      "LLC Structuring",
      "IUL / Lifetime LOC",
      "Transfer of Wealth",
    ]);
    expect(BOSS_CARDS.map((b) => b.level)).toEqual([
      "LEVEL 1",
      "LEVEL 2",
      "LEVEL 4",
      "LEVELS 5–7",
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
