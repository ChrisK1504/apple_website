import {appleImg} from "../utils"
const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="Apple" width={14}
            height={18} />

            <div>
                {['Phones','MacBooks','Tablets'].map(
                    (nav, i) => (
                        <div>
                            {nav}
                        </div>
                    )
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar