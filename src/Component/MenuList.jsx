
const menuListArr=[
  {
    id : 'm1',
    name:'Home',
    path:'/'
  },
  {
    id : 'm2',
    name:'About Us',
    path:'/about-us'
  },
  {
    id : 'm3',
    name:'Services',
    path:'service'
  },
  {
    id : 'm4',
    name:'Portfolio',
    path: '/portfolio'
  },
  {
    id : 'm5',
    name:'Contact',
    path:'/contact-us'
  },
  {
    id : 'm6',
    name:'India Covid-19',
    path:'/corona-report'
  }
];
const BannerJsonList = [
    {
      id : 'banner1',
      Sid : 'home',
      BannerHeading : 'EVERY PIXEL COUNTS',
      BannerDescription : 'As a full-service digital agency with capabilities across web design & development, Mobile Apps, Machine learning, we believe in perfection by balancing innovative design with quality code.',
      BannerButtonData : 'CONTACT US',
      BannerButtonUrl : '/contact-us',
      BannerRightImage : './images/about.png',
      BannerBackgroundImage : 'url(./images/bg-image.jpeg)'
    },
    {
      id : 'banner2',
      Sid : 'about',
      BannerHeading : 'BUILD. LAUNCH. GROW.',
      BannerDescription : 'At EagleTech, our aim is to enrich the digital experience by offering next-gen IT solutions to both SME and large-scale enterprises. We blend our expertise and advanced software technologies to transform your business into a technology-driven company.',
      BannerButtonData : 'CONTACT US',
      BannerButtonUrl : '/contact-us',
      BannerRightImage : './images/about-img.png',
      BannerBackgroundImage : 'url(./images/bg-image.jpeg)'
    },
    {
      id : 'banner3',
      Sid : 'portfolio',
      BannerHeading : 'EVERY PROJECTS COUNTS',
      BannerDescription : 'As a full-service digital agency with capabilities across web design & development, Mobile Apps, Machine learning, we believe in perfection by balancing innovative design with quality code.',
      BannerButtonData : 'CONTACT US',
      BannerButtonUrl : '/contact-us',
      BannerRightImage : './images/about.png',
      BannerBackgroundImage : 'url(./images/bg-image.jpeg)'
    },
]

const FourGridData = [
  {
    id : 'fourgrid1',
    imgSrc : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>',
    cardTitle : 'Latest React 16.8+',
    cardDescription : 'We used latest react ^16.8.6.Its a awesome design made by react.'
  },
  {
    id : 'fourgrid2',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>',
    cardTitle : 'Perfect Responsive',
    cardDescription : 'Our Template is full Perfect for all device. You can visit our template all device easily.'
  },
  {
    id : 'fourgrid3',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    cardTitle : 'Well Documented Codes',
    cardDescription : 'The Try do code is awesome well documented code. And Its customization is very easily'
  },
  {
    id : 'fourgrid4',
    imgSrc : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path></svg>',
    cardTitle : 'Sass Available',
    cardDescription : 'The template has Sass available for css. You can Change css by sass'
  },
  {
    id : 'fourgrid5',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    cardTitle : 'Fast Loading Speed',
    cardDescription : 'Try do is faster loading speed.Try do create your theme so much faster'
  },
  {
    id : 'fourgrid6',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>',
    cardTitle : 'Modern Design',
    cardDescription : 'Try do is a modern creative design for Creative Agency , Personal Portfolio etc....'
  },
  {
    id : 'fourgrid7',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
    cardTitle : '24 Support System',
    cardDescription : 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
  },
  {
    id : 'fourgrid8',
    imgSrc : '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>',
    cardTitle : 'Bootstrap Comfortable',
    cardDescription : 'Bootstrap comfortable is available in try do. So layout changes is so much easily.'
  }
];

