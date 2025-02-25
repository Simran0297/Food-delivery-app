export const FoodCard =(props) =>{
    const {foodData} = props;
    const {name,price,imageId,category,defaultPrice} = foodData;
    

    return (
        <div className="food-card">
            <div className="food-details">
                <h3>{name}</h3>
                <h3>{category}</h3>
            </div>
            <h4>Special Price :- Rs. {price/100 || defaultPrice/100}</h4>

        </div>
    )

}