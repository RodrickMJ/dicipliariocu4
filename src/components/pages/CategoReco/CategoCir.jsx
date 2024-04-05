import React from 'react'
import './categoCir.css'
import { CatergoriasRecom } from '../../../utils/CategoriasRecom'
import { settings } from '../../../utils/CategoriasRecom'
import CadCate from '../../ui/cadCate/CadCate'
import Slider from "react-slick";

function CategoCir() {

    return (
        <>
            <div className='contsliremon'>
                <div className="sltc">
                    <Slider {...settings}>
                        {CatergoriasRecom.map((catego) => (
                            <div key={catego.id}>
                                <CadCate customClass="sugcatho"
                                    srcimg={catego.refImag}
                                    dateuser={catego.destin}
                                    titleprenda={catego.prenda} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CategoCir