const PersonalCardList = [
  {
    id : 'personalCard1',
    personalImgSrc : './images/anujkumar.png',
    personalCardName : 'Arun Kumar',
    personalCardPost : 'Director',
    personalCardDescription : 'Lorem ipsum dolor sit a met, consenter adipisicing elit. Aliquid dolore ducimus enim eum nam reiciendis repellendus sapiente tempore. Distinctio omnis ratione reiciendis tempora tenetur.?',
    personalCardFacebook : 'https://www.facebook.com/anuj.jangid.12',
    personalCardInstagram : 'https://www.instagram.com/jangid.anuj/',
    personalCardWhatsapp : 'https://api.whatsapp.com/send?phone=+91 9927191616&text=hello Mr Anuj'
  },
  {
    id : 'personalCard2',
    personalImgSrc : './images/anujkumar.png',
    personalCardName : 'Anuj Kumar',
    personalCardPost : 'Frontend Developer',
    personalCardDescription : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore ducimus enim eum nam reiciendis repellendus sapiente tempore. Distinctio omnis ratione reiciendis tempora tenetur.?',
    personalCardFacebook : 'https://www.facebook.com/anuj.jangid.12',
    personalCardInstagram : 'https://www.instagram.com/jangid.anuj/',
    personalCardWhatsapp : 'https://api.whatsapp.com/send?phone=+91 9560631062&text=hello Mr Anuj'
  },
  {
    id : 'personalCard3',
    personalImgSrc : './images/anujkumar.png',
    personalCardName : 'Mukti Chauhan',
    personalCardPost : 'Accountant',
    personalCardDescription : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore ducimus enim eum nam reiciendis repellendus sapiente tempore. Distinctio omnis ratione reiciendis tempora tenetur.?',
    personalCardFacebook : 'https://www.facebook.com/anuj.jangid.12',
    personalCardInstagram : 'https://www.instagram.com/jangid.anuj/',
    personalCardWhatsapp : 'https://api.whatsapp.com/send?phone=+91 9927191616&text=hello Mrs Mukti '
  },
]

const HaveQuestionList = [
  {
    id : 'haveQuestion1',
    HaveQuestionTitle : 'Call Me',
    HaveQuestionDetails : 'Are you interested in our latest news or working on a Grammarly story and need to get in touch?',
    HaveQuestionButton : 'Visit Press',
    HaveQuestionMainClass : 'btn-outline btn-outline-primary',
    HaveQuestionTo : '/contact-us'
  },
  {
    id : 'haveQuestion2',
    HaveQuestionTitle : 'Help & Support',
    HaveQuestionDetails : 'Our support team is spread across the globe to give you answers fast',
    HaveQuestionButton : 'Visit Support Page',
    HaveQuestionMainClass : 'btn-outline btn-success',
    HaveQuestionTo : '/contact-us'
  },
  {
    id : 'haveQuestion3',
    HaveQuestionTitle : 'Email',
    HaveQuestionDetails : 'Get in touch with our sales team to see how we can work together',
    HaveQuestionButton : 'Contact Sale',
    HaveQuestionMainClass : 'btn-outline btn-outline-skyblue',
    HaveQuestionTo : '/contact-us'
  }
]
const PortfolioCardJson = [
  {
      id : 'portfolioCard1',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://prepatx.com/',
      PortfolioImg : './images/prepatx.png',
      PortfolioCategory : 'Category',
      PortfolioTitle : 'PROJECT TITLE',
      PortfolioDate : '2018'
  },
  {
      id : 'portfolioCard2',
      PortfolioId : 'Nontech',
      PortfolioLink : 'https://www.stanzaliving.com/delhi/pg-hostel-in-north-campus/male/boston-house',
      PortfolioImg : './images/gym_noida.png',
      PortfolioCategory : 'Gym',
      PortfolioTitle : 'Stanza Living',
      PortfolioDate : '2019'
  },
  {
      id : 'portfolioCard3',
      PortfolioId : 'Tech',
      PortfolioLink :'http://maalaimalarsite.vocalwire.com/',
      PortfolioImg : './images/maalaimalar.png',
      PortfolioCategory : 'News',
      PortfolioTitle : 'Maalaimalar',
      PortfolioDate : '2021'
  },
  {
      id : 'portfolioCard4',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://www.thehansindia.com/',
      PortfolioImg : './images/hansindia.png',
      PortfolioCategory : 'News Media',
      PortfolioTitle : ' The Hans India',
      PortfolioDate : '2021'
  },
  
  {
      id : 'portfolioCard5',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://assamtribune.com/',
      PortfolioImg : './images/assamtribune.png',
      PortfolioCategory : 'News',
      PortfolioTitle : 'Assam Tribune',
      PortfolioDate : '2021'
  },
  {
      id : 'portfolioCard6',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://olympics.dtnext.in/',
      PortfolioImg : './images/olympics_dtnext.png',
      PortfolioCategory : 'Sport',
      PortfolioTitle : 'olympics dtnext',
      PortfolioDate : '2021'
  },
  {
      id : 'portfolioCard7',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://prepatx.com/',
      PortfolioImg : './images/prepatx.png',
      PortfolioCategory : 'Food',
      PortfolioTitle : ' prepatx',
      PortfolioDate : '2020'
      
  },
  {
      id : 'portfolioCard8',
      PortfolioId : 'Tech',
      PortfolioLink : 'https://skypay.co.in/',
      PortfolioImg : './images/skypay.png',
      PortfolioCategory : 'Online Payment Application',
      PortfolioTitle : 'Sky Pay',
      PortfolioDate : '2021'
  },
  {
    id : 'portfolioCard9',
    PortfolioId : 'Tech',
    PortfolioLink : 'https://www.thanthitv.com/',
    PortfolioImg : './images/thanthitv.png',
    PortfolioCategory : 'News',
    PortfolioTitle : ' ThanthiTV',
    PortfolioDate : '2022'
},
{
  id : 'portfolioCard10',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://www.dailythanthi.com/',
  PortfolioImg : './images/dailythunthi.png',
  PortfolioCategory : 'News',
  PortfolioTitle : ' Daily Thunthi',
  PortfolioDate : '2022'
},
{
  id : 'portfolioCard11',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://thelogicalindian.com/',
  PortfolioImg : './images/tli.png',
  PortfolioCategory : 'News',
  PortfolioTitle : ' The Logical Indian',
  PortfolioDate : '2022'
},
{
  id : 'portfolioCard12',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://dishadaily.com/',
  PortfolioImg : './images/dishadaily.png',
  PortfolioCategory : 'News',
  PortfolioTitle : 'Disha Daily',
  PortfolioDate : '2022'
},
{
  id : 'portfolioCard13',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://www.boomlive.in/',
  PortfolioImg : './images/boomlive.png',
  PortfolioCategory : 'News',
  PortfolioTitle : 'Boom Live',
  PortfolioDate : '2022'
},
{
  id : 'portfolioCard14',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://www.instanews.city/',
  PortfolioImg : './images/instanews.png',
  PortfolioCategory : 'News',
  PortfolioTitle : 'InstaNews',
  PortfolioDate : '2021'
},
{
  id : 'portfolioCard15',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://www.legaleraonline.com/',
  PortfolioImg : './images/legalera.png',
  PortfolioCategory : 'News',
  PortfolioTitle : 'Legalera',
  PortfolioDate : '2021'
},
{
  id : 'portfolioCard16',
  PortfolioId : 'Tech',
  PortfolioLink : 'http://ally.hocalwire.com/',
  PortfolioImg : './images/cms.png',
  PortfolioCategory : 'CMS',
  PortfolioTitle : 'Hocalwire CMS',
  PortfolioDate : '2022'
},
{
  id : 'portfolioCard17',
  PortfolioId : 'Tech',
  PortfolioLink : 'https://youngindianrevolution.com/',
  PortfolioImg : './images/yir.png',
  PortfolioCategory : 'online shopping',
  PortfolioTitle : 'Young Indian Revolution',
  PortfolioDate : '2019'
},
{
  id : 'portfolioCard18',
  PortfolioId : 'Tech',
  PortfolioLink : 'http://theintegritywebs.com/',
  PortfolioImg : './images/tiw.png',
  PortfolioCategory : 'Portfolio',
  PortfolioTitle : 'The Integrity Webs',
  PortfolioDate : '2019'
},
{
  id : 'portfolioCard2',
  PortfolioId : 'Nontech',
  PortfolioLink : 'https://www.larsentoubro.com/',
  PortfolioImg : './images/larsonandtoubo.png',
  PortfolioCategory : 'Electric',
  PortfolioTitle : 'Larson & Toubo',
  PortfolioDate : '2022'
}
]

