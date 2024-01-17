import React from 'react'

const Banner = () => {
  return (
    <div className='banner flex bg-center bg-cover'>
        <div className="flex flex-col container mx-auto items-center justify-center gap-y-10 w-3/4">
            <h1 className='flex text-2xl lg:text-5xl font-bold text-white leading-normal'>Yepyeni Orijinal içerikleri, gişe rekortmeni yapımları, izlemeye doyamayacağın dizileri ve çok daha fazlasını izle</h1>
            <span className='text-gray-300 text-xl lg:text-3xl'>Dilediğin zaman iptal et.*</span>
            <button className='border border-blue-500 bg-blue-500 text-2xl text-white w-60 lg:w-96 h-14 hover:opacity-90'><a href="#">ŞİMDİ ÜYE OL</a></button>
            <span className='text-gray-400 text-xl lg:text-2xl'>Yıllık üyeliği seç, aylık ödemeye kıyasla 10 ay fiyatına 12 ay izle.</span>
            <span className='text-gray-400 text-sm'>*fatura döneminin sonundan itibaren geçerlidir. Üyelik gereklidir. <br /> <span className='flex justify-center'>Echo, 10 Ocak tarihinde yayında.</span></span>
        </div>
    </div>
  )
}

export default Banner