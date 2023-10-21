import {PageHeader} from "./components/header/PageHeader"

import {filePath} from './lib/filepath.js'

export default function Home() {
  console.log(filePath)
  return (
    <>
    <PageHeader title="Learning NEXT.js" tagline="server components"/>
    <main className="text-center my-3">
        <header>
          <h2 className="text-xs">{filePath}</h2>
        </header>
    </main>
    </>
  )
}
