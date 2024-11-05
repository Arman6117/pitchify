import Form from 'next/form'
import SearchFormReset from './search-form-reset'
import { Search } from 'lucide-react'

const SearchForm = ({query}: {query?:string}) => {
  return (
    <Form action={'/'} scroll={false} className='search-form'>
        <input 
        name="query"
        placeholder='Search a Startup'
        className='search-input'
        defaultValue={query}
        />
   <div className='flex gap-2'>
    {query && <SearchFormReset/>}
    <button className='search-btn text-white'>
        <Search className='size-5'/>
    </button>
   </div>
    </Form>
  )
}

export default SearchForm