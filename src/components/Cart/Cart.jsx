import React from "react";

const Cart = ({ cart ,remove}) => {
  let massage ;

  if(cart.length === 0){
    massage = <p> no card add </p>

  }
  return <div>
    <span className="text-2xl text-red-600 ">{massage}</span>
    cart {cart.length}
    {
      cart.map(cd => <p key = {cd._id}>
        {cd.name}
        <button className="mx-6" onClick={() => remove(cd._id)}>X</button>
        
        </p>)
    }
    </div>;
};

export default Cart;
