import React from 'react'
import Link from 'next/link'

const ButtonLink = ({id}) => {
  return (
    <Link className= ' rounded-lg bg-[#2FBBAA] max-w-[120px] border border-slate-300 py-2 px-3  hover:bg-[#1a6d63]' href={`/show/${id}`}>View Show</Link>
  )
}

export default ButtonLink