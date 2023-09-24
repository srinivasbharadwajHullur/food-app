import React from 'react'

const ButtonList = ({buttons,onClick}) => {
  return (
    <div className='flex justify-evenly mt-3'>
        {buttons.map((button) => {
          return (
            <button key={button.label} onClick={() => onClick(button.filterFunction)} className='border mr-2 rounded-lg p-2'>
                {button.label}
            </button>
          )
        })}
    </div>
  )
}

export default ButtonList