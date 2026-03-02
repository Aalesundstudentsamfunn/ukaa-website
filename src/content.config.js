import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "content",
  schema: z.object({
    titleAriaLabel: z.string(),
    subtitle: z.string(),
    ctaLabel: z.string(),
    order: z.number().optional(),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number(),
    id: z.string(),
    label: z.string(),
    dateLabel: z.string().optional(),
    date: z.string().optional(),
    summary: z.string().optional(),
    schedule: z
      .array(
        z.object({
          time: z.string(),
          title: z.string(),
          type: z.enum([
            "Revy",
            "Show",
            "Konsert",
            "Quiz",
            "Fest",
            "Tur",
            "Sport",
            "Aktivitet",
            "Sosial",
            "Film",
            "Seminar",
            "Opplevelse",
          ]).default("Opplevelse"),
          location: z.string().optional(),
          description: z.string().optional(),
          caption: z.string().optional(),
          img: z.string().optional(),
          ticketUrl: z.string().optional(),
          linkUrl: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const featured = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number().optional(),
    id: z.string(),
    title: z.string(),
    tag: z.string().optional(),
    year: z.string().optional(),
    img: z.string(),
    accent: z.string().optional(),
    tint: z.string().optional(),
    blurb: z.string().optional(),
    gallery: z
      .array(
        z.union([
          z.string(),
          z.object({
            src: z.string(),
            alt: z.string().optional(),
            caption: z.string().optional(),
          }),
        ]),
      )
      .optional(),
    poster: z.string().optional(),
    ticketHref: z.string().optional(),
  }),
});

const revy = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number().optional(),
    title: z.string(),
    day: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
    banner: z.string().optional(),
    ticketUrl: z.string().optional(),
  }),
});

export const collections = {
  hero,
  events,
  featured,
  revy,
};
