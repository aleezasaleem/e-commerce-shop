"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

const ShoppingCartModel = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]  border-white ">
        <SheetHeader>
          <SheetTitle className="">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className=" py-6">You do not have any item</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6 ">
                      <div className=" h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="photo"
                          width={100}
                          height={100}
                        />
                      </div>
                      {/*  */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="">{entry.name}</h3>
                            <p className=" ml-4">${entry.price}</p>
                          </div>
                          <p className=" mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        {/*  */}
                        <div className="flex flex-1  items-end justify-between text-sm">
                          <p className="text-white">QTY :{entry.quantity}</p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          {/*  */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout
            </p>
            {/*  */}
            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>
            {/*  */}
            <div className="mt-6 flex justify-center text-center text-sm text-gray-900">
              <p>
                OR{" "}
                <button
                  className="font-bold text-primary hover:text-primary/80"
                  onClick={() => handleCartClick()}
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModel;