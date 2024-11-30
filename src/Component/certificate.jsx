import React from 'react'
import pdf from './pdf/Academic_Award.pdf'

const certificate = () => {
  return (
    <>
    <div>
         <h1>Certificated/Awards</h1>
       <a href={"pdf/Academic_Award"} download='Acedamic.pdf' className="btn btn-outline-warning">Download Certificate</a>
    </div>
    </>
  )
}

export default certificate;
