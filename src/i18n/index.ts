import en from "./messages/en";
import es from "./messages/es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const messages: Record<Locale, typeof en> = { en, es };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
