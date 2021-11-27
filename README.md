# Kuwait Prayer Times API
Based on [AlAdhan API](https://aladhan.com/prayer-times-api)

## Usage
```bash
curl api.q8prayers.com
```

## Sample response
```json
{
    "status": 200,
    "statusText": "OK",
    "timings": {
        "Fajr": {
            "en": {
                "name": "Fajr",
                "time": "4:58 AM"
            },
            "ar": {
                "name": "الفجر",
                "time": "٤:٥٨ ص"
            }
        },
        "Dhuhr": {
            "en": {
                "name": "Dhuhr",
                "time": "11:36 AM"
            },
            "ar": {
                "name": "الظُهر",
                "time": "١١:٣٦ ص"
            }
        },
        "Asr": {
            "en": {
                "name": "Asr",
                "time": "2:30 PM"
            },
            "ar": {
                "name": "العصر",
                "time": "٢:٣٠ م"
            }
        },
        "Maghrib": {
            "en": {
                "name": "Maghrib",
                "time": "4:50 PM"
            },
            "ar": {
                "name": "المغرب",
                "time": "٤:٥٠ م"
            }
        },
        "Isha": {
            "en": {
                "name": "Isha",
                "time": "6:11 PM"
            },
            "ar": {
                "name": "العِشاء",
                "time": "٦:١١ م"
            }
        }
    },
    "date": {
        "hijri": {
            "en": "21-04-1443",
            "ar": "٢١-٠٤-١٤٤٣"
        },
        "gregorian": {
            "en": "27-11-2021",
            "ar": "٢٧-١١-٢٠٢١"
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
  - `$ wrangler preview --watch`

Further documentation for **Wrangler** can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## License
MIT
