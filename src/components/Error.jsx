const Error = ({mensaje}) => {
  return (
    <div className='bg-red-500 text-white font-bold rounded-md p-3 mb-3 text-center uppercase'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
