const FoodItems = [
  {
    id: "01",
    imageSource: "../ImagesForSnackCorner/Burger&Fries.jpg",
    imageAltername: "Burger & Fries Image",
    type: "Combo",
    name: "Burger+Fries",
    price: "249",
    quantity: "0",
    totalPrice: "0",
    rating: "4",
    numReviews: "12",
    description:
      "A burger is a sandwich made of a cooked patty of ground beef on a bun or roll, and fries are a side dish. Burgers are often served with toppings like lettuce, tomato, onion, ketchup, bacon, and mayonnaise. Some people describe their ideal burger as juicy, big, and loaded with their choice of toppings. Others might prefer a high-quality beef burger cooked medium to well with cheese and bacon on a multigrain bun.",
  },
  {
    id: "02",
    imageSource: "../ImagesForSnackCorner/Burger&Fries&Coke.jpg",
    imageAltername: "Burger,Fries & Coke Image",
    type: "Combo",
    name: "Burger+Fries+Coke",
    price: "299",
    quantity: "0",
    totalPrice: "0",
    rating: "3.5",
    numReviews: "11",
    description:
      "Indulge in the ultimate comfort meal with our classic combo of a juicy burger, crispy golden fries, and a refreshing ice-cold Coke. Perfectly seasoned and grilled to perfection, the burger comes nestled in a soft, toasted bun with fresh lettuce, ripe tomatoes, and your choice of toppings. Paired with our signature fries—crispy on the outside, tender on the inside—this meal is completed with a refreshing Coke, the perfect drink to wash it all down. Whether for lunch, dinner, or a satisfying snack, this combo hits all the right spots.",
  },
  {
    id: "03",
    imageSource: "../ImagesForSnackCorner/Pizza&Coke.jpg",
    imageAltername: "Pizza & coke Image",
    type: "Combo",
    name: "Pizza+Coke",
    price: "209",
    quantity: "0",
    totalPrice: "0",
    rating: "2.5",
    numReviews: "1",
    description:
      "Enjoy a delicious, hot pizza loaded with your favorite toppings, paired with an ice-cold Coke. The perfect combo of savory and refreshing, ideal for any time of day. Grab a slice and a sip—pure satisfaction in every bite and gulp!",
  },
  {
    id: "04",
    imageSource: "../ImagesForSnackCorner/PizzaAndFries.jpg",
    imageAltername: "Pizza & Fires Image",
    type: "Combo",
    name: "Pizza+Fries",
    price: "249",
    quantity: "0",
    totalPrice: "0",
    rating: "4.5",
    numReviews: "19",
    description:
      "Savor the perfect duo: a hot, cheesy pizza paired with crispy, golden fries. The ultimate combo for satisfying your cravings!",
  },
  {
    id: "05",
    imageSource: "../ImagesForSnackCorner/IndiTandoriPizza.jpg",
    imageAltername: "Indi Tandori Pizza Image",
    type: "Veg Pizza",
    name: "Indi Tandori Pizza",
    price: "149",
    quantity: "0",
    totalPrice: "0",
    rating: "3",
    numReviews: "14",
    description:
      "Experience a flavorful fusion with our Indi Tandoori Pizza. Topped with succulent tandoori chicken, onions, bell peppers, and a sprinkle of aromatic spices, all on a perfectly baked crust. This pizza brings the bold taste of Indian cuisine to every bite, offering a delicious twist on a classic favorite.",
  },
  {
    id: "06",
    imageSource: "../ImagesForSnackCorner/cheeseMargherita.jpg",
    imageAltername: "Cheese Margherita Pizza Image",
    type: "Veg Pizza",
    name: "Cheese Margherita Pizza",
    price: "149",
    quantity: "0",
    totalPrice: "0",
    rating: "3.5",
    numReviews: "23",
    description:
      "Experience pure pizza perfection with our Cheese Margherita. Topped with fresh mozzarella, zesty tomato sauce, and fragrant basil on a golden, crispy crust, it's a simple yet delicious classic that never disappoints.",
  },
  {
    id: "07",
    imageSource: "../ImagesForSnackCorner/cheeseCorn.jpg",
    imageAltername: "Cheese Corn Pizza Image",
    type: "Veg Pizza",
    name: "Cheese Corn Pizza",
    price: "159",
    quantity: "0",
    totalPrice: "0",
    rating: "3",
    numReviews: "13",
    description:
      "Delight in the creamy richness of melted cheese paired with the sweet crunch of golden corn on a perfectly baked crust. Our Cheese Corn Pizza is a mouthwatering blend of comfort and flavor, perfect for any pizza lover.",
  },
  {
    id: "08",
    imageSource: "../ImagesForSnackCorner/CheeseOnionPizza.jpg",
    imageAltername: "Cheese Onion Image",
    type: "Veg Pizza",
    name: "Cheese Onion Pizza",
    price: "179",
    quantity: "0",
    totalPrice: "0",
    rating: "1",
    numReviews: "2",
    description:
      "Savor the savory goodness of our Cheese Onion Pizza, featuring a generous layer of melted cheese complemented by sweet, caramelized onions. Baked to crispy perfection on a classic crust, this pizza delivers a deliciously rich and satisfying flavor.",
  },
  {
    id: "09",
    imageSource: "../ImagesForSnackCorner/WhitePasta.jpg",
    imageAltername: "White Pasta Image",
    type: "Pasta",
    name: "White Sauce Pizza",
    price: "169",
    quantity: "0",
    totalPrice: "0",
    rating: "4.2",
    numReviews: "21",
    description:
      "Indulge in creamy, rich comfort with our White Sauce Pasta. Tender pasta is enveloped in a smooth, velvety white sauce, seasoned to perfection with a hint of garlic and Parmesan. A luscious, satisfying dish that's perfect for any occasion.",
  },
  {
    id: "010",
    imageSource: "../ImagesForSnackCorner/Coke.jpg",
    imageAltername: "Coke Image",
    type: "Bevrages",
    name: "Coke",
    price: "49",
    quantity: "0",
    totalPrice: "0",
    rating: "4",
    numReviews: "12",
    description:
      "Enjoy the crisp, refreshing taste of Coke, the classic soda with a perfect balance of sweetness and fizz. With every sip, experience the iconic flavor that has made Coke a timeless favorite for generations.",
  },
  {
    id: "011",
    imageSource: "../ImagesForSnackCorner/ColdCoffee.jpg",
    imageAltername: "ColdCoffee Image",
    type: "Bevrages",
    name: "Cold Coffee",
    price: "79",
    quantity: "0",
    totalPrice: "0",
    rating: "4.9",
    numReviews: "39",
    description:
      "Refresh yourself with our Cold Coffee, a smooth blend of rich coffee and chilled creaminess. Served over ice for a perfect, invigorating pick-me-up, it's the ideal choice for coffee lovers seeking a cool, satisfying treat.",
  },
  {
    id: "012",
    imageSource: "../ImagesForSnackCorner/Mojito.jpg",
    imageAltername: "Mojito Image",
    type: "Bevrages",
    name: "Mojito",
    price: "119",
    quantity: "0",
    totalPrice: "0",
    rating: "3.4",
    numReviews: "14",
    description:
      "Sip on the vibrant freshness of our Mojito, a refreshing blend of muddled mint leaves, zesty lime, and sparkling soda. Light, invigorating, and perfectly balanced with a touch of sweetness, it's the ultimate drink to cool you down and lift your spirits.",
  },
  {
    id: "013",
    imageSource: "../ImagesForSnackCorner/Pepsi.jpg",
    imageAltername: "Pepsi Image",
    type: "Bevrages",
    name: "Pepsi",
    price: "49",
    quantity: "0",
    totalPrice: "0",
    rating: "3.4",
    numReviews: "12",
    description:
      "Experience the bold, refreshing taste of Pepsi. This iconic soda offers a crisp, fizzy kick with a unique blend of sweetness and flavor. Perfectly chilled, it's the ideal companion for any meal or moment of enjoyment.",
  },
  {
    id: "014",
    imageSource: "../ImagesForSnackCorner/RedBull.jpg",
    imageAltername: "RedBull Image",
    type: "Bevrages",
    name: "RedBull",
    price: "59",
    quantity: "0",
    totalPrice: "0",
    rating: "4",
    numReviews: "12",
    description:
      "Revitalize your energy with Red Bull, the go-to drink for a boost of vitality and focus. With its signature blend of caffeine, taurine, and B-vitamins, it delivers an invigorating lift to keep you alert and energized throughout the day.",
  },
  {
    id: "015",
    imageSource: "../ImagesForSnackCorner/PaneerTikkaBiryani.jpg",
    imageAltername: "Paneer Tikka Biryani Image",
    type: "Veg Biryani",
    name: "Paneer Tikka Biryani",
    price: "249",
    quantity: "0",
    totalPrice: "0",
    rating: "2.3",
    numReviews: "7",
    description:
      "Enjoy the delightful fusion of flavors with our Paneer Tikka Biryani. Tender chunks of marinated paneer, grilled to perfection, are layered with fragrant basmati rice, aromatic spices, and fresh herbs. This rich, savory dish offers a satisfying blend of spicy and smoky notes in every mouthful.",
  },
  {
    id: "016",
    imageSource: "../ImagesForSnackCorner/VeggieBiryani.jpg",
    imageAltername: "Mix-Veggie Biryani Image",
    type: "Veg Biryani",
    name: "Mix-Veggie Biryani",
    price: "219",
    quantity: "0",
    totalPrice: "0",
    rating: "4.6",
    numReviews: "19",
    description:
      "Savor the vibrant flavors of our Mix-Veg Biryani, a fragrant blend of basmati rice and a medley of fresh, seasonal vegetables. Cooked with aromatic spices and herbs, this hearty and satisfying dish offers a delightful combination of savory and mildly spicy notes in every bite.",
  },
  {
    id: "017",
    imageSource: "../ImagesForSnackCorner/MasalaDumBiryani.jpg",
    imageAltername: "Masala Dum Aloo Biryani Image",
    type: "Veg Biryani",
    name: "Masala Dum Aloo Biryani",
    price: "269",
    quantity: "0",
    totalPrice: "0",
    rating: "4.5",
    numReviews: "19",
    description:
      "Experience the rich and flavorful Masala Dum Aloo Biryani, where tender baby potatoes are simmered in a blend of aromatic spices and herbs, then layered with fragrant basmati rice. This hearty biryani combines the perfect balance of spicy and savory, offering a delightful and satisfying meal in every bite.",
  },
  {
    id: "018",
    imageSource: "../ImagesForSnackCorner/ChickenBiryani.jpg",
    imageAltername: "Chicken Biryani Image",
    type: "Non-veg Biryani",
    name: "Chicken Biryani",
    price: "269",
    quantity: "0",
    totalPrice: "0",
    rating: "4",
    numReviews: "14",
    description:
      "Indulge in the aromatic and flavorful Chicken Biryani, featuring succulent pieces of tender chicken cooked with fragrant basmati rice and a blend of exquisite spices. Garnished with fresh herbs and fried onions, this savory dish offers a perfect balance of spices and rich flavors, making each bite a delicious experience.",
  },
  {
    id: "019",
    imageSource: "../ImagesForSnackCorner/EggBiryani.jpg",
    imageAltername: "Egg Biryani Image",
    type: "Non-veg Biryani",
    name: "Egg Biryani",
    price: "229",
    quantity: "0",
    totalPrice: "0",
    rating: "4.6",
    numReviews: "199",
    description:
      "Enjoy the unique and satisfying Egg Biryani, where perfectly cooked eggs are nestled among layers of fragrant basmati rice, seasoned with a blend of aromatic spices and herbs. This flavorful dish combines the richness of spiced rice with the hearty goodness of tender eggs, creating a deliciously balanced and hearty meal.",
  },
  {
    id: "020",
    imageSource: "../ImagesForSnackCorner/MuttonBiryani.jpg",
    imageAltername: "Mutton Biryani Image",
    type: "Non-veg Biryani",
    name: "Mutton Biryani",
    price: "229",
    quantity: "0",
    totalPrice: "0",
    rating: "4.9",
    numReviews: "258",
    description:
      "Dive into the rich, savory goodness of our Mutton Biryani. Tender pieces of mutton are slow-cooked with fragrant basmati rice, infused with a blend of aromatic spices and herbs. This hearty dish offers a perfect balance of spiced meat and flavorful rice, delivering a deeply satisfying and indulgent experience in every bite.",
  },
];

export default FoodItems;
