import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import { categories } from '../../constant/data'

const Slider = () => {
  return (
    <Carousel showThumbs={false}>
      {categories.map((category) => (
        <div key={category.title}>
          <img
            src={category.image}
            alt={category.title}
            className="md:h-[700px] h-[500px]"
          />
          <Link
            to={`/products/${category.title}`}
            className="legend capitalize"
          >
            {category.title}
          </Link>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider
