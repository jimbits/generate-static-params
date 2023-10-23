import { getEmployees } from "@/app/lib/filepath"; 
import {Employee as Card} from '@/app/employees/Employee'


async function getEmployee (params){
    const employees = await getEmployees()
    const employee =  employees.find(employee=> employee.uid == params.id)
    return employee
}

 async function Employee ({params}) {

    const employee = await getEmployee(params)
 
   
  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-5xl text-slate-900">Employee Page Component </h2>
        <p>pages created at build time</p>
      </header>
      <main className=" min-h-screen py-24">
         
            <Card {...employee}/>
      
      </main>
  
     
    </>
  );
}
export default Employee

export async function generateStaticParams() {
   
    const employees = await getEmployees()
    const paths =  employees.map(employee=> {id:employee.uid})
    return paths
  }
