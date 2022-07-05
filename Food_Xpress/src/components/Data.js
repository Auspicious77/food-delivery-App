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
    {name: 'Burger', price: 50.20, image: images.burger1}
    ], id: 2},

    {resturantName: '4D restaurant', farAway: '20.2', businessAddress: "No.2 Opposite Igbo kitchen, Ogbomoso",
     image: images.Welcome3, averageReview: '4.0', numberofReviews: '900', coordinate: {lat: -70.182939, lng: 30.2918}, discount: 10, deliveryTime: 40, collectTime: 15, foodType: 'Flame grilled burgers', 
     productData: [
    {name: 'Chineese grills', price: 20.80, image: images.Shawama3},
    {name: 'Salad', price: 65.60, image: images.salad1}
    ], id: 3},

    {resturantName: 'Amazing Restautant', farAway: '20.2', businessAddress: "No.2 Opposite Igbo kitchen, Ogbomoso",
     image: images.hotdog1, averageReview: '4.2', numberofReviews: '380', coordinate: {lat: -70.182939, lng: 30.2918}, discount: 10, deliveryTime: 40, collectTime: 15, foodType: 'Flame grilled burgers', 
     productData: [
    {name: 'Chineese grills', price: 20.80, image: images.Shawama3},
    {name: 'Salad', price: 70.60, image: images.salad2}
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
  
  export const Menu = [
    {key: 1, title: 'BEEF'},
    {key: 2, title: 'CHICKEN'},
    {key: 3, title: 'VEGGIE'},
    {key: 4, title: 'SHARE'},
    {key: 5, title: 'Happy-Meals'},
    {key: 6, title: 'Fries'},
    {key: 7, title: 'Sides'},
    {key: 8, title: 'MilkShakes'},

  ] 
      
      export const productData =[
        { 
          meal:"Big Mac",
          price:70.20,
          image:images.Shawama,
          details:"McFeast features two 100% fresh beef burger patties that are hot",
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          preferenceData: [
    
                          [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                          ],
    
                          [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                          ],
    
                          [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                            ],
                              
                          [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                          ],
    
                          [
                          {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                          ],
                          ],
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],              
          id:0
        },
      
        { 
          meal:"Hand cut chips", 
          price:29.30,
          image:images.Welcome2,
          details:"Two 100% fresh beef burger patties that are hot,deliciously",
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          preferenceData: [
    
            [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
            ],
    
            [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
            ],
    
            [
            {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
            minimum_quatity:[2,1,2,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false], 
            id:1
        },
      
        {
          meal:"Chicken Burger",
          price:45.70,
          image:images.Welcome2,
          details:"McFeast features two 100% fresh beef burger patties that are hot",
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          preferenceData: [
    
            [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
            ],
    
            [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
            ],
    
            [
            {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
    
            minimum_quatity:[2,1,1,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false],   
          id:2
        },
      
        {
          meal:"Big Mac",
          price:50.80,
          image:images.burger1,
          details:"McFeast features two 100% fresh beef burger patties that are hot",
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          preferenceData: [
    
            [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
            ],
    
            [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
            ],
    
            [
            {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
          
            minimum_quatity:[2,1,1,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false],    
          id:3
        },
      
        
        { 
          
          meal:"Hand cut chips", 
          price:29.30,
          image:images.Welcome1,
          details:"Two 100% fresh beef burger patties that are hot,deliciously",
          
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          
          preferenceData: [
    
            [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
            ],
    
            [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
            ],
    
            [
            {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
            {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
            {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
    
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],     
          id:4
        },
    
        { 
          meal:"Big Mac",
          price:70.20,
          image:images.burger2,
          details:"McFeast features two 100% fresh beef burger patties that are hot",
          preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
          preferenceData: [
    
                          [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                          ],
    
                          [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                          ],
    
                          [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                            ],
                              
                          [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                          ],
    
                          [
                          {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                          {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                          ],
                          ],
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],              
          id:5
        },
      
      ];     