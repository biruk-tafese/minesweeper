interface Hotel {
   name: string,
   logo: string,
   description: string,
   location: string,
   social_media: string[],
   services: string
}


class RegisterHotel {
   name: string;
   logo: string;
   description: string;
   location: string;
   social_media: string[];
   services: string;


   constructor(info: Hotel) {
     this.name = info.name;
     this.logo = info.logo;
     this.description = info.description;
     this.location = info.location;
     this.social_media = info.social_media;
     this.services = info.services;
   }


    add(details: Hotel) {
     this.name =  details.name
     this.logo = details.logo
     this.description = details.description;
     this.location = details.location;
     this.social_media = details.social_media ;
     this.services =  details.services;
   }

  
   get() {
  return  `\nName: ${this.name} \nLogo: ${this.logo} \nDescription: ${this.description}
      \nLocation: ${this.location} \nSocial Media:\n ${this.social_media.map((socials) => `- ${socials} \n`)} \nServices:  ${this.services}`
   }
   
}



const hotel : Hotel = {
   name : "Biruk Tafese Hotels",
    logo : "eagle",
    description : "Very reknown hotel in Eastern Africa",
    location : "Addis Ababa",
    social_media : ['facebook','instgargam', 'tiktok','youtube'],
    services : 'Hotel and spa',
}

const showHotels: String = new RegisterHotel(hotel).get();

console.log(showHotels)


