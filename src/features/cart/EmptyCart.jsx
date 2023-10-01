import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-16 text-center font-semibold xl:mt-64">
        Your cart is still empty. Back to menu and start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
