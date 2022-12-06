import { useState } from 'react';
import banner from '../assets/img/image-custom-social-account.png';
import CloseIcon from '../assets/img/svg/icons/Close';

export default function Banner() {
  const [closeBanner, setCloseBanner] = useState(false)

  return (
    <section className={closeBanner ? 'hidden' : 'ml-0 mr-0 lg:mx-auto px-6 lg:px-12 pt-8 lg:pt-12'}>
      <article className='bg-white rounded-general-radius relative'>
        <div className='block md:flex items-center justify-between px-12'>
          <div className='md:w-full lg:w-1/3'>
            <div className='block py-6'>
              <h1 className='text-[20px] font-semibold text-title-color'>Sosyal hesaplar sizlerle!</h1>
              <p className='text-item-title text-text-color pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing eliti, donec rhoncus velit enim, ut malesuada erat dignissim sed.</p>
              <button className='pt-8'><a href='#.' className='text-general-text-size font-semibold text-secondary-color'>Hemen Satın Al</a></button>
            </div>
          </div>
          <div className='md:w-full lg:w-1/3'>
            <img src={banner} alt='banner' />
          </div>
          <div className='absolute top-6 right-4 cursor-pointer' onClick={() => setCloseBanner(!closeBanner)}>
            <CloseIcon/>
          </div>
        </div>
      </article>
    </section>
  )
}
