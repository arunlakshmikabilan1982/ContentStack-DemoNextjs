const withPWA = require('next-pwa')({
  dest: 'public'
});

const nextConfig = {
    i18n: {
      // These are all the locales you want to support in your application.
      locales: ['en-us','zh-cn'],
      defaultLocale: "en-us",
    },
  //   async rewrites() {
  //     return [
  //     { 
  //     source: "/:lang(en-us|hi-in)?/path*", 
  //     destination: "/path*" 
  //   }]    
  // },

}
module.exports =
process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);
