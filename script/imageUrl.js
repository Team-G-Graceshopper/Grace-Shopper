const Scraper = require("images-scraper");
const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});


// (async () => {
//     const res = await google.scrape("pet toys", 100);
//     console.log(res.map(r=>r.url))
//   })();


const petAcessArray = [
    'https://m.media-amazon.com/images/I/81cxNHYXxdL.jpg',
    'https://m.media-amazon.com/images/I/61F2H16SVrL._AC_.jpg',
    'https://m.media-amazon.com/images/I/51S8ghsj1PL._AC_.jpg',
    'https://m.media-amazon.com/images/I/51F70Bo4zbL._AC_.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indoor-dog-toys-1587002073.jpg?crop=1.00xw:0.751xh;0,0.161xh&resize=1200:*',
    'https://www.thespruce.com/thmb/8x1_svXkUVFXv10eavLCRJnGapE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-toy-pets-5323118-8d95e3ad65254159854cbf31bf0d137c.jpg',
    'https://m.media-amazon.com/images/I/81acduci6OL.jpg',
    'https://i5.walmartimages.com/asr/4726d7bd-ec14-4e43-a335-58f9cbcd382d.cf0197800fa80a3ad058c61cec979261.jpeg',
    'https://cdn.thewirecutter.com/wp-content/media/2021/12/dog-toys-2048px-0010.jpg',
    'https://nypost.com/wp-content/uploads/sites/2/2021/08/dog-toys.jpg?quality=75&strip=all',
    'https://cdn.shopify.com/s/files/1/0311/6122/1257/products/International-Classic_Group.jpg?v=1599754069',
    'https://assets.petco.com/petco/image/upload/f_auto,q_auto/3311648-center-5',
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_37/3571392/210507-dog-toys-bd-2x1_0.jpg',
    'https://i5.walmartimages.com/asr/b8261b11-a844-46de-bede-88bccb2dcf3b.ad7c09e5e629b37f1fc24ac048a00606.jpeg',
    'https://media.istockphoto.com/id/1149531683/photo/dog-chooses-and-fetches-rope-toy-from-hoard-of-pet-toys-in-cart.jpg?s=170667a&w=0&k=20&c=vRy52M2lnMO8p71TVvN7ohy7ipFFoDBQYwR7fUOQrNM=',
    'https://i.etsystatic.com/17360662/r/il/48abc1/4471508529/il_fullxfull.4471508529_29f8.jpg',
    'https://i0.wp.com/petfactory.com/wp-content/uploads/2022/05/plush-toy-group.png?ssl=1',
    'https://m.media-amazon.com/images/I/61iLNIUwPnL.jpg',
    'https://www.thesprucepets.com/thmb/Rgm0Ccjb4o-bF0345oi31IOlA_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mathew-coulton-ZnHEa8mHOxw-unsplash1-541c930e29364258a23ff051199f3dc2.jpg',
    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587565312-148605_PT2._AC_SL1500_V1546279759_.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F31%2Fvarious-pet-toys-00c3ec73.jpg',
    'https://target.scene7.com/is/image/Target/GUEST_6765723d-b095-4396-a01c-800c662b063c',
    'https://ae01.alicdn.com/kf/H3e432ec97ff34b2f98ba720366c767b9W/Pet-Dog-Toys-Puppy-Chew-Toys-Resistant-To-Bite-Teeth-Training-Toys-Cute-Dog-Muzzle-Silicone.jpg_Q90.jpg_.webp',
    'https://helios-i.mashable.com/imagery/reviews/03MJQInyLDIcGvV2PcqUQv0/hero-image.fill.size_1200x1200.v1646423109.jpg',
    'https://images.ctfassets.net/j4x7ugudy4uu/14fHrENjRw66EORUnqHNEI/0c74e3239fe3cd1d9a704de26b30b0be/09.01.20_Testimonial_Images_HP668X668_01.jpg',
    'https://target.scene7.com/is/image/Target/GUEST_c8e0a262-9035-4a10-8bd7-b0f4bd9e253d?wid=2400',
    'https://retrievist.akc.org/wp-content/uploads/2020/04/Best-of-Sub-toys-interactive-dog-toys.jpg',
    'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/6157254766001/fd0f0033-2daf-40d1-95cd-20a0f439d977/0aa7144f-a8d8-4e5d-9ba3-79ef6e42e391/1280x720/match/image.jpg&w=640&h=360&q=90&c=cc',
    'https://hips.hearstapps.com/hmg-prod/images/barkbox-2-1650402615.jpg',
    'https://image.chewy.com/is/image/catalog/177819_Main._AC_SL600_V1573143796_.jpg',
    'https://cdn.thewirecutter.com/wp-content/media/2021/12/dog-toys-2048px-0004.jpg',
    'https://static.onecms.io/wp-content/uploads/sites/47/2020/09/12/willie-bones-dog-chewing-toy.jpg',
    'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1453874-center-1',
    'https://m.media-amazon.com/images/I/71hIJmLxjXL.jpg',
    'https://images.ctfassets.net/cnu0m8re1exe/1WKgRaLCCYgpkgKhA1hptM/ed288ea68f54c258a8079b869ead8045/image001.png?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
    'https://target.scene7.com/is/image/Target/GUEST_1b696741-18e7-48ea-bfb1-a646f347141a',
    'https://www.k9ofmine.com/wp-content/uploads/2019/11/best-interactive-dog-toys.jpg',
    'https://media.istockphoto.com/id/1316829099/photo/toys-for-dogs-isolated.jpg?s=170667a&w=0&k=20&c=SMJ7knRs5Tc_HKc_wjVtSV7iDvm_iMThXjy-qzT-smE=',
    'https://media1.popsugar-assets.com/files/thumbor/YIJHj-i2TAiygIWckcX5wEYTK2w/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/06/886/n/44471815/72271bec5b3fce4bc53bc4.47139388_/i/Best-Pet-Toys-Kids-2018.jpg',
    'https://www.rd.com/wp-content/uploads/2022/06/kong-jumbler-dog-toy-ecomm-via-amazon.jpg',
    'https://images.ctfassets.net/j4x7ugudy4uu/1l8pUPBNf6FfY8QON4btkB/c3323b5f5ec7d52dbaf722e702856389/BB_GWP_Funboy_Sled_Jan_Homepage_V3.png',
    'https://www.rd.com/wp-content/uploads/2022/06/RD-ecomm-best-pet-toys-FT-via-merchant-3.jpg',
    'https://www.hshv.org/wp-content/uploads/2018/06/19942576205_dc2b2f6c16_z.jpg',
    'https://doglab.com/wp-content/uploads/Jack-Russel-Terrier-pulling-a-trailer-filled-with-the-best-dog-toys.jpg',
    'https://www.mudbay.com/wp-content/uploads/2019/10/Product-DogToys-carrot2ball2-520x520.png',
    'https://www.akc.org/wp-content/uploads/2016/01/AdobeStock_62502316-800x600.jpeg',
    'https://www.cleveland.com/resizer/ZTe4lUu9vuoIA6xH8ajmwfEXzoA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4E6JCKXBDFDRVOHBGAWLGBBN4Q.jpg',
    'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
    'https://www.tearribles.com/static/e3006f31d717feb8839abd6f8cdf5dad/ffe25/izzy.png',
    'https://i.ytimg.com/vi/dIwRRtTH5yA/maxresdefault.jpg',
    'https://www.tearribles.com/static/b4575b8bc8ea6943ebe8a84a173fc737/37155/all2.png',
    'https://www.pumpkin.care/wp-content/uploads/2021/02/Indestructible-Dog-Toys-Hero-1-1200x628.jpg',
    'https://www.petedge.com/media/catalog/product/z/a/za3123_group_001_1.jpg?width=400&height=400&canvas=400:400&quality=80&fit=bounds',
    'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fdogoday.com%2Ffiles%2F2020%2F12%2FMarshall%E2%80%99s-Pet-Toys.jpg',
    'https://s7d2.scene7.com/is/image/PetSmart/WEB-20-585677-April_20_HP_FW_10-13_PLP_Tile_MOBILE?$PB0501FullM$',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F07%2F11%2Fthree-fabric-squeeky-diy-dog-bone-toy-0460267c-2000.jpg',
    'https://media1.popsugar-assets.com/files/thumbor/qNcJ84QoXMKoLb8uFrnGRh0cUKo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/06/881/n/44471815/505b3f5cd936bbad_VTechPuppyCare.Amazon/i/VTech-Care-Me-Learning-Carrier.jpeg',
    'https://www.cnet.com/a/img/resize/97667520932db71d8f4b31f5da748aed5b4d1720/hub/2022/01/29/75c15b6d-b7c9-4e3e-b96d-e25ec0ed4d6e/dog-toys-2.png?auto=webp&fit=crop&height=528&width=940',
    'https://cdn.shopify.com/s/files/1/0470/2211/2926/articles/Rubber_Dog_Toys_Safe_or_Toxic_881x.jpg?v=1630544579',
    'https://www.multipet.com/media/47712-Loofa12-inch-Thumbnail-355x250.png',
    'https://media.istockphoto.com/id/1388919512/vector/pet-toys-icons-set-cartoon-vector-cat-dog-toys.jpg?s=612x612&w=0&k=20&c=_V91pV51BmoEffHApTo-hXKiWuNLR832DB2PUe1H9zA=',
    'https://images.ctfassets.net/j4x7ugudy4uu/60WijFbQUgy3qZDFfdwIq/db355d5126b539c8ab9c0ce866ba3065/09.01.20_Testimonial_Images_HP668X668_02.jpg',
    'https://cdn.diys.com/wp-content/uploads/2021/03/DIY-dog-toys.png',
    'https://i0.wp.com/petfactory.com/wp-content/uploads/2021/06/TOYs_group.png?ssl=1',
    'https://cdn.thewirecutter.com/wp-content/media/2021/12/dog-toys-2048px-4864-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024',
    'https://media.architecturaldigest.com/photos/6203d2f7bf50a6417b170e48/1:1/w_2560,h_2560,c_limit/lqhnzfrusq88y66qqb4y__29220.1630123028.jpg',
    'https://media.istockphoto.com/id/519649757/vector/dog-stuff-collection-dog-toys-dog-food-doghouse.jpg?s=612x612&w=0&k=20&c=1y2C9oPL3OjeinguGuP94GNyRW8wAt75dU0haEto4tM=',
    'https://media.istockphoto.com/id/483047391/vector/dog-toys-and-treats.jpg?s=612x612&w=0&k=20&c=ARP0haqm2fp-Lw2qlmw91Y9HFwykrYt4FmIKCVuwjx8=',
    'https://target.scene7.com/is/image/Target/GUEST_dc0cd2a3-a640-4433-875d-9fb4af8571f7',
    'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2022_37/3571447/31mduk6ngdl-sl500-6324d4bb83e80.jpg',
    'https://pyxis.nymag.com/v1/imgs/d66/77c/b0c7a9c54ce18dd733d5e332a2b75d06c0-Lede-.rsquare.w1200.jpg',
    'https://media.architecturaldigest.com/photos/624df3db780a14c1cfd808c8/master/pass/falcon-green-5-2.jpg',
    'https://www.treehugger.com/thmb/rVdgxFi4UzJvT3lhxUs_0BX3_cs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1217854958-bd53f36defda4135b0807a6581e5aee5.jpg',
    'https://people.com/thmb/2KytXmAClXHmCGiMJ8UNegdxFOA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x99:691x101)/bark-dunkin-donuts-110122-1-ffe45ac1ab2e423382b4e6fe168641e8.jpg',
    'https://m.media-amazon.com/images/I/81ja79cqQML._AC_SL1500_.jpg',
    'https://www.sleepyhollowanimalhospital.com/wp-content/uploads/2020/07/choosing-safe-pet-toys-strip1.jpg',
    'https://cdn.shopify.com/s/files/1/1772/9591/products/pet-life-r-dna-bark-tpr-and-nylon-durable-rounded-squeaking-dog-toy-956560_480x.jpg?v=1599874614',
    'https://target.scene7.com/is/image/Target/GUEST_89e5ff33-cbad-42da-aa48-d2fcd8719711',
    'https://www.care.com/c/wp-content/uploads/sites/2/2020/10/GettyImages-1205787802-1620x1080.jpg.optimal.jpg',
    'https://cdn.shopify.com/s/files/1/0311/6122/1257/files/Wobble_Ball_2.0_by_P.L.A.Y._107cece0-0130-49ec-8eb7-783042dcf51c_large.jpg?v=1613509437',
    'https://people.com/thmb/FIH3vNh5w9fB79L9BJ2uzMKLvOw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/bark-dunkin-donuts-110122-3-94a581ceed4b445db9aa4d6be85f60c1.jpg',
    'https://helios-i.mashable.com/imagery/articles/04GYA3lRZi1EAg7p334SeNk/hero-image.fill.size_1248x702.v1664897639.jpg',
    'https://target.scene7.com/is/image/Target/GUEST_dcc59c75-3d3b-4942-a45d-d7265281490a',
    'https://mobileimages.lowes.com/productimages/7af969aa-dc9a-498e-891d-050abcfd6ca6/49882294.jpg?size=xl',
    'https://www.rover.com/blog/wp-content/uploads/2021/03/dog-with-rope-toy-960x540.jpg',
    'https://media1.popsugar-assets.com/files/thumbor/QKmVAMjtU0vmXT-dLpq0PD-tgQA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/11/05/745/n/47856405/3c10c19e26c82d8e_Sloth/i/MewaJump-Plush-Dog-Toy.jpg',
    'https://mobileimages.lowes.com/productimages/8a6b54b8-f3d6-4260-9fda-3b3e5815e656/17208868.jpg?size=pdhi',
    'https://s7d2.scene7.com/is/image/PetSmart/5075944?$sclp-prd-main_large$',
    'https://www.caninejournal.com/wp-content/uploads/best-interactive-dog-toys-jpg.png',
    'https://target.scene7.com/is/image/Target/GUEST_78ecad17-a50a-4b9b-8bba-34237b294068',
    'https://publish.purewow.net/wp-content/uploads/sites/2/2019/11/interactive-dog-toys-ifetch-mini-frenzy.png?fit=728%2C524',
    'https://cdn.shopify.com/s/files/1/0311/6122/1257/products/P.L.A.Y.TropicalParadise_Group_1LowRes_720x.jpg?v=1616872833',
    'https://cdn.shopify.com/s/files/1/1772/9591/products/pet-life-r-animated-extra-long-nylon-squeaker-dura-chew-plush-chew-tugging-pet-dog-toy-725828.jpg?v=1581557048',
    'https://static.independent.co.uk/2022/03/10/17/dog%20toys%20indybest.jpg?width=1200',
    'https://www.peta.org/wp-content/uploads/2021/12/dog-toys-668x336.png?20211207083430',
    'https://www.rover.com/blog/wp-content/uploads/2021/01/Image-from-iOS-scaled-e1637042974672.jpeg',
    'https://cdn.shopify.com/s/files/1/1772/9591/products/pet-life-r-foxy-tail-funimal-animated-cartoon-plush-nylon-quilted-animal-squeaker-chew-tug-pet-dog-toy-185684.jpg?v=1581557043',
    'https://i5.walmartimages.com/asr/e137f664-4bee-4032-bb6a-94587defe5d8_1.31c185cc2b2aa1095084c7015b06f06d.jpeg',
    'https://marvel-b1-cdn.bc0a.com/f00000000252115/www.petsafe.net/images/categories/toys-bouncy-bone-hero-responsive.jpg',
    'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2019/05-13/Choosing+the+Best+Pet+Treats+and+Toys+for+Your+Dog+and+Cat-min.jpg'
  ]

