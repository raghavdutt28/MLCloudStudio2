import PrimaryButton from './components/primaryButton';
import FeatureCardList from './components/featureCardList';
import Image from 'next/image';
import Content from './components/content';
import Progressbar from './components/appSteps/progressbar';
import PricingCard from './components/pricingCard';
import CourseCard from './components/courseCard';
import TestimonyCard from './components/testimonyCard';
import Blog from './components/blog';
import CalendlyWidget from './components/calendlyWidget';
import building_systems from '../public/course_images/building_systems.png'
import prompt_engineering from '../public/course_images/prompt_engineering.png'
import langchain_llm from '../public/course_images/langchain_llm.png'
import langchain_chatbot from '../public/course_images/langchain_chatbot.png'
import diffusion_models from '../public/course_images/diffusion_models.png'
import blog1 from '../public/blog_images/blog_Integrate_chatgpt.png'
import blog2 from '../public/blog_images/blog_generative_AI.png'
import blog3 from '../public/blog_images/blog_what_is.png'
import featureIcon from '../public/section_images/feature_icon.svg';
import plugnplayIcon from '../public/section_images/plugnplay_icon.svg';
import pricingIcon from '../public/section_images/pricing_icon.svg';
import coursesIcon from '../public/section_images/courses_icon.svg';
import testimonialsIcon from '../public/section_images/testimonials_icon.svg';
import blogsIcon from '../public/section_images/blogs_icon.svg';
import callscheduleIcon from '../public/section_images/callschedule_icon.svg';
import chalkmates from '../public/socialproof_images/chalkmates.png';
import clapingo from '../public/socialproof_images/clapingo.png';
import livofy from '../public/socialproof_images/livofy.png';
import ritecare from '../public/socialproof_images/ritecare.png';
import shardauni from '../public/socialproof_images/shardauni.png';
import Link from 'next/link'
import ContactButton from './components/contactUs';
import data from '../public/data.json';


