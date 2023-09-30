import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="xs:flex xs:items-center xs:justify-between py-3">
      <p className="">
        {quantity}&times; {name}
      </p>
      <div className="xs:gap-6 flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <Button type={"small"}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
