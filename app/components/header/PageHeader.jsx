 function PageHeader ( {title, tagline, className}){
    return (
        <header className={`text-center pt-16 ${className}`}>
            <h1 className="text-5xl text-slate-600">{title || "Page Title"}</h1>
            <p>{tagline || "Page Tagline"}</p>
        </header>

 
    )
 }



 export {PageHeader}