const catArray = [
'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg',
'https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg',
'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg',
'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
'https://static.scientificamerican.com/sciam/cache/file/1E3A3E62-B3CA-434A-8C3B3ED0C982FB69_source.jpg',
'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
'https://media.cnn.com/api/v1/images/stellar/prod/190517103414-01-grumpy-cat-file-restricted.jpg?q=w_3000,h_2049,x_0,y_0,c_fill',
'https://www.purina.co.uk/sites/default/files/2022-06/Bengal-Cat.jpg?itok=-n4U6Hsa',
'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg',
'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-anel-rossouw-2558605.jpg&fm=jpg',
'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg',
'https://www.zdnet.com/a/img/resize/9738cb7325ce228e9029cb8a0a454e9e0828a22b/2022/09/05/c70fdeec-fd32-4d1c-96fe-d5dfe2f63da4/img-1001.jpg?auto=webp&width=1280',
'https://www.humanesociety.org/sites/default/files/2022-08/hl-yp-cats-579652.jpg',
'https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2020-11/Hero-Small-Mobile-cats.jpg?itok=hEnG1ehe',
'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_3332,h_1874,c_limit/1521-WIRED-Cat.jpeg',
'https://media.npr.org/assets/img/2021/08/17/gettyimages-135773550-bb02ff79dd836d6e4170d4bc555423f24fa29d5e.jpg',
'https://www.ddfl.org/images/animals/A0883509.jpg',
'https://cdn.britannica.com/25/7125-050-67ACEC3C/Abyssinian-sorrel.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Minniecat.png/800px-Minniecat.png',
'https://www.thesprucepets.com/thmb/-QI6v1DcDpmSXjERPM1tneK5cIU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/guide-to-cat-eyes-552114-hero-75d820458de24543a35543a584b9eec6.jpg',
'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg',
'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg',
'https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg',
'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F6157254766001%2F961ad642-68ec-4156-ab18-5fb26db7e85c%2Fa7fd44aa-762e-4be4-a99f-bdebcce91235%2F1280x720%2Fmatch%2Fimage.jpg',
'https://www.humanesociety.org/sites/default/files/2022-10/cat-583009.jpg',
'https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg',
'https://cdn.theatlantic.com/thumbor/yHhIvkBiGvKKubxVHTNXvU4nCKQ=/1x122:2554x1452/1200x625/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg',
'https://media.cnn.com/api/v1/images/stellar/prod/221010143116-02-cat-love-affection-stock.jpg?c=original',
'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg',
'https://www.washingtonian.com/wp-content/uploads/2020/03/sandie-clarke-C8uGiOanMY4-unsplash-2048x1365.jpg',
'https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg',
'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
'https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg',
'https://www.pumpkin.care/wp-content/uploads/2022/01/how-to-train-your-cat-1200x628.jpg',
'https://www.shutterstock.com/image-photo/funny-large-longhair-gray-kitten-260nw-1842198919.jpg',
'https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg',
'https://cdn.shopify.com/s/files/1/2715/7740/files/Logo_for_site.png?v=1650412546',
'http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
'https://cdn.vox-cdn.com/thumbor/e8Sd7mfbY52I_BqJ20DrACAFz80=/0x0:2560x1536/1400x788/filters:focal(1280x768:1281x769)/cdn.vox-cdn.com/uploads/chorus_asset/file/22438301/fake_cats.jpg',
'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
'https://www.americanhumane.org/app/uploads/2016/08/john-tecuceanu-1557217-unsplash.jpg',
'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
'https://i.insider.com/63992b55b08ee10018f4d917?width=700',
'https://st.depositphotos.com/1817276/1999/i/950/depositphotos_19999259-stock-photo-collage-of-little-gray-cat.jpg',
'https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_707431309-e1554172878508.jpg',
'https://media.istockphoto.com/id/1311993425/photo/cat-world.jpg?b=1&s=170667a&w=0&k=20&c=IGWziVF64jrhp9pszNmaZT4hA1PFq2KuFfrRPFgfRxs=',
'https://nypost.com/wp-content/uploads/sites/2/2022/02/cats-eyes-this-790131-copy.jpg?quality=75&strip=all&w=1024',
'https://www.thesprucepets.com/thmb/FYYPOZxanWi8vuu5c1-TlzsD8cA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-cat-breeds-4801270-hero-7f4a958430174ea2be825fb80daf0645.jpg',
'https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg',
'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-106649919-scaled-e1618860834581.jpg',
'https://burst.shopifycdn.com/photos/cat-eyes-photo.jpg?width=1200&format=pjpg&exif=1&iptc=1',
'https://people.com/thmb/JzeSCNlCeO7MZlQE4dUoxasKJRc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/grumpy_kitzia-3-49f1519d7ae745fa9c3c327fd800df59.jpg',
'https://us.123rf.com/450wm/azalia/azalia2208/azalia220800006/azalia220800006.jpg?ver=6',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg',
'https://static.vecteezy.com/system/resources/thumbnails/002/098/204/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg',
'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
'https://image.petmd.com/files/styles/863x625/public/orange-tabby-kitten-walking-across-floor.jpg',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1xw:0.8479455639884846xh;center,top&resize=1200:*',
'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
'https://media.istockphoto.com/id/1191962502/photo/cute-puppy-and-kitten-closeup-looking-at-camera.jpg?s=170667a&w=is&k=20&c=9Ms0R_hTKXFFdLpdQiBwGOR8IWlilqZUvpqzS43idV0=',
'http://med.stanford.edu/content/dam/sm-news/images/2021/09/cat_by-Kateryna-T-Unsplash.jpg',
'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
'https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg',
'https://bestfriends.org/sites/default/files/styles/three_col_rect_470x350_/public/story_images/Cat_Raindrop-courtesy-of-Best-Friends-staff-1.jpg?h=1eb40f66&itok=LlexqAru',
'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg',
'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg',
'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/abyssinian-card-large.jpg?bust=1535664411',
'https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg',
'https://trublog.imgix.net/siamese-cats-touching-noses.jpg',
'https://burst.shopifycdn.com/photos/blue-eyed-cat-daydreams.jpg?width=1200&format=pjpg&exif=1&iptc=1',
'https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg',
'https://www.shelterluv.com/sites/default/files/animal_pics/5937/2023/01/11/07/20230111074526.png',
'https://media.gettyimages.com/id/1199279669/photo/big-eyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-british-sort-hair-cat.jpg?s=612x612&w=gi&k=20&c=r7_Ff6hzG0UP29BjyThLPWXwI3AQEHWu8h5Bi16ql2Q=',
'https://nationaldaycalendar.com/wp-content/uploads/2022/10/National-Cat-Day-October-29.jpg',
'https://st.depositphotos.com/1004061/4227/i/950/depositphotos_42274629-stock-photo-cat-sitting-on-green-grass.jpg',
'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png',
'https://media.istockphoto.com/id/1267021092/photo/funny-winking-kitten.jpg?s=612x612&w=0&k=20&c=9PoFYkqKZ30F_ubxX90_azwsR22ENwrFnOjxV0RaoTo=',
'https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281',
'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=5903267506375604',
'https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg',
'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-in-the-garden-royalty-free-image-1590775938.jpg?crop=0.610xw:0.914xh;0.185xw,0.0862xh&resize=1200:*',
'https://www.rspca.org.uk/documents/1494939/7712581/1185390-rehome-cat-oakley-banner_990x350.jpg/b989a15a-0299-f1a3-d405-925711ea08ac?t=1665503984893',
'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-001.jpg',
'https://media.architecturaldigest.com/photos/62fab98fbd494a7bbf81420d/16:9/w_1327,h_746,c_limit/LisaBreeze%20Flemington%20House%2013.jpeg',
'https://pyxis.nymag.com/v1/imgs/4dd/8ec/f6b06b632d5369a70e6fc0240ca005cbd9-bic-kitty-litter.jpg',
'https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg',
'https://www.gannett-cdn.com/media/2020/02/18/USATODAY/usatsports/imageforentry18-itm.jpg',
'https://th-thumbnailer.cdn-si-edu.com/-0b3gqvxZ6XwB26ThNy4_nFWLhk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/58/04/5804c840-3073-4ecf-a1d2-37808419fe93/gdahh5-wr.jpg',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=pexels-kelvin-valerio-617278.jpg&fm=jpg'
]

