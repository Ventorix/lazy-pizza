import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { pizzaId, name, quantity, totalPrice } = item;

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="xs:flex xs:items-center xs:justify-between py-3">
      <p className="">
        {quantity}&times; {name}
      </p>
      <div className="xs:gap-6 flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <Button type={"small"} onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
