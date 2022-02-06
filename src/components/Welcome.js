import React from 'react'

const Welcome = () => {
  return (
    <div>
        
      
    </div>
  )
}

export default Welcome

import propTypes from 'prop-types'


const name = 'David'


const Welcome = ({name, dodo}) => {
    return (
        <div>
            Welcome, {name} + {dodo}
        </div>
    )
}
Welcome.defaultProps = {
    name: 0
}
Welcome.propTypes = {
    name: propTypes.string
}

export {Welcome} 

export let firstName = 'Yossefi';
