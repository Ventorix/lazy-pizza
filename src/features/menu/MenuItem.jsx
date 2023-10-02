import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentPizzaQuantityById } from "../cart/cartSlice";
import DeleteItemButton from "../cart/DeleteItemButton";
import UpdateQuantityItem from "../cart/UpdateQuantityItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentPizzaQuantity = useSelector(getCurrentPizzaQuantityById(id));
  const isInCart = currentPizzaQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex items-center gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-md sm:h-28 md:h-32 ${
          soldOut ? "opacity-75 grayscale" : ""
        }`}
      />

      <div className="mt-0.5 flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>

        <div className="mt-2 flex  items-center justify-between gap-2 sm:mt-4">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantityItem
                pizzaId={id}
                currentQuantity={currentPizzaQuantity}
              ></UpdateQuantityItem>
              <DeleteItemButton pizzaId={id}>Delete</DeleteItemButton>
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
