import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg mb-2">Desculpe, ocorreu um erro inesperado.</p>
      <p className="italic text-gray-600">
        {error.statusText || error.message}
      </p>
      <p className="mt-4">Volte a<Link href={"/"}>
        <button className="bg-sky-300 text-white mx-2 px-3 py-2 rounded-2xl cursor-pointer hover:bg-sky-500">Pagina Inicial</button></Link></p>
    </div>
  );
}
