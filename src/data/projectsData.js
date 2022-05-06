import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import isuzu_GIICOMVEC from '../assets/png/isuzu_GIICOMVEC.jpeg'
import foodmarket from '../assets/png/foodmarket.png'
import tokepd from '../assets/png/tokped.png'
import iserve from '../assets/png/iserve.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Isuzu Link',
        projectDesc: "Aplikasi ini berguna untuk memberikan informasi kondisi aktual kendaraan kepada berbagai pihak, yaitu pelanggan, diler dan APM. Aplikasi memiliki bebebrapa fungsi, antara lain break down support, real time GPS, services reminder, up time monitoring, part forecast support, dan driving habit",
        tags: ['React Native', 'CSS', 'Javascript', 'REST API', 'Firebase'],
        code: '',
        demo: 'https://www.youtube.com/watch?v=G0YuII3LYGM',
        image: isuzu_GIICOMVEC
    },
    {
        id: 2,
        projectName: 'Iserve',
        projectDesc: 'iServe merupakan aplikasi manajemen resources untuk setiap profesional AGIT yang digunakan untuk berbagi/sharing segala sumber daya yang dimilikinya kepada orang lain sehingga memberikan nilai tambah bagi orang lain tersebut dan sekaligus bagi dirinya sendiri. Adapun sumber daya yang dimiliki oleh setiap profesional AGIT meliputi kemampuan teknis seperti instalasi, konfigurasi, konsultasi dan sebagainya.',
        tags: ['React Native', 'CSS', 'Javascript','REST API', 'Firebase' ],
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.agit.iserve.saas',
        image: iserve
    },
    {
        id: 3,
        projectName: 'Food Market',
        projectDesc: 'Food Market merupakan sebuah aplikasi pemesanan makanan fasiltas kurir pengantar. Aplikasi ini dibuat berdasarkan ui design yang terdapat di figma. Aplikasi terkoneksi dengan Rest Api menggunkan Retrofit Service dan aplikasi di buat dengan bahasa Kotlin dan MVP pattern.',
        tags: ['Android Studio - Kotlin', 'MVP', 'Figma', 'REST API'],
        code: 'https://github.com/sriwahyuni-coder/android-kotlin-mvp',
        demo: '',
        image: foodmarket
    },
    {
        id: 4,
        projectName: 'Clone TokPed',
        projectDesc: 'CLone TokPed adalah aplikasi yang dibuat berdasarkan aplikasi asli dari e-commerce Tokopedia sebagai acuan dalam memperlajari pemograman android dengan bahasa kotlin dan MVVM Pattern',
        tags: ['Android Studio - Kotlin', 'MVVM', 'REST API'],
        code: 'https://github.com/sriwahyuni-coder/ecommerce-mobile-app-kotlin-mvvm',
        demo: '',
        image: tokepd
    },
    {
        id: 5,
        projectName: 'Frisian Flag Indonesia',
        projectDesc: 'FFI - iServe merupakan aplikasi manajemen resources untuk setiap profesional Frisian Flag yang digunakan untuk berbagi/sharing segala sumber daya yang dimilikinya kepada orang lain sehingga memberikan nilai tambah bagi orang lain tersebut dan sekaligus bagi dirinya sendiri.',
        tags: ['Android Studio - Java', 'REST API', 'Firebase'],
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.agit.iserve.ffi',
        image: ""
    },

]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/