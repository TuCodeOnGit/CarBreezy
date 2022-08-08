var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  
  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html"
    })
    .when("/new-cars", {
      templateUrl: "pages/cars/new-cars.html",
      controller: "myCtrl"
    })
    .when("/used-cars", {
      templateUrl: "pages/cars/used-cars.html",
      controller: "myCtrl"
    })
    .when("/brands", {
      templateUrl: "pages/cars/brands.html",
      controller: "myCtrl"
    }).when("/brands/:state/:brand", {
        templateUrl: "pages/cars/brands.html",
        controller: "myCtrl"
      })
    .when("/offers", {
      templateUrl: "pages/cars/offers.html",
      controller: "myCtrl"
    }).when("/offers/offer-form", {
        templateUrl: "pages/cars/_offer-form.html",
        controller: "myCtrl"
      })
    .when("/more/:tab?", {
      templateUrl: "pages/more/more.html",
      controller: "myCtrl"
    })
    .when("/user", {
      templateUrl: "/pages/user/user.html",
      controller: "myCtrl"
    })
    .when("/sign-up", {
      templateUrl: "pages/user/sign-up.html",
      controller: "myCtrl"
    })
    .when("/sign-in", {
      templateUrl: "pages/user/sign-in.html",
      controller: "myCtrl"
    })
    .otherwise({
      redirectTo: "/home"
    });
});