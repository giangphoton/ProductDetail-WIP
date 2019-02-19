var app = angular.module('productApp', ['ngAnimate', 'ngTouch', 'ngCookies', 'slick', 'ngMaterial', 'hm.readmore']);

    app.config(function($mdThemingProvider) {
      $mdThemingProvider
        .theme('docs-dark', 'default')
        .primaryPalette('grey')
        .accentPalette('pink')
        .warnPalette('red')
        .dark();
    })


    app.controller('MainCtrl', ['$scope', '$cookies', function ($scope, $cookies) {
        $scope.products = [
            {
              imgsources: [
                { image: 'images/img00.jpeg' },
                { image: 'images/img01.jpeg' },
                { image: 'images/img02.jpeg' },
                { image: 'images/img03.jpeg' },
                { image: 'images/img04.jpeg' }
              ],
              name: 'Raw Marble Object',
              sku: 'DO001',
              description: 'Image 00',
              summary: 'Rock Formation. Marble in its most natural state. Unpolished, unfinished and undeniably beautiful.',
              moresummary: `Each piece will be completely unique in shape, color and texture. Raw Marble Object. 5 inches dia.
                <ul>
                    <li>Marble</li>
                    <li>Each will be unique</li>
                    <li>Wipe with a soft cloth</li>
                    <li>Made in Vietnam</li>
                </ul>`,
              details: [
                { list: 'Marble' },
                { list: 'Each will be unique' },
                { list: 'Wipe with a soft cloth' },
                { list: 'Made in Vietnam' }
              ],
              price: 39.95
            },
            {
              imgsources: [
                { image: 'images/img10.jpeg' },
                { image: 'images/img11.jpeg' },
                { image: 'images/img12.jpeg' },
                { image: 'images/img13.jpeg' },
                { image: 'images/img14.jpeg' }
              ],
              name: 'Sur Reactive Vase',
              sku: 'CV002',
              description: 'Image 10',
              summary: 'Dark Waters. Teardrop-shaped ceramic vase holds fresh greenery and stems in moody blue hues.',
              moresummary: 'Deep blue reactive glaze washes over top, finishing each piece unique.',
              details: [
                { list: 'Overall Dimensions: Height: 8.75 X Diameter: 6' },
                { list: 'Ceramic with dark blue reactive glaze' },
                { list: 'Each will be unique' },
                { list: 'Wipe with a soft cloth' },
                { list: 'Made in Vietnam' }
              ],
              price: 29.95
            },
            {
              imgsources: [
                { image: 'images/img20.jpeg' },
                { image: 'images/img21.jpeg' },
                { image: 'images/img22.jpeg' },
                { image: 'images/img23.jpeg' },
                { image: 'images/img24.jpeg' }
              ],
              name: 'Fuel Navy Credenza',
              sku: 'FS003',
              description: 'Image 20',
              summary: 'Blue Room. Clean lines in glossy navy lacquer span almost five feet to broaden storage options.',
              moresummary: 'Low-profile frame with expansive top can even pedestal a widescreen. Two clean-front doors hide two adjustable A/V-ready shelves (one on each side) with a gap and cutouts for cord management. Engineered wood case floats on slim steel L feet in brushed nickel-plated finish.',
              details: [
                { list: 'Low-emission engineered wood with hi-gloss navy finish'},
                { list: 'Steel L feet with a brushed nickel-plated finish'},
                { list: 'Top holds TV or stereo up to 50 lbs. evenly distributed'},
                { list: 'Shelves have built-in gaps for cords; back has cord cutouts'},
                { list: 'Clean with a soft, dry cloth'},
                { list: 'Made in Vietnam'}
              ],
              price: 499
            },
            {
              imgsources: [
                { image: 'images/img30.jpeg' },
                { image: 'images/img31.jpeg' },
                { image: 'images/img32.jpeg' },
                { image: 'images/img33.jpeg' },
                { image: 'images/img34.jpeg' }
              ],
              name: 'Rush Brushed Gold Flatware Set',
              sku: 'TW004',
              description: 'Image 30',
              summary: 'Gold Diggers. Get a hold on gold at the table. Flatware is forged with substantial heft in 18/0 stainless steel (13/0 for the knife) with a gold-colored finish.',
              moresummary: 'Matte finish handles contrast gleaming polished heads. Five-piece settings dine a party of four.',
              details: [
                { list: '18/0 forged stainless steel' },
                { list: 'Gold finish with matte handles' },
                { list: 'Hand wash' },
                { list: 'Hand drying is recommended to prevent discoloration and film build-up' },
                { list: 'Made in Vietnam' }
              ],
              price: 89.95
            },
            {
              imgsources: [
                { image: 'images/img40.jpeg' },
                { image: 'images/img41.jpeg' },
                { image: 'images/img42.jpeg' },
                { image: 'images/img43.jpeg' },
                { image: 'images/img44.jpeg' }
              ],
              name: 'Bondi Mosaic Wall Decor',
              sku: 'HD005',
              description: 'Image 40',
              summary: 'Earth And Sky. Abstract landscape is crafted from strips of natural water hyacinth.',
              moresummary: 'Fibers are dyed an earthy spectrum of blue, black, gold and red then folded into triangular shapes and arranged into the conceptual mosaic you see here. We love the texture it adds to any space.',
              details: [
                { list: 'Water hyacinth and engineered wood' },
                { list: 'Each will be unique' },
                { list: 'Different wall materials may require different types of fasteners; use fasteners suitable for the walls in your home' },
                { list: 'Dust with soft, dry cloth' },
                { list: 'Made in Vietnam' }
              ],
              price: 199
            },
            {
              imgsources: [
                { image: 'images/img50.jpeg' },
                { image: 'images/img51.jpeg' },
                { image: 'images/img52.jpeg' },
                { image: 'images/img53.jpeg' },
                { image: 'images/img54.jpeg' }
              ],
              name: '4 Star Pillar Candle Holders',
              sku: 'CH006',
              description: 'Image 50',
              summary: 'Point Made. Cast aluminum pillar candle holder makes strong sculptural statement in antique brass finish.',
              moresummary: 'Attention-grabbing from every angle.',
              details: [
                { list: 'Cast aluminum with antiqued brass finish' },
                { list: 'Each will be unique' },
                { list: 'Max pillar candle height: 6"' },
                { list: 'Clean with a soft cloth' },
                { list: 'Made in Vietnam' }
              ],
              price: 44.95
            },
            {
              imgsources: [
                { image: 'images/img60.jpeg' },
                { image: 'images/img61.jpeg' },
                { image: 'images/img62.jpeg' },
                { image: 'images/img63.jpeg' },
                { image: 'images/img64.jpeg' }
              ],
              name: 'Artemis Round Dining Table',
              sku: 'WD007',
              description: 'Image 60',
              summary: 'Feast Al Fresco. Designer Jannis Ellenberger explores the beauty of a spare, simple form. Defined by planes and angles, the architectural profile is elevated by a the rich tones of 100% acacia wood with a natural oiled finish that will naturally patina and lighten over time.',
              moresummary: 'Unique angled legs support a slatted surface with built-in umbrella hole and room to seat 4. Makes the perfect dining companion with the Artemis Dining Chairs and Bench.',
              details: [
                { list: 'Acacia wood with galvanized steel hardware' },
                { list: 'Wood will naturally patina and age with time' },
                { list: 'Outdoor-safe; cover or store indoors during inclement weather and when not in use.' },
                { list: 'Clean with a soft damp cloth; no abrasive cleaners' },
                { list: 'Made in Vietnam' }
              ],
              price: 399
            },
            {
              imgsources: [
                { image: 'images/img70.jpeg' },
                { image: 'images/img71.jpeg' },
                { image: 'images/img72.jpeg' },
                { image: 'images/img73.jpeg' },
                { image: 'images/img74.jpeg' }
              ],
              name: 'Daphne Glass Appetizer Plate Set Of 8',
              sku: 'GD008',
              description: 'Image 70',
              summary: 'Fresh Start. Decorative pressed-glass appetizer plates dish small bites with vintage attitude.',
              moresummary: 'Layer with your dinnerware for a fresh take on everyday. Pair with Daphne Low Glass Bowl.',
              details: [
                { list: '7.5" dia. x 1"H' },
                { list: 'Soda lime glass' },
                { list: 'Dishwasher- and microwave-safe' },
                { list: 'Made in Vietnam' }
              ],
              price: 19.95
            },
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.products.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.products.length - 1;
        };

        // function to show price * quantity
        $scope.qtyFunc = function(vals) {
          var basePrice = product.price;

          console.log(vals);
          $('#result').html('$' + (vals * basePrice).toFixed(2));
        };
        // end of function to show price * quantity

        $scope.limit = 1;
        $scope.lessText = "Read less";
        $scope.moreText = "Read more";
        $scope.dotsClass = "toggle-dots-grey";
        $scope.linkClass = "toggle-link-yellow";

        // view cart
        // $scope.cart = [];
        // $scope.total = 0;
        //
        // if (!angular.isUndefined($cookies.get('total'))) {
        //   $scope.total = parseFloat($cookies.get('total'));
        // }
        // //Sepetimiz daha önceden tanımlıysa onu çekelim
        // if (!angular.isUndefined($cookies.get('cart'))) {
        //   $scope.cart = $cookies.getArray('cart');
        // }
        //
        // $scope.addItemToCart = function(product) {
        //
        //   if ($scope.cart.length === 0) {
        //     product.count = 1;
        //     $scope.cart.push(product);
        //   } else {
        //     var repeat = false;
        //     for (var i = 0; i < $scope.cart.length; i++) {
        //       if ($scope.cart[i].id === product.id) {
        //         repeat = true;
        //         $scope.cart[i].count += 1;
        //       }
        //     }
        //     if (!repeat) {
        //       product.count = 1;
        //       $scope.cart.push(product);
        //     }
        //   }
        //   var expireDate = new Date();
        //   expireDate.setDate(expireDate.getDate() + 1);
        //   $cookies.putArray('cart', $scope.cart, {
        //     'expires': expireDate
        //   });
        //   $scope.cart = $cookies.getArray('cart');
        //
        //   $scope.total += parseFloat(product.price);
        //   $cookies.put('total', $scope.total, {
        //     'expires': expireDate
        //   });
        // };
        //
        // $scope.removeItemCart = function(product) {
        //
        //   if (product.count > 1) {
        //     product.count -= 1;
        //     var expireDate = new Date();
        //     expireDate.setDate(expireDate.getDate() + 1);
        //     $cookies.putArray('cart', $scope.cart, {
        //       'expires': expireDate
        //     });
        //     $scope.cart = $cookies.getArray('cart');
        //   } else if (product.count === 1) {
        //     var index = $scope.cart.indexOf(product);
        //     $scope.cart.splice(index, 1);
        //     expireDate = new Date();
        //     expireDate.setDate(expireDate.getDate() + 1);
        //     $cookies.putArray('cart', $scope.cart, {
        //       'expires': expireDate
        //     });
        //     $scope.cart = $cookies.getArray('cart');
        //
        //   }
        //
        //   $scope.total -= parseFloat(product.price);
        //   $cookies.put('total', $scope.total, {
        //     'expires': expireDate
        //   });
        //
        // };
        // end of view cart
    }])
    // .directive('lightGallery', function() {
    //   return {
    //     restrict: 'A',
    //     link: function(scope, element, attrs) {
    //       if (scope.$last) {
    //         element.parent().lightGallery();
    //       }
    //     }
    //   };
    // })
