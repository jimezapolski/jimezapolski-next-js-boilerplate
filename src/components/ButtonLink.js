import React from 'react'
import Link from 'next/link'

const ButtonLink = ({id}) => {
  return (
    <Link className='bg-neutral-400 max-w-[120px] border border-slate-300 py-2 px-3 rounded-3xl hover:bg-neutral-300' href={`/show/${id}`}>View Show</Link>
  )
}

export default ButtonLink