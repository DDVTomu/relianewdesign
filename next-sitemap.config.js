/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_URL;
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`, // <==== Add here
    ],
  },
};
