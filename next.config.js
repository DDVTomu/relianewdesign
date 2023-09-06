const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const webpack = require("webpack");
const withOffline = require("next-offline");
const Config = {
  headers: async () => [
    {
      // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
      source: "/:all*(svg|jpg|jpeg|png|WEBP)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, stale-while-revalidate",
        },
      ],
    },
    {
      // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
      source: "/:all*(ttf)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, stale-while-revalidate",
        },
      ],
    },
    {
      // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
      source: "/:all*(js)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, stale-while-revalidate",
        },
      ],
    },
  ],
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils", "assets"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true,
  },
  // useFileSystemPublicRoutes: false, //build server
  // images: {
  //   loader: "default",
  //   formats: ['image/webp'],
  //   domains: ["localhost"],
  // },
  images: {
    loader: "custom",
    formats: ["image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [process.env.NEXT_PUBLIC_STRAPI_HOST],
    unoptimized: true,
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderName: "images-optimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Important: return the modified config
    return config;
  },
  experimental: {
    outputStandalone: true,
    images: {
      unoptimized: true,
    },
  },
};
module.exports = withOffline(Config);
