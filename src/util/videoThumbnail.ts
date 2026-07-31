// Video topics in Discourse embed their player as an iframe (or a plain link)
// inside the post body. The topic list JSON only hands us `excerpt` and
// `image_url`, and both come back empty when the post opens with something
// Discourse won't summarize - a [wrap="hidden"] block, for instance - which
// leaves those cards with no thumbnail. These helpers pull the player URL out
// of whatever text we do have (excerpt, or the cooked HTML of the first post)
// and turn it into a poster image.

const VIDEO_HOST_PATTERN =
  /https?:\/\/[^\s"'<>)]*?(?:vidyard\.com|youtube\.com|youtube-nocookie\.com|youtu\.be)\/[^\s"'<>)]*/gi;

/**
 * Returns the poster image for a known video host, or null when the URL isn't
 * a video we can derive a thumbnail from.
 */
export function videoThumbnailURL(videoUrl: string | undefined | null): string | null {
  if (!videoUrl) return null;

  // https://play.vidyard.com/<uuid>.html or https://share.vidyard.com/watch/<uuid>
  const vidyard = videoUrl.match(
    /vidyard\.com\/(?:watch\/)?([A-Za-z0-9_-]+?)(?:\.html)?(?:[?#].*)?$/
  );
  if (vidyard) {
    return `https://play.vidyard.com/${vidyard[1]}.jpg`;
  }

  // youtu.be/<id>, /embed/<id>, /shorts/<id>, or watch?v=<id>
  const youtube = videoUrl.match(
    /(?:youtu\.be\/|\/embed\/|\/shorts\/|[?&]v=)([A-Za-z0-9_-]{11})/
  );
  if (youtube) {
    return `https://img.youtube.com/vi/${youtube[1]}/hqdefault.jpg`;
  }

  return null;
}

/**
 * Scans a block of text (post excerpt or cooked HTML) for the first video URL
 * we can build a thumbnail from.
 */
export function findVideoThumbnail(content: string | undefined | null): string | null {
  if (!content) return null;

  for (const match of content.match(VIDEO_HOST_PATTERN) ?? []) {
    const thumbnail = videoThumbnailURL(match);
    if (thumbnail) return thumbnail;
  }

  return null;
}
