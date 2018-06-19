
const debug = require('debug')('app:kappersController');
const MongoClient = require('mongodb').MongoClient;
const paginate = require('express-paginate');

function kappersController() {

    const kappers_db = [
        {
            "index": 1,
            "listingId": "18503363",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "De Knappe Knip",
            "phone": "020-6712253",
            "snippetDescription": {
                "text": "Bij kapper de Knappe Knip ben je op het juiste adres om van je kappers angst af te komen. Ik bespreek altijd van te voren goed af hoeveel er vanaf moet en laat zovee",
                "leesMeer": true
            },
            "websiteUrl": "http://www.deknappeknip.nl",
            "category": "Kapper",
            "address": {
                "street": "Olympiaplein",
                "houseNoFrom": "116",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1076AK",
                "coordinates": {
                    "latitude": 52.346848,
                    "longitude": 4.865789
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/logo/18503363/ALPlAMwBDFLgYjOXhuKNeSHXFA/de-knappe-knip.jpg",
                    "altText": "De Knappe Knip"
                }
            },
            "avgRating": 9.3,
            "totalReviews": 36,
            "kvTypeCustomer": true,
            "kvReviewUrl": "https://www.klantenvertellen.nl/reviews/1000043/kapsalon-de-knappe-knip",
            "kvAddReviewUrl": "https://www.klantenvertellen.nl/add-review/1000043/kapsalon-de-knappe-knip",
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "6443171",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/de-knappe-knip/18503363/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/olympiaplein-116-1076ak-amsterdam/13-1/?what=Kapper&where=Olympiaplein+116%2C+1076AK%2C+Amsterdam&latitude=52.346848&longitude=4.865789&routeTo=Olympiaplein+116%2C+1076AK%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 2,
            "listingId": "18394095",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Interline Hairstudio",
            "phone": "020-6266012",
            "snippetDescription": {
                "text": "Alle haartypen, \nGastvrij en huiselijk.\nKwaliteit en professionaliteit\nGoede kwaliteit prijs verhouding\nHigh end kwaliteits pr",
                "leesMeer": false
            },
            "websiteUrl": "http://www.interlinehairstudio.nl",
            "category": "Kapper",
            "address": {
                "street": "Rozengracht",
                "houseNoFrom": "51",
                "houseLetterFrom": "A",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1016LS",
                "coordinates": {
                    "latitude": 52.373493,
                    "longitude": 4.88135
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/logo/18394095/AOco97gBDFMgOGqXhiF5L-rvxQ/interline-hairstudio.jpg",
                    "altText": "Interline Hairstudio"
                }
            },
            "avgRating": 8.9,
            "totalReviews": 7,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1870827",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/interline-hairstudio/18394095/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/rozengracht-51-a-1016ls-amsterdam/13-1/?what=Kapper&where=Rozengracht+51%2FA%2C+1016LS%2C+Amsterdam&latitude=52.373493&longitude=4.88135&routeTo=Rozengracht+51%2FA%2C+1016LS%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 3,
            "listingId": "20760315",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Topkappers B V",
            "phone": "020-6249293",
            "snippetDescription": {
                "text": "Midden in de Jordaan! TopKappers. Een salon met een ongedwongen sfeer. Het team geeft u op een professionele manier  advies op het gebied van kleur, haarverl",
                "leesMeer": true
            },
            "websiteUrl": "http://www.topkappers.nl",
            "category": "Kapper",
            "address": {
                "street": "Westerstraat",
                "houseNoFrom": "198",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1015MR",
                "coordinates": {
                    "latitude": 52.378167,
                    "longitude": 4.881429
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ACySOlOHAwQAAABkAQxYufDql4ZqK76ykFQA/topkappers-b-v-1.jpg",
                    "altText": "Topkappers B V"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "13621056",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Topkappers B V",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/topkappers-b-v/20760315/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/westerstraat-198-1015mr-amsterdam/13-1/?what=Kapper&where=Westerstraat+198%2C+1015MR%2C+Amsterdam&latitude=52.378167&longitude=4.881429&routeTo=Westerstraat+198%2C+1015MR%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 4,
            "listingId": "20016913",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Astrid Kapsalon",
            "phone": "020-6255888",
            "snippetDescription": {
                "text": "Een kleine Salon waar we de tijd voor u nemen en een moment van rust een beleving is voor u.",
                "leesMeer": false
            },
            "websiteUrl": "http://www.salonastrid-amsterdam.nl",
            "category": "Kapper",
            "address": {
                "street": "Vinkenstraat",
                "houseNoFrom": "55",
                "houseLetterFrom": "C",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1013JM",
                "coordinates": {
                    "latitude": 52.382091,
                    "longitude": 4.887068
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AKDAFR2HAwQAAABkAQxah_SCl4bubaDxqs8A/astrid-kapsalon-1.jpg",
                    "altText": "Astrid Kapsalon"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": "10:00:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1902055",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/astrid-kapsalon/20016913/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/vinkenstraat-55-c-1013jm-amsterdam/13-1/?what=Kapper&where=Vinkenstraat+55%2FC%2C+1013JM%2C+Amsterdam&latitude=52.382091&longitude=4.887068&routeTo=Vinkenstraat+55%2FC%2C+1013JM%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 5,
            "listingId": "18388809",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Backx Caroline Hairstyliste",
            "phone": "06-50814855",
            "snippetDescription": {
                "text": "Kapper & Hairstylist",
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": null,
                "houseNoFrom": null,
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": null,
                "coordinates": null
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "60227783",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/backx-caroline-hairstyliste/18388809/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/amsterdam/13-1/?what=Kapper&where=Amsterdam&latitude=0.0&longitude=0.0&routeTo=Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 6,
            "listingId": "19246946",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Dameskapsalon J vd Borght",
            "phone": "020-6853783",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.jitty.nl",
            "category": "Kapper",
            "address": {
                "street": "Jan van Galenstraat",
                "houseNoFrom": "243",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1056BX",
                "coordinates": {
                    "latitude": 52.373154,
                    "longitude": 4.851456
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AKwIuSqHAwQAAABkAQxX_HO7l4bcsWSekSkA/dameskapsalon-j-vd-borght-1.jpg",
                    "altText": "Dameskapsalon J vd Borght"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": "FOLDER",
            "collapseId": "2769404",
            "collapseLink": "/kapper/amsterdam/3-1/?what=kapper&where=Amsterdam&collapsing=false&encodedRefinement=collapseid%7E2769404",
            "collapseListingAmount": 2,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1863764",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/dameskapsalon-j-vd-borght/19246946/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/jan-van-galenstraat-243-1056bx-amsterdam/13-1/?what=Kapper&where=Jan+van+Galenstraat+243%2C+1056BX%2C+Amsterdam&latitude=52.373154&longitude=4.851456&routeTo=Jan+van+Galenstraat+243%2C+1056BX%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 7,
            "listingId": "20254154",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Dynamic Looks",
            "phone": "020-4212087",
            "snippetDescription": {
                "text": "Dames en HerenKapsalon Dynamic looks betaalbare haarmode hartje Jordaan.\nGelegen aan de gezellige Westerstraat.",
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Westerstraat",
                "houseNoFrom": "246",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1015MT",
                "coordinates": {
                    "latitude": 52.377964,
                    "longitude": 4.880359
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AJoXFJuHAwQAAABkAQxY-jBtl4ZqK79F2uMA/dynamic-looks-1.jpg",
                    "altText": "Dynamic Looks"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "60299479",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/dynamic-looks/20254154/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/westerstraat-246-1015mt-amsterdam/13-1/?what=Kapper&where=Westerstraat+246%2C+1015MT%2C+Amsterdam&latitude=52.377964&longitude=4.880359&routeTo=Westerstraat+246%2C+1015MT%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 8,
            "listingId": "18388810",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Hairstyliste Caroline Backx",
            "phone": "06-50814855",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.carolinebackx.com",
            "category": "Kapper",
            "address": {
                "street": "Daniel Stalpertstraat",
                "houseNoFrom": "69",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1072XB",
                "coordinates": {
                    "latitude": 52.356256,
                    "longitude": 4.890237
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "60227783",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/hairstyliste-caroline-backx/18388810/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/daniel-stalpertstraat-69-1072xb-amsterdam/13-1/?what=Kapper&where=Daniel+Stalpertstraat+69%2C+1072XB%2C+Amsterdam&latitude=52.356256&longitude=4.890237&routeTo=Daniel+Stalpertstraat+69%2C+1072XB%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 9,
            "listingId": "18977430",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Hans Beers Hair Stage",
            "phone": "020-6171614",
            "snippetDescription": {
                "text": "Sassoon Professional Partner\nHigh level hair cutting and colouring\nUitgebreid persoonlijk advies",
                "leesMeer": false
            },
            "websiteUrl": "http://www.hansbeers.com",
            "category": "Kapper",
            "address": {
                "street": "Sloterweg",
                "houseNoFrom": "1254",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1066CW",
                "coordinates": {
                    "latitude": 52.341387,
                    "longitude": 4.793876
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AIKL9sCHAwQAAABkAQxYBnMhl4bcsWS9XzYA/hans-beers-hair-stage-1.jpg",
                    "altText": "Hans Beers Hair Stage"
                }
            },
            "avgRating": 10,
            "totalReviews": 2,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "4519249",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/hans-beers-hair-stage/18977430/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/sloterweg-1254-1066cw-amsterdam/13-1/?what=Kapper&where=Sloterweg+1254%2C+1066CW%2C+Amsterdam&latitude=52.341387&longitude=4.793876&routeTo=Sloterweg+1254%2C+1066CW%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 10,
            "listingId": "20004458",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Helmer + Friends",
            "phone": "020-6237384",
            "snippetDescription": {
                "text": "Hier ben je welkom. Hier kom je voor je haar en voor je goede humeur. Dat is wat iedereen ervaart die binnenstapt bij Helmer + Friends. Kappers met aandacht, met lek",
                "leesMeer": true
            },
            "websiteUrl": "http://www.helmerplusfriends.nl",
            "category": "Kapper",
            "address": {
                "street": "Prinsengracht",
                "houseNoFrom": "748",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1017LC",
                "coordinates": {
                    "latitude": 52.361402,
                    "longitude": 4.895802
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ALMroFCHAwQAAABkAQxZJ0D1l4ZqK7_coBcA/helmer-friends-1.jpg",
                    "altText": "Helmer + Friends"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1872304",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/helmer-friends/20004458/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/prinsengracht-748-hs-1017lc-amsterdam/13-1/?what=Kapper&where=Prinsengracht+748%2FHS%2C+1017LC%2C+Amsterdam&latitude=52.361402&longitude=4.895802&routeTo=Prinsengracht+748%2FHS%2C+1017LC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 11,
            "listingId": "19247315",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Koffijberg Hairdressers",
            "phone": "020-6732374",
            "snippetDescription": {
                "text": "Kleurspecialist\nPersoonlijke aandacht en advies op maat\nVakmanschap\nMooi Grijs haar",
                "leesMeer": false
            },
            "websiteUrl": "http://www.koffijberg.nl",
            "category": "Kapper",
            "address": {
                "street": "Scheldestraat",
                "houseNoFrom": "8",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1078GK",
                "coordinates": {
                    "latitude": 52.347793,
                    "longitude": 4.891109
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AKBvVFiHAwQAAABkAQxY9ekfl4ZqK784feYA/koffijberg-hairdressers-1.jpg",
                    "altText": "Koffijberg Hairdressers"
                }
            },
            "avgRating": 6,
            "totalReviews": 2,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": "09:30:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1121429",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/koffijberg-hairdressers/19247315/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/scheldestraat-8-1078gk-amsterdam/13-1/?what=Kapper&where=Scheldestraat+8%2C+1078GK%2C+Amsterdam&latitude=52.347793&longitude=4.891109&routeTo=Scheldestraat+8%2C+1078GK%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 12,
            "listingId": "19702398",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Kymzou Hair and Make-up",
            "phone": "020-6272158",
            "snippetDescription": {
                "text": "In het hartje van de Jordaan, in een van de gezelligste straatjes van de Amsterdam, zit Kymzou.Een moderne kapperszaak waar het gastvrije team precies weet wat je no",
                "leesMeer": true
            },
            "websiteUrl": "http://www.kymzou.nl",
            "category": "Kapper",
            "address": {
                "street": "Tweede Tuindwarsstraat",
                "houseNoFrom": "4",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1015RZ",
                "coordinates": {
                    "latitude": 52.377296,
                    "longitude": 4.881674
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ADMSDICHAwQAAABkAQxaNsQal4bubaDVyPYA/kymzou-hair-and-make-up-1.jpg",
                    "altText": "Kymzou Hair and Make-up"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14164179",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Kymzou Hair and Make-up",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/kymzou-hair-and-make-up/19702398/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/tweede-tuindwarsstraat-4-hs-1015rz-amsterdam/13-1/?what=Kapper&where=Tweede+Tuindwarsstraat+4%2FHS%2C+1015RZ%2C+Amsterdam&latitude=52.377296&longitude=4.881674&routeTo=Tweede+Tuindwarsstraat+4%2FHS%2C+1015RZ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 13,
            "listingId": "19675757",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Lorenzo Coiffures",
            "phone": "020-6181600",
            "snippetDescription": {
                "text": "Lorenzo Coiffures missie is een level van service die u nergens anders vindt. ",
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Willemsparkweg",
                "houseNoFrom": "81",
                "houseLetterFrom": "85",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1071GT",
                "coordinates": {
                    "latitude": 52.356899,
                    "longitude": 4.874537
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AIATeI2HAwQAAABkAQxZSWSGl4YzXmBjA6QA/lorenzo-coiffures-1.jpg",
                    "altText": "Lorenzo Coiffures"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14624178",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/lorenzo-coiffures/19675757/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/willemsparkweg-81-85-1071gt-amsterdam/13-1/?what=Kapper&where=Willemsparkweg+81%2F85%2C+1071GT%2C+Amsterdam&latitude=52.356899&longitude=4.874537&routeTo=Willemsparkweg+81%2F85%2C+1071GT%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 14,
            "listingId": "19213445",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Marloes vd Berg Coiffures",
            "phone": "020-6440432",
            "snippetDescription": {
                "text": "Welkom bij Marloes van den Berg Coiffures Een team van ervaren kappers, die specialisten zijn in knippen, föhnen, kleuren, watergolven, opsteken, permanenten, st",
                "leesMeer": true
            },
            "websiteUrl": "http://www.marloescoiffures.nl",
            "category": "Kapper",
            "address": {
                "street": "Kastelenstraat",
                "houseNoFrom": "106",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1082EJ",
                "coordinates": {
                    "latitude": 52.326198,
                    "longitude": 4.879058
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ALcG6pGHAwQAAABkAQxYue9-l4ZqK76ygqsA/marloes-vd-berg-coiffures-1.jpg",
                    "altText": "Marloes vd Berg Coiffures"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1189355",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Marloes vd Berg Coiffures",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/marloes-vd-berg-coiffures/19213445/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/kastelenstraat-106-1082ej-amsterdam/13-1/?what=Kapper&where=Kastelenstraat+106%2C+1082EJ%2C+Amsterdam&latitude=52.326198&longitude=4.879058&routeTo=Kastelenstraat+106%2C+1082EJ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 15,
            "listingId": "19248468",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Ron Hair Studio",
            "phone": "020-6713514",
            "snippetDescription": {
                "text": "Ron Hair Studio is een gezellige en trendy kapsalon uit Amsterdam met een groot aantal mogelijkheden met betrekking tot haarverzorging.   Bent u toe aan een ",
                "leesMeer": true
            },
            "websiteUrl": "http://www.ronhairstudio.nl",
            "category": "Kapper",
            "address": {
                "street": "Biesboschstraat",
                "houseNoFrom": "8",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1078MS",
                "coordinates": {
                    "latitude": 52.345537,
                    "longitude": 4.899617
                }
            },
            "media": null,
            "avgRating": 9.6,
            "totalReviews": 11,
            "kvTypeCustomer": true,
            "kvReviewUrl": "https://www.klantenvertellen.nl/reviews/1002179/ron-hair-studio",
            "kvAddReviewUrl": "https://www.klantenvertellen.nl/add-review/1002179/ron-hair-studio",
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1178854",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/ron-hair-studio/19248468/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/biesboschstraat-8-1078ms-amsterdam/13-1/?what=Kapper&where=Biesboschstraat+8%2C+1078MS%2C+Amsterdam&latitude=52.345537&longitude=4.899617&routeTo=Biesboschstraat+8%2C+1078MS%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 16,
            "listingId": "19716950",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Sarah-Jane's Hairfashion",
            "phone": "020-4866878",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.sarahjanes.nl",
            "category": "Kapper",
            "address": {
                "street": "Bos en Lommerweg",
                "houseNoFrom": "87",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1055DP",
                "coordinates": {
                    "latitude": 52.382099,
                    "longitude": 4.855813
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ACebmPyHAwQAAABkAQxZGhKwl4ZqK7-rggEA/sarah-jane-s-hairfashion-1.jpg",
                    "altText": "Sarah-Jane's Hairfashion"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14063133",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/sarah-jane-s-hairfashion/19716950/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/bos-en-lommerweg-87-1055dp-amsterdam/13-1/?what=Kapper&where=Bos+en+Lommerweg+87%2C+1055DP%2C+Amsterdam&latitude=52.382099&longitude=4.855813&routeTo=Bos+en+Lommerweg+87%2C+1055DP%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 17,
            "listingId": "18972636",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Angel Agudo Hair & Fashion",
            "phone": "020-6758374",
            "snippetDescription": {
                "text": "De haarsalon is voor zowel dames als heren, en voert een ruime collectie van haarverzorgings- en stylingproducten.  Bij Angel Agudo Hair & Fashion hebben ze ",
                "leesMeer": true
            },
            "websiteUrl": "http://www.angelagudo.nl",
            "category": "Kapper",
            "address": {
                "street": "Sarphatipark",
                "houseNoFrom": "46",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1073CZ",
                "coordinates": {
                    "latitude": 52.353301,
                    "longitude": 4.894996
                }
            },
            "media": null,
            "avgRating": 10,
            "totalReviews": 1,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "6978678",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Angel Agudo Hair & Fashion",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/angel-agudo-hair-fashion/18972636/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/sarphatipark-46-hs-1073cz-amsterdam/13-1/?what=Kapper&where=Sarphatipark+46%2FHS%2C+1073CZ%2C+Amsterdam&latitude=52.353301&longitude=4.894996&routeTo=Sarphatipark+46%2FHS%2C+1073CZ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 18,
            "listingId": "18360112",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Beauty Salon Kapsalon Magic",
            "phone": "020-6424300",
            "snippetDescription": {
                "text": "Wij geven u advies wat bij u past en u beslist.",
                "leesMeer": false
            },
            "websiteUrl": "http://www.magicnl.nl",
            "category": "Kapper",
            "address": {
                "street": "Rijnstraat",
                "houseNoFrom": "218",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1079HT",
                "coordinates": {
                    "latitude": 52.341711,
                    "longitude": 4.906893
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ADpCeKeHAwQAAABkAQxYfplhl4ZqK737vusA/beauty-salon-kapsalon-magic-1.jpg",
                    "altText": "Beauty Salon Kapsalon Magic"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1866830",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Beauty Salon Kapsalon Magic",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/beauty-salon-kapsalon-magic/18360112/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/rijnstraat-218-hs-1079ht-amsterdam/13-1/?what=Kapper&where=Rijnstraat+218%2FHS%2C+1079HT%2C+Amsterdam&latitude=52.341711&longitude=4.906893&routeTo=Rijnstraat+218%2FHS%2C+1079HT%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 19,
            "listingId": "17150138",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Brom Dames- en Herenkapsalon",
            "phone": "020-6187406",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Overtoom",
                "houseNoFrom": "298",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1054JC",
                "coordinates": {
                    "latitude": 52.360951,
                    "longitude": 4.868031
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1900424",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Brom Dames- en Herenkapsalon",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/brom-dames-en-herenkapsalon/17150138/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/overtoom-298-hs-1054jc-amsterdam/13-1/?what=Kapper&where=Overtoom+298%2FHS%2C+1054JC%2C+Amsterdam&latitude=52.360951&longitude=4.868031&routeTo=Overtoom+298%2FHS%2C+1054JC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 20,
            "listingId": "45470794",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Dalila Hairdressing",
            "phone": "06-34005006",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://dalilahair.com",
            "category": "Kapper",
            "address": {
                "street": "Cas Oorthuyskade",
                "houseNoFrom": "104",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1087BB",
                "coordinates": {
                    "latitude": 52.360289,
                    "longitude": 4.989489
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "80324485",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/dalila-hairdressing/45470794/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/cas-oorthuyskade-104-1087bb-amsterdam/13-1/?what=Kapper&where=Cas+Oorthuyskade+104%2C+1087BB%2C+Amsterdam&latitude=52.360289&longitude=4.989489&routeTo=Cas+Oorthuyskade+104%2C+1087BB%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 21,
            "listingId": "19657554",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Graduates The",
            "phone": "020-4896303",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.thegraduates.nl",
            "category": "Kapper",
            "address": {
                "street": "Overtoom",
                "houseNoFrom": "35",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1054HB",
                "coordinates": {
                    "latitude": 52.363292,
                    "longitude": 4.877238
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "62892573",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Graduates The",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/graduates-the/19657554/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/overtoom-35-1054hb-amsterdam/13-1/?what=Kapper&where=Overtoom+35%2C+1054HB%2C+Amsterdam&latitude=52.363292&longitude=4.877238&routeTo=Overtoom+35%2C+1054HB%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 22,
            "listingId": "20007581",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Haarsalon Beauty - Kingsway Beauty Wholesale",
            "phone": "020-6893342",
            "snippetDescription": {
                "text": "Bij Haarsalon Beauty kunt u terecht voor  haarbehandelingen zowel als haar en cosmetica producten. De winkel heeft een breed assortiment aan producten voor a",
                "leesMeer": true
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Jan Evertsenstraat",
                "houseNoFrom": "129",
                "houseLetterFrom": "A",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1057BV",
                "coordinates": {
                    "latitude": 52.370207,
                    "longitude": 4.851594
                }
            },
            "media": null,
            "avgRating": 10,
            "totalReviews": 1,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": "13:00:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "15394117",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/haarsalon-beauty-kingsway-beauty-wholesale/20007581/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/jan-evertsenstraat-129-a-1057bv-amsterdam/13-1/?what=Kapper&where=Jan+Evertsenstraat+129%2FA%2C+1057BV%2C+Amsterdam&latitude=52.370207&longitude=4.851594&routeTo=Jan+Evertsenstraat+129%2FA%2C+1057BV%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 23,
            "listingId": "19690046",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Hairstudio Joyce",
            "phone": "020-6447417",
            "snippetDescription": {
                "text": "Hairstudio Joyce",
                "leesMeer": false
            },
            "websiteUrl": "http://www.hairstudiojoyce.nl",
            "category": "Kapper",
            "address": {
                "street": "Uiterwaardenstraat",
                "houseNoFrom": "118",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1079CG",
                "coordinates": {
                    "latitude": 52.342861,
                    "longitude": 4.906763
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1862745",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/hairstudio-joyce/19690046/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/uiterwaardenstraat-118-1079cg-amsterdam/13-1/?what=Kapper&where=Uiterwaardenstraat+118%2C+1079CG%2C+Amsterdam&latitude=52.342861&longitude=4.906763&routeTo=Uiterwaardenstraat+118%2C+1079CG%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 24,
            "listingId": "19247228",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Hairways",
            "phone": "020-6243220",
            "snippetDescription": {
                "text": "Hairextensions,\nPruiken\nHoofdhuidproblemen",
                "leesMeer": false
            },
            "websiteUrl": "http://www.hairways.nl",
            "category": "Kapper",
            "address": {
                "street": "Plantage Middenlaan",
                "houseNoFrom": "66",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1018DH",
                "coordinates": {
                    "latitude": 52.364624,
                    "longitude": 4.916776
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ANBRuUiHAwQAAABkAQxakjtpl4bubaD91T8A/hairways-1.jpg",
                    "altText": "Hairways"
                }
            },
            "avgRating": 10,
            "totalReviews": 2,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "6466550",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Hairways",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/hairways/19247228/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/plantage-middenlaan-66-1018dh-amsterdam/13-1/?what=Kapper&where=Plantage+Middenlaan+66%2C+1018DH%2C+Amsterdam&latitude=52.364624&longitude=4.916776&routeTo=Plantage+Middenlaan+66%2C+1018DH%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 25,
            "listingId": "17174325",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Herenkapsalon L Visser",
            "phone": "020-6712640",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Ferdinand Bolstraat",
                "houseNoFrom": "4",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1072LJ",
                "coordinates": {
                    "latitude": 52.357795,
                    "longitude": 4.890718
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1860015",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/herenkapsalon-l-visser/17174325/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/ferdinand-bolstraat-4-hs-1072lj-amsterdam/13-1/?what=Kapper&where=Ferdinand+Bolstraat+4%2FHS%2C+1072LJ%2C+Amsterdam&latitude=52.357795&longitude=4.890718&routeTo=Ferdinand+Bolstraat+4%2FHS%2C+1072LJ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 26,
            "listingId": "17137274",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Ido's Cutting Crew",
            "phone": "020-4710406",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "2e Jan vd Heijdenstr",
                "houseNoFrom": "41",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1074XN",
                "coordinates": {
                    "latitude": 52.355618,
                    "longitude": 4.901018
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "10273438",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Ido's Cutting Crew",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/ido-s-cutting-crew/17137274/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/2e-jan-vd-heijdenstr-41-1074xn-amsterdam/13-1/?what=Kapper&where=2e+Jan+vd+Heijdenstr+41%2C+1074XN%2C+Amsterdam&latitude=52.355618&longitude=4.901018&routeTo=2e+Jan+vd+Heijdenstr+41%2C+1074XN%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 27,
            "listingId": "19247290",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Janine",
            "phone": "020-3795386",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.janineshair.nl",
            "category": "Kapper",
            "address": {
                "street": "Hendrik Jacobszstraat",
                "houseNoFrom": "13",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1075PA",
                "coordinates": {
                    "latitude": 52.351319,
                    "longitude": 4.860599
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14653751",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Janine",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/janine/19247290/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/hendrik-jacobszstraat-13-1075pa-amsterdam/13-1/?what=Kapper&where=Hendrik+Jacobszstraat+13%2C+1075PA%2C+Amsterdam&latitude=52.351319&longitude=4.860599&routeTo=Hendrik+Jacobszstraat+13%2C+1075PA%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 28,
            "listingId": "18924604",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Jitty's Hair and Make Up Salon",
            "phone": "020-6188802",
            "snippetDescription": {
                "text": "Jitty's Hair and Make-up, een goede kapper in Amsterdam die vijf avonden per week en op zondag open is. Met on-line boeking systeem",
                "leesMeer": false
            },
            "websiteUrl": "http://www.jitty.nl",
            "category": "Kapper",
            "address": {
                "street": "Bilderdijkstraat",
                "houseNoFrom": "156",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1053LC",
                "coordinates": {
                    "latitude": 52.367628,
                    "longitude": 4.871814
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AHdlIIaHAwQAAABkAQxX96jCl4bcsWSQfiAA/jitty-s-hair-and-make-up-salon-1.jpg",
                    "altText": "Jitty's Hair and Make Up Salon"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": true,
            "kvReviewUrl": "https://www.klantenvertellen.nl/reviews/1004141/jittys-hair-and-make-up-salon",
            "kvAddReviewUrl": "https://www.klantenvertellen.nl/add-review/1004141/jittys-hair-and-make-up-salon",
            "openingHours": {
                "today": [
                    {
                        "openingTime": "12:00:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14653760",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/jitty-s-hair-and-make-up-salon/18924604/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/bilderdijkstraat-156-1053lc-amsterdam/13-1/?what=Kapper&where=Bilderdijkstraat+156%2C+1053LC%2C+Amsterdam&latitude=52.367628&longitude=4.871814&routeTo=Bilderdijkstraat+156%2C+1053LC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 29,
            "listingId": "45424466",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Kapsalon Semsema",
            "phone": "020-3377053",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Van der Hoopstraat",
                "houseNoFrom": "114",
                "houseLetterFrom": "H",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1051VM",
                "coordinates": {
                    "latitude": 52.384233,
                    "longitude": 4.871019
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": "13:00:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "80290148",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/kapsalon-semsema/45424466/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/van-der-hoopstraat-114-h-1051vm-amsterdam/13-1/?what=Kapper&where=Van+der+Hoopstraat+114%2FH%2C+1051VM%2C+Amsterdam&latitude=52.384233&longitude=4.871019&routeTo=Van+der+Hoopstraat+114%2FH%2C+1051VM%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 30,
            "listingId": "19247327",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Les Jumeaux Hairstyling",
            "phone": "020-4637171",
            "snippetDescription": {
                "text": "Dames-, Heren- en Kinderkapsalon",
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Wakkerstraat",
                "houseNoFrom": "1",
                "houseLetterFrom": "A",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1097CB",
                "coordinates": {
                    "latitude": 52.354473,
                    "longitude": 4.929404
                }
            },
            "media": null,
            "avgRating": 10,
            "totalReviews": 2,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "8268413",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Les Jumeaux Hairstyling",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/les-jumeaux-hairstyling/19247327/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/wakkerstraat-1-a-1097cb-amsterdam/13-1/?what=Kapper&where=Wakkerstraat+1%2FA%2C+1097CB%2C+Amsterdam&latitude=52.354473&longitude=4.929404&routeTo=Wakkerstraat+1%2FA%2C+1097CB%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 31,
            "listingId": "17151668",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Limp Hair Kappers",
            "phone": "020-6949172",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Beukenweg",
                "houseNoFrom": "2",
                "houseLetterFrom": "B",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1091KD",
                "coordinates": {
                    "latitude": 52.357841,
                    "longitude": 4.917508
                }
            },
            "media": null,
            "avgRating": 10,
            "totalReviews": 4,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1954726",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/limp-hair-kappers/17151668/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/beukenweg-2-b-1091kd-amsterdam/13-1/?what=Kapper&where=Beukenweg+2%2FB%2C+1091KD%2C+Amsterdam&latitude=52.357841&longitude=4.917508&routeTo=Beukenweg+2%2FB%2C+1091KD%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 32,
            "listingId": "18368922",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Lok en Staartjes Kappers",
            "phone": "020-6796978",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.kapperoudzuid.nl",
            "category": "Kapper",
            "address": {
                "street": "Hectorstraat",
                "houseNoFrom": "22",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1076PS",
                "coordinates": {
                    "latitude": 52.3446,
                    "longitude": 4.865405
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AHFhtD2HAwQAAABkAQxZ58Q8l4aEDTE8sa8A/lok-en-staartjes-kappers-1.jpg",
                    "altText": "Lok en Staartjes Kappers"
                }
            },
            "avgRating": 10,
            "totalReviews": 1,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1861632",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Lok en Staartjes Kappers",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/lok-en-staartjes-kappers/18368922/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/hectorstraat-22-1076ps-amsterdam/13-1/?what=Kapper&where=Hectorstraat+22%2C+1076PS%2C+Amsterdam&latitude=52.3446&longitude=4.865405&routeTo=Hectorstraat+22%2C+1076PS%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 33,
            "listingId": "45638885",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Look Ahead",
            "phone": "020-6620962",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.look-ahead.nl",
            "category": "Kapper",
            "address": {
                "street": "Van Woustraat",
                "houseNoFrom": "57",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1074AC",
                "coordinates": {
                    "latitude": 52.355822,
                    "longitude": 4.900561
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1966532",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Look Ahead",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/look-ahead/45638885/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/van-woustraat-57-hs-1074ac-amsterdam/13-1/?what=Kapper&where=Van+Woustraat+57%2FHS%2C+1074AC%2C+Amsterdam&latitude=52.355822&longitude=4.900561&routeTo=Van+Woustraat+57%2FHS%2C+1074AC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 34,
            "listingId": "21159828",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Marcel Haarmode",
            "phone": "020-6799011",
            "snippetDescription": {
                "text": "Kleurspecialist met respect voor haar kwaliteit, uw wens is ons uitgangspunt ",
                "leesMeer": false
            },
            "websiteUrl": "http://www.marcelhaarmode.nl",
            "category": "Kapper",
            "address": {
                "street": "Stadionweg",
                "houseNoFrom": "287",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1076PA",
                "coordinates": {
                    "latitude": 52.34483,
                    "longitude": 4.858578
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ALVltuqHAwQAAABkAQxZcNngl4YzXmBzO-cA/marcel-haarmode-1.jpg",
                    "altText": "Marcel Haarmode"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": []
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "4497543",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/marcel-haarmode/21159828/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/stadionweg-287-1076pa-amsterdam/13-1/?what=Kapper&where=Stadionweg+287%2C+1076PA%2C+Amsterdam&latitude=52.34483&longitude=4.858578&routeTo=Stadionweg+287%2C+1076PA%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 35,
            "listingId": "19189289",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Marco's Hair & Beauty",
            "phone": "020-4161777",
            "snippetDescription": {
                "text": "Wij zijn Wella's Master Color Expert,  Aveda Ambassodor en CURLSYS® gecertificeerd",
                "leesMeer": false
            },
            "websiteUrl": "http://www.marcoshair.nl",
            "category": "Kapper",
            "address": {
                "street": "IJburglaan",
                "houseNoFrom": "1293",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1087GJ",
                "coordinates": {
                    "latitude": 52.354249,
                    "longitude": 4.997396
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AJqz5QKHAwQAAABkAQxX-7mOl4bcsWSb1EUA/marco-s-hair-beauty-1.jpg",
                    "altText": "Marco's Hair & Beauty"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1118009",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/marco-s-hair-beauty/19189289/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/ijburglaan-1293-1087gj-amsterdam/13-1/?what=Kapper&where=IJburglaan+1293%2C+1087GJ%2C+Amsterdam&latitude=52.354249&longitude=4.997396&routeTo=IJburglaan+1293%2C+1087GJ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 36,
            "listingId": "19695857",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Sibel Coiffure Fa",
            "phone": "020-6185966",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.sibelcoiffures.nl",
            "category": "Kapper",
            "address": {
                "street": "Postjesweg",
                "houseNoFrom": "58",
                "houseLetterFrom": "WKL",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1057EC",
                "coordinates": {
                    "latitude": 52.364475,
                    "longitude": 4.856053
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ACR9tkmHAwQAAABkAQxYufDfl4ZqK76yj6IA/sibel-coiffure-fa-1.jpg",
                    "altText": "Sibel Coiffure Fa"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1871882",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Sibel Coiffure Fa",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/sibel-coiffure-fa/19695857/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/postjesweg-58-wkl-1057ec-amsterdam/13-1/?what=Kapper&where=Postjesweg+58%2FWKL%2C+1057EC%2C+Amsterdam&latitude=52.364475&longitude=4.856053&routeTo=Postjesweg+58%2FWKL%2C+1057EC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 37,
            "listingId": "19661147",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Studio Z Dames-Herensalon",
            "phone": "020-6186842",
            "snippetDescription": {
                "text": "Welkom bij Studio Z. Opgericht in 1997 en centraal gelegen in Amsterdam is Studio Z de kapper bij uitstek om uw haar te laten behandelen. Studio Z verzekert u bij ie",
                "leesMeer": true
            },
            "websiteUrl": "http://www.studio-z.nl",
            "category": "Kapper",
            "address": {
                "street": "Admiraal de Ruijterweg",
                "houseNoFrom": "80",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1056GN",
                "coordinates": {
                    "latitude": 52.371486,
                    "longitude": 4.860154
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AKUEGWmHAwQAAABkAQxY0Egkl4ZqK77eZ3YA/studio-z-dames-herensalon-1.jpg",
                    "altText": "Studio Z Dames-Herensalon"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": true,
            "kvReviewUrl": "https://www.klantenvertellen.nl/reviews/1003421/studio-z-dames-herensalon",
            "kvAddReviewUrl": "https://www.klantenvertellen.nl/add-review/1003421/studio-z-dames-herensalon",
            "openingHours": {
                "today": [
                    {
                        "openingTime": "10:00:00",
                        "closingTime": "18:00:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14619030",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/studio-z-dames-herensalon/19661147/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/admiraal-de-ruijterweg-80-1056gn-amsterdam/13-1/?what=Kapper&where=Admiraal+de+Ruijterweg+80%2C+1056GN%2C+Amsterdam&latitude=52.371486&longitude=4.860154&routeTo=Admiraal+de+Ruijterweg+80%2C+1056GN%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 38,
            "listingId": "17109261",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Trendline",
            "phone": "020-4444702",
            "snippetDescription": {
                "text": "Trendline hairstudio is een kapsalon gevestigd in het VU medisch centrum. Wij zijn een dames en heren salon en  Gespecialiceerd in haarwerken en medische ver",
                "leesMeer": true
            },
            "websiteUrl": "http://www.trendline-hairstudio.nl",
            "category": "Kapper",
            "address": {
                "street": "De Boelelaan",
                "houseNoFrom": "1117",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1081HV",
                "coordinates": {
                    "latitude": 52.334706,
                    "longitude": 4.859828
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/ACDjtv2HAwQAAABkAQxYue7vl4ZqK76yeicA/trendline-1.jpg",
                    "altText": "Trendline"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": "08:00:00",
                        "closingTime": "16:30:00",
                        "status": "Open"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "6115655",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Trendline",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/trendline/17109261/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/de-boelelaan-1117-1081hv-amsterdam/13-1/?what=Kapper&where=De+Boelelaan+1117%2C+1081HV%2C+Amsterdam&latitude=52.334706&longitude=4.859828&routeTo=De+Boelelaan+1117%2C+1081HV%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 39,
            "listingId": "17101768",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Visser Herenkapsalon L",
            "phone": "020-6712640",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Ferdinand Bolstraat",
                "houseNoFrom": "4",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1072LJ",
                "coordinates": {
                    "latitude": 52.357795,
                    "longitude": 4.890718
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1860015",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/visser-herenkapsalon-l/17101768/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/ferdinand-bolstraat-4-hs-1072lj-amsterdam/13-1/?what=Kapper&where=Ferdinand+Bolstraat+4%2FHS%2C+1072LJ%2C+Amsterdam&latitude=52.357795&longitude=4.890718&routeTo=Ferdinand+Bolstraat+4%2FHS%2C+1072LJ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 40,
            "listingId": "17113007",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Wonderhands The Art of Hair",
            "phone": "020-3305385",
            "snippetDescription": {
                "text": "Boetseren met haar  Ron Meijer werkt als een kunstenaar. Knippen staat voor hem gelijk aan boetseren. Als een echte beeldhouwer gaat hij op in zijn werk. Sta",
                "leesMeer": true
            },
            "websiteUrl": "http://www.wonderhands.nl",
            "category": "Kapper",
            "address": {
                "street": "Hazenstraat",
                "houseNoFrom": "6",
                "houseLetterFrom": "A",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1016SP",
                "coordinates": {
                    "latitude": 52.370772,
                    "longitude": 4.879751
                }
            },
            "media": {
                "image": {
                    "rel": "logo",
                    "href": "https://www.detelefoongids.nl:443/content/photo/AHs3qyWHAwQAAABkAQxYue83l4ZqK76yfbcA/wonderhands-the-art-of-hair-1.jpg",
                    "altText": "Wonderhands The Art of Hair"
                }
            },
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": {
                "today": [
                    {
                        "openingTime": null,
                        "closingTime": null,
                        "status": "Closed"
                    }
                ]
            },
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "10849529",
            "branchLogos": [
                {
                    "linkDefId": null,
                    "linkDefStyle": "ICON",
                    "linkDefUrl": "https://www.detelefoongids.nl/anko-koninklijke-algemene-nederlandse-kappers-organisatie/19473257/5-1/",
                    "linkDefIcon": "/images/mini-logos/ANKO-icon.gif",
                    "businessName": "Wonderhands The Art of Hair",
                    "cityName": "Amsterdam"
                }
            ],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/wonderhands-the-art-of-hair/17113007/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/hazenstraat-6-a-1016sp-amsterdam/13-1/?what=Kapper&where=Hazenstraat+6%2FA%2C+1016SP%2C+Amsterdam&latitude=52.370772&longitude=4.879751&routeTo=Hazenstraat+6%2FA%2C+1016SP%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 41,
            "listingId": "45523253",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Aldo the Hair Guru",
            "phone": "06-27420208",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Haarlemmermeerstraat",
                "houseNoFrom": "110",
                "houseLetterFrom": "2",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1058KG",
                "coordinates": {
                    "latitude": 52.353763,
                    "longitude": 4.85031
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "80342842",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/aldo-the-hair-guru/45523253/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/haarlemmermeerstraat-110-2-1058kg-amsterdam/13-1/?what=Kapper&where=Haarlemmermeerstraat+110%2F2%2C+1058KG%2C+Amsterdam&latitude=52.353763&longitude=4.85031&routeTo=Haarlemmermeerstraat+110%2F2%2C+1058KG%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 42,
            "listingId": "17164169",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Arbia A",
            "phone": "020-6855505",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://forums.marokko.nl/archive/index.php/t-854852.html",
            "category": "Kapper",
            "address": {
                "street": "Kinkerstraat",
                "houseNoFrom": "340",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1053GE",
                "coordinates": {
                    "latitude": 52.364737,
                    "longitude": 4.862319
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14653641",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/arbia-a/17164169/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/kinkerstraat-340-1053ge-amsterdam/13-1/?what=Kapper&where=Kinkerstraat+340%2C+1053GE%2C+Amsterdam&latitude=52.364737&longitude=4.862319&routeTo=Kinkerstraat+340%2C+1053GE%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 43,
            "listingId": "18433955",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Avanti Hair",
            "phone": "020-6624848",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.avanti-hair.nl",
            "category": "Kapper",
            "address": {
                "street": "Moreelsestraat",
                "houseNoFrom": "5",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1071BJ",
                "coordinates": {
                    "latitude": 52.355425,
                    "longitude": 4.880852
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1150425",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/avanti-hair/18433955/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/moreelsestraat-5-1071bj-amsterdam/13-1/?what=Kapper&where=Moreelsestraat+5%2C+1071BJ%2C+Amsterdam&latitude=52.355425&longitude=4.880852&routeTo=Moreelsestraat+5%2C+1071BJ%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 44,
            "listingId": "45529876",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Beauty by Cell",
            "phone": "06-30521536",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Nigellestraat",
                "houseNoFrom": "69",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1032BK",
                "coordinates": {
                    "latitude": 52.396507,
                    "longitude": 4.915335
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "80345076",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/beauty-by-cell/45529876/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/nigellestraat-69-1032bk-amsterdam/13-1/?what=Kapper&where=Nigellestraat+69%2C+1032BK%2C+Amsterdam&latitude=52.396507&longitude=4.915335&routeTo=Nigellestraat+69%2C+1032BK%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 45,
            "listingId": "17965526",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Beautycenter Bahia",
            "phone": "020-4630076",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Javastraat",
                "houseNoFrom": "3",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1094GX",
                "coordinates": {
                    "latitude": 52.363478,
                    "longitude": 4.931763
                }
            },
            "media": null,
            "avgRating": 8.8,
            "totalReviews": 8,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "60717630",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/beautycenter-bahia/17965526/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/javastraat-3-1094gx-amsterdam/13-1/?what=Kapper&where=Javastraat+3%2C+1094GX%2C+Amsterdam&latitude=52.363478&longitude=4.931763&routeTo=Javastraat+3%2C+1094GX%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 46,
            "listingId": "17126805",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Bianko Kapsalon",
            "phone": "020-4228625",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.kapsalonbianco.nl",
            "category": "Kapper",
            "address": {
                "street": "Rozengracht",
                "houseNoFrom": "214",
                "houseLetterFrom": "B",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1016NL",
                "coordinates": {
                    "latitude": 52.372522,
                    "longitude": 4.877073
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "15229157",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/bianko-kapsalon/17126805/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/rozengracht-214-b-1016nl-amsterdam/13-1/?what=Kapper&where=Rozengracht+214%2FB%2C+1016NL%2C+Amsterdam&latitude=52.372522&longitude=4.877073&routeTo=Rozengracht+214%2FB%2C+1016NL%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 47,
            "listingId": "18164120",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Bonita Kapsalon",
            "phone": "020-6005508",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": null,
            "category": "Kapper",
            "address": {
                "street": "Annie Romeinplein",
                "houseNoFrom": "52",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1103JL",
                "coordinates": {
                    "latitude": 52.321951,
                    "longitude": 4.969591
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "61557770",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/bonita-kapsalon/18164120/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/annie-romeinplein-52-1103jl-amsterdam/13-1/?what=Kapper&where=Annie+Romeinplein+52%2C+1103JL%2C+Amsterdam&latitude=52.321951&longitude=4.969591&routeTo=Annie+Romeinplein+52%2C+1103JL%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 48,
            "listingId": "45477104",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "BTRENDZ Salon",
            "phone": "06-85225299",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.btrendz.nl",
            "category": "Kapper",
            "address": {
                "street": "Nieuwersluishof",
                "houseNoFrom": "25",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1106PL",
                "coordinates": {
                    "latitude": 52.302412,
                    "longitude": 4.95979
                }
            },
            "media": null,
            "avgRating": 0,
            "totalReviews": 0,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "80326732",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/btrendz-salon/45477104/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/nieuwersluishof-25-1106pl-amsterdam/13-1/?what=Kapper&where=Nieuwersluishof+25%2C+1106PL%2C+Amsterdam&latitude=52.302412&longitude=4.95979&routeTo=Nieuwersluishof+25%2C+1106PL%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 49,
            "listingId": "17141010",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Cèdre Coiffeurs Le",
            "phone": "020-4714450",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.lecedre.nl",
            "category": "Kapper",
            "address": {
                "street": "Zeilstraat",
                "houseNoFrom": "20",
                "houseLetterFrom": null,
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1075SH",
                "coordinates": {
                    "latitude": 52.351151,
                    "longitude": 4.855171
                }
            },
            "media": null,
            "avgRating": 8,
            "totalReviews": 4,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "14858391",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/cedre-coiffeurs-le/17141010/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/zeilstraat-20-1075sh-amsterdam/13-1/?what=Kapper&where=Zeilstraat+20%2C+1075SH%2C+Amsterdam&latitude=52.351151&longitude=4.855171&routeTo=Zeilstraat+20%2C+1075SH%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        },
        {
            "index": 50,
            "listingId": "17149199",
            "paid": true,
            "businessType": "BUSINESS",
            "resultType": "local",
            "name": "Cirkel Knipsalon De",
            "phone": "020-6268488",
            "snippetDescription": {
                "text": null,
                "leesMeer": false
            },
            "websiteUrl": "http://www.cirkelknipsalon.nl",
            "category": "Kapper",
            "address": {
                "street": "Tweede Egelantiersdwstr",
                "houseNoFrom": "20",
                "houseLetterFrom": "HS",
                "city": {
                    "name": "Amsterdam"
                },
                "zipCode": "1015SC",
                "coordinates": {
                    "latitude": 52.376507,
                    "longitude": 4.882138
                }
            },
            "media": null,
            "avgRating": 10,
            "totalReviews": 1,
            "kvTypeCustomer": false,
            "kvReviewUrl": null,
            "kvAddReviewUrl": null,
            "openingHours": null,
            "listingtype": "REGULAR",
            "collapseType": null,
            "collapseListingAmount": null,
            "coupons": null,
            "trackingType": "p",
            "customerId": "1870700",
            "branchLogos": [],
            "phoneAvailable": true,
            "_links": {
                "DETAILS": {
                    "rel": "DETAILS",
                    "href": "/cirkel-knipsalon-de/17149199/5-1/"
                },
                "PLANROUTE": {
                    "rel": "PLANROUTE",
                    "href": "/kaart/kapper/tweede-egelantiersdwstr-20-hs-1015sc-amsterdam/13-1/?what=Kapper&where=Tweede+Egelantiersdwstr+20%2FHS%2C+1015SC%2C+Amsterdam&latitude=52.376507&longitude=4.882138&routeTo=Tweede+Egelantiersdwstr+20%2FHS%2C+1015SC%2C+Amsterdam&searchTypeExt=SIMPLEMAP_ROUTE"
                }
            }
        }
    ];
    
    let updateDB = 0;	/* temporary solution to get the data from database(one-time) */
    
    function getKappersInAms(req, res, next) {

        const url = 'mongodb://localhost:27017';
        const dbName = 'kapersApp';

        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected correctly to server');

                const db = client.db(dbName);
                
                /* temporary solution to get the data from database(one-time) */
				if(!updateDB) {
                   const response = await db.collection('kapers').insertMany(kappers_db);
                   updateDB = 1;
               }

                const col = await db.collection('kapers');

                const kappers = await col.find().sort({ name: 1 }).limit(req.query.limit).skip(req.skip).toArray();
                const itemCount = col.count();
                const pageCount = Math.ceil(itemCount / req.query.limit);

                /* Code below will calculate average rating and review of all kappers */
                const allKappers = await col.find().toArray();
                let totalAvgRating = 0, totalAvgReview = 0;
                let ratingMultipliedByReviews = 0, sumRatingMultipliedByReviews = 0, sumTotalReviews = 0;

                function calculateAvgReviewRating() {
                    for (let i = 0; i < allKappers.length; i++) {
                        ratingMultipliedByReviews = (allKappers[i].avgRating) * (allKappers[i].totalReviews);
                        sumRatingMultipliedByReviews += ratingMultipliedByReviews;
                        sumTotalReviews += (allKappers[i].totalReviews);
                    }
                    totalAvgRating = sumRatingMultipliedByReviews / sumTotalReviews;
                    totalAvgReview = sumTotalReviews / (allKappers.length);
                }
                calculateAvgReviewRating();

                
                res.render('index', {
                    title: 'Hair salons in Amsterdam',
                    kappers,
                    reviewRating: [{ rating: totalAvgRating, review: totalAvgReview }],
                    pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
                });

            }
            catch (err) {
                debug(err.stack);
            }
            client.close();
        }());
    }

    return {
        getKappersInAms
    };
}

module.exports = kappersController;
