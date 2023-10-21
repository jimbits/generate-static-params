/* 
      framework imports

      lib imports node modules

      component imports

      styles
*/
 

import { NavBar } from './components/navigation/NavBar'

import './globals.css'
 

 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <body>
      <NavBar/>
     {children}
     </body>
    </html>
  )
}
