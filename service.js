var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

var dfd = $q.defer();
  this.getUsers = function() {
    $http({                   // you took away the return here, because you wan to return the defered request
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(respons) {
    	var parsedResponse = respons.data.data; // now only sending the key we want, not all the data
    	for (var i = 0; i < parsedResponse.length; i++) {
    		parsedResponse[i].first_name = 'Ralf';
    		parsedResponse[i].last_name = 'Ralfsen';
    	}
    	dfd.resolve(parsedResponse);
    });
    return dfd.promise; //this will return right away, but will have som in it, when the promise is deferred (?)
  }
});

// here you have a nestet thing. So there is two promises here. $HTML and $q

