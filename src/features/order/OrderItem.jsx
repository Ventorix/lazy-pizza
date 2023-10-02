import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients, imageUrl }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-md border border-black sm:h-28 md:h-32`}
      />
      <div className="mt-0.5 flex grow flex-col gap-2">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
        </p>
      </div>
      <p className="font-bold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
