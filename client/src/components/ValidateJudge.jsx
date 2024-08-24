import React from 'react'
import JudgeList from './JudgeList'
import Sidebar from './Sidebar'

const ValidateJudge = () => {
  return (
    <div className='main-container'>
       <Sidebar/>
       <div className='analytics-container'>
        
      <JudgeList Name='Jiya' email='Jiya@gmail.com'/>
      <JudgeList Name='Jiya' email='Jiya@gmail.com' />
      <JudgeList Name='Jiya' email='Jiya@gmail.com' />
      </div>
      </div>
   
  )
}

export default ValidateJudge
