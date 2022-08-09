
app.controller('myCtrl', function ($scope, $interval, $http, $routeParams, $location, $window, $rootScope) {

  (function () {
    $http.get('members.json').then(function(res) {
      if (sessionStorage.getItem("members") == null) {
          sessionStorage.setItem("members", JSON.stringify(res.data));
          $scope.members = JSON.parse(sessionStorage.getItem("members"));
        } else {
          $scope.members = JSON.parse(sessionStorage.getItem("members"));
      }
      if (sessionStorage.getItem("currentMember") !== null) {
        $rootScope.currentMember = JSON.parse(sessionStorage.getItem("currentMember"));
        $rootScope.isSignIn = true;
      } else {
        $rootScope.isSignIn = false;
      }
    });
    $http.get('brands.json').then(function (res) {
      $scope.brands = res.data;
    });
    $http.get('carDB.json').then(function (res) {
      $scope.cars = res.data;
    });
  })();

  $scope.state = $routeParams.state;
  $scope.brandFilter = $routeParams.brand;
  
  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  }
  
  $scope.initBrand = function () {
    document.getElementById("brandSelect").value = $routeParams.brand;
  }

  $scope.openCarDetails = function (car) {
    $rootScope.selectedCar = car;
  }

  $interval(function () {
    $scope.myVar = new Date().toLocaleString();
  }, 1000);

  $scope.signIn = function () {
    for (let i = 0; i < $scope.members.length; i++) {
      
      if ($scope.email === $scope.members[i].email &&
        $scope.password === $scope.members[i].password) {
          
        $rootScope.currentMember = new Object($scope.members[i]);
        setStorage("currentMember", $rootScope.currentMember);
        
        $rootScope.isSignIn = true;
      }
    }
  }

  $scope.logOut = function () {
    $rootScope.isSignIn = false;
    $rootScope.currentMember = null;
    sessionStorage.removeItem("currentMember");
  }

  $scope.signUp = function () {
    var msg = "Sign up successfully!";
    var member = {
      username: $scope.textname,
      password: $scope.textpass,
      email: $scope.textmail,
      address: $scope.textaddress,
    };
    $scope.members.push(member);
    setStorage("members", $scope.members);
    setStorage("currentMember", member);
    alert(msg);
    $rootScope.isSignIn = true;
    $rootScope.currentMember = member;
  }

  function setStorage(key, value) {
    var data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
  }
});