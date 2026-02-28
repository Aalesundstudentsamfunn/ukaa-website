export interface EventItem {
  id: string;
  title: string;
  tag?: string;
  meta?: string;
  people?: string;
  img: string;          // Cloudinary public ID – card hero image
  accent: string;       // hex accent colour
  tint: string;         // tailwind gradient classes (kept for reference)
  blurb?: string;
  gallery?: string[];   // Cloudinary public IDs
  /** Cloudinary public ID for an event poster (portrait orientation, ~2:3). */
  poster?: string;
  /** Direct ticket URL for this event, overrides the global fallback. */
  ticketHref?: string;
}

export const events: EventItem[] = [
  {
    id: "familiedager",
    title: "Familiedager",
    tag: "For små og store",
    meta: "I mars",
    people: "For hele byen",
    img: "skiogmagi_2024_2_yaqafl",
    accent: "#fdbc5b",
    tint: "from-[#fdbc5b]/60 via-[#84d5f3]/45 to-[#81c997]/35",
    blurb: "Åpne dager med aktiviteter som passer både familier, studenter og venner.",
    gallery: ["skiogmagi_2024_2_yaqafl", "skiogmagi_2024_4_rrpvxk", "skiogmagi_2025_6_yszso8"],
    // Demo poster – replace with actual event poster Cloudinary ID when available
    poster: "skiogmagi_2024_4_rrpvxk",
  },
  {
    id: "konserter",
    title: "Konserter",
    tag: "Live-opplevelser",
    meta: "Under U.-KA.",
    people: "Lokale og nasjonale artister",
    img: "skiogmagi_2025_1_yweuhz",
    accent: "#f26f7a",
    tint: "from-[#f26f7a]/55 via-[#fdbc5b]/50 to-[#84d5f3]/35",
    blurb: "Store scener, nye favoritter og kvelder som samler hele Ålesund.",
    gallery: ["skiogmagi_2025_1_yweuhz", "skiogmagi_2025_10_hmvmyn", "skiogmagi_2025_12_vd6xmj"],
  },
  {
    id: "annet",
    title: "Annet",
    tag: "Sosialt",
    meta: "Ca. 10 dager",
    people: "Med studentmiljøet",
    img: "skiogmagi_2024_3_ardl4j",
    accent: "#81c997",
    tint: "from-[#81c997]/55 via-[#84d5f3]/45 to-[#fdbc5b]/35",
    blurb: "Lav terskel, høy stemning – temaer, quiz og møteplasser som bygger fellesskap.",
    gallery: ["skiogmagi_2024_3_ardl4j", "skiogmagi_2024_7_liqvei", "skiogmagi_2025_8_boriq6"],
  },
];
