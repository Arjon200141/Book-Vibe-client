import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../hooks/axiossecure";
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    return (
        <div className="mx-20">
            <h2 className="text-5xl font-semibold text-center my-8">My Shopping Cart</h2>
            <div className="flex justify-between">
                <div>
                    <div className="divider"></div>
                    {
                        cart.map((cartitem) => <div key={cartitem._id}>
                            <div className="flex justify-between items-center px-16">
                                <div className="space-y-2 text-xl flex-1">
                                    <h2 className="text-3xl font-semibold">Book Name : {cartitem.bookName}</h2>
                                    <h2><span className="font-semibold">Author Name : </span>{cartitem.author}</h2>
                                    <p><span className="font-semibold">Category : </span>{cartitem.category}</p>
                                    <p><span className="font-semibold">Price :</span> {cartitem.price} $ </p>
                                    <button className="btn px-4 py-0 ml-0 font-semibold text-lg rounded-xl bg-red-100 flex items-center gap-2">Remove from Cart <MdOutlineDelete /></button>
                                </div>
                                <div className="">
                                    <img src={cartitem.image} alt="" className="h-40" />
                                </div>

                            </div>
                            <div className="divider"></div>
                        </div>)
                    }
                </div>
                <div className="border-2 border-black text-xl mt-6 h-96 space-y-3">
                    <h2 className="text-3xl font-semibold border-2 border-black px-12 py-4 mb-8 text-center">Order Summary</h2>
                    <p className="px-4 "><span className="font-semibold">E-Mail : </span>{user.email}</p>
                    <p className="px-4 "><span className="font-semibold">Total Items : </span>{cart.length}</p>
                    <p className="px-4 pb-2"><span className="font-semibold">Amount to Pay : {totalPrice} $</span></p>
                    <div className="divider px-4"></div>
                    <div className="px-4">
                        <button className="btn bg-blue-300 text-xl font-semibold w-full mt-4">
                            Proceed to CheckOut
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;