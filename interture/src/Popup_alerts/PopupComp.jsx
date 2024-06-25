import "./popup.css";
import Swal from "sweetalert2";

function PopupComp() {
  return (
    <div className="pop-up-container">
      <button className="error">Create Acount</button>
      <button className="success">Create</button>
    </div>
  );
}

export const handleLoginErrorClick = () => {
  Swal.fire({
    title: "Please try again.",
    text: "The information you entered is incorrect or missing.",
    icon: "error",
    confirmButtonText: "Try again",
    confirmButtonColor: "#546a5e",
  });
};
export const handleLoginSuccessClick = () => {
  Swal.fire({
    title: "Welcome!",
    text: "Account logged in.",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#546a5e",
  });
};

export const handleAddToCart = () => {
  Swal.fire({
    title: "Success!",
    text: "Item added to your cart!",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#546a5e",
  });
};

export const handleBuyNow = () => {
  Swal.fire({
    title: "Success!",
    text: "You have brought this item!",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#546a5e",
  });
};

export const handleCheckOut = () => {
  Swal.fire({
    title: "Success!",
    text: "Order Confirmed",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#546a5e",
  });
};

export const popUpDescription = () => {
  Swal.fire({
    // imageUrl: '',
    title: "palita ko",
    text: "object",
    // icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#546a5e",
  });
};

export default PopupComp;
