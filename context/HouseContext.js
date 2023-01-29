import { createContext, useContext, useState } from "react";

export const HouseContext = createContext();

const HouseProvider = (props) => {
  const [houses, setHouses] = useState([
    {
      name: "Lekki Villa DePapel",
      key: "49429053",
      location: "Ikeja, Lagos",
      price: "2400",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131012/realhome/pexels-expect-best-323780_lssedw.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "5",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/photo-1570295999919-56ceb5ecca61_osjyxw.jpg",
    },
    {
      name: "Ronaldo Blocks",
      key: "7838954",
      location: "Ikeja, Lagos",
      price: "10400",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131011/realhome/pexels-frans-van-heerden-1438832_pmqk7w.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "3",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/istockphoto-1386479313-170667a_hztsb9.jpg",
    },
    {
      name: "Mayfair estate and lodges",
      key: "7393028",
      location: "Ikeja, Lagos",
      price: "7200",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-pixabay-164558_zbc2ys.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "1",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/istockphoto-1299077582-170667a_hwwca8.jpg",
    },
    {
      name: "Old Kent road Tower",
      key: "6837320",
      location: "Ikeja, Lagos",
      price: "3000",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-graphicgumcom-1115804_kxxevb.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "5",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/istockphoto-1286810719-170667a_dpssxc.jpg",
    },
    {
      name: "Exclusive palace homes",
      key: "823748472",
      location: "Ikeja, Lagos",
      price: "8900",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131010/realhome/pexels-binyamin-mellish-106399_ggzc7z.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "2",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/1900x1900_jkogv0.webp",
    },
    {
      name: "Espanol la coruna ",
      key: "83494894",
      location: "Ikeja, Lagos",
      price: "3700",
      productimage:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1670131009/realhome/pexels-pixabay-276724_dy16bv.jpg",
      housetype: "Flat & Bungalow",
      about:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
      rating: "4",
      sellername: "Abraham Joseph",
      sellerimage: "https://res.cloudinary.com/dmixz7eur/image/upload/v1670189206/realhome/DT_Atty_Profile_pics_331x313_gdjtf9.webp",
    },
  ]);
  return (
    <HouseContext.Provider value={{ houses, setHouses }}>
      {props.children}
    </HouseContext.Provider>
  );
};
export const useHouseContext = () => {
  const context = useContext(HouseContext);
  //   if (!context) throw new Error("useHouseContext must be used in HouseProvider");

  return context;
};

export default HouseProvider;
