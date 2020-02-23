import React, { useRef, useEffect, useCallback } from 'react'
import t from 'prop-types'

export default function Close ({ handleClose, children }) {
  const container = useRef()

  const handleClick = useCallback((e) => {
    if (container.current.contains(e.target)) return

    handleClose && handleClose()
  }, [handleClose])

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => document.removeEventListener('mousedown', handleClick)
  }, [handleClick])

  return (
    <div ref={container}>
      {children}
    </div>
  )
}

Close.propTypes = {
  handleClose: t.func.isRequired,
  children: t.node.isRequired
}
