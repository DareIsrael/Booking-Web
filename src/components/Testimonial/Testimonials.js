import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava01.jpeg'
import ava02 from '../../assets/images/ava02.jpeg'
import ava03 from '../../assets/images/ava03.jpeg'
import ava04 from '../../assets/images/ava04.jpeg'
import ava05 from '../../assets/images/ava05.jpeg'
import ava06 from '../../assets/images/ava06.jpeg'
import ava07 from '../../assets/images/ava07.jpeg'
import Subtitle from '../../shared/Subtitle'


const Testimonials = () => {


  const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipetpSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]


  }

  return (
    <section>
    <Subtitle subtitle={"Traveller's comments"} />
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
      <p>
      "My journey from Lagos to Togo with your service was exceptional!
      The bus was comfortable, the scenery breathtaking, and the staff
      were incredibly friendly. I'll definitely be booking with you again for my next adventure!"
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava05} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>Sara. D</h6>
        <p>Lagos to Togo Traveler:</p>
       </div>
      </div>

      </div>

      <div className='testimonial py-4 px-3'>
      <p>
      "Traveling from Lagos to Accra was a breeze thanks
       to your reliable service. The bus was clean, the journey smooth,
        and I arrived at my destination feeling refreshed and ready to explore. 
        Highly recommended!"
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>Michael K.</h6>
        <p>Accra Explorer:</p>
       </div>
      </div>

      </div>


      <div className='testimonial py-4 px-3'>
      <p>
      "Our family vacation to Ghana was made even more memorable thanks 
      to your excellent service. The kids loved the onboard entertainment,
       and my husband and I appreciated the peace of mind knowing that we were in safe hands.
       We'll definitely be back for our next family adventure!"
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava06} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>Margaret.</h6>
        <p>Family Vacation to Ghana:</p>
       </div>
      </div>

      </div>

      <div className='testimonial py-4 px-3'>
      <p>
      "As a frequent traveler for business, I rely on your service 
      to get me to my destinations on time and in comfort. 
      The professionalism of your staff and the efficiency of your booking 
      process never cease to impress me. 
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava04} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>James M. </h6>
        <p>Business Trip Success:</p>
       </div>
      </div>

      </div>

      <div className='testimonial py-4 px-3'>
      <p>
      "Traveling solo from Lagos to Togo was a breeze with your service.
       The bus was clean and comfortable, and the journey was punctual and smooth. 
       I felt safe and well taken care of throughout the entire trip. 
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava07} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>Aisha B. </h6>
        <p>Solo Traveler's Delight:</p>
       </div>
      </div>

      </div>

      <div className='testimonial py-4 px-3'>
      <p>
      "I'm always on the lookout for new adventures, 
      and traveling with your service exceeded my expectations. 
      From the moment I boarded the bus to my arrival in Cotonou, 
      every aspect of the journey was top-notch. 





      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
       <div>
        <h6 className='mb-0 mt-3'>Adventurous Explorer</h6>
        <p>Daniel F. </p>
       </div>
      </div>

      </div>

      
    </Slider>
    </section>
  )
}

export default Testimonials
