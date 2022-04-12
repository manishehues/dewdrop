<?php
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dewdrop' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'bR~%uyBW`.;h&|M/%m)?x6-Z@5w+2a . V(<RVwQhlHO]}?Gs/e.xzmWt:D0KwKs' );
define( 'SECURE_AUTH_KEY',  'sVz75HSc%Od3:U|DqqYIC%T58LyxHy]{@CP3)me#yz/Jj0&CbEap~[sjb]OGVAe+' );
define( 'LOGGED_IN_KEY',    'CzaIt,0BfHDZfoU?PP[YkB7<ki&/oF9vzoJ?M/<YR5$zsQZfIJA`NT28NiSk=z%$' );
define( 'NONCE_KEY',        '#,=8#!G8vV;*G k<StzG4McM[JAb[Vzeqq.`&WR!}mfTXjsBKY%_N294dAAC$D+1' );
define( 'AUTH_SALT',        'qQ) nwyw2Ypf!y9MSB5alI9`;xNL2@}xe.S=us=rPF~L&&iOJH1*zNb/@:M$F2Pc' );
define( 'SECURE_AUTH_SALT', '5R;o]BK<VkPMHR#Pt)3D<jh^ob07V1`Mx%ZNcgE{yb[bhlKQ$SdV:waR16J6l0pI' );
define( 'LOGGED_IN_SALT',   'J2Z6>:nT8_}/iGI; )2LCu X3i^H_ ]TU${I4WV>lSp$E{S6_KTBmk`AvpCZ/m0A' );
define( 'NONCE_SALT',       'MeT6%|I{!KU3Xfag~OG=2SzX@,1nDUSj5QZ&f;|m$=a`vK2fU:Dk+#iI}YUUK4&[' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'kih021_';

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
define( 'WP_DEBUG', false );
define('ALLOW_UNFILTERED_UPLOADS', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