// (async () => {
//     const res = await google.scrape("dog image", 100);
//     console.log(res.map(r=>r.url))
//   })();


const dogArray = [
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
    'https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=original',
    'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg',
    'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?cs=srgb&dl=pexels-muhannad-alatawi-58997.jpg&fm=jpg',
    'https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill',
    'https://media.npr.org/assets/img/2022/11/23/russian-toy-2-3-_custom-fd300880a9643efca73031d33f38ca7f4054b710.jpg',
    'https://static01.nyt.com/images/2022/05/10/science/28DOGS-BEHAVIOR1/28DOGS-BEHAVIOR1-mediumSquareAt3X-v2.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    'https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg',
    'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
    'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
    'https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg',
    'https://www.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg',
    'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg',
    'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_FMjpg_UX1000_.jpg',
    'https://www.aspca.org/sites/default/files/dog-care_general-dog-care_main-image.jpg',
    'https://www.thesprucepets.com/thmb/7TDhfkK5CAKBWEaJfez6607J48Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
    'https://www.pedigree.com/sites/g/files/fnmzdf1201/files/2022-08/PED-Hero-HP.png',
    'https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg',
    'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
    'https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d.jpg',
    'https://th-thumbnailer.cdn-si-edu.com/C4MIxDa_YxisZm2EtoTNHweBKZU=/fit-in/1600x0/filters:focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg',
    'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/black-lab-favorite-dog-main-220315-e8e0ee.jpg',
    'https://www.travelandleisure.com/thmb/6xTNZI_Hd_oEXieQdZXAVjgtla8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/corgi-dog-POPDOGNAME1020-ebc7e573ca6e476b859c6092ac8589a4.jpg',
    'https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg',
    'https://static01.nyt.com/images/2022/05/17/well/12-Well-NL-Dogs/12-Well-NL-Dogs-mediumSquareAt3X.jpg',
    'https://undark.org/wp-content/uploads/2022/09/dog.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Carolina-Dog-standing-outdoors.jpg',
    'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
    'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-10/dog-583007.jpg?h=c6dbd090&itok=uY9_vnXo',
    'https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/20164/308225/heroimage0.288665001627055597.jpg',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    'https://static.scientificamerican.com/sciam/cache/file/1FD432BD-1DC9-4EE3-B2F3494EBAE7DCAE_source.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/YellowLabradorLooking.jpg/220px-YellowLabradorLooking.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Scottish-Deerhound-standing-in-the-woods.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg',
    'https://www.thesprucepets.com/thmb/7W0KZNjH1VxFXKbYM1L5q6n-XYY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg',
    'https://hips.hearstapps.com/vidthumb/manual_upload/58ace778bbddbd4a425fec54/thumb_1487726463.png',
    'https://www.travelandleisure.com/thmb/gs7Gj12SUw2hy0F0MM9AMmYV0AU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/corgi-dog-name-POPDOGS0819-1ebb8efb2c68499eab1c76411c9d1c15.jpg',
    'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
    'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-04/220428-dog-breeds-mb-1019-95b354.jpg',
    'https://d2kl333iheywy2.cloudfront.net/assets/main/lab-hero-square-1fe2f13fa943105fe2c521df43eeb11c.jpg',
    'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
    'https://www.aspcapro.org/sites/default/files/styles/image_component/public/resource/card/image/dog-body-language-scared.jpg?itok=W4v-Ec8u',
    'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=773306666034909',
    'https://www.science.org/do/10.1126/science.aba2340/abs/dogs_1280p_0.jpg',
    'https://image.petmd.com/files/styles/863x625/public/dog-panting.jpg',
    'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=5vfB1p-E',
    'https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg',
    'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-1200x628-FACEBOOK-1200x628.jpg',
    'https://m.media-amazon.com/images/M/MV5BZDRiNDFmMGYtOWY3Ni00ZjUxLTkzZGYtODZiNmIxZGRiZTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    'https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.528xw:0.792xh;0.0570xw,0.154xh&resize=1200:*',
    'https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=2000',
    'https://images.indianexpress.com/2022/04/dogbreed_AP.jpg',
    'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?cs=srgb&dl=pexels-lucas-andrade-4681107.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    'https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg?crop=0.748xw:1.00xh;0.0897xw,0&resize=980:*',
    'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg',
    'https://people.com/thmb/5uLym456xzuJ5MwbPIdTJiyGoSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(904x0:906x2)/pug-1-0d4c0f988e3d421ca4954917b1450664.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
    'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2022/03/teddybear-dog-breeds.jpeg?bust=1646780646',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-guard-dogs-cane-corso-1627062721.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=1200:*',
    'https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg',
    'https://img.freepik.com/free-vector/illustration-dogs-collection_53876-17268.jpg',
    'https://www.thesprucepets.com/thmb/ds_6QWZkIa6b0SE_kZaTgk4P8qY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-175928868-120f47906f4849969fcdab28e2e4f494.jpg',
    'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/French_Bulldog_with_puppies.jpg/800px-French_Bulldog_with_puppies.jpg',
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2022_39/3572893/220927-dog-food-2x1-aw_0.jpg',
    'https://cdn.arstechnica.net/wp-content/uploads/2022/04/GettyImages-997016774-800x532.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F6157254766001%2F1b74f07f-e616-4697-adfe-2375b8fb7b8b%2F1f7eb1c6-d1f4-4a22-b6f5-27a12fc24410%2F1280x720%2Fmatch%2Fimage.jpg',
    'https://image.petmd.com/files/styles/863x625/public/old-dog.jpg',
    'https://www.pedigree.com/sites/g/files/fnmzdf1201/files/2022-09/PED-dog-age-NicoTwix-600.png',
    'https://www.thedogandfriends.com/assets/img/index/img-hero_dog.png',
    'https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Pets_Health_Page/Shop_Dog_Health_Supplies_750x300_ENG_3.jpg',
    'https://images.ctfassets.net/j4x7ugudy4uu/1l8pUPBNf6FfY8QON4btkB/c3323b5f5ec7d52dbaf722e702856389/BB_GWP_Funboy_Sled_Jan_Homepage_V3.png',
    'https://cdn.sanity.io/images/d075r9p6/sportdog-production/ff6d53634526688ef539c8f73e44142495701769-1600x1000.jpg?rect=0,28,1250,781&w=1600&h=1000&q=75&fit=max&auto=format',
    'https://nationaltoday.com/wp-content/uploads/2020/08/Dog.jpg',
    'https://www.purina.co.uk/sites/default/files/2021-03/Article%20teaser%20dog%20puberty.jpg',
    'https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703-768x535.jpeg',
    'https://images.squarespace-cdn.com/content/v1/54bbcfaee4b0fee4b028af1b/09bbf8ba-75a1-4502-b97d-7c46d61575f3/Website+Social+Link.png',
    'https://hips.hearstapps.com/hmg-prod/images/amy-baugess-detvmzcbyia-unsplash-1593544421.jpg',
    'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/Skyword/images/azawakh-dog-standing-on-path-SW.jpg',
    'https://images.freeimages.com/images/previews/cb5/aesthetic-dog-1642000.jpg',
    'https://vcahospitals.com/-/media/2/vca/images/lifelearn-images-foldered/492/gettyimages_1269161160_612x612scaler.ashx',
    'https://highlandcanine.com/wp-content/uploads/2021/01/vizsla-running.jpg',
    'https://media.nature.com/lw767/magazine-assets/d41586-022-00209-0/d41586-022-00209-0_20071828.jpg',
    'https://www.thekennelclub.org.uk/media/5092/australian-shepherd-puppy.jpg?mode=crop&width=800&height=600&rnd=132957076910000000',
    'https://www.dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/medium-sized-dogs-1613083812.jpg?crop=0.670xw:1.00xh;0.0369xw,0&resize=1200:*',
    'https://cdn.shopify.com/s/files/1/1577/4333/files/05151-Overcoat-Fuse-Jacket-Kronda-Obi-Syncline-Print-3_38b5505f-8c40-455f-aae4-c9985b1406d5_1345x680.jpg?v=1672771388',
    'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F03%2Fchinese-crested-628602384-2000.jpg',
    'https://www.morrisanimalfoundation.org/sites/default/files/styles/article/public/2020-03/MBS_DogEvolution_blg_031820.jpg?h=b1512c13&itok=Cqx3F-nn',
    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1000&format=jpeg&auto=webp'
]
    module.exports = {dogArray,
                      catArray,
                    petAcessArray}