import { useDispatch } from "react-redux";
import { SWIGGY_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
export const ItemListing = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    console.log("here");
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between  "
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-purple-950">{item.card.info.name} :</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              {" "}
              <img
                className="w-full"
                src={SWIGGY_URL + item.card.info.imageId}
              ></img>
              <button
                className="px-2  bg-gray-100 shadow-lg   ml-10 -mt-6 rounded-2xl mx-5 "
                onClick={() => handleClick(item)}
              >
                Add+
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
