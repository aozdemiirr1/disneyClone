import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-darkBlue flex flex-col justify-center items-center pt-32 pb-20'>
        <img className='w-20' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="" />
        <ul className='flex flex-row gap-x-4 flex-wrap text-gray-400 text-sm mt-10'>
            <li>Üyelik Sözleşmesi</li>
            <li>Gizlilik Politikası</li>
            <li>EMEA Gizlilik Hakları</li>
            <li>Tanımlama Bilgileri Politikası</li>
            <li>İlgi Alanına Dayalı Reklamlar</li>
            <li>Desteklenen Cihazlar</li>
            <li>Yardım Merkezi</li>
            <li>Hakkımızda</li>
            <li>Gizlilik Tercihlerini Yönetin</li>
        </ul>
        <span className='text-gray-400 mt-5 text-sm'>© 2023 Disney ve bağlı kuruluşları. Tüm hakları saklıdır.</span>
    </div>
  )
}

export default Footer