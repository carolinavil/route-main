/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.routeinvestimentos.com.br/', // usa local ou produção
  generateRobotsTxt: true,
  outDir: './out',
};
