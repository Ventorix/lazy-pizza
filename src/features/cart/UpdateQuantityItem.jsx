import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaceItemQuantity, increaceItemQuantity } from "./cartSlice";

function UpdateQuantityItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaceItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-md font-semibold xl:text-xl">
        {currentQuantity}
      </span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaceItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
