import Image from 'next/image';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="my-4 flex min-h-screen items-center justify-center">
      <div className="rounded bg-white p-10 text-center shadow-md">
        <h1 className="mb-4 text-5xl font-bold text-red-500">Página No Encontrada</h1>
        <p className="mb-4 text-lg">Lo sentimos, la página que estás buscando no existe.</p>
        <Image src="/404.jpeg" alt="Explorador Perdido" width={400} height={300} className="h-auto w-auto" />
        <Link href="/" className="inline-block rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-700">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
