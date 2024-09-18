import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTINg_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        console.log(imageFile);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log('with image url', res.data);
        if (res.data.success) {
            //now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.display_url,
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data?.name} data added to the Menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div>
            <SectionTitle heading="Add Items" subHeading="Whats a New?" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name★</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />
                    </label>
                    {/* category and price */}
                    <div className="flex items-center gap-4">
                        {/* category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Select a Category★</span>
                            </div>
                            <select defaultValue={'default'} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={'default'}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price★</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details★</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Details"></textarea>
                    </label>

                    {/*  */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add Recipe Img★</span>
                        </div>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full" />
                    </label>

                    <div className="text-center">
                        <button type="submit" className="btn px-10 text-white text-lg  bg-gradient-to-r from-green-400 to-blue-500">
                            <FaUtensils /> Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;