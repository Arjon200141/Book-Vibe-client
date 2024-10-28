import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/axiospublic";
import useAxiosSecure from "../hooks/axiossecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const { bookName, author, price, _id, image, publisher, category } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const book = useLoaderData();
    console.log("Book is", book);

    const onSubmit = async (data) => {
        try {
            const imageFile = data.image[0];
            let imageUrl = image;

            if (imageFile) {
                const formData = new FormData();
                formData.append("image", imageFile);

                const res = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        "content-type": 'multipart/form-data'
                    }
                });

                if (res.data.success) {
                    imageUrl = res.data.data.display_url;
                }
            }

            const productItem = {
                image: imageUrl,
                bookName: data.bookName,
                publisher: data.publisher,
                price: data.price,
                category: data.category,
                author: data.author,
            };

            const productres = await axiosSecure.patch(`/books/${_id}`, productItem);
            if (productres.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.productName} has been updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <div>

                <div className="bg-sky-300/25 rounded-xl p-3 py-12 px-32">
                    <h2 className="text-4xl mb-6 font-semibold text-center ">Update Details of : {book.bookName}</h2>
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="flex justify-between items-center gap-8 mb-2">
                            <div className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Book Name *</span>
                                </div>
                                <input defaultValue={bookName} type="text" {...register("productName")} placeholder="Product Name" className="input input-bordered w-full" />
                            </div>
                            
                            <div className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Author Name *</span>
                                </div>
                                <input defaultValue={author} type="text" {...register("companyName")} placeholder="Company Name" className=" input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <div className="form-control w-[495px]">
                                    <div className="label ">
                                        <span className="label-text text-lg font-semibold ">Category *</span>
                                    </div>
                                    <input defaultValue={category} type="text" {...register("warranty")} placeholder="Warranty" className="input input-bordered w-full" />
                                </div>
                            </div>

                            <div>
                                <div className="form-control w-[495px]">
                                    <div className="label">
                                        <span className="label-text text-lg font-semibold ">Price *</span>
                                    </div>
                                    <input defaultValue={price} type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div>
                                <div className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg font-semibold ">Book Image *</span>
                                    </div>
                                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />

                                </div>
                            </div>
                            <div className="pb-6">
                                <div className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg font-semibold ">Publisher *</span>
                                    </div>
                                    <input defaultValue={publisher} {...register("description")} placeholder="Product Description" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <button className="btn my-4 bg-sky-300 text-2xl font-semibold w-full">UPDATE BOOK</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;
