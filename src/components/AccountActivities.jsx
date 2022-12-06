import { useState } from 'react'
import Helper from '../assets/img/svg/icons/Helper'
import foodicon from '../assets/img/food-icon.png'
import transfericon from '../assets/img/icon-36-thumb-money.png'
import goldicon from '../assets/img/icon-36-thumb-gold.png'
import Pagination from 'react-custom-pagination'

export default function AccountActivities() {
    const posts = [
        { id: '1', name: "Burger's Lab", desc: 'Aile Hesabım (Yasemin Pınar)', img: foodicon, imgClass: 'food', processClass:'food-process', process: '-₺200,00', time: '1 saat önce' },
        { id: '2', name: 'Gelen Transfer', desc: 'Dolar Hesabım (Erman Karakaya)', img: transfericon, imgClass: 'transfer' , processClass:'transfer-process', process: '$140,00', time: '3 saat önce' },
        { id: '3', name: 'Para Yükle', desc: 'Altın  Hesabım', img: goldicon, imgClass: 'money' , process: '2,00 gr', processClass:'money-process', time: '4 saat önce'},
        { id: '4', name: 'Gelen Transfer', desc: 'Euro Hesabım (Burak Ceylan)', img: transfericon, imgClass: 'transfer' , processClass:'transfer-process', process: '€280,00', time: '6 saat önce' },
        { id: '5', name: 'Para Yükle', desc: 'Altın  Hesabım', img: goldicon, imgClass: 'money' , process: '6,00 gr', processClass:'money-process', time: '8 saat önce'},
        { id: '6', name: 'Cafe Nero', desc: 'Aile Hesabım (Yasemin Pınar)', img: foodicon, imgClass: 'food', process: '-₺200,00', processClass:'food-process',  time: '9 saat önce' },
        { id: '8', name: 'Para Yükle', desc: 'Altın  Hesabım', img: goldicon, imgClass: 'money' , process: '1,00 gr', processClass:'money-process', time: '11 saat önce'},
        { id: '7', name: 'Gelen Transfer', desc: 'Dolar Hesabım (Erman Karakaya)', img: transfericon, imgClass: 'transfer' , processClass:'transfer-process', process: '$90,00', time: '13 saat önce' },
        { id: '9', name: 'Espresso Lab', desc: 'Aile Hesabım (Yasemin Pınar)', img: foodicon, imgClass: 'food', processClass:'food-process', process: '-₺200,00', time: '17 saat önce' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (number) => {
        setCurrentPage(number);
    };

    return (
        <section className='ml-0 mr-0 lg:mx-auto px-6 lg:px-12 pt-20 lg:pt-24'>
            <div className='block sm:flex justify-between items-center'>
                <h1 className='text-general-text-size font-semibold text-title-color'>HESAP HAREKETLERİ</h1>
                <a href='#.' className='flex items-center'><span className='text-general-text-size font-semibold text-secondary-color'>Harcama Analizi </span><Helper /></a>
            </div>
            <article className='account-activities'>
                <div className='bg-white rounded-general-radius mt-6 pb-6 p-4'>
                    {currentPosts.map((item) => {
                        return (
                            <div key={item.id} className='block p-4 pt-0'>
                                <div className='block sm:flex justify-between gap-3 items-center pb-2 border-b border-[#f0f0f5]'>
                                    <div className='block sm:flex gap-4 items-center'>
                                        <div>
                                            <img src={item.img} className={item.imgClass} />
                                        </div>
                                        <div className='block'>
                                            <h1 className='text-item-title font-semibold text-title-color'>{item.name}</h1>
                                            <span className='text-item-subtitle text-[#909099]'>{item.desc}</span>
                                        </div>
                                    </div>
                                    <div className={item.processClass}>
                                        <span className='text-item-title font-semibold text-title-color text-right'>{item.process}</span>
                                        <span className='text-item-subtitle text-[#909099] text-right'>{item.time}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className='pagination'>
                        <Pagination
                            totalPosts={posts.length}
                            postsPerPage={postsPerPage}
                            paginate={paginate}
                            view={3}
                            showLast={true}
                            showFirst={true}
                            showIndex={false}
                            selectColor='#155ed4'
                            bgColor='#f0f0f5'
                            color='white'
                            boxRadius='12px'
                            justify='center'
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}
