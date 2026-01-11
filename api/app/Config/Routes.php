<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// API Routes
$routes->group('api', ['namespace' => 'App\Controllers'], function ($routes) {
    // Auth routes
    $routes->group('auth', function ($routes) {
        // Handle OPTIONS preflight requests
        $routes->options('signup', function() {
            return service('response')->setStatusCode(200);
        });
        $routes->options('login', function() {
            return service('response')->setStatusCode(200);
        });
        $routes->options('profile', function() {
            return service('response')->setStatusCode(200);
        });
        
        // Actual routes
        $routes->post('signup', 'AuthController::signup');
        $routes->post('login', 'AuthController::login');
        $routes->get('profile', 'AuthController::profile');
    });
});
