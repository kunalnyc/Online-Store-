import React from 'react'
import Link from 'next/link'


const HeroBanner = () => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">
                    Hey Nro wasub
                    {/* {heroBanners.smallText} */}
                </p>
            
                <div>
                    {/* <Link href={`/product/${heroBanners?.product}`}>
                        <button type="button">{heroBanners.buttonText}</button>
                    </Link> */}
                    <div className='desc'>
                        <h5>Description</h5>
                        {/* <p>{heroBanners.desc}</p> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner