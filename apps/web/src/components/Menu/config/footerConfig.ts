import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://zahoo.io/',
        isHighlighted: true,
      },
      {
        label: t('Blog'),
        href: 'https://zahoo.io/',
      },
      {
        label: t('Community'),
        href: 'https://x.com/zahoomeme',
      },
      {
        label: t('Whitepaper'),
        href: 'https://zahoo.io/wp-content/uploads/2024/07/Zahoo-WhitePaper.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://x.com/zahoomeme',
      },
      {
        label: t('Team'),
        href: 'https://www.instagram.com/zahoomeme',
      },
      {
        label: t('Guides'),
        href: 'https://www.instagram.com/zahoomeme',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: t('Documentation'),
        href: '#',
      },
      {
        label: t('Audits'),
        href: '#',
      },
      {
        label: t('News'),
        href: '#',
      },
    ],
  },
]
