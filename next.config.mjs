import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  staticPageGenerationTimeout: 600 // timeout after 10 minutes
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
