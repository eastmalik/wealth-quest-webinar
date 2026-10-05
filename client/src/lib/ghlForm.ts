/**
 * THE FLOW registration form, built and hosted in GoHighLevel
 * ("THE FLOW - Registration"). The page embeds it and pre-fills two hidden
 * fields through the URL: `session` (which Saturday they registered for, so
 * reminders fire at the right time) and `source` (which 7Band site sent them).
 */
export const GHL_FORM_ID = "H0XKKQTflO5ktPHWAFDM";
export const GHL_FORM_NAME = "THE FLOW - Registration";
export const GHL_FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export type FlowSource = "arise" | "ec" | "7b" | "direct";

const SOURCE_HOSTS: [string, FlowSource][] = [
  ["arisecreditpro.com", "arise"],
  ["eastconsultingllc.com", "ec"],
  ["7bandfinancialagency.com", "7b"],
];

/**
 * Where the visitor came from: an explicit `?source=` on the page link wins,
 * otherwise the site they clicked through from. The webinar's own subdomain
 * (theflow.7bandfinancialagency.com) is not a source.
 */
export function detectSource(search: string, referrer: string): FlowSource {
  const fromLink = new URLSearchParams(search).get("source")?.toLowerCase();
  if (fromLink === "arise" || fromLink === "ec" || fromLink === "7b") return fromLink;

  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return "direct";
  }
  if (host.startsWith("theflow.")) return "direct";
  for (const [domain, source] of SOURCE_HOSTS) {
    if (host === domain || host.endsWith(`.${domain}`)) return source;
  }
  return "direct";
}

/** ISO 8601 with the Central-time offset, e.g. "2026-10-10T10:30:00-05:00". */
export function formatSession(start: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "longOffset",
  }).formatToParts(start);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const offset = get("timeZoneName").replace("GMT", "") || "+00:00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}${offset}`;
}

export function buildFormUrl(session: Date, source: FlowSource): string {
  const url = new URL(`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`);
  url.searchParams.set("session", formatSession(session));
  url.searchParams.set("source", source);
  return url.toString();
}
