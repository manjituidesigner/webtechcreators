<?php
/**
 * Plugin Name: Enable WPGraphQL CORS
 * Description: Automatically enable CORS for WPGraphQL requests so Angular can fetch data locally.
 */

add_filter( 'graphql_response_headers_to_send', function( $headers ) {
    $headers['Access-Control-Allow-Origin']  = '*';
    $headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    $headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
    $headers['Access-Control-Allow-Credentials'] = 'true';
    return $headers;
});

// Handle preflight OPTIONS requests directly
add_action( 'init', function() {
    if ( isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS' ) {
        if ( isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], '/graphql') !== false ) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Credentials: true');
            status_header(200);
            exit();
        }
    }
}, 0 );
