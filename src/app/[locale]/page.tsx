import type { Metadata } from 'next'
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
import { getDictionary } from '@/i18n'



/**
 * PAGE COM I18N
 */
export default function Page({
  params,
}: {
  params: { locale: string }
}) {
  const dict = getDictionary(params.locale)

  return (
    <Wrapper>
      <Home dict={dict} />
    </Wrapper>
  )
}
