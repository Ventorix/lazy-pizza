import DeleteItemButton from "../cart/DeleteItemButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateQuantityItem from "./UpdateQuantityItem";
import { getCurrentPizzaQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentPizzaQuantity = useSelector(
    getCurrentPizzaQuantityById(pizzaId),
  );

  return (
    <li className="xs:flex xs:items-center xs:justify-between py-3">
      <p className="">
        {quantity}&times; {name}
      </p>

      <div className="xs:gap-6 flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityItem
          pizzaId={pizzaId}
          currentQuantity={currentPizzaQuantity}
        ></UpdateQuantityItem>
        <DeleteItemButton pizzaId={pizzaId}>Delete</DeleteItemButton>
      </div>
    </li>
  );
}

export default CartItem;
