import logo from '../../img/image 1.svg'
import './styles.css'

import './styles.css'

function Header() {

    return (
        <header>
            <div className='dsmeta-logo-container'>
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>

                    Desenvolvido por
                    <a href="https://github.com/PauloEd-hub">@Paulo</a>
                </p>
            </div>

        </header>


    )

}

export default Header