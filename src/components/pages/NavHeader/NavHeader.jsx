import React from 'react'
import Buttons from '../../ui/buttons/Buttons'
import Inputs from '../../ui/input/Inputs'
import Images from '../../ui/images/Images'
import Titles from '../../ui/titles/Titles'
import Pharagraps from '../../ui/pharagraps/Pharagraps'

function NavHeader() {
    return (
        <>
            <div className='header-nav'>
                <div>
                    <div>
                        <Images src="#" />
                        <Inputs type="text" placeholder="Buscar" />
                    </div>

                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavHeader