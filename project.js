document.addEventListener('DOMContentLoaded',function () {
    const menuButton = document.getElementById('mobile-menu');
    const specialItems = document.getElementById('specials');

    menuButton.addEventListener('click',function () {
        specialItems.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const itemDetails = {
        gobi: { name:'Gobi Manchuriya' ,
        image: "gobi.jpg" ,
                del: 200,
                price:110.50
        },
        pizza: { name:'Pizza' ,
                image:"vegpizza.jpg",
               del: 250,
                price:150
        },
        burger: { name:'Burger' ,
                image: "Veg-Burger-Recipe.jpg",
                del: 100,
                price:105.00
        },
        sanwich: { name:'Sanwich' ,
                  image: "sandwich.jpg" ,
                    del: 100,
                     price:1.50
                },
        curdrice: { name:'Curd Rice' ,
        image:"curdrice.jpeg",
        del: 100,
        price:102.50
        },
        roti: { name:'Paneer Roti' ,
        image: "roti.jpeg",
        del: 199,
        price:158.50
        },
        mushroom: { name:'Mushroom Gobi' ,
        image:"mushroom-manchurian-recipe.jpg",
        del: 189,
        price:148.50
        },
        dosa: { name:'Dosa' ,
        image: "dosa.jpg", 
        del: 60,
        price:45.50
        },
        rice: { name:'Veg Fried Rice' ,
        image: "froedrice.jpg" ,
        del: 60,
        price:100.50
        },
        panipuri: { name:'Pani Puri' ,
        image: "pani-puri.webp",
        del: 60,
        price:25.50
        },
        samosa: { name:'Samosa' ,
        image:"samosa-image.jpg",
        del: 40,
        price:20.50
        },
        Momoos: { name:'Momoos' ,
        image:"Veg-Momos-2.webp" ,
        del: 250,
        price:249.50
        },
        idli: { name:'Idli' ,
        image: "idli.jpeg",
        del: 85,
        price:65.50
        },
        // non-veg
        biryani: { name:'Biryani' ,
        image:"biryani.jpg",
        del: 189,
        price:148.50
        },
        kabab: { name:'Chicken  Kabab' ,
        image: "chicken-kabab.jpg",
        del: 189,
        price:148.50
        },
        rolls: { name:'Chicken  Rolls' ,
        image:"rolls.jpg",
        del: 189,
        price:148.50
        },
        curry: { name:'Chicken curry' ,
        image:  "fry.jpg",
        del: 189,
        price:148.50
        },
        chickenburger: { name:' Chicken burger' ,
        image: "burgerchicken.jpg",
        del: 189,
        price:148.50
        },
        kfc: { name:'KFC' ,
        image:  "kfcjpg.jpg",
        del: 189,
        price:148.50
        },
        fridpiecs: { name:'Fried Chicken Pieces' ,
        image: "fried.jpeg",
        del: 189,
        price:148.50
        },
        eggrice: { name:'Egg Rice' ,
        image: "eggbb.jpg",
        del: 189,
        price:148.50
        },
        chickenpops: { name:'Chicken Lolipop' ,
        image:  "pieces.jpg",
        del: 189,
        price:148.50
        },
        chickenpizza: { name:'Chicken Pizza' ,
        image: "chickenpizza.jpg",
        del: 189,
        price:148.50
        },
        tadipathri: { name:'Special Biryani' ,
        image: "shutterstock.webp",
        del: 189,
        price:148.50
        },
        fish: { name:'Fish Fry' ,
        image: "maxresdefault.jpg" ,
        del: 189,
        price:148.50
        },
        water: { name:'Water Bottle' ,
        image:"water.jpg",
        del: 189,
        price:148.50
        },
        sprite: { name:'Sprite 600ml' ,
        image: "sprite.jpg",
        del: 189,
        price:148.50
        },
        lemon: { name:'Lemon Juice' ,
        image:  "lemonjuice.jpg",
        del: 189,
        price:148.50
        },
        ice: { name:'Black Current Ice Cream' ,
        image: "cream-black-currant.webp" ,
        del: 189,
        price:148.50
        },
        cola: { name:'Coco cola 600ml' ,
        image: "coco cola.jpg",
        del: 189,
        price:148.50
        },
        butter: { name:'ButterScotch' ,
        image:"ice-cream.webp" ,
        del: 189,
        price:148.50
        },

    };
       // Get all elements with class "view-details-btn"
    var viewDetailsButtons = document.querySelectorAll('.view-details-btn');

        // Add click event listener to each button
        viewDetailsButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                 // Get the parent item element
        var item = button.closest('.item');

        // Get the item ID from the "data-item-id" attribute
        var itemId = item.dataset.itemId;
  
        // Fetch item details using the item ID
        var details = itemDetails[itemId];
  
        // Redirect to the details page with the item ID
        window.location.href = 'viewdetails.html?id=' + itemId;
      });
      });
        // Code for the viewdetails.html page
          if (window.location.pathname.includes('viewdetails.html')) {
         // Get the item ID from the query parameter
         var urlParams = new URLSearchParams(window.location.search);
           var itemId = urlParams.get('id');
            // Get the item details for the specified ID
          var details = itemDetails[itemId]; 
      // Update the details page content
      if (details) {
        document.getElementById('item-image').src = details.image;
        document.getElementById('item-name').textContent = details.name;
        document.getElementById('item-del').innerHTML = 'price : &#8377;' + details.del;
        document.getElementById('item-price').innerHTML = 'Price: &#8377;' + details.price.toFixed(2);  
     }
         console.error('Item details not found.');
      }
    }
  );

























































