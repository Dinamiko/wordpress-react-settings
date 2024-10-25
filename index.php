<?php
/**
 * Plugin Name: React Settings Page
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('admin_menu', function () {
    add_menu_page(
        'React Settings Page',
        'React Settings Page',
        'manage_options',
        'react-settings-page',
        function() {
            echo '<div id="react-settings-page">React App goes here...</div>';
        }
    );
});

add_action( 'admin_enqueue_scripts', function($page) {
    if($page !== 'toplevel_page_react-settings-page') {
        return;
    }

    $asset_file = require __DIR__ . '/build/index.asset.php';

    wp_register_script(
        'react-settings-page',
        plugins_url( '/build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_script( 'react-settings-page' );
});

