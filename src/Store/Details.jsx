import React, { createContext, useState } from 'react'

export const store = createContext();

function StoreData(props) {
    const [detail, setDetail] = useState( [{
        id: 1,
        catagory: "Accessories",
        name: "Apple AirPod Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
        price: 18000,
        oPrice: 20499,
        quantity:1   
    },
    {
        id: 2,
        catagory: "Accessories",
        name: "Apple AirPod 2nd Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg",
        price: 15000,
        oPrice: 17499,
        quantity:1   
    },
    {
        id: 3,
        catagory: "Accessories",
        name: "Apple AirPod Pro A2084",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://images.esellerpro.com/2131/I/252/394/DSC_5962_2.jpg",
        price: 20000,
        oPrice: 25000,
        quantity:1   
    },
    {
        id: 4,
        catagory: "Accessories",
        name: "Apple AirPod 3rd Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861333000",
        price:  13000,
        oPrice:  14500,
        quantity:1  
    },
    {
        id: 5,
        catagory: "Accessories",
        name: "Apple Watch Series 4",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/51deGDOsgbL._SL1000_.jpg",
        price:  12500,
        oPrice:  15000,
        quantity:1   
    },
    {
        id: 6,
        catagory: "Accessories",
        name: "Apple Watch Series 5",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71fp5ankbqL._SX522_.jpg",
        price:  10000,
        oPrice:  12499,
        quantity:1   
    },
    {
        id: 7,
        catagory: "Accessories",
        name: "Apple Watch Series 6",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://rukminim1.flixcart.com/image/800/900/cms-rpd-images/be2faba1bb6f4d0f9e35557ba64da795_1759bdade0b_image.jpeg?q=90",
        price:  12000,
        oPrice:  13500,
        quantity:1   
    },
    {
        id: 8,
        catagory: "Accessories",
        name: "Apple Watch Series 7",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1631661671000",
        price:  11000,
        oPrice:  12000,
        quantity:1   
    },
    {
        id: 9,
        catagory: "Accessories",
        name: "Apple Watch Series 3",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
        price:  10000,
        oPrice:  11499,
        quantity:1   
    },
    {
        id: 10,
        catagory: "Accessories",
        name: "Apple Watch Series 2",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP746/alu-spacegray-nike.jpg",
        price:  8000,
        oPrice:  8499,
        quantity:1   
    },
    {
        id: 11,
        catagory: "Accessories",
        name: "Apple AirPods Max",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
        price:  15000,
        oPrice:  17500,
        quantity:1   
    },
    {
        id: 12,
        catagory: "Accessories",
        name: "Apple AirPods ",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://rukminim1.flixcart.com/image/612/612/kigbjbk0-0/headphone/n/z/m/mgyl3hn-a-apple-original-imafy8wb7tuduaf2.jpeg?q=70",
        price:  13000,
        oPrice:  16499,
        quantity:1   
    },
    {
        id: 13,
        catagory: "Accessories",
        name: "boAt Rockers 255 CSK",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/51hC6pU-gsL._SY355_.jpg",
        price:  1200,
        oPrice:  1499,
        quantity:1   
    },
    {
        id: 14,
        catagory: "Accessories",
        name: "boAt Rockers 450 Iron Man",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SL1500_.jpg",
        price:  1500,
        oPrice:  1799,
        quantity:1   
    },
    {
        id: 15,
        catagory: "Accessories",
        name: "boAt Rockers 450 Black Panther",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://infiswap.com/wp-content/uploads/2022/04/boAt-Rockerz-450-Black-panther-1.jpg",
        price:  1500,
        oPrice:  1700,
        quantity:1   
    },
    {
        id: 16,
        catagory: "Accessories",
        name: "boAt Rockers 450 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/9/h/j/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.jpeg?q=70",
        price:  1300,
        oPrice:  1450,
        quantity:1   
    },
    {
        id: 17,
        catagory: "Accessories",
        name: "boAt Wave Lite",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/41qAgAkiXjL.jpg",
        price:  1200,
        oPrice:  1300,
        quantity:1   
    },
    {
        id: 18,
        catagory: "Accessories",
        name: "SanDisk 32GB 2.0",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://n2.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.jpg",
        price:  499,
        oPrice:  600,
        quantity:1   
    },
    {
        id: 19,
        catagory: "Accessories",
        name: "SanDisk 32GB 3.0",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg",
        price:  800,
        oPrice:  999,
        quantity:1   
    },
    {
        id: 20,
        catagory: "Accessories",
        name: "HP 32GB 3.0",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
        price:  1000,
        oPrice:  1200,
        quantity:1   
    },
    {
        id: 21,
        catagory: "Accessories",
        name: "HP 34GB 3.0",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
        price:  1200,
        oPrice:  1499,
        quantity:1   
    },
    {
        id: 22,
        catagory: "Accessories",
        name: "Jebra Microsoft",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.onedirect.co.uk/media/catalog/product/cache/2/image/600x/75fe832f739e7581346979d1fbb4a3c8/g/n/gnevol30dm-2.jpg",
        price:  5500,
        oPrice:  6499,
        quantity:1   
    },
    {
        id: 23,
        catagory: "Accessories",
        name: "Mi Powerbank 20000mAh",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
        price:  1100,
        oPrice:  1700,
        quantity:1   
    },
    {
        id: 24,
        catagory: "Accessories",
        name: "Sony 10000mAh Powerbank ",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.brandedcorporategift.com/ecommerce/upload/images/edit/6121-2017-08-30.jpg",
        price:  1300,
        oPrice:  1699,
        quantity:1   
    },
    {
        id: 25,
        catagory: "Mobile",
        name: "OnePlus 9",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
        price:  22000,
        oPrice:  23900,
        quantity:1

    },
    {
        id: 26,
        catagory: "Mobile",
        name: "OnePlus 10 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
        price:  19500,
        oPrice:  21000,
        quantity:1

    },
    {
        id: 27,
        catagory: "Mobile",
        name: "OnePlus 10 R",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
        price:  35000,
        oPrice:  38499,
        quantity:1

    },
    {
        id: 28,
        catagory: "Mobile",
        name: "OnePlus Nord 2T",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
        price:  16500,
        oPrice:  19000,
        quantity:1

    },
    {
        id: 29,
        catagory: "Mobile",
        name: "OnePlus Nord CE 2",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
        price:  23500,
        oPrice:  25500,
        quantity:1

    },
    {
        id: 30,
        catagory: "Mobile",
        name: "Redmi Note 9 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
        price:  12500,
        oPrice:  13500,
        quantity:1
    },
    {
        id: 31,
        catagory: "Mobile",
        name: "Redmi Note 10 Lite",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
        price:  14500,
        oPrice:  16000,
        quantity:1
    },
    {
        id: 32,
        catagory: "Mobile",
        name: "Redmi Note 10 Prime",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
        price:  16000,
        oPrice:  17500,
        quantity:1
    },
    {
        id: 33,
        catagory: "Mobile",
        name: "Redmi Note 11 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
        price:  17000,
        oPrice:  19500,
        quantity:1
    },
    {
        id: 34,
        catagory: "Mobile",
        name: "Redmi Note 11",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
        price:  23500,
        oPrice:  25500,
        quantity:1
    },
    {
        id: 35,
        catagory: "Mobile",
        name: "Samsung Galaxy A13 ",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
        price:  14500,
        oPrice:  16499,
        quantity:1
    },
    {
        id: 36,
        catagory: "Mobile",
        name: "Samsung Galaxy S20",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SS450_.jpg",
        price:  20500,
        oPrice:  21000,
        quantity:1
    },
    {
        id: 37,
        catagory: "Mobile",
        name: "Asus Zenfone 8",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
        price:  15500,
        oPrice:  17000,
        quantity:1
    },
    {
        id: 38,
        catagory: "Mobile",
        name: "Asus Zenfone 7",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
        price:  15999,
        oPrice:  17499,
        quantity:1
    },
    {
        id: 39,
        catagory: "Mobile",
        name: "Google Pixel 4 XL",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
        price:  16000,
        oPrice:  18000,
        quantity:1
    },
    {
        id: 40,
        catagory: "Mobile",
        name:   "Google Pixel 5",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
        price:  17000,
        oPrice:  19500,
        quantity:1
    },
    {
        id: 41,
        catagory: "macbook",
        name: "MacBook Air",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
        price:  98000,
        oPrice:  102499,
        quantity:1  
    },
    {
        id: 42,
        catagory: "macbook",
        name: "Apple MacBook Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
        price:  92000,
        oPrice:  102499,
        quantity:1   
    },
    {
        id: 43,
        catagory: "macbook",
        name: "Apple MacBook 12",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.cnet.com/a/img/resize/582394e3d3c2a8e0a066cc4d3a51be08665cd2de/2016/04/19/7ce2b064-00fe-4d9a-9a93-6e540c1be1a1/apple-macbook-2016-18.jpg?auto=webp&fit=crop&height=675&width=1200",
        price:  68000,
        oPrice:  75499,
        quantity:1   
    },
    {
        id: 44,
        catagory: "macbook",
        name: "Apple MacBook 11",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-mid-2014-13in-device.jpg",
        price:  68000,
        oPrice:  72499,
        quantity:1   
    },
    {
        id: 45,
        catagory: "macbook",
        name: "Apple MacBook Air 2020 ",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://techcart.com.au/wp-content/uploads/2021/04/53002-Apple-MacBook-Air-2020-MVH22-13.3-i5-512GB_8GB-Grey.jpg",
        price:  91000,
        oPrice:  95499,
        quantity:1   
    },
    {
        id: 46,
        catagory: "macbook",
        name: "Apple MacBook Pro 2019",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61SJu997CCL._SL1500_.jpg",
        price:  82000,
        oPrice:  92499,
        quantity:1   
    },
    {
        id: 47,
        catagory: "macbook",
        name: "Apple MacBook Air Gold",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/1:1/w_1348,h_1348,c_limit/macbookair3.jpg",
        price:  78000,
        oPrice:  85499,
        quantity:1   
    },
    {
        id: 48,
        catagory: "macbook",
        name: "Apple MacBook Air M2",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.apple.com/in/macbook-air-m2/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg",
        price:  75000,
        oPrice:  82499,
        quantity:1   
    },
    {
        id: 49,
        catagory: "laptop",
        name: "Asus ROG Strix G17",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/81ahHX9wU1L._SL1500_.jpg",
        price:  98000,
        oPrice:  102499,
        quantity:1   
    },
    {
        id: 50,
        catagory: "laptop",
        name: "Asus ROG Strix G15",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1643650830/burfzegdrsl4lwkidnhy.png",
        price:  92000,
        oPrice:  99000,
        quantity:1   
    },
    {
        id: 51,
        catagory: "laptop",
        name: "Asus TUF Gamming A15",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
        price:  82000,
        oPrice:  85999,
        quantity:1   
    },
    {
        id: 52,
        catagory: "laptop",
        name: "Asus TUF Gaming F15",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/",
        price:  95499,
        oPrice:  99000,
        quantity:1  
    },
    {
        id: 53,
        catagory: "laptop",
        name: "HP Pavilion 15 12th Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61Lh64FYeQL._SL1500_.jpg",
        price:  68000,
        oPrice:  72999,
        quantity:1   
    },
    {
        id: 54,
        catagory: "laptop",
        name: "HP Pavilion 15 12th Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1643650830/burfzegdrsl4lwkidnhy.png",
        price:  92000,
        oPrice:  99000,
        quantity:1   
    },
    {
        id: 55,
        catagory: "laptop",
        name: "HP Pavilion Gamming",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://in-media.apjonlinecdn.com/catalog/product/4/8/48U95PA-1_T1656560885.png",
        price:  62000,
        oPrice:  65999,
        quantity:1   
    },
    {
        id: 56,
        catagory: "laptop",
        name: "HP Pavilion x360",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://in-media.apjonlinecdn.com/catalog/product/6/6/661W9PA-6_T1656563694.png",
        price:  55499,
        oPrice:  60000,
        quantity:1  
    },
    {
        id: 57,
        catagory: "laptop",
        name: "Lenevo Yoga C930",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn.vox-cdn.com/thumbor/hGJBYTqCwxAFU4c3XHf8giClI3A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12565155/vpavic_180712_2898_yoga_c930_0078.jpg",
        price:  48000,
        oPrice:  49499,
        quantity:1   
    },
    {
        id: 58,
        catagory: "laptop",
        name: "Lenevo ThinkPad X1",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71krmFgx5pL._SL1500_.jpg",
        price:  72000,
        oPrice:  79000,
        quantity:1   
    },
    {
        id: 59,
        catagory: "laptop",
        name: "Dell Latitute 13",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,0&resMode=sharp2&size=3337,2417",
        price:  42000,
        oPrice:  45999,
        quantity:1   
    },
    {
        id: 60,
        catagory: "laptop",
        name: "Dell Inspiron 7620",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn1.smartprix.com/rx-iXMi3TNHD-w1200-h1200/XMi3TNHD.jpg",
        price:  55499,
        oPrice:  59000,
        quantity:1   
    },
    {
        id: 61,
        catagory: "Ipad",
        name: "Ipad Air 5th Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Air-10-9-Inch-WiFi%20-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation/Apple-IPad-Air-10-9-Inch-WiFi-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation.jpg",
        price:  54900,
        oPrice:  56900,
        quantity:1
    },
    {
        id: 62,
        catagory: "Ipad",
        name: "Ipad Air A14",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._SY450_.jpg",
        price:  65500,
        oPrice:  67900,
        quantity:1
    },
    {
        id: 63,
        catagory: "Ipad",
        name: "Ipad Air 2",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://merchants.infishopper.com/content/images/thumbs/0163509_ipad-air-2-64gb-4g_450.jpeg",
        price:  50500,
        oPrice:  60000,
        quantity:1
    },
    {
        id: 64,
        catagory: "Ipad",
        name: "Ipad Air 3rd Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61pKdiWVerL._AC_SS450_.jpg",
        price: 58900,
        oPrice:  62900,
        quantity:1
    },
    {
        id: 65,
        catagory: "Ipad",
        name: "Ipad 11 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
        price:  60500,
        oPrice:  63000,
        quantity:1
    },
    {
        id: 66,
        catagory: "Ipad",
        name: "Ipad Pro 10",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
        price:  75000,
        oPrice:  82499,
        quantity:1
    },
    {
        id: 67,
        catagory: "Ipad",
        name: "Ipad Pro M1",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg",
        price:  175500,
        oPrice:  183000,
        quantity:1
    },
    {
        id: 68,
        catagory: "Ipad",
        name: "Ipad Pro 10.5 Inch.",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-10-5-in/ipad-pro-10-5-in-space-gray.jpg",
        price:  60000,
        oPrice:  67900,
        quantity:1
    }])
    
  return (
    <store.Provider value={[detail, setDetail]}>
        {props.children}
    </store.Provider>
  )
}

export default StoreData;