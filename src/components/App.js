import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import "./App.css"
import Modals from './Modals';

const data = [
  {
      id: 1,
      name: "Qril Çiken Parmezan",
      img: "grill-ciken-parmezan.png",
      desc: "Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella Pendiri, Halapeno Bibəri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 5.5,
          sm: 11,
          md: 17,
          xl: 21,
      },
  },
  {
      id: 2,
      name: "Amerikan Hot",
      img: "american-hot.png",
      desc: "Pizza Sous, Mozzarella pendiri, Pepperoni və Halapenyo Bibəri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 6,
          sm: 12,
          md: 18,
          xl: 23,
      },
  },
  {
      id: 3,
      name: "Acılı Çiken Ranç",
      img: "spicy-chicken-ranch.png",
      desc: "Ranch Sousu, Toyuq Əti, Göbələklər,  Halapenyo Bibəri, Təzə Doğranmış Pomidorlar və Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 13,
          md: 19,
          xl: 25,
      },
  },
  {
      id: 4,
      name: "Çiken Ranç",
      img: "chicken_ranch.jpg",
      desc: "Qril Toyuq, Pomidor, Ranç Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 5,
      name: "Acılı Vegetarian",
      img: "vegetarian-acili.png",
      desc: "Halapenyo Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər və Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 13.5,
          md: 19,
          xl: 24,
      },
  },
  {
      id: 6,
      name: "Cheddar Dabl Burger",
      img: "cheddar-dabl-burger.png",
      desc: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
  {
      id: 7,
      name: "Papa Miks",
      img: "papamiks-sayt.png",
      desc: "Çiken BBQ, Hot&Spaysi, Marqarita, Klassik Pepperoni",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 14,
          md: 19,
          xl: 23.5,
      },
  },
  {
      id: 8,
      name: "Çiken Barbekyu",
      img: "chicken_barbekyu.jpg",
      desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 9,
      name: "Cheddar Çiken Club",
      img: "cheddar-ciken-club.png",
      desc: "Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 14,
          md: 19,
          xl: 23.5,
      },
  },
  {
      id: 10,
      name: "Pendir",
      img: "pendir.png",
      desc: "Pizza sousu, Mozzarella Pendiri, Feta Penidiri, Parmezan Pendiri, Cheddar Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 11,
      name: "Meksika",
      img: "meksika.jpg",
      desc: "Qril Toyuq, Pomidor, Göbələk, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 5.5,
          sm: 11,
          md: 17,
          xl: 21,
      },
  },
  {
      id: 12,
      name: "Super Papa",
      img: "meksika.jpg",
      desc: "Pepperoni, İtalyan Sosisi, Mal Ətindən Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 14,
          md: 19,
          xl: 23.5,
      },
  },
  {
      id: 13,
      name: "Yunan",
      img: "yunan.jpg",
      desc: "Pomidor, Zeytun, Feta Pendiri, Oreqano, Acılı Bibər, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 14,
      name: "Aylend Spays",
      img: "Aylend-Spays.png",
      desc: "Sarımsaq Sousu, Qril Toyuğu, Ananas, Pomidor, Mozzarella Pendiri, Halapeno bibəri, Çili Pul Bibəri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 15,
      name: "Çiken Çizburger",
      img: "chicken_cheeseburger.jpg",
      desc: "Qril Toyuq, Turşu Xiyar, Pomidor, Mozzarella Pendiri, Sous",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 14,
          md: 19,
          xl: 23.5,
      },
  },
  {
      id: 16,
      name: "Margarita",
      img: "margarita.jpg",
      desc: "Pomidor, Oreqano, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8.5,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 17,
      name: "Qarışıq Ət",
      img: "qarishiq_et.jpg",
      desc: "Pepperoni, İtalyan Sosisi, Mal Əti, Mal Ətindən Vetçina, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 9,
          sm: 12.5,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 18,
      name: "Vegetarian",
      img: "vegetarian.jpg",
      desc: "Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 7,
          sm: 14,
          md: 19,
          xl: 23.5,
      },
  },
  {
      id: 19,
      name: "Dabl Çizburger",
      img: "double_cheeseburger.jpg",
      desc: "Mal Əti, Turşu Xiyar, Pomidor, Mozzarella Pendiri, Sous",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 6,
          sm: 11,
          md: 16,
          xl: 20,
      },
  },
  {
      id: 20,
      name: "Havay",
      img: "havay.jpg",
      desc: "Qril Toyuq, Ananas, Ekstra Mozzarella",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
  {
      id: 21,
      name: "Vestern Barbekyu",
      img: "vestern_barbekyu.jpg",
      desc: "Mal Əti, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 5.5,
          sm: 11,
          md: 17,
          xl: 21,
      },
  },
  {
      id: 22,
      name: "Klassik Pepperoni",
      img: "klassik_pepperoni.jpg",
      desc: "Pepperoni, Ekstra Mozzarella",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12,
          md: 18,
          xl: 23,
      },
  },
  {
      id: 23,
      name: "Çiken Parmezan",
      img: "chicken_parmesan_item.jpg",
      desc: "Toyuq Poppersləri, Parmesan, Göbələk, İtalyan Ədviyyatları, Mozzarella Pendiri, Sarımsaq Sousu",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
  {
      id: 24,
      name: "Hot and Spaysi",
      img: "hot_and_spaysi.jpg",
      desc: "Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 5.5,
          sm: 11,
          md: 17,
          xl: 21,
      },
  },
  {
      id: 25,
      name: "Marinera",
      img: "Marinera.jpg",
      desc: "Ton Balığı, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 6,
          sm: 12,
          md: 18,
          xl: 23,
      },
  },
  {
      id: 26,
      name: "Little İtalya",
      img: "little_italy.jpg",
      desc: "Pepperoni, İtalyan Sosisi, Göbələk, Qara Zeytun, Oreqano, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
  {
      id: 27,
      name: "Çiken Baffalo",
      img: "chicken_buffalo.jpg",
      desc: "Toyuq Poppersləri, Vetçina, Baffalo Sousu, Ranç Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 6,
          sm: 12,
          md: 18,
          xl: 23,
      },
  },
  {
      id: 28,
      name: "Nyu Orleans",
      img: "new_orleans_pizza.jpg",
      desc: "Qarğıdalı, Qril Toyuq, Göbələk, Yaşıl Bibər, Sarımsaq Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
  {
      id: 29,
      name: "Çiken Göbələk",
      img: "Mushroom 320x220 px.jpg",
      desc: "Qril toyuq, Turşu xiyar, Göbələk, Mozzarella, Göbələk sousu",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 6,
          sm: 12,
          md: 18,
          xl: 23,
      },
  },
  {
      id: 30,
      name: "Çiken Barbekyu",
      img: "chicken_barbekyu.jpg",
      desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
      size: {
          xs: "mini, 15sm",
          sm: "kiçik, 23m",
          md: "orta, 30sm",
          xl: "böyük, 35sm",
      },
      price: {
          xs: 8,
          sm: 12.5,
          md: 18.5,
          xl: 22,
      },
  },
];

function App() {
const [show, setShow] = useState(false)
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
        <Header handleShow={handleShow} />
        <Main data={data} />
        <Footer />
        <Modals handleClose={handleClose} show={show} />
    </>
  );
}

export default App;
