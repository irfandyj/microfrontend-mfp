import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    mount(ref.current, {
      onNavigate (location) {
        const { pathname: nextPathName } = location
        const { pathname: currentPathName } = history.location

        // To prevent infinite loop because of 2 way interaction
        // 1. Browser History -> Memory History
        // 2. Memory History -> Browser History
        if (currentPathName !== nextPathName) {
          console.log('Noticed navigation in Marketing')
          history.push(nextPathName)
        }
      }
    })
  })

  return <div ref={ref} />
}