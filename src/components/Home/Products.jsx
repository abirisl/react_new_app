import React from 'react';
import SingleProduct from './SingleProduct';
import image1 from "../../assets/cardProducts/pic1.png";
import image2 from "../../assets/cardProducts/pic2.jpg";
import image3 from "../../assets/cardProducts/pic3.jpg";
import image4 from "../../assets/cardProducts/pic4.jpg";
import image5 from "../../assets/cardProducts/pic5.jpg";
import { FaStar } from 'react-icons/fa6';

const Products = () => {
    const productData =[
        {
            id: 1,
            name: "Women Ethnic",
            image:image1,
            color:"white",
            rate: 4.5
        },
        {
            id: 2,
            name: "Women western",
            image:image5,
            color:"red",
            rate: 3.6
        },
        {
            id: 3,
            name: "Goggles",
            image:image3,
            color:"brown",
            rate: 2.0
        },
        {
            id: 4,
            name: "Printed T-Shirt",
            image:image4,
            color:"yellow",
            rate: 5.4
        },
        {
            id: 5,
            name: "Fashion T-Shirt",
            image:image2,
            color:"pink",
            rate: 7.6
        },
    ]
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 mx-w-[600px] mx-auto'>
                        <p data-aos="fade-up" className='text-sm text-primary'>Top selling product for you</p>
                        <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                        <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores </p>
                </div>
                {/* body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place item-center gap-5'>
                        {/* card section */}
                        {
                            productData.map((data)=>(
                                <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                                    <img src={data.image} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                                    <div>
                                        <h3 className='font-semibold'>{data.name}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-500'/>
                                            <span>{data.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <h1 className='my-10 font-bold text-4xl text-center'>our products</h1>
            <div className='flex justify-center gap-5 my-5'>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div> */}
        </div>
    );
};

export default Products;