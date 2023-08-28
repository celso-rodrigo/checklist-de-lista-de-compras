function EditMenu() {
  return (
    <div
      className="flex flex-col absolute bg-gray-300 top-1/2 right-0 translate-x-20
      font-bold rounded-md"
    >
      <button
        className="py-2 px-4 transition-all rounded-tl-md rounded-tr-md text-gray-100
        hover:bg-gray-100 hover:text-gray-300"
        type="button"
        onClick={() => console.log("WIP")}
      >
        Editar
      </button>
      <button
        className="py-2 px-4 text-purple-light hover:bg-gray-100 transition-all
        rounded-bl-md rounded-br-md hover:text-purple"
        type="button"
        onClick={() => console.log("WIP")}
      >
        Excluir
      </button>
    </div>
  )
}

export default EditMenu