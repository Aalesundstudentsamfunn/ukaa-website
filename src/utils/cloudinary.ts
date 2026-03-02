const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Standardized width tiers to minimize cached transformation variants:
 *   sm  = 600  — card thumbnails (sharp on 2x retina)
 *   md  = 800  — hero / medium displays
 *   lg  = 1200 — lightbox / poster fullscreen
 */
export const cloudUrl = (id: string, w = 800) =>
  `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${w}/${id}`;

export const resolveImageUrl = (src?: string, w = 800) => {
  if (!src) return "";
  if (/^https?:\/\//.test(src)) return src;
  if (!cloudName) return "";
  return cloudUrl(src, w);
};
