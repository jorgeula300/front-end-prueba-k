import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useSearch } from '../UseProvider'


const Search = () => {
    const search = useSearch()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const onSubmit = data => search(watch("search"))
    let actisearch = watch("search")
    useEffect(() => {
        search(watch("search"))
    }, [actisearch])

    return (
        <div className=' mt-2 mb-5 px-2'>
            <form className=' w-flex flex justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Search' className=' border bordr px-2 rounded-l-xl border-r-0 w-full max-w-[500px] h-[40px] border-gray-500' {...register("search", {
                    required: true,
                    pattern: {
                        message: "This field is required"
                    }
                })} />
                <button className='border px-2 border-l-0 rounded-r-xl h-[40px] border-gray-500'><i className='bx bx-search-alt'></i></button>
            </form>

        </div>
    )
}

export default Search