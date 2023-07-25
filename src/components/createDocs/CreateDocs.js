import React from 'react'
import "./CreateDocs.css"
const CreateDocs = () => {
    return (
        <div className='body'>
            <div className='heading'>
                <h2 className='title'>Start a new Document</h2>
            </div>
            <div>
                <div className='create-doc'>
                   <img src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png' alt='image' />

                </div>
                <p className='blank'>Blank</p>
            </div>
        </div>
    )
}

export default CreateDocs