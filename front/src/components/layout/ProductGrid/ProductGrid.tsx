import React, { ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
}

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-3 my-5 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default ProductGrid;
