import Image from 'next/image';
import Link from 'next/link';
const ProductNotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded bg-white p-10 text-center shadow-md">
        <h1 className="mb-4 text-5xl font-bold text-red-500">Producto No Encontrado</h1>
        <p className="mb-4 text-lg">Lo sentimos, el producto que estás buscando no existe.</p>
        <Image
          src="/product-not-found.jpeg"
          alt="Explorador Perdido"
          width={400}
          height={300}
          className="h-auto w-auto"
        />
        <Link href="/products" className="inline-block rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-700">
          Volver a los Productos
        </Link>
      </div>
    </div>
  );
};

export default ProductNotFound;
