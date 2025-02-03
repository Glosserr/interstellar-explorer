module.exports = function(eleventyConfig) {
  // Existing config
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Add blog post collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  // Add log preview shortcode
  eleventyConfig.addShortcode("logPreview", function(post) {
    return `
      <article class="log-preview">
        <h2>${post.data.title}</h2>
        <div class="log-date">Stellar Date: ${post.data.date}</div>
        <p>${post.data.excerpt}</p>
        <a href="${post.url}">Read Full Log →</a>
      </article>
    `;
  });
};