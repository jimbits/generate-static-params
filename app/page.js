import {PageHeader} from "./components/header/PageHeader"
import { Employee } from "./employees/Employee"

import {getEmployees} from './lib/filepath.js'

export default async function Home() {
     const employees = await getEmployees()
  return (
    <>
    <PageHeader title="Learning NEXT.js" tagline="server components"/>
    <main className="text-center my-3">
        <section>
        <header>
          <h2 className="text-4xl mt-12">Display All Employees From Local File</h2>
        </header>
     
          {employees.map(employee => <Employee  {...employee}/>)}
     
        </section>
    </main>
    </>
  )
}
