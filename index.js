import times from './PrayTimes'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with a random prayer
 * @param {Request} request
 */
async function handleRequest(request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Content-Type': 'application/json; charset=utf-8'
  }

  try {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    today = dd + '-' + mm + '-' + yyyy

    // TODO: fix/configure the hijri date
    // console.log(new Intl.DateTimeFormat('en-AR-u-ca-islamic').format(Date.now()))

    String.prototype.toArabicNumbers = function(){
      var id= ['٠', '١', '٢', '٣', '٤' ,'٥', '٦', '٧', '٨', '٩']
      return this.replace(/[0-9]/g, function(w){
        return id[+w]
      })
    }

    function reformatDate(lang, date) {
      const h = date.toString().split(':')[0]
      const m = date.toString().split(':')[1]
    
      var am, pm, ampm
    
      lang === 'ar' ? am = 'ص' : am = 'AM'
      lang === 'ar' ? pm = 'م' : pm = 'PM'
      ampm = parseInt(h) >= 12 ? pm : am
    
      return parseInt(h) > 12 ? `${parseInt(h) - 12}:${m} ${ampm}` : `${parseInt(h)}:${m} ${ampm}`
    }

    const Fajr = times.fajr
    const Dhuhr = times.dhuhr
    const Asr = times.asr
    const Maghrib = times.maghrib
    const Isha = times.isha
    // const HijriDate = res.data.date.hijri.date

    const prayers = {
      Fajr: {
        en: {
          name: 'Fajr',
          time: `${reformatDate('en', Fajr)}`
        },
        ar: {
          name: 'الفجر',
          time: `${reformatDate('ar', Fajr).toArabicNumbers()}`
        }
      },
      Dhuhr: {
        en: {
          name: 'Dhuhr',
          time: `${reformatDate('en', Dhuhr)}`
        },
        ar: {
          name: 'الظُهر',
          time: `${reformatDate('ar', Dhuhr).toArabicNumbers()}`
        }
      },
      Asr: {
        en: {
          name: 'Asr',
          time: `${reformatDate('en', Asr)}`
        },
        ar: {
          name: 'العصر',
          time: `${reformatDate('ar', Asr).toArabicNumbers()}`
        }
      },
      Maghrib: {
        en: {
          name: 'Maghrib',
          time: `${reformatDate('en', Maghrib)}`
        },
        ar: {
          name: 'المغرب',
          time: `${reformatDate('ar', Maghrib).toArabicNumbers()}`
        }
      },
      Isha: {
        en: {
          name: 'Isha',
          time: `${reformatDate('en', Isha)}`
        },
        ar: {
          name: 'العِشاء',
          time: `${reformatDate('ar', Isha).toArabicNumbers()}`
        }
      },
    }
    
    const dates = {
      // hijri: {
      //   en: {
      //     name: 'Hijri',
      //     date: HijriDate
      //   },
      //   ar: {
      //     name: 'هجري',
      //     date: HijriDate.toArabicNumbers()
      //   }
      // },
      gregorian: {
        en: {
          name: 'Gregorian',
          date: today
        },
        ar: {
          name: 'ميلادي',
          date: today.toArabicNumbers()
        }
      }
    }
    
    return new Response(JSON.stringify({ status: 200, statusText: 'OK', timings: prayers, date: dates }), {
      status: 200,
      headers: { ...headers }
    })

  } catch (error) {
    return new Response(JSON.stringify({ status: 500, statusText: 'Internal Server Error' }), {
      status: 500,
      headers: { ...headers },
    })
  }
}
