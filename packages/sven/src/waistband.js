import { draftRibbing } from "./shared";

export default part => {
  let {
    store,
    measurements,
    utils,
    sa,
    Point,
    points,
    Path,
    paths,
    Snippet,
    snippets,
    complete,
    paperless,
    macro,
    options
  } = part.shorthand();

  if (!options.ribbing) return part;

  let length =
    measurements.hipsCircumference *
    (1 + options.hipsEase) *
    (1 - options.ribbingStretch);
  draftRibbing(part, length);

  // Complete pattern?
  if (complete) {
    macro("title", {
      at: points.title,
      nr: 4,
      title: "waistband"
    });
    if (sa) {
    }
  }

  // Paperless?
  if (paperless) {
  }

  return part;
};