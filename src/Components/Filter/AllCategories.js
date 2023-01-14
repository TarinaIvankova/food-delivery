import Filter from "./Filter"

const AllCategories=()=>{
    return(<div>
        <h1>КАКУЮ ЕДУ ПРЕДПОЧИТАЕТЕ?</h1>
        <div className="categories">
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map (category=> <Filter category={category}/>)}
        </div>
    </div>)
}
export default AllCategories