const OurClientList = [
  {
    id : 'clientList1',
    OurClientImg : "./images/lt.png",
    OurClientImgAlt : "Larson and Torbo"
  },
  {
    id : 'clientList2',
    OurClientImg : "./images/stanza-logo.png",
    OurClientImgAlt : "Stanza Living"
  },
  {
    id : 'clientList3',
    OurClientImg : "./images/stanza-logo.png",
    OurClientImgAlt : "Larson and Torbo"
  },
  {
    id : 'clientList4',
    OurClientImg : "./images/lt.png",
    OurClientImgAlt : "Stanza Living"
  },
  {
    id : 'clientList5',
    OurClientImg : "./images/lt.png",
    OurClientImgAlt : "Larson and Torbo"
  },
  {
    id : 'clientList6',
    OurClientImg : "./images/stanza-logo.png",
    OurClientImgAlt : "Stanza Living"
  },
  {
    id : 'clientList7',
    OurClientImg : "./images/stanza-logo.png",
    OurClientImgAlt : "Larson and Torbo"
  },
  {
    id : 'clientList8',
    OurClientImg : "./images/lt.png",
    OurClientImgAlt : "Stanza Living"
  }
]

export { menuListArr, FourGridData, PersonalCardList, HaveQuestionList, PortfolioCardJson, OurClientList, BannerJsonList };