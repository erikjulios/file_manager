<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
// $routes->get('api/folders/(:num)', 'FolderController::index/$1');
// $routes->get('api/folders', 'FolderController::index');
$routes->get('api/folders/(:num)', 'FolderController::index/$1', ['filter' => 'cors']);
$routes->get('api/folders', 'FolderController::index', ['filter' => 'cors']);
