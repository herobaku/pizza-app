

function Footer() {
  const date = new Date()
  return (
    <footer className='bg-dark py-3 text-light'>
      <div className="text-center"> Copyright &copy; { date.getFullYear() } </div>
    </footer>
  )
}

export default Footer