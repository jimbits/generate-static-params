import Image from "next/image" 
 
 function EmployeeCard ( {fullname, profileImage, uid}){
    return (
       
           <aside>
           <h2>{fullname}</h2>

     
      
      <Image
      src={ `/${profileImage}`}
      width={200}
      height={200}
      alt={`employee ${fullname} profile link `}
      />

           </aside>
 
    )
 }



 export {EmployeeCard}