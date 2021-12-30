import React from 'react'

export default function CommonFooter({ version = '' }: { version?: string }) {
  return (
    <footer>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </footer>
  )
}
