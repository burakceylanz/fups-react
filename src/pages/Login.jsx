import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, ErrorMessage, Field } from 'formik'
import { Player } from '@lottiefiles/react-lottie-player'
import Loading from '../assets/lotties/loading.json'
import Logo from '../assets/img/svg/media/Logo'
import MobileIcon from '../assets/img/svg/icons/Mobile'
import IdentifyIcon from '../assets/img/svg/icons/Identify'
import PersonIcon from '../assets/img/svg/icons/Person'
import hideicon from '../assets/img/hide-icon.png'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div id='wrapper' className={modal ? 'blur-sm bg-[#0000ff1c] relative h-screen' : 'relative h-screen'}>
                <div className='flex'>
                    <div className='w-full lg:w-[58.33333333%] xl:ml-[8.88%]'>
                        <header>
                            <div className='px-[25px] mx-auto mt-8'>
                                <nav className='flex justify-between items-center'>
                                    <a href='#.'>
                                        <Logo />
                                    </a>
                                    <button className='hidden sm:block bg-white text-black border-2 border-[#dcdce6] py-[18px] px-[32px] text-[0.875rem] font-semibold rounded-general-radius uppercase'>Kayıt Ol</button>
                                </nav>
                            </div>
                        </header>
                        <main>
                            <section className='login login-form'>
                                <div className='wrap my-[50px] mx-auto px-[25px] lg:px-0 max-w-[432px]'>
                                    <h1 className='text-[32px] font-semibold text-title-color pb-4'>Kullanıcı Girişi</h1>
                                    <p className='text-item-title text-text-color pb-4'>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>
                                    
                                <Formik
                                        initialValues={{ usertype: '', username: '', password: '' }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.username) {
                                                errors.username = 'Lütfen bir kullanıcı adı girin.';
                                            } else if (!values.password) {
                                                errors.password = 'Lütfen bir parola girin.';
                                            } else if (!values.usertype) {
                                                errors.usertype = 'Lütfen bir kullanıcı tipi seçin.';
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setModal(true)
                                            setTimeout(() => {
                                                localStorage.setItem('user', JSON.stringify(values));
                                                setSubmitting(false);
                                                navigate('/dashboard');
                                            }, 2000);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => (
                                            <form onSubmit={handleSubmit} className='py-3'>
                                                <Field as='select' name='usertype' className='rounded-general-radius p-[18px] border-2 border-primary-color text-[1rem] text-[#17171a75] bg-primary-color w-full outline-none focus:border-secondary-color'>
                                                    <option value='user-type' className='hidden'>Kullanıcı Tipi</option>
                                                    <option value='standart'>Standart</option>
                                                    <option value='premium'>Premium</option>
                                                </Field>
                                                <ErrorMessage name='usertype' component='div' className='text-red-500 py-3' />
                                                <div className='mt-6'>
                                                    <Field type='text' name='username' placeholder='Kullanıcı Adı' className='rounded-general-radius p-[18px] border-2 border-primary-color text-[1rem] text-title-color bg-primary-color w-full outline-none focus:border-secondary-color' />
                                                    <ErrorMessage name='username' component='div' className='text-red-500 py-3' />
                                                </div>
                                                <div className='relative mt-6'>
                                                    <Field type={showPassword ? 'text' : 'password'} name='password' placeholder='Şifren' autoComplete='on' className='rounded-general-radius p-[18px] border-2 border-primary-color text-[1rem] text-title-color bg-primary-color w-full outline-none focus:border-secondary-color' />
                                                    <img src={hideicon} onClick={togglePassword} className='absolute top-5 right-4 h-6 cursor-pointer' alt='show password' />
                                                    <ErrorMessage name='password' component='div' className='text-red-500 py-3' />
                                                </div>
                                                <div className='flex justify-between items-center mt-6'>
                                                    <span className='text-general-text-size font-semibold text-secondary-color cursor-pointer'>Şifremi Unuttum</span>
                                                    <button type='submit' className='bg-secondary-color  text-white py-[18px] px-[32px] text-[0.875rem] font-semibold rounded-general-radius'>GİRİŞ YAP</button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </section>
                        </main>
                    </div>
                    <aside className='w-[41.66666667%] hidden lg:block'>
                        <section id='login-banner' className='w-[400px] h-auto bg-black fixed right-4 top-4 bottom-4 px-[60px] py-[80px] block rounded-general-radius'>
                            <div id='login-banner-title' className='text-[1.5rem] font-medium text-white p-0 text-left leading-[1.5715]'>Nasıl giriş<br />yapabilirim?</div>
                            <div id='login-banner-content' className='py-[40px] px-0'>
                                <ul className='m-0 p-0'>
                                    <li className='text-[1rem] font-normal text-[#939399] p-0 pb-4 text-left list-none m-0 flex items-center'><MobileIcon /><span className='pl-4'>Telefonunuzdan FUPS uygulamasını açın.</span></li>
                                    <li className='text-[1rem] font-normal text-[#939399] p-0 pb-4 text-left list-none m-0 flex items-center'><PersonIcon /><span className='pl-4'>'QR GİRİŞ' butonuna basın.</span></li>
                                    <li className='text-[1rem] font-normal text-[#939399] p-0 pb-4 text-left list-none m-0 flex items-center'><IdentifyIcon /><span className='pl-4'>QR kodu okutarak internet şubeye giriş yapabilirsiniz.</span></li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
            {modal ?
                <div id='popup-modal' className='fixed top-2/4 left-2/4 translate-y-1/2 translate-x-2/4'>
                    <div className='relative w-full h-full max-w-xs lg:max-w-md md:h-auto'>
                        <div className='relative bg-white rounded-[24px] shadow-md'>
                            <div className='py-12 px-32 space-y-6'>
                                <div className='flex justify-center items-center'>
                                    <div className='block'>
                                        <Player
                                            src={Loading}
                                            loop
                                            autoplay
                                        />
                                        <div className='flex justify-center'>
                                            <span className='uppercase text-secondary-color font-bold text-base mt-3'>GİRİŞ YAPILIYOR...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}