import { useDispatch } from "react-redux";
import { decreaceItemQuantity, increaceItemQuantity } from "./cartSlice";
import Button from "../../ui/Button";

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

      <span className={"text-md min-w-[20px] text-center font-semibold"}>
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
