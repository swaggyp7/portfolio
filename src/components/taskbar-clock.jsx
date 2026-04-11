"use client";

import { useEffect, useState } from "react";

function formatClock(date) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function TaskbarClock() {
  const [time, setTime] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(formatClock(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="taskbar-clock" aria-label={`System time ${time}`}>
      {time}
    </div>
  );
}
