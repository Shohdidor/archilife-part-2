// api 
let api = "http://localhost:3000/data"

import React, { useEffect, useState } from 'react'
import ArNumber from '../../Component/ArNumber/ArNumber'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';


function Menu() {

  const swiperRef = useRef(null);

  const [data, setData] = useState(null)

  const navigate = useNavigate()

  async function getData() {
    try {

      let data = await axios.get(api)
      console.log(data.data);

      setData(data.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <h1 className='text-[30px] text-center cursor-default font-medium pt-[100px] '>
        ARCHILIFE بالأرقام
      </h1>

      <div className='sm:grid sm:grid-cols-3 sm:px-[150px] sm:pt-[50px]'>
        <ArNumber number={"٢"} info={"إنتاج الورش"} text={"إنتاج خاص في ألماتي وشيمنكت"} />
        <ArNumber number={"٧"} info={"سَنَوات"} text={"نحوّل المساحات العامة"} />
        <ArNumber number={"٥٠+"} info={"مُحْتَرِفُون"} text={"يعملون على تحسين المساحات العامة"} />
        <ArNumber number={"٣٠٠+"} info={"مَشَارِيع مُنفَّذَة"} text={"في المواقع الهامة عبر كازاخستان"} />
        <ArNumber number={"٥٠%"} info={"العملاء"} text={"يأتون عن طريق التوصيات"} />
        <ArNumber number={"٣٥٠٠"} info={"بِلاط"} text={"تم إنتاجه في ٦ أشهر من هذا العام"} />
      </div>

      <h1 className='pt-[150px] font-medium text-[30px] text-center pb-[50px]'>
        المشاريع المنفذة
      </h1>

      <div className='sm:grid sm:grid-cols-4 sm:items-center sm:px-[160px]'>

        {data?.map((e) => {
          console.log(e);

          return (
            <>
              {
                e.product1.map((elem) => {
                  console.log(elem);
                  return <>
                    <div className='px-[20px] text-right pb-[75px] sm:h-[50vh]'>

                      <img onClick={() => navigate(`/Profile/${elem.id}`)} src={elem.img} alt="product Image" className='mb-[15px] sm:w-full sm:cursor-pointer sm:h-[25vh]' />
                      <h1 className='mb-[15px] font-medium cursor-default'>
                        {elem.ProductName.slice(0, 25) + "..."}
                      </h1>
                      <p className='text-gray-400 font-mono cursor-default'>
                        {elem.data}
                      </p>
                    </div>
                  </>
                })
              }
            </>
          )
        })}

      </div>


      <div className='pb-[100px]'>
        <button className='bg-[#496D9D] m-auto flex justify-center rounded-[50px] text-white px-[50px] text-[19px] py-[10px]'>
          عرض جميع المشاريع
        </button>
      </div>


      <div className='bg-[#F0F0F0] sm:pb-[50px]'>

        <h1 className='text-[35px] py-[65px] font-medium text-center'>
          منتجاتنا
        </h1>
        <div className='sm:grid sm:grid-cols-3 sm:gap-[20px] sm:pl-[100px]'>

          {data?.map((e) => {

            return (

              <>
                {
                  e.product2.map((elem) => {

                    return <>

                      <div className='px-[20px] text-right pb-[75px] sm:h-full'>

                        <img onClick={() => navigate(`/Catalog/${elem.Category}`)} src={elem.img} className='sm:w-[80%]' alt="Product Image" />

                        <div className='bg-white px-[25px] sm:w-[80%]'>
                          <h1 className='text-[17px] font-medium py-[10px]'>
                            {elem.ProductName}
                          </h1>
                          <p>
                            {elem.AboutProduct}
                          </p>
                          <div className='py-[10px]' onClick={() => navigate(`/Catalog/${elem.id}`)}>
                            <button className='text-[#C4956A] font-medium'>
                              المزيد →
                            </button>
                            <button onClick={() => navigate(`/Catalog/${elem.id}`)} className='hover:text-[#C4956A] text-white pl-[10px] font-medium'>
                              اطلب الآن →
                            </button>
                          </div>
                        </div>
                      </div>


                    </>
                  })
                }
              </>
            )
          })}

        </div>

      </div>


      <div className='bg-[#F0F0F0] text-center text-[30px] font-sans'>
        <h1 className='text-[20px]'>مجموعات وحدات من سلاح الجو الإسرائيلي</h1>
        <div className='flex gap-10 pt-[100px] flex-col sm:flex-row sm:justify-center'>
          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/one.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 py-[20px] pl-[110px] sm:pl-[170px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>

          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/two.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 pl-[110px] sm:pl-[170px] py-[20px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>

          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/three.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 pl-[110px] sm:pl-[170px] py-[20px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='secti on__one bg-[#F0F0F0] py-[100px] text-center flex-col sm:flex-row gap-20 sm:text-start sm:flex sm:pl-[80px]'>
        <div className='flex flex-col gap-3 sm:justify-center sm:pl-[80px]'>
          <h1 className='text-[25px] sm:text-right sm:text-[35px] font-bold'>بنقرة واحدة:</h1>
          <h3 className='text-[20px] sm:text-right sm:text-[30px]'>قم بتنزيل كتالوج الأشكال المعمارية الصغيرة</h3>
          <p className='text-gray-400 sm:text-right text-[20px]'>تم التحديث: 11 نوفمبر 2023</p>
          <div className='sm:flex sm:justify-end'>
            <button className='bg-[#C4956A] text-[#fff] px-[30px] text-[20px] py-[8px] rounded-[40px]'>احصل على الكتالوج</button>
          </div>
        </div>
        <div className='px-[30px] py-[50px] sm:p-[0px]'>
          <img src="src/images/image.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] sm:gap-0 md:flex-row p-4 md:p-12">
      <div className="flex-1 bg-white sm:h-full sm:mt-[70px] rounded-lg shadow-lg p-8 py-[70px]">
        <ul className="space-y-10 text-right">
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center border-4 border-gray-300 text-gray-500 rounded-full text-lg font-bold">
              −
            </span>
            <p className="text-gray-700 text-lg">أسعار مرتفعة بدون خصومات وبرامج ولاء</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center border-4 border-gray-300 text-gray-500 rounded-full text-lg font-bold">
              −
            </span>
            <p className="text-gray-700 text-lg">بطء في معالجة الطلبات وتأخير في التصنيع والتسليم</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center border-4 border-gray-300 text-gray-500 rounded-full text-lg font-bold">
              −
            </span>
            <p className="text-gray-700 text-lg">مشاكل في التوصيل أو عدم وجوده</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center border-4 border-gray-300 text-gray-500 rounded-full text-lg font-bold">
              −
            </span>
            <p className="text-gray-700 text-lg">عدم القدرة على إنتاج الطلبات الخاصة حسب المواصفات</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center border-4 border-gray-300 text-gray-500 rounded-full text-lg font-bold">
              −
            </span>
            <p className="text-gray-700 text-lg">جودة مشكوك فيها، عدم توفر ضمانات، وعدم الامتثال للمعايير</p>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-blue-50 border-4 border-[#27456E] rounded-lg shadow-lg p-8 h-auto">
        <ul className="space-y-10 text-right">
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center text-white bg-[#27456E] rounded-full text-lg font-bold">
              +
            </span>
            <p className="text-blue-900 text-lg">أفضل العروض السعرية - أرخص بمقدار الضعف مقارنة بالمنتجات الأجنبية</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center text-white bg-[#27456E] rounded-full text-lg font-bold">
              +
            </span>
            <p className="text-blue-900 text-lg">سرعة عالية في معالجة الطلبات والتصنيع والشحن</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center text-white bg-[#27456E] rounded-full text-lg font-bold">
              +
            </span>
            <p className="text-blue-900 text-lg">توصيل إلى جميع أنحاء كازاخستان بالإضافة إلى التركيب في الموقع</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center text-white bg-[#27456E] rounded-full text-lg font-bold">
              +
            </span>
            <p className="text-blue-900 text-lg">إمكانية إنتاج أي منتج وفقًا للرسومات والمخططات الخاصة</p>
          </li>
          <li className="flex items-center justify-end gap-4">
            <span className="w-10 h-10 flex items-center justify-center text-white bg-[#27456E] rounded-full text-lg font-bold">
              +
            </span>
            <p className="text-blue-900 text-lg">جميع المنتجات - بما في ذلك الطلبات الخاصة - مصنوعة وفقًا للمعايير الوطنية مع الشهادات المطلوبة</p>
          </li>
        </ul>
      </div>
    </div>




      <div>
        <h1 className='font-bold text-[44px] text-center pt-[80px]'>مع من نعمل</h1>
        <div className='sm:flex-row justify-center pt-[80px] sm:flex pb-[100px] gap-5 flex flex-col'>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(1).svg" alt="" />
            </div>
            <h1 className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]'>زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(2).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(3).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(4).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
        </div>
      </div>

      <div className='sm:flex'>
        <div className='text-center flex flex-col gap-2 sm:text-start sm:justify-center sm:ml-[200px]'>
          <h1 className='text-[40px] sm:text-right'>قائمة الأسعار :</h1>
          <h3 className='text-[30px] sm:text-right'>قم بتنزيل قائمة الأسعار
            لجميع منتجاتنا</h3>
          <p className='text-[20px] sm:text-[25px] sm:text-right sm:my-[10px] sm:text-gray-400'>الأسعار الحالية</p>
          <div className='sm:flex sm:justify-end'>
            <button className='text-[#fff] bg-[#27456E] px-[38px] py-[15px] rounded-3xl text-[10px] border-[1px] border-[#27456E] sm:text-[14px] hover:bg-[#fff] hover:text-[#27456E] hover:border-[1px] hover:border-[#27456E] transition-[1s] '>احصل على قائمة الأسعار الآن</button>
          </div>

        </div>
        <div className='py-[80px]'>
          <img src="src/images/96_1.png.png" alt="" />
        </div>
      </div>
      <div className="text-center bg-[#d9d9d9] py-[80px]">
  <h1 className="text-[50px]">التعليقات</h1>
  <h3 className="text-[30px] mb-[100px]">شكرا لك رسائل من عملائنا</h3>
  <div className='sm:hidden block'>
    
  <Swiper
  spaceBetween={30} // Reduced spacing for smaller visuals
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
  className="pt-[50px] w-[50%]"
>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3062-3761-4032-b938-623365343566/-/format/webp/1.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      غب على بك مدينة مستوصف رقم 2
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild6332-3936-4839-b663-323966616136/-/format/webp/2.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      جامعة الملك سعود مكتب أكيمات منطقة نوريزباي
    </h3>
  </SwiperSlide>
  <SwiperSlide className=" bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3738-3638-4665-b333-613663653466/-/format/webp/3.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      سيتي سبيتسستروي إل إل بي
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3064-6636-4563-b132-383662633031/-/format/webp/4.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      اتحاد المهندسين المعماريين في جمهورية كازاخستان
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3761-3762-4434-b262-636533646566/-/format/webp/5.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[15px] sm:text-right sm:w-[230px]">
      ألماتي موتورز إل إل بي قسط
    </h3>
  </SwiperSlide>
</Swiper>
  </div>

  <div className='sm:block hidden'>
    
  <Swiper
  spaceBetween={30} // Reduced spacing for smaller visuals
  slidesPerView={2}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
  className="pt-[50px] w-[50%]"
>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3062-3761-4032-b938-623365343566/-/format/webp/1.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      غب على بك مدينة مستوصف رقم 2
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild6332-3936-4839-b663-323966616136/-/format/webp/2.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      جامعة الملك سعود مكتب أكيمات منطقة نوريزباي
    </h3>
  </SwiperSlide>
  <SwiperSlide className=" bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3738-3638-4665-b333-613663653466/-/format/webp/3.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      سيتي سبيتسستروي إل إل بي
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3064-6636-4563-b132-383662633031/-/format/webp/4.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[25px] text-right sm:px-[10px]">
      اتحاد المهندسين المعماريين في جمهورية كازاخستان
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex bg-transparent flex-col gap-2 items-center">
    <img className="w-[80px] sm:mb-[15px]" src="https://optim.tildacdn.pro/tild3761-3762-4434-b262-636533646566/-/format/webp/5.jpg" alt="" />
    <h3 className="text-[20px] sm:text-[15px] sm:text-right sm:w-[230px]">
      ألماتي موتورز إل إل بي قسط
    </h3>
  </SwiperSlide>
</Swiper>
  </div>

</div>

<div className="bg-gradient-to-b from-gray-50 to-gray-200 text-center py-[70px]">
  <div className="mb-[50px]">
    <h1 className="text-[40px] font-bold text-[#1F2937] tracking-wide">
      يثقون بنا
    </h1>
    <h3 className="text-[24px] text-[#D6A578] font-medium">
      الشركات التي تتعاون معنا
    </h3>
  </div>

  {/* Swiper Section */}
  <div className="relative">
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
      className="px-[20px] sm:px-[40px] md:px-[80px]"
    >
      {/* Slides */}
      {[
        'src/images/23.png.png',
        'src/images/24.png.png',
        'src/images/27.png.png',
        'src/images/20.png.png',
        'src/images/25.png.png',
        'src/images/26.png.png',
      ].map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img
                src={src}
                alt={`Company ${index + 1}`}
                className="mx-auto max-h-[110px] object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* 3D Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6A578] to-[#F4E3C7] blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500 rounded-lg"></div>
            </div>
            {/* Text or Description */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-gray-600 text-sm">
              شركة عالمية
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Navigation Buttons */}
    <div className="absolute inset-0 z-10 flex justify-between items-center px-6 md:px-12">
      <div className="swiper-button-prev flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-[#D6A578] bg-gradient-to-b from-white to-gray-50 rounded-full shadow-lg hover:bg-[#D6A578] hover:text-white cursor-pointer transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="swiper-button-next flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-[#D6A578] bg-gradient-to-b from-white to-gray-50 rounded-full shadow-lg hover:bg-[#D6A578] hover:text-white cursor-pointer transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </div>
    </div>
  </div>
</div>



      <div className='flex flex-col gap-4'>
        <div className='sm:text-center sm:justify-center sm:flex sm:flex-col sm:pl-[370px]'>
          <h1 className='text-[32px]'>هل أنت مصمم أو مهندس معماري?</h1>
          <p className='text-[22px]'>استخدام مافس لدينا في المشاريع الخاصة بك-تحميل النماذج</p>
        </div>
        <div className='flex gap-4 justify-center sm:pb-[40px]'>
          <button className='bg-[#27456E] px-[60px] py-[13px] text-[20px] text-[#fff] sm:px-[150px]'>تحميل النماذج</button>
          <button className='bg-[#C4956A] px-[60px] py-[13px] text-[20px] text-[#fff] sm:px-[150px]'>طلب كتالوج</button>
        </div>
      </div>


      <div className='bg-[url("src/images/back.png")] h-[60vh] w-[100%] mt-[180px] sm:mt-[1px]'>
        <div className='bg-[#fefefedf] h-[60vh] w-[100%]'>
          <div className='text-center sm:flex sm:justify-center gap-[120px]'>
            <div className='w-[220px] m-auto pt-[50px] sm:pt-[80px] sm:m-0 sm:w-[400px]'>
              <img src="src/images/an.png" alt="" />
            </div>
            <div className='flex flex-col gap-5 sm:text-right sm:w-[500px] sm:pt-[80px]'>
              <h1 className='text-[25px] font-bold'>نبذة عن الشركة</h1>
              <h3 className='text-[20px] text-gray-600'>خبير أرشيفورما هو مصنع كازاخستاني للهندسة المعمارية الحديثة
                حلول تحت العلامة التجارية أرهيتاس.</h3>
              <p className='text-[15px] text-gray-800 font-medium'>نحن نغير النهج المتبع في ترتيب الأماكن الحضرية والعامة. نحن نخلق
                بيئة حضرية ودية وأنيقة ومريحة وآمنة. كما
                تصميم وإنتاج الشركة ، ونحن خفض تكلفة
                تنسيق الحدائق من خلال نهج متكامل من الفكرة إلى التثبيت.</p>
              <p className='text-[15px] text-gray-800 font-medium'>نقوم بتصميم وتصنيع الأثاث الحديث في الهواء الطلق و
                بلاط رخامي مركب:
                * مقاعد مريحة
                * أواني الزهور المعيارية
                * الجرار واقية من المخرب
                * محددات الحركة موثوقة
                * أشكال معمارية صغيرة متينة
                * التيرازو التي تواجه وألواح الرصف</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className='bg bg-[url("src/images/Images(1).png")] sm:h-[80vh]'>
          <div className='sm:flex sm:justify-center sm:gap-[51px]'>
            <div>
              <img className='sm:h-[80vh]' src="src/images/Images.png" alt="" />
            </div>
            <div className='sm:flex sm:flex-col sm:justify-center sm:gap-3 flex flex-col gap-8'>
              <div>
                <h1 className='text-[25px] font-bold text-center sm:text-right'>اترك طلب</h1>
                <p className='text-center text-[20px] sm:text-[15px] sm:text-right'>احصل على استشارة عبر الإنترنت
                  مع خبرائنا الرائدين</p>
              </div>
              <div className='flex flex-col px-[50px] bg-[#d2d2d2] w-[80%] h-[25vh] m-auto rounded-2xl justify-center sm:m-0 sm:w-[400px] sm:h-[30vh] gap-5'>
                <input className='inp text-right sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' اسمك' />
                <input className='inp text-right sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' الهاتف' />
                <input className='inp text-right sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' عنوان بريدك الإلكتروني (اختياري)' />
                <div className='sm:flex sm:justify-end'>
                  <button className='px-[40px] py-[5px] bg-[#C4956A] border-[1px] border-[#C4956A] rounded-3xl text-[#fff] hover:bg-[#fff] hover:text-[#525252] transition-[1s]'>إرسال</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Menu