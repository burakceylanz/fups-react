import { useEffect, useState } from 'react'
import avatar from '../assets/img/avatar.png'
import Logo from '../assets/img/svg/media/Logo'
import AccountIcon from '../assets/img/svg/icons/Accounts'
import CardsIcon from '../assets/img/svg/icons/Cards'
import TransactionIcon from '../assets/img/svg/icons/Transactions'
import CampaignsIcon from '../assets/img/svg/icons/Campaigns'
import ArrowIcon from '../assets/img/svg/icons/Arrow'
import HamburgerIcon from '../assets/img/svg/icons/Hamburger'

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);
    document.body.style.backgroundColor = '#f5f5fa'
    const userInfo = JSON.parse(localStorage.getItem('user'));

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const handleMouseOverSubMenu = () => {
        setIsOpen(true);
    };

    const handleMouseOutSubMenu = () => {
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setMobileDropdown(!mobileDropdown);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=3')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json();
                }
            })
            .then(data => setSubMenu(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <header className='mx-auto px-6 lg:px-12 bg-white bg-transparent h-auto relative border-b-2 lg:border-none'>
                <nav className='flex justify-between items-center py-4 lg:p-0 lg:mt-8'>
                    <div className='flex justify-between items-center gap-16'>
                        <div className='flex justify-between items-center'>
                            <a href='#.' alt='logo'><Logo /></a>
                        </div>
                        <div className='hidden lg:block lg:mt-0'>
                            <div className='flex gap-10'>
                                <div onMouseOver={handleMouseOverSubMenu} onMouseOut={handleMouseOutSubMenu} className='flex items-center relative cursor-pointer gap-3 bg-transparent'><div className='flex items-center'><AccountIcon /><span className='text-general-text-size font-semibold text-text-color'>Hesaplar</span></div>
                                    {isOpen ? <div className='absolute -bottom-[8rem] w-[175px] bg-white rounded-general-radius'>
                                        <ul className='block px-4 py-2'>
                                            {subMenu && subMenu.map(item => (
                                                <li key={item.id} className='text-general-text-size font-semibold text-text-color py-2'>
                                                    <a href='#.'>{item.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> : null}
                                </div>
                                <div className='flex items-center cursor-pointer gap-3 bg-transparent'><CardsIcon /><span className='text-general-text-size font-semibold text-text-color'>Kartlar</span></div>
                                <div className='flex items-center cursor-pointer gap-3 bg-transparent'><TransactionIcon /><span className='text-general-text-size font-semibold text-text-color'>İşlemler</span></div>
                                <div className='flex items-center cursor-pointer gap-3 bg-transparent'><CampaignsIcon /><span className='text-general-text-size font-semibold text-text-color'>Kampanyalar</span></div>
                            </div>
                        </div>
                    </div>
                    <div className=' items-center cursor-pointer lg:relative'>
                        <div className='cursor-pointer rounded-general-radius border-b-2 p-2 shadow-lg lg:hidden' onClick={toggleMobileMenu}><HamburgerIcon /></div>
                        <div className='hidden lg:flex items-center gap-2'>
                            <div className='user-notification relative'><img src={avatar} alt='avatar' className='h-12' /></div>
                            <div className='block'>
                                <div><span className='capitalize text-general-text-size font-semibold text-title-color'>{userInfo.username}</span></div>
                                <div><span className='capitalize text-item-subtitle font-semibold text-[#909099]'>{userInfo.usertype}</span></div>
                            </div>
                        </div>
                    </div>
                    {mobileMenu
                ? <div className='fixed top-0 left-0 z-50 w-[300px] h-full bg-white lg:hidden'>
                    <div className='relative h-full'>
                        <div className='grid gap-5 px-6 py-6'>
                            <div className='mb-6'><a href='#.' alt='logo'><Logo /></a></div>
                            <div className={mobileDropdown ? 'block rounded-general-radius bg-primary-color border-b-none' : 'block rounded-general-radius bg-primary-color'}>
                                <div className='flex items-center justify-between cursor-pointer gap-3' onClick={toggleDropdown}>
                                    <div className='flex items-center'>
                                        <AccountIcon />
                                        <span className='text-general-text-size font-semibold text-text-color'>Hesaplar</span>
                                    </div>
                                    <div className='pr-4'>
                                        <ArrowIcon />
                                    </div>
                                </div>
                                {mobileDropdown
                                    ? <div className='flex items-center cursor-pointer bg-primary-color rounded-general-radius'>
                                        <ul className='block px-4 py-2'>
                                            {subMenu && subMenu.map(item => (
                                                <li key={item.id} className='text-general-text-size font-semibold text-text-color pb-2'>
                                                    <a href='#.'>{item.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className='flex items-center cursor-pointer gap-3 bg-transparent'><CardsIcon /><span className='text-general-text-size font-semibold text-text-color'>Kartlar</span></div>
                            <div className='flex items-center cursor-pointer gap-3 bg-transparent'><TransactionIcon /><span className='text-general-text-size font-semibold text-text-color'>İşlemler</span></div>
                            <div className='flex items-center cursor-pointer gap-3 bg-transparent'><CampaignsIcon /><span className='text-general-text-size font-semibold text-text-color'>Kampanyalar</span></div>
                            <div className='flex absolute bottom-10 lg:hidden items-center gap-2'>
                                <div className='user-notification relative'><img src={avatar} alt='avatar' className='h-12' /></div>
                                <div className='block'>
                                    <div><span className='capitalize text-general-text-size font-semibold text-title-color'>{userInfo.username}</span></div>
                                    <div><span className='capitalize text-item-subtitle font-semibold text-[#909099]'>{userInfo.usertype}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
                </nav>
            </header>
        </>
    )
}
