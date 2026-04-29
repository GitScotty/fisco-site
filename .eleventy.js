module.exports = function (eleventyConfig) {
  // Pass static asset folders straight through to _site/
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // Date filter — supports "Y" for year, "iso" for YYYY-MM-DD, default = long British format
  eleventyConfig.addFilter("date", (value, format) => {
    const d = value === "now" || !value
      ? new Date()
      : value instanceof Date
        ? value
        : new Date(value);
    if (format === "Y") return String(d.getFullYear());
    if (format === "iso") return d.toISOString().split("T")[0];
    return d.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
