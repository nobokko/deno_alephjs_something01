import React, { FC } from 'react'
import { useDeno } from 'aleph/react'
import CommonFooter from '~/components/footer.tsx'
import Clock from '~/components/clock.tsx'

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="./style/common.css" />
      </head>
      <Clock />
      <Page {...pageProps} />
      <CommonFooter version={useDeno(() => Deno.version.deno)} />
    </main>
  )
}
