import React, { useEffect} from 'react'; 
import Cookies from 'js-cookie'
import Main from '../Main'

function AuthenticationPage() {
 
  
  return (
   <> 
   <div className = ' w-full h-screen'>
        {Cookies.get('token') ? ( 
            <Main/>
        ):
        
         window.location.href = '/'}
    </div>
    
   </>
  )
}

export default AuthenticationPage