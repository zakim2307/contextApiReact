import React from 'react'
import './GlobalSpinner.css'
import { useGlobalSpinnerContext } from '../../context/GlobalSpinnerContext'

const GlobalSpinner = props => {
    const isGlobalSPinnerOn = useGlobalSpinnerContext()
    return isGlobalSPinnerOn ? (
        <div className="global-spinner-overlay">
            <p>Loading...</p>
        </div>
    ) : null
}

export default GlobalSpinner
