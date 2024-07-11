import React from "react";

const Header:React.FC = ()=> {
    return (
        <div className="p-4 bg-white shadow-md flex justify-between items-center">
            <span className="text-lg font-bold">Checkout</span>
            <span className="text-sm text-gray"> POPEYES | JP NAGAR</span>
        </div>
    );
};

export default Header;