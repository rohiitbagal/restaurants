import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Resutarant from "./Resutarant.js";
import Rbody from "./Rbody.js";

function App() {
  // Define restaurant data
  const restaurants = [
    {
      id: 1,
      addres: "Viman Nagar Pune",
      name: "Atmosphere 6 ",
      description:
        "Revel in the fun of dining on a well-lit floor with planes flying right above your head! Atmosphere 6 is your perfect pick for exceptional restaurants in Pune for a romantic dinner. A reservation at the top deck close to rooftop bar is the perfect thing you could plan with your companion for a dinner night.",
      highlights: "Well-lit Good Ambiance, Rooftop Bar, and Desk",
      mustHaves: "Pinacolada, Tai Chi Chicken, and Hara Bhara Kebab",
      costForTwo: "INR 1800 Approximately With Alcohol",
      cuisine: "North Indian, Italian, and Chinese",
      tips: "It offers karaoke, live music and live screenings",

      address: [
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.763603312951!2d73.9138005!3d18.5654303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1476ce8737d%3A0x98c4cc347eadf3ee!2sAtmosphere%206!5e0!3m2!1sen!2sin!4v1712492327855!5m2!1sen!2sin"
          width={800}
          title="Atmosphere 6 location"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
          1
        </iframe>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={500}
            src="https://www.youtube.com/embed/7uzIKWG6Jts?si=vNKhaH3ozfhFqvgE"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          1
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPG7CDba41k1uJOhzqtb3OuODpnlVWH7rzbURlw=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: "099607 00733",
      Reservations: "dineout.co.in, booktables.in",
      url: [<a href="airmenus.in">airmenus.in</a>],
    },
    {
      id: 2,
      name: "Cocoparra – Happy Dining Space amidst The Green",
      tips: "It offers karaoke, live music and live screenings",
      addres: "Chandan Nagar, Pune",
      description:
        "Cocoparra is thought for its exceptional buffet lunch in Pune. Cocoparra is the restaurant within the Kharadi region that brings you the whole thing sought by a romantic couple. The vicinity has lazy environment amid lush greenery, candlelit dining with some karaoke, and good vibes. Cocoparra is made to meet the desires of lovely couples.",
      highlights: "Sunday Lunch, Old Book Collections",
      mustHaves: "Butter Garlic Prawn, Chocolate Mousse, and Gulab Jamun",
      costForTwo: "INR 1100 Approximately",
      cuisine: "Continental, North Indian, European, and Asian",
      address: [
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15134.358092270055!2d73.7600972!3d18.5022433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbff4e1a27d%3A0x5b1a308f4e5a914d!2sCocorico%20Smoke%20Bar%20and%20Kitchen!5e0!3m2!1sen!2sin!4v1712492834421!5m2!1sen!2sin"
          title="cocoparraaddreass"
          width={800}
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={500}
            src="https://www.youtube.com/embed/EnjR0LGO5Ss?si=2A8GPUaevFGFh-kQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPkmUgMNkA5OUATq8QR4zEJPHKr5dH_vp7vEgAL=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: "084119 79797",
      Reservations: "dineout.co.in",
      url: [<a href=" dineout.co.in"> dineout.co.in</a>],
    },
    {
      id: 4,
      name: " Addah - The O Hotel",
      tips: "It offers karaoke, live music and live screenings",
      addres: "The O Hotel, North Main Road, Koregaon Park, Pune ",
      description:
        "If I sound that you could have candlelight dinner in Pune through the poolside at the same time as gazing at stars above and sip the most exotic wine there is with your loved one, it would sound like a dream? Visit Addah and make these things real.",
      highlights: " Décor, Rooftop Ambiance, Romantic Place",
      mustHaves:
        "Mocktails, Seekh Kebab, Tulsi Tangri, Tamatar Dhaniya Shorba, Sikandari Raan,",
      costForTwo: " INR 2200 Approximately",
      cuisine: " North-Indian",
      address: [
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7565.521531862408!2d73.887746!3d18.53971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b4a6472919%3A0x5440fce7642fdff7!2sO%20Hotel%20Pune-%20Koregaon%20Park!5e0!3m2!1sen!2sin!4v1712516416067!5m2!1sen!2sin"
            title="addah"
            width={800}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          ,
        </div>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={500}
            src="https://www.youtube.com/embed/9ymh-YAHjLI?si=9JZAdm2l6lKDsPK8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPzh28bHvDDGIYHwEhiNOwFC2wqrLI42_DU7sRa=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: " +91 20 40011000",
      Reservations: "https://www.ohotelsindia.com/index.htm",
      url: [
        <a href=" https://www.ohotelsindia.com/index.htm">
          {" "}
          https://www.ohotelsindia.com/index.htm
        </a>,
      ],
    },
    {
      id: 3,
      name: " Village- The Soul of India",
      tips: "It offers karaoke, live music and live screenings",
      addres: "Hadpsar, Pune",
      description:
        "As the name replicate, Village-The Soul of India, exceptionally captures life in a conventional Indian village and offers the customers a look and feel of lifestyles in the villages of India. The setup is very traditional and the restaurant has incredible dances on display, some best village tunes and the uniforms of the staff along with the furniture gives you village vibes. The meals are massively spread and you can gorge on a couple of cuisines",
      highlights: "Vibrant Village-Like Ambiance and Atmosphere",
      mustHaves:
        "Chaat, Sev Puri, Panipuri, Mutton, Jalebi, Chicken Biryani, Paneer Tikka",
      costForTwo: "INR 1000 Approximately",
      cuisine:
        " North Indian, Lucknowi, Gujarati, Maharashtrian, South Indian, Bengali",
      address: [
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.920443128694!2d73.9339986!3d18.5185007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c18a25cb4a0b%3A0xb67ac01600733e76!2sVillage%20-%20The%20Soul%20Of%20India!5e0!3m2!1sen!2sin!4v1712515534928!5m2!1sen!2sin"
            width={800}
            title="villege"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          ,
        </div>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={500}
            src="https://www.youtube.com/embed/k_Mi2jqNoFs?si=Wu_i7cUUV7FsMvkO"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPLx9HP2a27FzZbbIh7eV1Tg2bxV3GBfh4-_i4h=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: " 022 4893 2018",
      Reservations: "https://villagesoulofindia.com/",
      url: [
        <a href="https://villagesoulofindia.com/">
          https://villagesoulofindia.com/
        </a>,
      ],
    },
    {
      id: 5,
      name: " George Restaurant",
      tips: "It offers karaoke, live music and live screenings",
      addres:
        "No 2436, General Thimayya Road, Opposite Arora Tower, Hulshur, Camp Area, Pune",
      description:
        "George Restaurant is a F&B-Casual Dining outlet located in the heart of the city. It offers a wide variety of delicious dishes from around the world. The restaurant has a cozy and inviting atmosphere, perfect for a casual dinner or a special occasion. The menu features a variety of appetizers, entrees, and desserts, all made with fresh, locally sourced ingredients. The staff is friendly and attentive, and the prices are reasonable. Whether you're looking for a quick bite or a leisurely meal, George Restaurant is the perfect place to enjoy a delicious meal",
      mustHaves:
        "Vegetarian Friendly, Halal,Chaat, Sev Puri, Burgers, Cheesecakes, Onion Rings",
      highlights:
        " The staff is friendly and attentive, and the prices are reasonable. Whether you're looking for a quick bite or a leisurely meal",
      costForTwo: "INR 1700 Approximately",
      cuisine: " Indian, Persian",
      address: [
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15133.017056194043!2d73.8793602!3d18.5174086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04fa7f55113%3A0x71f5938ce54115b4!2sGeorge%20Restaurant!5e0!3m2!1sen!2sin!4v1712837131616!5m2!1sen!2sin"
            width={800}
            height={450}
            title="george"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          ,
        </div>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={500}
            src="https://www.youtube.com/embed/iFm7r34NNLM?si=6Ayc0o8VUc4Xshws"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMvVi5VvbxFDxqiTrtTSj6OW_1k_zZctY6nEis=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: " +912026053645",
      Reservations: "https://www.facebook.com/georgerestaurantpune1/",
      url: [
        <a href="https://www.facebook.com/georgerestaurantpune1/">
          https://www.facebook.com/georgerestaurantpune1/
        </a>,
      ],
    },
    {
      id: 7,
      name: " Copper Chimney",
      tips: "It offers karaoke, live music and live screenings",
      addres:
        " 3rd Floor, Phoenix Marketcity, Viman Nagar Rd, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
      description:
        "Excellent Food and Service, Themed Decor, Good Food Good Quality, Comfortable Seating Area, Menu Options, Great Host",
      mustHaves:
        "Tandoori Shashlik, Dal Maharaja, Kadak Roomali, Murgh Rahra, Rogan Josh Curry, Bhatti Chicken",
      highlights:
        "  Takeout, Reservations, Seating, Wheelchair Accessible, Table Service available",
      costForTwo: "INR 1600 Approximately",
      cuisine: " Indian, Asian",
      address: [
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2538845351637!2d73.9143885752378!3d18.562589282539168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1416bbcecc3%3A0xcf64cf21cac6eb1d!2sCopper%20Chimney%20-%20Best%20North%20Indian%20Restaurant%20In%20Viman%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1712843281240!5m2!1sen!2sin"
            width={800}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="copper"
            referrerPolicy="no-referrer-when-downgrade"
          />
          ,
        </div>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={460}
            src="https://www.youtube.com/embed/s1BL87_U8HI?si=ksW8tkSiqPffrWIT"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOqfjIR75GbNAFaNVlbPbKWWu7ZEO-NZnB4XhzO=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: " 082919 26919",
      Reservations: " copperchimney.in, dineout.co.in, eazydiner.com",
      url: [
        <a href="https://www.copperchimney.in/">
          https://www.copperchimney.in/
        </a>,
      ],
    },
    {
      id: 6,
      name: " Hyatt Pune",
      tips: "It offers karaoke, live music and live screenings",
      addres:
        "Hyatt Pune, Adjacent to Aga Khan Palace, Nagar Road, Kalyani Nagar, Pune",
      description:
        "Contemplated and designed with the warmth of a typical Chinese homie Baan Tao is one of the greatest Pan-Asian restaurants in Pune offering sensory eating experience to all the foodies around there. Serene and aesthetically replenished, Baan Tao offers a couple of seating alternatives to fit your temperament. Replete with a waterfall outdoor area to the cozy Thai-Salas, Baan Tao is your exceptional bet for any form of celebrations",
      mustHaves:
        "Chicken Dim Sum, Dimsum Lunch, Sushi, Clear Soup, Chicken Satay, Butter Garlic Prawns, Teriyaki Chicken",
      highlights: "  Contemporary Ambiance and a Hand-Crafted Oriental Menu",
      costForTwo: "INR 2500 Approximately",
      cuisine: " Chinese, Thai, Vietnamese, Malaysian, Asian, Indonesian",
      address: [
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.766114402673!2d73.9047843!3d18.5541227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c116f48a004b%3A0xddcdc4a4f2f7add!2sBaan%20Tao!5e0!3m2!1sen!2sin!4v1712841250819!5m2!1sen!2sin"
            width={800}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="hyatt"
            referrerPolicy="no-referrer-when-downgrade"
          />
          ,
        </div>,
      ],
      video: [
        <div>
          <iframe
            width={800}
            height={460}
            src="https://www.youtube.com/embed/_kLQI_iu1VA?si=JGfpidnDlSiwkvBn"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          ,
        </div>,
      ],
      imageUrl: (
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipN34vYnO51yPcwygJsDKYb6pZetECN5Yy27sia8=s1360-w1360-h1020"
          width={800}
          height={500}
          alt="placeholder"
        />
      ),
      Phone: " 08806751234",
      Reservations:
        "https://www.hyattrestaurants.com/en/dining/india/pune/asian-restaurant-in-kalyani-nagar-baan-tao",
      url: [
        <a href="https://www.hyattrestaurants.com/en/dining/india/pune/asian-restaurant-in-kalyani-nagar-baan-tao">
          https://www.hyattrestaurants.com/en/dining/india/pune/asian-restaurant-in-kalyani-nagar-baan-tao
        </a>,
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rbody" element={<Rbody />} />
        {restaurants.map((restaurant) => (
          <Route
            key={restaurant.id}
            path={`/restaurant/${restaurant.id}`}
            element={<Resutarant restaurant={restaurant} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
