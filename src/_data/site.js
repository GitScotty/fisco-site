// Site-wide configuration. Update these values once and they propagate everywhere.
module.exports = {
  title: "FISCO",
  tagline: "Fiscal compliance observatory for IFIs",
  description:
    "An Excel-based model that helps independent fiscal institutions assess EU fiscal-rule compliance under Regulation (EU) 2024/1263.",

  domain: "fiscal-compliance.org",
  url: "https://fiscal-compliance.org",

  author: "Scott Cameron",

  // Formspree endpoint for the feedback form.
  // TODO: sign up at https://formspree.io with cameronscottd@gmail.com,
  // create a form, paste the URL below (looks like https://formspree.io/f/xxxxxxxx).
  feedbackEndpoint: "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID",

  // Latest released version of the FISCO model — surfaced on home and download pages.
  latestVersion: "1.1.0",
  latestReleaseDate: "2026-04-28",
};
