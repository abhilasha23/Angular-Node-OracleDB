/**
 * Created by abhilashakanitkar on 10/14/18.
 */
/**
 * The main custom app module
 *
 * @type {angular.Module}
 */
angular.module('customapp', ['ngRoute','ui.bootstrap','ng.httpLoader'])
    .config(function ($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'CustomAppCtrl',
            templateUrl: 'customapp-index.html'
        };


        $routeProvider
            .when('/', routeConfig)
            .when('/:status', routeConfig)

            .otherwise({
                redirectTo: '/'
            });

    })
;
