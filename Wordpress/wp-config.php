<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '!xh;EvR(K}Npa`9IDeZ:JV,-k8r&&g#_: L)G!Gve~ CAa[-aWbS0A<^qR:Kw2YY' );
define( 'SECURE_AUTH_KEY',   '< +5Nr`5ux%[MR g%HUM?vXvA91&{%O5#NW.`YX&DqGXTbQGuad2b+IX{~G6E.<[' );
define( 'LOGGED_IN_KEY',     'dpOT`vVH;`?FYZ(a5u+#>zj`R>O?85{5ju/,ceDb/ & *]bGG!]l-5TEHG;ky@4a' );
define( 'NONCE_KEY',         '.o437~L_%nc$k;X{SizIE[b$NNjfJHN995~puye)]C[LP,pKS *TmuG>z{+/1XsA' );
define( 'AUTH_SALT',         'Q2LA)2/CBhJqv(MDLHK<idolpM,Mri_E!:OJt4jb%*HDwmz,~jyRX[W9u?O2?E33' );
define( 'SECURE_AUTH_SALT',  'W6m  |q~Qv/|w@|qKG{-&gQ0X_uTk3eg4:u:NL`cov}*O0.76i8L,@0X.s}UGNBa' );
define( 'LOGGED_IN_SALT',    '<<iw}olpOx0):?2(K+{ugfJ81 6em=i;q>T5HH/NeNF^)4}H3N!d.ZoV[^IaN0wY' );
define( 'NONCE_SALT',        'v-y>g}w2M+2XybsfdW$AAtKc/;Pg @<zxJJ3Dg~I_MHEzAS8AnZVg>h##%[ue3Ev' );
define( 'WP_CACHE_KEY_SALT', '!d^`iLyv4#4)t7LYWrr{4ez,l!W&@[Y`pJG8et8uftySo6{6Zjyu#lMmolgn47es' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
