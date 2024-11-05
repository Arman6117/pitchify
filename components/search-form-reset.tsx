'use client'

import { X } from "lucide-react"
import Link from "next/link"

const SearchFormReset = () => {
  const reset =async () => {
    const form = document.querySelector('.search-form') as HTMLFormElement
    if(form) form.reset()
  }
  return (
    <button className="search-btn" onClick={reset}>
      <Link href="/"><X className="size-5 text-white"/></Link>
    </button>
  )
}

export default SearchFormReset