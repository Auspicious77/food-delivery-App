import { images } from "../../constants";

export const filterData = [
 {name: 'Fast Food', image: images.Shawama, id: 1},
 {name: 'burger', image: images.burger1, id: 2},
 {name: 'salad', image: images.salad1, id: 3},
 {name: 'hot dog', image: images.hotdog1, id: 4},
 {name: 'Chinesse', image: images.burger1, id: 5},
 {name: 'mexican', image: images.salad1, id: 6},
 {name: 'Sea food', image: images.hotdog1, id: 7},

]


export const resturantData = [
    {resturantName: 'Mc Donalds', farAway: '21.2', businessAddress: "22 Bessie Street, Ogbomoso",
     image: images.Shawama, averageReview: '4.3', numberofReviews: '300', coordinate: {lat: -26.182939, lng: 28.2918}, discount: 20, deliveryTime: 30, collectTime: 10, foodType: 'Chicken, Chicken wings...', 
     productData: [
    {name: 'Big mac', price: 50.60, image: images.Welcome2},
    {name: 'Salad', price: 30.60, image: images.salad2}
    ], id: 1},

    {resturantName: 'Lagos Kitchen', farAway: '11.2', businessAddress: "No.2 Beside CAC Street, Ogbomoso",
     image: images.burger2, averageReview: '4.5', numberofReviews: '600', coordinate: {lat: -34.182939, lng: 20.2918}, discount: 10, deliveryTime: 40, collectTime: 15, foodType: 'Flame grilled burgers', 
     productData: [
    {name: 'Hot Dog', price: 20.80, image: images.hotdog1},
    {name: 'Burger', price: 70.60, image: images.burger1}
    ], id: 2},

    {resturantName: '4D restaurant', farAway: '20.2', businessAddress: "No.2 Opposite Igbo kitchen, Ogbomoso",
     image: images.Welcome3, averageReview: '4.0', numberofReviews: '900', coordinate: {lat: -70.182939, lng: 30.2918}, discount: 10, deliveryTime: 40, collectTime: 15, foodType: 'Flame grilled burgers', 
     productData: [
    {name: 'Chineese grills', price: 20.80, image: images.Shawama3},
    {name: 'Salad', price: 70.60, image: images.salad1}
    ], id: 3},

    {resturantName: 'Amazing Restautant', farAway: '20.2', businessAddress: "No.2 Opposite Igbo kitchen, Ogbomoso",
     image: images.hotdog1, averageReview: '4.2', numberofReviews: '380', coordinate: {lat: -70.182939, lng: 30.2918}, discount: 10, deliveryTime: 40, collectTime: 15, foodType: 'Flame grilled burgers', 
     productData: [
    {name: 'Chineese grills', price: 20.80, image: images.Shawama3},
    {name: 'Salad', price: 70.60, image: images.salad1}
    ], id: 4},
]


export const menuData = [
    
    {title:"BEEF",special:false,key:0, },
    {title:"CHICKEN", special:false,key:1},
    {title:"VEGGIE BURGER",special:false ,key:2},
    {title:"FRIES& CORN",special:false ,key:3},
    {title:"SALADS",special:false,key:4},
    {title:"HAPPY MEALS",special:false,key:5},
    {title:"SAHRE BOX",special:false,key:6},
    {title:"MILKSHAKES",special:false,key:7},
    {title:"COLD DRINKS",special:false,key:8},
    {title:"DESSERTS",special:false,key:9},
    {title:"HOT DRINKS",special:false,key:10},
  
    ] ;
  
  export const specialData =[
    {title:"LIMITED OFFER",key:0},
    {title:"GO CHILLI",key:1},
    {title:"GO CHEESE",key:2},
    {title:"MCCHICKEN DELUXE PROMO",key:3},
  ];    