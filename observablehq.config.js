// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "ACC 2026 Scoring",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="logo.png" type="image/png" sizes="32x32">',

  header: `
    <style>
      /* Make sure the header sits nicely at the top */
      #observablehq-header {
        border-bottom: 1px solid var(--theme-foreground-faintest);
        background: var(--theme-background);
      }
      
      /* Flexbox layout for the horizontal links */
      .top-nav {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        padding: 0.5rem 1rem;
        max-width: 1400px; /* Match your page width */
        margin: 0 auto;
      }

      .top-nav a {
        color: var(--theme-foreground);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
      }

      .top-nav a:hover {
        color: var(--theme-foreground-focus);
      }

      .nav-title {
        font-weight: 700;
        margin-right: auto; /* Pushes the links to the right */
        font-size: 1.1rem;
      }
    </style>

    <nav class="top-nav">
      <a href="/">Home</a>
      <a href="/scores">Scores</a>
      <a href="/teams">Teams</a>
      <a href="/rounds">Rounds</a>
    </nav>
  `,

  // ... the rest of your configuration (title, root, etc.)


  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "dark", // try "light", "dark", "slate", etc.
  //header: "ACC", // what to show in the header (HTML)
  footer: "Built with Observable by the Akamodell Stuttgart.", // what to show in the footer (HTML)
  sidebar: false, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
