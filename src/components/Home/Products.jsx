import React from 'react';
import SingleProduct from './SingleProduct';
import image1 from "../../assets/cardProducts/pic1.png";
import image2 from "../../assets/cardProducts/pic2.jpg";
import image3 from "../../assets/cardProducts/pic3.jpg";
import image4 from "../../assets/cardProducts/pic4.jpg";
import image5 from "../../assets/cardProducts/pic5.jpg";
import { FaStar } from 'react-icons/fa6';

const Products = () => {
    const productData = [
        {
            id: 1,
            name: "Women Ethnic",
            image: image1,
            color: "white",
            rate: 4.5
        },
        {
            id: 2,
            name: "Women western",
            image: image5,
            color: "red",
            rate: 3.6
        },
        {
            id: 3,
            name: "Goggles",
            image: image3,
            color: "brown",
            rate: 2.0
        },
        {
            id: 4,
            name: "Printed T-Shirt",
            image: image4,
            color: "yellow",
            rate: 5.4
        },
        {
            id: 5,
            name: "Fashion T-Shirt",
            image: image2,
            color: "pink",
            rate: 7.6
        },
    ]
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top selling products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores</p>
                </div>

                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                        {/* Card section */}
                        {
                            productData.map((data) => (
                                <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img src={data.image} alt={data.name} className='h-[220px] w-full object-cover rounded-md mb-4' />
                                    <div>
                                        <h3 className='font-semibold text-lg'>{data.name}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1 mt-2'>
                                            <FaStar className='text-yellow-500' />
                                            <span>{data.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
