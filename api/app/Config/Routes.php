<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// Handle all OPTIONS preflight requests globally
$routes->options('(:any)', function() {
    return service('response')->setStatusCode(200);
});

// API Routes
$routes->group('api', ['namespace' => 'App\Controllers'], function ($routes) {
    // Auth routes
    $routes->group('auth', function ($routes) {
        $routes->post('signup', 'AuthController::signup');
        $routes->post('login', 'AuthController::login');
        $routes->get('profile', 'AuthController::profile');
    });
});
