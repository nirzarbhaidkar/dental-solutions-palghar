import { useEffect, useState } from "react";

export const CLINIC_PHONE_DISPLAY = "+91 86008 92884";
export const CLINIC_PHONE_HREF = "tel:+918600892884";
export const CLINIC_WHATSAPP_URL =
  "https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!";
export const CLINIC_MAPS_URL = "https://www.google.com/maps/place/Dental+Solutions+Palghar/@19.6944377,72.7659732,17z";
export const CLINIC_FACEBOOK_URL = "https://www.facebook.com/DentalSolutionsPalghar";

// Minutes since midnight, Monday to Saturday
const SESSIONS = [
  { start: 9 * 60 + 30, end: 14 * 60, opens: "9:30 am", closes: "2 pm" },
  { start: 17 * 60, end: 21 * 60, opens: "5 pm", closes: "9 pm" },
];

export type ClinicStatus = { isOpen: boolean; detail: string };

// Read the time in IST, not the visitor's timezone, so NRI visitors see the clinic's real status
export const getClinicStatus = (date: Date): ClinicStatus => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = part("weekday");
  const minutes = Number(part("hour")) * 60 + Number(part("minute"));

  if (weekday !== "Sun") {
    const current = SESSIONS.find((s) => minutes >= s.start && minutes < s.end);
    if (current) return { isOpen: true, detail: `Closes ${current.closes}` };

    const next = SESSIONS.find((s) => minutes < s.start);
    if (next) return { isOpen: false, detail: `Opens ${next.opens}` };
  }

  const nextDay = weekday === "Sat" || weekday === "Sun" ? "Monday" : "tomorrow";
  return { isOpen: false, detail: `Opens ${nextDay}, ${SESSIONS[0].opens}` };
};

export const useClinicStatus = () => {
  const [status, setStatus] = useState(() => getClinicStatus(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setStatus(getClinicStatus(new Date())), 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
};
