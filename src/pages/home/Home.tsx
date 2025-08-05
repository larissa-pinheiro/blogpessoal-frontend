function Home() {
  return (
    <div className="bg-indigo-900 h-[78.8vh] flex justify-center overflow-hidden">
      <div className='container grid grid-cols-2 text-white'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bold'>
            Seja Bem Vindo!
          </h2>
          <p className='text-xl'>
            Expresse aqui seus pensamentos e opniões
          </p>

          <div className="mt-4">
            <button className='rounded text-white border-2 border-white py-3 px-6 hover:bg-indigo-700 transition duration-300 text-lg font-semibold cursor-pointer'>
              Nova Postagem
            </button>
          </div>
        </div>

        <div className="flex justify-center ">
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Página Home"
            className='w-3/4 object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Home