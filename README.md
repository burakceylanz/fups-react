# Front-end Developer Case Study
Zeplin üzerinden tasarımı paylaşılan uygulamanın React projesi oluşturularak kodlandı. Tasarımın responsive versiyonu tamamlandı ve pixel perfect 
kodlama yapıldı. Projede Tailwind CSS kütüphanesi kullanıldı ve extends oluşturuldu. Tailwind CSS kütüphanesi kullanılarak BEM metodolojisi ve CSS Modules ile style ekleme işlemi yapmamıza gerek kalmadan, performans ve hız kazanıldı. Componentler semantic yapıda tasarlandı. Kullanılan npm paketleri aşağıda listelendi.

## Login Ekranı
- Kullanıcı tipi eklendi.
- Kullanıcı bilgileri ile giriş yapılması sağlandı.
- Inputlar doldurulmadan geçiş yapılmaması için validation işlemi gerçekleştirildi.
- Login olan kullanıcının bilgileri localStorage'de tutuldu.
- Görseller SVG olarak eklendi.
- Loading ekranında lottiefiles kullanıldı, animasyon oluşturuldu.

## Dashboard Ekranı
- Menü itemleri public service'den çekildi. Itemler filtrenelerek eklendi.
- Menü hover ile alt itemler açılması sağlandı.
- LocalStorage'den gelen kullanıcı bilgileri header'a yazdırıldı.
- Kampanyalar alanı slider olarak kodlandı.
- Hesap hareketleri 3 item sıralanacak biçimde ve pagination olarak tasarlandı.
- Mobile ve tablet görünümüne özel responsive menü tasarlandı.

## Kullanılan npm paketleri
react-router-dom
formik
react-lottie
react-slick
react-custom-pagination