import {Link} from 'react-router-dom';
import React from 'react'

const ChooseUser = () => {
  return (
    <div className='ChooseUserContainer'>
     <div>
        <h2>Admin</h2>
        <Link to='/admin-signIn' ><button>Login as Admin</button></Link>
     </div>
     <div>
        <h2>Judge</h2>
       <Link to="/judge-signIn"> <button >Login as Judges</button></Link>
     </div>
    
    </div>
  )
}

export default ChooseUser;
