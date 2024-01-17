import React from 'react'
import { useState } from 'react'

const Home = () => {

    const [isExplanationOpen, setIsExplanationOpen] = useState(false);

    const toggleExplanation = () => {
      setIsExplanationOpen(!isExplanationOpen);
    };

  return (
    <>
        <div className='sectionOne bg-darkBlue lg:bg-transparent'>
            <div className="flex flex-col gap-y-10 items-center lg:items-start container mx-auto py-10 lg:py-60">
                <h2 className='text-white text-4xl'>Sadece Disney+’ta</h2>
                <span className='text-gray-400 text-2xl pl-12 lg:pl-0'>Başka hiçbir dijital yayın platformunda bulamayacağın film, dizi ve <br />orijinal içerikler.</span>
            </div>
            <img className='lg:hidden mt-32' src="https://cnbl-cdn.bamgrid.com/assets/73026f32a2be0e42b3117f697c83093482d7943ba8c56ad8b65fd901ec00662f/original" alt="" />
        </div>
        <div className='sectionTwo bg-darkBlue'>
            <div className="flex flex-col items-center justify-center gap-y-10 pt-20">
                <h2 className='text-white text-4xl font-bold'>Dilediğin gibi izle</h2>
                <span className='text-gray-400 text-2xl pl-10 lg:pl-0'>Dünyanın en iyi hikayelerinin tadını çıkar - istediğin zaman, istediğin yerde.</span>
            </div>
            <img src="https://cnbl-cdn.bamgrid.com/assets/68236338878ee525f3afbc79f266852c2e1c6d070d25bd8c85cd3d894be66624/original" alt="" />
        </div>
        <div className="sectionThree bg-darkBlue flex flex-col lg:flex-row gap-x-10 justify-center items-center pt-10 lg:pt-0 pb-64">
            <div className="flex flex-col gap-y-7 items-center h-72">
                <img src="https://cnbl-cdn.bamgrid.com/assets/f496c4734732c167a1643eaa214dbdd3a9124a04a66c4f78f83435fd80a13534/original" alt="" />
                <h3 className='text-white text-4xl'>Sonsuz Eğlence</h3>
                <span className='text-gray-400 text-xl pl-10 lg:pl-0'>Binlerce saatlik dizi, film ve orijinal içeriği keşfet.</span>
            </div>
            <div className="flex flex-col gap-y-7 items-center h-72">
                <img src="https://cnbl-cdn.bamgrid.com/assets/bb4f144134120dc90d8a6023a34450e93d4877ea380bd5e8243f49affa022186/original" alt="" />
                <h3 className='text-white text-4xl'>Favori cihazlarında</h3>
                <span className='text-gray-400 text-xl pl-10 lg:pl-0'>Uyumlu cihazlarda aynı anda dört ayrı ekranda izle.</span>
            </div>
            <div className="flex flex-col gap-y-7 items-center h-72">
                <img src="https://cnbl-cdn.bamgrid.com/assets/6876a3855aaa6da0c58b19d95989cec2342f3fe6e079a583456d19539d74bbfb/original" alt="" />
                <h3 className='text-white text-4xl flex justify-center items-center flex-col'>Kullanıcı dostu <br /> <span>ebeveyn kontrolleri</span></h3>
                <span className='text-gray-400 text-xl pl-10 lg:pl-0'>Kullanımı kolay ebeveyn kontrollerimizle aileni güvende <br /> <span className='flex justify-center'>tut.</span></span>
            </div>
        </div>
        <div className='sectionFour bg-darkBlue'>
            <h2 className='text-white text-4xl font-bold flex items-center justify-center pt-10 lg:pt-0'>Sık Sorulan Sorular</h2>
            <div className='container mx-auto flex flex-col gap-y-5 mt-10'>
                <div className="flex flex-col gap-y-4 border border-darkGrey bg-darkGrey px-10 py-3 cursor-pointer" onClick={toggleExplanation}>
                    <div className="flex flex-row justify-between items-center  text-white ">
                        <span className='text-2xl'>Disney+ nedir?</span>
                        <button className={`text-5xl ${isExplanationOpen ? 'hidden' : ''}`} onClick={toggleExplanation}>+</button>
                        <button className={`text-5xl ${isExplanationOpen ? '' : 'hidden'}`} onClick={toggleExplanation}>-</button>
                    </div>
                    <div className={`explanation flex flex-col gap-y-4 ${isExplanationOpen ? '' : 'hidden'}`}>
                        <span className='text-gray-400 text-lg'>Disney+; Disney, Pixar, Marvel, Star Wars, National Geographic ve çok daha fazlasına ait içeriklerin yer aldığı dijital yayın platformudur.</span>
                        <span className='text-gray-400 text-lg'>Disney+, standart üyelik paketi kapsamında birçok ayrıcalık sunar:</span>
                        <ul className='text-gray-400 text-lg list-disc mt-5 ml-10 flex flex-col gap-y-3'>
                            <li>Başka hiçbir yerde izleyemeyeceğin orijinal içerikler, gişe filmleri, bir solukta izlenebilecek diziler ve programlar, atıştırmalık kısa içerikler ve ilham verici belgeseller</li>
                            <li>10 cihaza ve 7 ayrı profile kadar sınırsız indirme imkanı</li>
                            <li>Uyumlu cihazlarda hiçbir ek ücret ödemeden 4K UHD çözünürlükte Dolby Vision ve Dolby Atmos desteğiyle izleme imkanı</li>
                            <li>Özel çocuk profilleri içeren kapsamlı ebeveyn kontrol sistemi</li>
                            <li>Aynı anda 4 ekranda izleme imkanı</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 border border-darkGrey bg-darkGrey px-10 py-3 cursor-pointer" onClick={toggleExplanation}>
                    <div className="flex flex-row justify-between items-center  text-white ">
                        <span className='text-2xl'>Disney+'ta ne izleyebilirim?</span>
                        <button className={`text-5xl ${isExplanationOpen ? 'hidden' : ''}`} onClick={toggleExplanation}>+</button>
                        <button className={`text-5xl ${isExplanationOpen ? '' : 'hidden'}`} onClick={toggleExplanation}>-</button>
                    </div>
                    <div className={`explanation flex flex-col gap-y-4 ${isExplanationOpen ? '' : 'hidden'}`}>
                        <span className='text-gray-400 text-lg'>Dünyanın en iyi hikaye anlatıcılarından binlerce film, belgesel, dizi, animasyon, kısa içerik ve her ay eklenen yeni içeriklerle Disney+’ta her zaman izlemek için bir şey bulacaksın.</span>
                        <ul className='text-gray-400 text-lg list-disc mt-5 ml-10 flex flex-col gap-y-3'>
                            <li>Disney’den “Cruella” ve “Enkanto” gibi gişe rekorları kıran, en yeni canlı aksiyon ve animasyon filmleri</li>
                            <li>Pixar’ın dahi yaratıcılarından, her yaştan izleyici için “Luka” ve “Soul” gibi iç ısıtan hikayeler</li>
                            <li>Marvel Studios’dan mutlaka görülmesi gereken “Loki”, “Hawkeye” ve “WandaVision” gibi orijinal içerikler</li>
                            <li>“Obi-Wan Kenobi” ve “The Mandalorian” gibi çok çok uzak bir galaksiden destansı hikayeler</li>
                            <li>Korkusuz National Geographic kaşifleri eşliğinde aydınlatıcı belgeseller</li>
                            <li>Herkesin konuştuğu “The Dropout”, “How I Met Your Father” gibi orijinal içerikler ve bir solukta yeniden izlenebilecek “How I Met Your Mother” ve “The Walking Dead” gibi dünyaca ünlü fenomen diziler</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 border border-darkGrey bg-darkGrey px-10 py-3 cursor-pointer" onClick={toggleExplanation}>
                    <div className="flex flex-row justify-between items-center  text-white ">
                        <span className='text-2xl'>Disney+'ın fiyatı nedir?</span>
                        <button className={`text-5xl ${isExplanationOpen ? 'hidden' : ''}`} onClick={toggleExplanation}>+</button>
                        <button className={`text-5xl ${isExplanationOpen ? '' : 'hidden'}`} onClick={toggleExplanation}>-</button>
                    </div>
                    <div className={`explanation flex flex-col gap-y-4 ${isExplanationOpen ? '' : 'hidden'}`}>
                        <span className='text-gray-400 text-lg'>Disney+ aylık üyelik bedeli 64,99 TL’dir. Dilersen yıllık üyelik ile (tek ödemede 649,90 TL) 10 ay fiyatına 12 ay izleyebilirsin!*</span>
                        <span className='text-gray-400 text-sm'>*12 ay boyunca aylık ödemeye kıyasla sağlanan avantaj</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 border border-darkGrey bg-darkGrey px-10 py-3 cursor-pointer" onClick={toggleExplanation}>
                    <div className="flex flex-row justify-between items-center  text-white ">
                        <span className='text-2xl'>Hangi cihazlar destekliyor?</span>
                        <button className={`text-5xl ${isExplanationOpen ? 'hidden' : ''}`} onClick={toggleExplanation}>+</button>
                        <button className={`text-5xl ${isExplanationOpen ? '' : 'hidden'}`} onClick={toggleExplanation}>-</button>
                    </div>
                    <div className={`explanation flex flex-col gap-y-4 ${isExplanationOpen ? '' : 'hidden'}`}>
                        <span className='text-gray-400 text-lg'>Disney+; mobil cihazlar, web tarayıcıları, oyun konsolları, set üstü kutular ve smart TV’leri destekler. Tam liste için buraya tıkla.</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 border border-darkGrey bg-darkGrey px-10 py-3 cursor-pointer" onClick={toggleExplanation}>
                    <div className="flex flex-row justify-between items-center  text-white ">
                        <span className='text-2xl'>Disney+ üyeliği taahhüt gerektiriyor mu?</span>
                        <button className={`text-5xl ${isExplanationOpen ? 'hidden' : ''}`} onClick={toggleExplanation}>+</button>
                        <button className={`text-5xl ${isExplanationOpen ? '' : 'hidden'}`} onClick={toggleExplanation}>-</button>
                    </div>
                    <div className={`explanation flex flex-col gap-y-4 ${isExplanationOpen ? '' : 'hidden'}`}>
                        <span className='text-gray-400 text-lg'>Disney+ üyeliği hiçbir taahhüt gerektirmez ve mevcut faturalandırma döneminin bitiminden itibaren geçerli olmak kaydıyla üyeliğini dilediğin zaman iptal edebilirsin. Aşağıdaki 5 kolay adımı izlemen yeterli.</span>
                        <ul className='text-gray-400 text-lg mt-5 ml-10 flex flex-col gap-y-3 list-decimal'>
                            <li>www.disneyplus.com’a gidip hesabına giriş yap</li>
                            <li>Profilini seç</li>
                            <li>Hesap bölümünü seç</li>
                            <li>Üyeliği İptal Et’i seç</li>
                            <li>İptal İşlemini Tamamla’yı seçerek onayla</li>
                        </ul>
                        <span className='text-gray-400 text-lg'>Daha fazla bilgi için buraya tıkla.</span>
                    </div>
                </div>
            </div>
       </div>

       <div className='sectionFive bg-darkBlue'>
            <h2 className='text-white text-4xl font-bold flex  justify-center pt-32'>Favori cihazlarında</h2>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between mt-20">
                <div className="flex flex-col gap-y-3 items-center">
                    <img className=' w-96' src="https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original" alt="" />
                    <h3 className='text-3xl text-white font-bold'>TV</h3>
                    <div className="flex flex-col items-center">
                        <span className='text-gray-400 text-xl'>Amazon Fire TV</span>
                        <span className='text-gray-400 text-xl'>Android TV</span>
                        <span className='text-gray-400 text-xl'>Apple TV</span>
                        <span className='text-gray-400 text-xl'>Arçelik*</span>
                        <span className='text-gray-400 text-xl'>Beko*</span>
                        <span className='text-gray-400 text-xl'>Chromecast</span>
                        <span className='text-gray-400 text-xl'>Hisense</span>
                        <span className='text-gray-400 text-xl'>LG</span>
                        <span className='text-gray-400 text-xl'>Panasonic</span>
                        <span className='text-gray-400 text-xl'>Samsung</span>
                        <span className='text-gray-400 text-xl'>Vestel*</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 items-center">
                    <img className=' w-96' src="https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original" alt="" />
                    <h3 className='text-3xl text-white font-bold'>Bilgisayar</h3>
                    <div className="flex flex-col items-center">
                        <span className='text-gray-400 text-xl'>Chrome OS</span>
                        <span className='text-gray-400 text-xl'>MacOS</span>
                        <span className='text-gray-400 text-xl'>Windows PC</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 items-center">
                    <img className=' w-96' src="https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original" alt="" />
                    <h3 className='text-3xl text-white font-bold'>Cep Telefonu ve Tablet</h3>
                    <div className="flex flex-col items-center">
                        <span className='text-gray-400 text-xl'>Amazon Fire Tablet</span>
                        <span className='text-gray-400 text-xl'>Android Telefonlar ve Tabletler</span>
                        <span className='text-gray-400 text-xl'>iPhone ve iPad</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 items-center">
                    <img className=' w-96' src="https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original" alt="" />
                    <h3 className='text-3xl text-white font-bold'>Oyun Konsolları</h3>
                    <div className="flex flex-col items-center">
                        <span className='text-gray-400 text-xl'>PS4</span>
                        <span className='text-gray-400 text-xl'>PS5</span>
                        <span className='text-gray-400 text-xl'>Xbox One</span>
                        <span className='text-gray-400 text-xl'>Xbox Series X</span>
                        <span className='text-gray-400 text-xl'>Xbox Series S</span>
                    </div>
                </div>
            </div>
            <span className='text-gray-400 flex justify-center mt-10 font-bold'>*Disney+ henüz Linux işletim sistemli Arçelik, Beko ve Vestel TV’leri desteklememektedir.</span>
        </div>
    </>
    
  )
}

export default Home