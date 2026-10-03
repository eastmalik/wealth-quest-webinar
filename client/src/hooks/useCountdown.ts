import { useEffect, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  totalMs: number;
}

export function computeCountdown(target: Date, now: number): CountdownParts {
  const totalMs = target.getTime() - now;
  if (totalMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, totalMs: 0 };
  }
  const secondsTotal = Math.floor(totalMs / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;
  return { days, hours, minutes, seconds, isLive: false, totalMs };
}

/** The current time, updated every second. */
export function useNow(): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}
