import Image from "next/image" 
 
 function Employee ( {fullname, profileImage}){
    return (
       <aside>
        <header>
            <h2>EmployeeName</h2>
        </header>
        <div>
            <Image/>
        </div>
       </aside>
    )
 }



 export {Employee}