import Image from "next/image" 
import Link from "next/link"
 function Employee ( {fullname, profileImage, uid}){
    return (
       <Link href={`/employee/${uid}`} className="text-left text-xl text-gray-800 mx-auto w-fit">
      
            <h2>{fullname}</h2>
      
            <Image
            src={ `/${profileImage}`}
            width={200}
            height={200}
            />
     
       </Link>
    )
 }



 export {Employee}