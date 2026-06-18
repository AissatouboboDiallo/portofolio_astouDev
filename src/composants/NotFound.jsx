import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
      Page not found 🤖
      <Link to={'/'} state={{text : "State"}} className='py-4'>
      Retour à l'acceuil
      </Link>
    </div>
  )
}
