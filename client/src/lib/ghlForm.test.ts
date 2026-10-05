import { describe, expect, it } from "vitest";
import { buildFormUrl, detectSource, formatSession } from "./ghlForm";

describe("detectSource", () => {
  it("prefers an explicit ?source= on the link", () => {
    expect(detectSource("?source=ec", "https://www.arisecreditpro.com/")).toBe("ec");
  });

  it("falls back to the referring 7Band site", () => {
    expect(detectSource("", "https://www.arisecreditpro.com/pricing")).toBe("arise");
    expect(detectSource("", "https://eastconsultingllc.com/")).toBe("ec");
    expect(detectSource("", "https://www.7bandfinancialagency.com/game-map")).toBe("7b");
  });

  it("treats the webinar's own page, other sites and no referrer as direct", () => {
    expect(detectSource("", "https://theflow.7bandfinancialagency.com/")).toBe("direct");
    expect(detectSource("", "https://www.google.com/")).toBe("direct");
    expect(detectSource("", "")).toBe("direct");
    expect(detectSource("?source=nonsense", "")).toBe("direct");
  });
});

describe("form URL", () => {
  it("writes the session in Central time with its offset, across DST", () => {
    expect(formatSession(new Date("2026-10-10T15:30:00Z"))).toBe("2026-10-10T10:30:00-05:00");
    expect(formatSession(new Date("2026-11-07T16:30:00Z"))).toBe("2026-11-07T10:30:00-06:00");
  });

  it("pre-fills the hidden session and source fields", () => {
    const url = new URL(buildFormUrl(new Date("2026-10-10T15:30:00Z"), "arise"));
    expect(url.origin + url.pathname).toBe("https://api.leadconnectorhq.com/widget/form/H0XKKQTflO5ktPHWAFDM");
    expect(url.searchParams.get("session")).toBe("2026-10-10T10:30:00-05:00");
    expect(url.searchParams.get("source")).toBe("arise");
  });
});
