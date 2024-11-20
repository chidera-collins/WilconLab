import React, { useContext, useState } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

function ShopComponent2({ data = [] }) {
    const { addToCart } = useContext(CartContext);
    let allData = [...data];
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    if (options === 'rating') {
        allData.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else if (options === 'highest price') {
        allData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (options === 'lowest price') {
        allData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    const totalPages = Math.ceil(allData.length / productsPerPage);
    const lastIndex = Math.min(currentPage * productsPerPage, allData.length);
    const firstIndex = lastIndex - productsPerPage;
    const totalRecords = allData.slice(firstIndex, lastIndex);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="md:flex p-[20px] md:p-[30px] items-center justify-between">
                <div>
                    <h1>Showing {firstIndex + 1}-{lastIndex} of {data.length}</h1>
                </div>
                <div>
                    <span>Sort by:</span>
                    <select
                        className="max-w-36 select bg-bodybg text-boldtext font-custom font-bold text-[1rem]"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                    >
                        <option>New</option>
                        <option>rating</option>
                        <option>lowest price</option>
                        <option>highest price</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 p-[20px] lg:p-[30px] md:p-[15px]">
                {totalRecords.map((item, index) => (
                    <div key={index} className="card bg-base-100 w-90 shadow-xl group">
                        <figure className="px-5 pt-10">
                            <img
                                src={item.image}
                                alt={item.id}
                                className="relative group-hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                        </figure>
                        <div className="flex invisible group-hover:visible transition-transform duration-[10s] ease-in-out justify-center gap-3 absolute left-[30%] bottom-[25%] group-hover:bottom-[35%]">
                            <div
                                className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] cursor-pointer group-hover:bg-textc"
                                onClick={() => {addToCart(item);alert("added to cart")}}
                            >
                                <FaCartShopping className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                            </div>
                            <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] group-hover:bg-textc cursor-pointer">
                                <FaEye className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                            </div>
                            <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] group-hover:bg-textc cursor-pointer">
                                <MdFavoriteBorder className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">{item.id}</h2>
                            <span>{item.rating}</span>
                            <h2>${item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="join flex items-center justify-center">
                <button
                    className="join-item btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="join-item btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ShopComponent2;
