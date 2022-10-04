# Kuwait Prayer Times API
Based on [AlAdhan API](https://aladhan.com/prayer-times-api)

## Usage
```bash
curl api.q8prayers.com
```

## Sample response
```json
{
  "status":200,
  "statusText":"OK",
  "timings":{
    "Fajr":{
      "en":{
        "name":"Fajr",
        "time":"5:17 AM"
      },
      "ar":{
        "name":"الفجر",
        "time":"٥:١٧ ص"
      }
    },
    "Dhuhr":{
      "en":{
        "name":"Dhuhr",
        "time":"11:51 AM"
      },
      "ar":{
        "name":"الظُهر",
        "time":"١١:٥١ ص"
      }
    },
    "Asr":{
      "en":{
        "name":"Asr",
        "time":"2:41 PM"
      },
      "ar":{
        "name":"العصر",
        "time":"٢:٤١ م"
      }
    },
    "Maghrib":{
      "en":{
        "name":"Maghrib",
        "time":"5:00 PM"
      },
      "ar":{
        "name":"المغرب",
        "time":"٥:٠٠ م"
      }
    },
    "Isha":{
      "en":{
        "name":"Isha",
        "time":"6:22 PM"
      },
      "ar":{
        "name":"العِشاء",
        "time":"٦:٢٢ م"
      }
    }
  },
  "date":{
    "hijri":{
      "en":{
        "name":"Hijri",
        "date":"26-05-1443"
      },
      "ar":{
        "name":"هجري",
        "date":"٢٦-٠٥-١٤٤٣"
      }
    },
    "gregorian":{
      "en":{
        "name":"Gregorian",
        "date":"31-12-2021"
      },
      "ar":{
        "name":"ميلادي",
        "date":"٣١-١٢-٢٠٢١"
      }
    }
  }
}
```

## Development
- Sign up for **Workers** account [here](https://dash.cloudflare.com/sign-up/workers)
- Install [Wrangler](https://github.com/cloudflare/wrangler), the **Workers** CLI
- Clone the project
- Initialize a **Workers** project 
  - `$ wrangler init q8-prayers-api`
- Develop 
  - `$ wrangler dev`

Further documentation for **Wrangler** can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## License
MIT
