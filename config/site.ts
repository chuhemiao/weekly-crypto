import { SiteConfig } from '@/types/siteConfig';
import {
  BsCurrencyBitcoin,
  BsTools,
  BsTwitterX,
  BsYoutube
} from 'react-icons/bs';
import { SiBinance } from 'react-icons/si';

const baseSiteConfig = {
  name: 'Weekly Kkdemian',
  description: '一个关注加密货币信息和分享自己观点的地方.',
  url: 'https://weekly.kkdemian.com',
  metadataBase: '/',
  keywords: ['kkdemian 加密货币周刊 加密货币交易 比特币交易'],
  authors: [
    {
      name: 'kkdemian',
      url: 'https://weekly.kkdemian.com',
      twitter: 'https://twitter.com/0xkkdemian'
    }
  ],
  creator: '@kkdemian',
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg'
  },
  headerLinks: [
    {
      name: 'repo',
      href: 'https://www.youtube.com/@kkdemian',
      icon: BsYoutube
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/0xkkdemian',
      icon: BsTwitterX
    },
    {
      name: 'Tool',
      href: 'https://tool.kkdemian.com/',
      icon: BsTools
    },
    {
      name: 'Kkdemian',
      href: 'https://kkdemian.com/',
      icon: BsCurrencyBitcoin
    }
  ],
  footerLinks: [
    {
      name: 'twitter',
      href: 'https://twitter.com/0xkkdemian',
      icon: BsTwitterX
    },
    // { name: 'github', href: "https://github.com/chuhemiao/", icon: BsGithub },
    {
      name: 'binance',
      href: 'https://accounts.binance.com/en/register?ref=MKOOSEO4',
      icon: SiBinance
    }
  ],
  footerProducts: [
    { url: 'https://www.youtube.com/@kkdemian', name: 'Youtube' },
    { url: 'https://www.internetcomputer.wiki/', name: 'ICP开发指南' },
    { url: 'https://tool.kkdemian.com/', name: '币圈工具大全' },
    {
      url: 'https://accounts.binance.com/en/register?ref=MKOOSEO4',
      name: '注册Binance'
    }
  ]
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator
  }
};
