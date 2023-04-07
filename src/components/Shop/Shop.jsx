import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Order from "../Order/Order";
import Cart from "../Cart/Cart";
import Loder from "../Loder/Loder";
import Swal from "sweetalert2";

const Shop = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loder></Loder>;
  }
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const eventButttonAdd = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      const newCart = [...cart, tshirt];
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      setCart(newCart);
    }
  };
  const remove = (id) => {
    const result = cart.filter (cd => cd._id !==id)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    setCart(result)
  };
  return (
    <div className="flex m-auto justify-around">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-9">
        {tshirts.map((shart) => (
          <Order
            kry={shart._id}
            shart={shart}
            eventButttonAdd={eventButttonAdd}
          ></Order>
        ))}
      </div>
      <div>
        <Cart 
        remove ={remove}
        cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
