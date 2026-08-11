"use client";

import { useEffect, useMemo, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };
const EMPTY: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
// Default first-batch countdown: 25 days from 5 August 2026 in India Standard Time.
// NEXT_PUBLIC_LAUNCH_DATE can still override this value for production.
const DEFAULT_LAUNCH_DATE = "2026-08-30T10:00:00+05:30";

function getTimeLeft(target: number): TimeLeft {
  const difference = Math.max(0, target - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function Countdown() {
  const configuredDate = process.env.NEXT_PUBLIC_LAUNCH_DATE || DEFAULT_LAUNCH_DATE;
  const target = useMemo(() => Date.parse(configuredDate), [configuredDate]);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY);

  useEffect(() => {
    setMounted(true);
    const update = () => setTimeLeft(getTimeLeft(target));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const expired = mounted && target <= Date.now();
  const units: Array<[keyof TimeLeft, string]> = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["minutes", "Minutes"],
    ["seconds", "Seconds"],
  ];

  return (
    <section className="countdown" aria-label="Launch countdown">
      <div className="countdown-intro">
        <span>FIRST BATCH OPENS · IST</span>
        <p>The wait for an honest pantry ends in</p>
      </div>
      {expired ? (
        <strong className="countdown-live">THE FIRST BATCH IS NOW LIVE</strong>
      ) : (
        <div className="countdown-units" role="timer" aria-live="off">
          {units.map(([key, label]) => (
            <div key={key}>
              <strong>{mounted ? String(timeLeft[key]).padStart(2, "0") : "00"}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      <a href="#waitlist">GET EARLY ACCESS <span>↗</span></a>
    </section>
  );
}
