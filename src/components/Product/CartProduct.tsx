import React, { useEffect, useState } from "react";
import { AddProductProps, ProductIC, RootState } from "../../lib/interfaces";
import { useDispatch } from "react-redux";
import Minus from "../../images/minus.svg";
import Plus from "../../images/plus.svg";
import { removeFromCart, updateProductQuantity } from "../../store/userSlice";
import { useSelector } from "react-redux";

const CartProduct = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<ProductIC | null>(null);
  const cartState = useSelector((state: RootState) => state.user.cart);

  useEffect(() => {
    const prod = cartState?.find((product) => product.id === id) as ProductIC;
    setProduct(prod);
  }, [id, cartState]);

  const dispatch = useDispatch();

  const reduceQuantity = () => {
    const currentQ = product?.quantity ?? 0;
    if (currentQ <= 1 || product === undefined) return;

    const productUpdate = { ...product, quantity: currentQ - 1 } as ProductIC;
    dispatch(updateProductQuantity(productUpdate));
  };

  const increaseQuantity = () => {
    const currentQ = product?.quantity ?? 0;
    const productUpdate = { ...product, quantity: currentQ + 1 } as ProductIC;
    dispatch(updateProductQuantity(productUpdate));
  };

  const removeProduct = () => {
    if (product !== null) dispatch(removeFromCart(product));
  };

  const getDiscountedPrice = (product: ProductIC) => {
    return product.price - (product.price * product.discount) / 100;
  };

  return (
    <div>
      {product ? (
        <div className="CartProduct">
          <div className="flex">
            <img
              className="mr-4"
              src={process.env.PUBLIC_URL + product?.imagePath}
              alt={product?.title}
              height={143}
              width={143}
            />
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col justify-between items-start">
                <div>
                  <div className="text-[18px] font-['Arial'] font-bold leading-6">{product?.title}</div>
                  <div className="text-[15px]">{product?.netoWeight}</div>
                  <div className="md:hidden my-4">
                    <div className="flex flex-row">
                      <div className="text-2xl leading-7">{`${
                        product.discount === 0 ? product.price.toFixed(0) : getDiscountedPrice(product).toFixed(0)
                      }`}</div>
                      <div className="text-xs ml-1">RSD</div>
                    </div>
                    {product.discount !== 0 && (
                      <div className="flex flex-row">
                        <div className="text-base text-[#C94D00] leading-7 relative">
                          {`${product.discount !== 0 ? product.price.toFixed(0) : ""}`}
                          <span className="absolute bottom-[14px] left-0 w-full h-[0.1px] bg-[#C94D00]"></span>
                        </div>
                        <div className="text-xs text-[#C94D00] ml-1">RSD</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[87px] bg-white rounded-[100px] px-2 py-1 flex flex-row items-center border border-[#000]">
                    <div className="cursor-pointer" onClick={() => reduceQuantity()}>
                      <img src={Minus} alt="minus icon" />
                    </div>
                    <div className="mx-3 w-4 text-center">{product?.quantity}</div>
                    <div className="cursor-pointer" onClick={() => increaseQuantity()}>
                      <img src={Plus} alt="plus icon" />
                    </div>
                  </div>
                  <div className="ml-4 cursor-pointer" onClick={removeProduct}>
                    <span className="relative text-base">
                      Ukloni
                      <span className="absolute bottom-[-3px] left-0 w-full h-[0.1px] bg-black"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:ml-3 hidden md:block">
                <div className="flex flex-row">
                  <div className="text-2xl leading-7">{`${
                    product.discount === 0 ? product.price.toFixed(0) : getDiscountedPrice(product).toFixed(0)
                  }`}</div>
                  <div className="text-xs ml-1">RSD</div>
                </div>
                {product.discount !== 0 && (
                  <div className="flex flex-row">
                    <div className="text-base text-[#C94D00] leading-7 relative">
                      {`${product.discount !== 0 ? product.price.toFixed(0) : ""}`}
                      <span className="absolute bottom-[14px] left-0 w-full h-[0.1px] bg-[#C94D00]"></span>
                    </div>
                    <div className="text-xs text-[#C94D00] ml-1">RSD</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No product</div>
      )}
    </div>
  );
};

export default CartProduct;
