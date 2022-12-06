import Slider from 'react-slick';
import showcaseone from '../assets/img/image-banner-showcase-01.png'
import showcasetwo from '../assets/img/image-banner-showcase-02.png'
import showcasethree from '../assets/img/image-banner-showcase-03.png'
import Chevron from '../assets/img/svg/icons/Chevron'

export default function Campaign() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    };
    
    return (
        <>
            <section className='ml-0 mr-0 lg:mx-auto pt-8 px-6 lg:px-12 lg:pt-24'>
                <h1 className='text-general-text-size font-semibold text-title-color'>SİZE ÖZEL KAMPANYALAR</h1>
                <Slider {...settings}>
                    <article className='rounded-general-radius bg-white mt-8'>
                        <div className='block xl:flex items-center relative gap-2'>
                            <div className='-mt-3'>
                                <img src={showcaseone} alt='showcase one' />
                            </div>
                            <div className='block p-6 lg:p-4'>
                                <h1 className='uppercase text-general-text-size font-semibold text-title-color'>Turkcell Kampanyası</h1>
                                <p className='text-general-text-size text-text-color mt-2'>Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.</p>
                                <div className='absolute bottom-4 right-4 cursor-pointer'>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className='rounded-general-radius bg-white mt-8'>
                        <div className='block xl:flex items-center relative gap-2'>
                            <div className='-mt-3'>
                                <img src={showcasetwo} alt='showcase one' />
                            </div>
                            <div className='block p-6 lg:p-4'>
                                <h1 className='uppercase text-general-text-size font-semibold text-title-color'>Oyun & E-Pin Fırsatı</h1>
                                <p className='text-general-text-size text-text-color mt-2'>Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.</p>
                                <div className='absolute bottom-4 right-4 cursor-pointer'>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className='rounded-general-radius bg-white mt-8'>
                        <div className='block xl:flex items-center relative gap-2'>
                            <div className='-mt-3 xl:mt-0'>
                                <img src={showcasethree} alt='showcase one' />
                            </div>
                            <div className='block p-6 lg:p-4'>
                                <h1 className='uppercase text-general-text-size font-semibold text-title-color'>ÜCRETSİZ İŞLEM</h1>
                                <p className='text-general-text-size text-text-color mt-2'>Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.</p>
                                <div className='absolute bottom-4 right-4 cursor-pointer'>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className='rounded-general-radius bg-white mt-8'>
                        <div className='block xl:flex items-center relative gap-2'>
                            <div className='-mt-3'>
                                <img src={showcasetwo} alt='showcase one' />
                            </div>
                            <div className='block p-6 lg:p-4'>
                                <h1 className='uppercase text-general-text-size font-semibold text-title-color'>Oyun & E-Pin Fırsatı</h1>
                                <p className='text-general-text-size text-text-color mt-2 '>Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.</p>
                                <div className='absolute bottom-4 right-4 cursor-pointer'>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className='rounded-general-radius bg-white mt-8'>
                        <div className='block xl:flex items-center relative gap-2'>
                            <div className='-mt-3'>
                                <img src={showcaseone} alt='showcase one' />
                            </div>
                            <div className='block p-6 lg:p-4'>
                                <h1 className='uppercase text-general-text-size font-semibold text-title-color'>Turkcell Kampanyası</h1>
                                <p className='text-general-text-size text-text-color mt-2'>Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.</p>
                                <div className='absolute bottom-4 right-4 cursor-pointer'>
                                    <Chevron />
                                </div>
                            </div>
                        </div>
                    </article>
                </Slider>
            </section>
        </>
    )
}