const Home = () => {



  const useCases = data.data;

  const primaryButtonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

  );

  const courseDeco = (
    <svg width="2079" height="2080" viewBox="0 0 2079 2080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_308_15771)">
        <path d="M1039.5 1275.35C992.975 1275.35 947.496 1261.54 908.814 1235.68C870.132 1209.81 839.984 1173.06 822.183 1130.05C804.381 1087.05 799.726 1039.72 808.805 994.072C817.884 948.42 840.29 906.486 873.189 873.574C906.089 840.661 948.004 818.248 993.636 809.169C1039.27 800.089 1086.56 804.751 1129.55 822.565C1172.53 840.379 1209.27 870.545 1235.12 909.248C1260.96 947.951 1274.76 993.453 1274.76 1040C1274.69 1102.4 1249.88 1162.23 1205.77 1206.35C1161.67 1250.47 1101.87 1275.29 1039.5 1275.35ZM1039.5 846.248C1001.2 846.252 963.759 857.619 931.915 878.911C900.07 900.204 875.252 930.465 860.598 965.869C845.943 1001.27 842.111 1040.23 849.586 1077.81C857.06 1115.39 875.506 1149.92 902.591 1177.01C929.675 1204.11 964.182 1222.56 1001.75 1230.03C1039.31 1237.51 1078.25 1233.67 1113.64 1219C1149.02 1204.34 1179.27 1179.5 1200.54 1147.64C1221.82 1115.78 1233.18 1078.32 1233.18 1040C1233.12 988.629 1212.69 939.379 1176.38 903.056C1140.07 866.733 1090.85 846.303 1039.5 846.248Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 1144C1018.94 1144 998.843 1137.9 981.748 1126.47C964.654 1115.05 951.33 1098.8 943.463 1079.8C935.595 1060.8 933.536 1039.88 937.547 1019.71C941.558 999.537 951.458 981.006 965.996 966.461C980.534 951.916 999.056 942.011 1019.22 937.998C1039.38 933.986 1060.29 936.045 1079.28 943.917C1098.27 951.788 1114.51 965.118 1125.93 982.221C1137.35 999.323 1143.45 1019.43 1143.45 1040C1143.42 1067.57 1132.45 1094.01 1112.97 1113.5C1093.48 1133 1067.06 1143.97 1039.5 1144ZM1039.5 977.6C1027.16 977.6 1015.11 981.26 1004.85 988.116C994.592 994.973 986.598 1004.72 981.878 1016.12C977.157 1027.52 975.922 1040.07 978.328 1052.17C980.735 1064.28 986.675 1075.4 995.398 1084.12C1004.12 1092.85 1015.23 1098.79 1027.33 1101.2C1039.43 1103.61 1051.97 1102.37 1063.37 1097.65C1074.76 1092.93 1084.51 1084.93 1091.36 1074.67C1098.21 1064.41 1101.87 1052.34 1101.87 1040C1101.87 1023.45 1095.3 1007.58 1083.6 995.877C1071.91 984.174 1056.04 977.6 1039.5 977.6Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 1436.3C961.156 1436.3 884.572 1413.06 819.432 1369.51C754.292 1325.97 703.521 1264.07 673.54 1191.66C643.56 1119.24 635.715 1039.56 650.999 962.685C666.283 885.81 704.009 815.196 759.407 759.772C814.804 704.348 885.384 666.604 962.222 651.312C1039.06 636.021 1118.71 643.869 1191.09 673.864C1263.47 703.859 1325.33 754.654 1368.85 819.826C1412.38 884.998 1435.61 961.619 1435.61 1040C1435.5 1145.07 1393.73 1245.8 1319.47 1320.1C1245.21 1394.4 1144.52 1436.19 1039.5 1436.3ZM1039.5 685.297C969.38 685.297 900.835 706.1 842.533 745.076C784.23 784.051 738.789 839.448 711.955 904.261C685.122 969.074 678.101 1040.39 691.78 1109.2C705.46 1178 739.226 1241.21 788.808 1290.81C838.39 1340.42 901.562 1374.2 970.334 1387.89C1039.11 1401.57 1110.39 1394.55 1175.17 1367.7C1239.96 1340.86 1295.33 1295.39 1334.28 1237.06C1373.24 1178.73 1394.03 1110.15 1394.03 1040C1393.93 945.959 1356.54 855.8 1290.08 789.303C1223.61 722.806 1133.5 685.402 1039.5 685.297Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 1597.21C929.348 1597.21 821.671 1564.52 730.084 1503.29C638.498 1442.06 567.117 1355.04 524.966 1253.22C482.816 1151.4 471.789 1039.37 493.281 931.281C514.774 823.194 567.819 723.91 645.71 645.985C723.6 568.06 822.838 514.992 930.874 493.494C1038.91 471.996 1150.89 483.031 1252.66 525.206C1354.43 567.381 1441.41 638.8 1502.6 730.432C1563.8 822.065 1596.46 929.795 1596.46 1040C1596.29 1187.73 1537.56 1329.37 1433.14 1433.83C1328.73 1538.29 1187.16 1597.05 1039.5 1597.21ZM1039.5 524.389C937.572 524.393 837.933 554.636 753.185 611.295C668.437 667.954 602.385 748.483 563.381 842.699C524.378 936.915 514.175 1040.59 534.063 1140.6C553.95 1240.62 603.036 1332.49 675.111 1404.6C747.187 1476.71 839.016 1525.81 938.986 1545.71C1038.96 1565.6 1142.58 1555.39 1236.75 1516.36C1330.92 1477.33 1411.4 1411.25 1468.03 1326.46C1524.66 1241.66 1554.88 1141.98 1554.88 1040C1554.72 903.297 1500.37 772.239 1403.75 675.577C1307.13 578.915 1176.14 524.543 1039.5 524.389Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 1758.14C897.533 1758.14 758.755 1716.02 640.714 1637.11C522.673 1558.2 430.672 1446.04 376.343 1314.82C322.015 1183.6 307.8 1039.2 335.497 899.898C363.193 760.592 431.556 632.632 531.942 532.198C632.327 431.764 760.226 363.368 899.465 335.658C1038.7 307.948 1183.03 322.17 1314.19 376.524C1445.35 430.879 1557.45 522.925 1636.33 641.022C1715.2 759.12 1757.3 897.965 1757.3 1040C1757.08 1230.4 1681.39 1412.93 1546.82 1547.57C1412.25 1682.2 1229.81 1757.93 1039.5 1758.14ZM1039.5 363.459C905.757 363.459 775.018 403.138 663.815 477.477C552.612 551.816 465.939 657.477 414.758 781.099C363.577 904.721 350.186 1040.75 376.278 1171.99C402.37 1303.22 466.773 1423.77 561.343 1518.39C655.914 1613 776.404 1677.44 907.577 1703.54C1038.75 1729.65 1174.71 1716.25 1298.28 1665.04C1421.84 1613.84 1527.45 1527.12 1601.75 1415.87C1676.06 1304.61 1715.72 1173.81 1715.72 1040C1715.52 860.631 1644.21 688.665 1517.44 561.832C1390.67 434.999 1218.78 363.657 1039.5 363.459Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 1919.07C865.72 1919.07 695.842 1867.51 551.349 1770.92C406.857 1674.33 294.238 1537.03 227.735 1376.41C161.233 1215.78 143.832 1039.02 177.735 868.502C211.638 697.979 295.321 541.344 418.202 418.403C541.083 295.463 697.643 211.74 868.084 177.821C1038.53 143.902 1215.19 161.31 1375.74 227.845C1536.3 294.38 1673.52 407.052 1770.07 551.615C1866.62 696.177 1918.15 866.136 1918.15 1040C1917.88 1273.06 1825.23 1496.5 1660.51 1661.3C1495.78 1826.11 1272.45 1918.81 1039.5 1919.07ZM1039.5 202.53C873.944 202.53 712.105 251.646 574.45 343.669C436.795 435.691 329.506 566.486 266.15 719.514C202.795 872.542 186.218 1040.93 218.516 1203.38C250.815 1365.84 330.538 1515.06 447.604 1632.18C564.67 1749.3 713.821 1829.06 876.196 1861.38C1038.57 1893.69 1206.88 1877.11 1359.83 1813.72C1512.79 1750.34 1643.52 1642.99 1735.5 1505.27C1827.47 1367.55 1876.57 1205.64 1876.57 1040C1876.31 817.967 1788.04 605.1 1631.12 448.099C1474.19 291.097 1261.43 202.783 1039.5 202.53Z" fill="#00FFFF" fillOpacity="0.05" />
        <path d="M1039.5 2080C833.907 2080 632.93 2019.01 461.985 1904.73C291.04 1790.45 157.805 1628.03 79.1277 1437.99C0.450398 1247.96 -20.1352 1038.85 19.9742 837.107C60.0835 635.366 159.086 450.056 304.463 304.609C449.84 159.163 635.061 60.1124 836.704 19.9838C1038.35 -20.1449 1247.36 0.450614 1437.3 79.1657C1627.24 157.881 1789.59 291.18 1903.81 462.207C2018.03 633.235 2079 834.308 2079 1040C2078.69 1315.73 1969.07 1580.08 1774.19 1775.04C1579.32 1970.01 1315.1 2079.69 1039.5 2080ZM1039.5 41.6005C842.131 41.6005 649.193 100.156 485.086 209.861C320.979 319.567 193.073 475.496 117.543 657.929C42.0124 840.363 22.2503 1041.11 60.7552 1234.78C99.2602 1428.45 194.303 1606.35 333.864 1745.98C473.426 1885.6 651.238 1980.69 844.816 2019.22C1038.39 2057.74 1239.04 2037.97 1421.39 1962.4C1603.73 1886.84 1759.59 1758.87 1869.24 1594.68C1978.89 1430.5 2037.42 1237.47 2037.42 1040C2037.12 775.3 1931.89 521.525 1744.81 334.353C1557.73 147.182 1304.07 41.8978 1039.5 41.6005Z" fill="#00FFFF" fillOpacity="0.05" />
      </g>
      <defs>
        <clipPath id="clip0_308_15771">
          <rect width="2079" height="2080" fill="white" />
        </clipPath>
      </defs>
    </svg>



  );




  return (
    <section className="w-full">
      <section className="w-full lg:flex-row flex flex-col gap-8 lg:gap-0">
        <div className="w-full relative">
          <div className="deco_triangle">
            <svg width="235" height="264" viewBox="0 0 235 264" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.29218 11.097C0.0235242 3.40372 8.18387 -1.69543 14.9808 1.91856L229.084 115.759C235.881 119.373 236.217 128.99 229.689 133.069L24.0479 261.568C17.5197 265.647 9.0235 261.13 8.75485 253.436L0.29218 11.097Z" fill="#00D2D2" />
            </svg>


          </div>

          <h1 className="head_text text-left mt-5">
            Ready to Integrate
            <br className="" />
            Generative AI
            <span className="text-accent text-center">.</span>
          </h1>
          <p className="text-para-small text-left pb-6">
            Time to build & Learn your own LLMs!!
          </p>
          <Link href='/featuredUseCase'>
            <PrimaryButton data="Explore Use Cases" icon={primaryButtonIcon} />
          </Link>
        </div>
        <div className='bg-white drop-shadow-container md:w-96 md:h-96 w-96 h-96 flex mx-auto'></div>
      </section>
      <section className='w-full my-16 justify-center items-center bg-white-light py-8 hidden md:flex'>
        <div className='flex items-center gap-20 w-fit'>
          <Image src={clapingo}
            height={36} alt='Social Image' />
          <Image src={chalkmates}
            height={36} alt='Social Image' />
          <Image src={shardauni}
            height={36} alt='Social Image' />
          <Image src={ritecare}
            height={36} alt='Social Image' />
          <Image src={livofy}
            height={18} alt='Social Image' />
        </div>
      </section>
      <section id='useCaseSection' className='w-full flex my-16 justify-center items-center py-8'>
        <div className='w-full'>
          <Content
            heading="Featured Use Cases"
            para="Solutions to multiple needs of a business aiming to scale and
          automize, we have got your back."
            icon={featureIcon}
          />
          <FeatureCardList data={data.data} />
          

        </div>
      </section>
      <section className='w-full flex my-16 justify-center items-center py-8 bg-white-light'>
        <div className='w-full'>
          <Content
            heading="Free Plug & Play API's"
            para="Apart from hosted inferences, we have easy, ready to use API's
          for all our models that will run on our architecture."
            icon={plugnplayIcon}
          />
          <video src='' className='w-full bg-white drop-shadow-container' alt="video"></video>
          <Progressbar />
        </div>
      </section>
      <section id='pricingSection' className='w-full flex my-16 justify-center items-center py-8'>
        <div className='w-full'>
          <Content
            heading="Pricing"
            para="Transparent pricing for our top-notch products, ensuring value and
          affordability for every customer."
            icon={pricingIcon}
          />
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-auto'>
            <PricingCard
              type="Free"
              price="$0"
              features={["Fastest time to Market", "Open Source License for featured use-cases", "Easy Plug & Play Code", "Free 30 minutes Session with Expert"]}
              cta="Book a Session"
              purpose="contactSection"
            />
            <PricingCard
              type="Personal"
              price="$100~1000"
              features={["Fastest Inference", "We code & Deploy in your environment", "Supported all 5 use-cases", "24 hours integration SLA or else money refund"]}
              cta="Contact Us"
            />
            <PricingCard
              type="Enterprise"
              price="Let's Talk"
              features={["Custom Solution Development", "Avg. 1 week integration SLA", "Integration to your product", "Security & Privacy guaranteed"]}
              cta="Contact Us"
            />
          </div>
        </div>

      </section>
      <section id='coursesSection' className='w-full relative flex my-16 justify-center items-center p-8 bg-dark rounded-md overflow-hidden'>
        <div className='absolute top-[-975px] left-[-975px]'>{courseDeco}</div>
        <div className='w-full flex flex-col justify-center'>
          <div className='w-full'>
            <div className='w-full pb-12'>
              <Image
                src={coursesIcon}
                height={64}
                width={64}
                alt='Deeper into AI/ML Realm Icon'
              />
              <h1 className='head_text_white pt-4 pb-2'>Deeper into AI/ML Realm</h1>
              <p className='text-para-small w-3/4'>Master the fundamentals of AI and Machine Learning with our Comprehensive Course Catalog. From Beginner to Advanced, We Have Value for Everyone.</p>
            </div>
            <div>
              <h2 className='text-subhead text-white'>Our Courses</h2>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-auto my-12'>

                <CourseCard
                  image={building_systems}
                  courseDifficulty="Beginner to Advanced"
                  courseDuration="1 Hour"
                  courseTitle="ChatGPT Prompt Engineering for Developers"
                  tutorName="Gaurav Gupta"
                  tutorCredentials="(Ex-Microsoft, Adobe, HCL)"
                  price="25"
                  courseDesc="Go beyond the chat box. Use API access to leverage LLMs into your own applications, and learn to build a custom chatbot."
                  buttonId="pl_MKBJpuPeVcsruJ"
                />
                <CourseCard
                  image={prompt_engineering}
                  courseDifficulty="Beginner to Advanced"
                  courseDuration="1 Hour"
                  courseTitle="LangChain: Chat with Your data"
                  tutorName="Gaurav Gupta"
                  tutorCredentials="(Ex-Microsoft, Adobe, HCL)"
                  price="25"
                  courseDesc="Create a chatbot to interface with your private data and documents using LangChain. Utilize 80+ loaders for diverse data sources in LangChain."
                  buttonId="pl_MllpfzQOtScIw5"
                />
                <CourseCard
                  image={langchain_llm}
                  courseDifficulty="Beginner to Advanced"
                  courseDuration="1 Hour"
                  courseTitle="LangChain for LLM Application Development"
                  tutorName="Gaurav Gupta"
                  tutorCredentials="(Ex-Microsoft, Adobe, HCL)"
                  price="25"
                  courseDesc="The framework to take LLMs out of the box. Learn to use LangChain to call LLMs into new environments, and use memories, chains to take on new tasks."
                  buttonId="pl_MllqZpESjlG8oh"
                />
                <CourseCard
                  image={langchain_chatbot}
                  courseDifficulty="Beginner to Advanced"
                  courseDuration="1 Hour"
                  courseTitle="Building Systems with the ChatGPT API"
                  tutorName="Gaurav Gupta"
                  tutorCredentials="(Ex-Microsoft, Adobe, HCL)"
                  price="25"
                  courseDesc="Unlock LLM potential. Master task breakdown, workflow automation, chaining LLM calls, and improve outputs. Level up now!."
                  buttonId="pl_Mllr9ModfJyZsG"
                />
                <CourseCard
                  image={diffusion_models}
                  courseDifficulty="Beginner to Advanced"
                  courseDuration="1 Hour"
                  courseTitle="Large Language Models with Semantic Search"
                  tutorName="Gaurav Gupta"
                  tutorCredentials="(Ex-Microsoft, Adobe, HCL)"
                  price="25"
                  courseDesc="Learn to use LLMs to enhance search and summarize results. Use embeddings to leverage dense retrieval, a powerful NLP tool."
                  buttonId="pl_MllriN6uOikJ1n"
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-subhead text-white mb-4'>Are you a University or Corporates Looking for Customized Training?</h1>
            <ContactButton data="Contact Us" icon={primaryButtonIcon} />
          </div>
        </div>
      </section>
      <section className='w-full flex my-16 justify-center items-center py-4'>
        <div className='w-full'>
          <Content
            heading="What Industry Says"
            para="Clients praise our services with glowing testimonials. Hear their
            success stories and the value we bring."
            icon={testimonialsIcon}
          />
          <div className='w-full flex flex-col gap-12 lg:grid grid-cols-2 md:gap-16 pt-8'>
            <TestimonyCard
              image=""
              testimony="Our aim is to prove that there is no need to be professional in AI and you should't know how it works to use it and make your product better."
              name="Gary Bradski"
              designation="OpenCV Founder"
            />
            <TestimonyCard
              image=""
              testimony="Our aim is to prove that there is no need to be professional in AI and you should't know how it works to use it and make your product better."
              name="Gary Bradski"
              designation="OpenCV Founder"
            />
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center items-center py-8 bg-white-light'>
        <div className='w-full'>
          <Content
            heading="What's Happening?"
            para="Check-out these Blogs. Stay informed, inspired, and entertained
            with some engaging content."
            icon={blogsIcon}
          />
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-auto pt-4'>
            <Blog
              image={blog1}
              blogTitle="Integrating ChatGPT in the Enterprise"
              blogDesc="Artificial intelligence has changed the game for businesses, and ChatGPT is one"
              link=""
            />
            <Blog
              image={blog2}
              blogTitle="All About Generative AI & It's Applications"
              blogDesc="Generative AI models use neural networks to identify the patterns and structures within"
              link=""
            />
            <Blog
              image={blog3}
              blogTitle="What is Generative AI?"
              blogDesc="Generative artificial intelligence (AI) describes algorithms (such as ChatGPT) that can be"
              link=""
            />
          </div>
        </div>
      </section>
      <section id='contactSection' className='w-full flex my-16 justify-center items-center py-8'>
        <div className='w-full '>
          <Content
            heading="Need our expertise?"
            para="Propel your goals forward with specialized knowledge and
            experience of our Mentors."
            icon={callscheduleIcon}
          />
          <div>
            <CalendlyWidget />
          </div>
        </div>

      </section>


    </section>
  )
}

export default Home