import type { Metadata } from 'next'
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'Gustavo Fisner | Designer Gráfico, Branding & UI/UX',
  description:
    'Gustavo Fisner é designer especializado em branding, identidade visual e UI/UX design. Criação de marcas estratégicas, interfaces intuitivas e projetos visuais com foco em resultado. São José dos Campos – SP.',

  keywords: [
    'Gustavo Fisner',
    'Designer Gráfico',
    'Branding',
    'Identidade Visual',
    'UI UX Design',
    'Designer Freelancer',
    'Design de Marcas',
    'Portfólio de Design',
    'Designer São José dos Campos',
  ],

  authors: [{ name: 'Gustavo Fisner' }],
  creator: 'Gustavo Fisner',
  publisher: 'Gustavo Fisner',

  openGraph: {
    title: 'Gustavo Fisner | Branding, Identidade Visual & UI/UX',
    description:
      'Portfólio de Gustavo Fisner — Designer especializado em branding, identidade visual e UI/UX. Projetos estratégicos com estética, clareza e propósito.',
    url: 'https://fisner-design.vercel.app', // 🔴 troque pelo domínio real
    siteName: 'Gustavo Fisner Design',
    images: [
      {
        url: '/LOGO-VERDE.png', // 🔴 imagem dentro de /public
        width: 1200,
        height: 630,
        alt: 'Gustavo Fisner — Designer Gráfico e UI/UX',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Fisner | Designer & Branding',
    description:
      'Designer especializado em branding, identidade visual e UI/UX. Veja projetos e entre em contato.',
    images: ['/LOGO-VERDE.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function Page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  )
}
