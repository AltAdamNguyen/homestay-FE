import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {

    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.less$/i,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        })
        return config;
    }
};

export default nextConfig;
