import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './Card/Card'


const Banner = () => {
  
    const mono=[
        {
            "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-one.png?raw=true"
        },
        {
            "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-two.jpg?raw=true"
        },
        {
            "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-three.jpg?raw=true"
        },
        {
            "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-four.jpg?raw=true"
        },
        {
            "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-five.png?raw=true"
        },
    ]
    
  return (
    <div className='parent'>
     <Carousel >
        {mono.map((item)=>{
            return (
                <div>
                    <Card image={item.imageurl}/>
                </div>
            )
        })}
     </Carousel>
    </div>
  )
}

export default Banner