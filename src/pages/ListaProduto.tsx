import CardProduct from "../components/cards/CardProduct"

function ListaProduto() {
  return (
    <>
      <div className="grid grid-cols-5 place-items-center gap-10 w-auto p-5">
        <CardProduct
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
        <CardProduct
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
        <CardProduct
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
        <CardProduct
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
        <CardProduct
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cumque, perferendis quidem recusandae minima dolores quam atque soluta et nostrum fuga aliquid dicta sed voluptatem libero dignissimos ut, qui numquam!</p>
      </div>
    </>
  )
}

export default ListaProduto