import { Button } from "../components";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartDishes = useSelector((state) => state.cart.dishes);

  const totalPrice = cartDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0,
  );

  return (
    <section className="min-h-screen bg-(--bg) px-4 py-8 text-(--text) sm:px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* ================= Heading ================= */}
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            Your Order
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
            Review your delicious items before placing your order.
          </p>
        </div>

        {/* ================= Main Content ================= */}
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          {/* ================= Cart Items ================= */}
          <div className="h-96 w-full overflow-y-auto space-y-4 rounded-2xl border border-(--border) bg-(--surface) p-4 shadow-sm sm:h-80 sm:p-5">
            {cartDishes.map((cartDish) => (
              <div
                key={cartDish.id}
                className="group flex flex-wrap items-center gap-3 rounded-2xl border border-(--border) bg-(--bg) p-3 shadow-sm transition-all duration-200
                hover:border-(--primary)/40 hover:shadow-md
                sm:flex-nowrap sm:gap-4 sm:p-4 "
              >
                {/* ================= Image ================= */}
                <div className="relative shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={cartDish.image}
                    alt={cartDish.name}
                    className=" h-20 w-20 object-cover
                    transition-transform duration-300 group-hover:scale-105
                    sm:h-24 sm:w-24
                  "
                  />
                </div>

                {/* ================= Name + Price ================= */}
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-semibold sm:text-lg">
                    {cartDish.name}
                  </h2>

                  <p className="mt-1 line-clamp-1 text-xs text-(--muted) sm:text-sm">
                    {cartDish.description}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-(--primary)">
                    Rs. {cartDish.price}
                    <span className="ml-1 text-xs font-normal text-(--muted)">
                      each
                    </span>
                  </p>
                </div>

                {/* ================= Quantity ================= */}
                <div
                  className="flex shrink-0 items-center   overflow-hidden rounded-lg border 
                  border-(--border) bg-(--surface)
                "
                >
                  <button
                    onClick={() => dispatch(decreaseQuantity(cartDish.id))}
                    className=" flex h-8 w-8 items-center justify-center text-lg text-(--muted)  transition-colors hover:bg-(--primary)/10   hover:text-(--primary)
                  "
                  >
                    −
                  </button>

                  <span className="flex h-8 min-w-8 items-center justify-center border-x border-(--border) px-2 text-sm font-semibold">
                    {cartDish.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQuantity(cartDish.id))}
                    className="flex h-8 w-8 items-center justify-center text-lg text-(--muted)
                    transition-colors hover:bg-(--primary)/10
                    hover:text-(--primary) "
                  >
                    +
                  </button>
                </div>

                {/* ================= Remove + Total ================= */}
                <div
                  className="flex w-full items-center justify-between px-2 sm:w-auto sm:shrink-0  sm:flex-col sm:items-end sm:gap-2 sm:px-0
                "
                >
                  <button
                    onClick={() => dispatch(removeFromCart(cartDish.id))}
                    aria-label={`Remove ${cartDish.name}`}
                    title="Remove"
                    className=" order-2 flex h-8 w-8 items-center justify-center rounded-lg text-red-400 transition-all duration-200 hover:bg-red-400/10 hover:text-red-500 active:scale-90 sm:order-1 "
                  >
                    <Trash2 size={17} strokeWidth={1.8} />
                  </button>

                  <div className="order-1 text-right sm:order-2">
                    <p className="text-[10px] uppercase tracking-wider text-(--muted)">
                      Total
                    </p>

                    <span className="text-sm font-bold text-(--primary)">
                      Rs. {cartDish.price * cartDish.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* ================= More Dish ================= */}
            {cartDishes.length < 2 && cartDishes.length > 0 && (
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <p className="text-sm font-medium">Want something more?</p>

                <Button
                  onClick={() => navigate("/menu")}
                  className=" mt-2 rounded-lg bg-(--primary)
                  px-4 py-1.5 text-xs font-medium text-white
                  transition-all hover:opacity-90 active:scale-95"
                >
                  Explore Menu →
                </Button>
              </div>
            )}

            {/* ================= Empty Cart ================= */}
            {cartDishes.length < 1 && (
              <div className="flex h-full min-h-65 flex-col items-center justify-center text-center">
                <div
                  className=" flex h-16 w-16 items-center justify-center rounded-full bg-(--primary)/10
                  text-2xl "
                >
                  🛒
                </div>

                <h2 className="mt-4 text-xl font-semibold">
                  Your cart is empty
                </h2>

                <p className="mt-1 max-w-xs text-sm text-(--muted)">
                  Looks like you haven't added anything yet. Let's find
                  something delicious.
                </p>

                <Button
                  className=" mt-5 rounded-lg bg-(--primary)
                  px-5 py-2 text-sm font-medium text-white
                  shadow-sm transition-all hover:opacity-90
                  active:scale-95"
                  onClick={() => navigate("/menu")}
                >
                  Explore Menu →
                </Button>
              </div>
            )}
          </div>

          {/* ================= Order Summary ================= */}
          <div
            className=" h-fit rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-sm
            lg:sticky lg:top-20 "
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Order Summary</h2>

              <span className="rounded-full bg-(--primary)/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--primary)">
                Order
              </span>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6 space-y-3 border-b border-(--border) pb-5">
              <div className="flex justify-between text-sm">
                <span className="text-(--muted)">Subtotal</span>

                <span className="font-medium">Rs. {totalPrice}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-(--muted)">Delivery</span>

                <span className="font-medium">Rs. 0</span>
              </div>
            </div>

            {/* Total */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>

              <span className="text-xl font-bold text-(--primary)">
                Rs. {totalPrice}
              </span>
            </div>

            {/* Checkout */}
            <Button
              className=" mt-6 w-full  rounded-xl  bg-(--primary)  py-3  text-sm font-semibold text-white shadow-sm transition-all duration-200
              hover:-translate-y-0.5 hover:opacity-90
              hover:shadow-md active:translate-y-0
              active:scale-[0.98]"
            >
              Proceed to Checkout
            </Button>

            <p className="mt-4 text-center text-xs text-(--muted)">
              Your delicious food is just one step away 🍽️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
