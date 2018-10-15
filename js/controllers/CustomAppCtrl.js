/**
 * Created by abhilashakanitkar on 31/05/16.
 */
/*global angular */

/**
 * The main controller for the app. The controller:

 * - exposes the model to the template and provides event handlers
 */


angular.module('customapp')
    .controller('CustomAppCtrl', function CustomAppCtrl($scope, $routeParams,$http, $filter,$q,$sce,$timeout) {
        // 'use strict';


        $scope.initialData = new Object();

        $scope.init = function(){
            console.log("inside Custom Agents INIT");

            $http.get('/api/customapp/loadinitialdata')
                .then(function(res){

                    console.log("sample initial data received");
                    $scope.initialData = res.data;

                    console.log($scope.initialData);


                });

        };




    })


;


