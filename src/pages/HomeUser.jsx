import EmplooyeForm from "../components/EmplooyeForm"
import Main from "../components/Main"
import Search from "../components/Search"
import { useFilter, useSetFilterData } from "../UseProvider"


const HomeUser = () => {
    const setFilter = useSetFilterData()
    const statusFilter = useFilter()
    const handleFilter = () => {
        setFilter(!statusFilter)

    }
    return (
        <div className=" w-full min-h-[86.7vh] ">
            <Search />
            <div className="w-full px-5 max-w-[1024px] ">
                <i onClick={handleFilter} className='bx bx-filter text-4xl cursor-pointer'></i>
            </div>
            <EmplooyeForm />
            <Main />
        </div>
    )
}

export default HomeUser