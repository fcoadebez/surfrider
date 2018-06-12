<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'surfrider');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'n^$x40H5O#E=9mEmWylz:nejBOwjQYjHL1Jk4@t+!kCrDxHr}k5BA rqj.}@;c1{');
define('SECURE_AUTH_KEY',  'Lk+d$zdg3b?LcFMS*[}7;14lIE/:r9fsgn-#C+zX69Jc4b>&a-Ay)}4q8]3UbRHm');
define('LOGGED_IN_KEY',    '>k:&?U*(T[EH`>:3@g_H3.Us8pRf~]>CjFziO87Vn}ZHr>7nCWFiPDz:*W6)01{Y');
define('NONCE_KEY',        '`n ~8p#6JQBt7]88pJL>s+9oP;Vz*v3qz)gx$V~.tm]Q]KR<&oyPu85sh3V4Y/dG');
define('AUTH_SALT',        ')_#f}qy-@1==[|}z*!&cMlmDlJjmu?,!XjKEh`H:Fm@fl.si|vmnt+BYOZzLR~[E');
define('SECURE_AUTH_SALT', '>;xR]Nk`w#m;+)U@J~.c_f.4n1q+^^8x`zQ!J:T$.k`z6 Qd2FFsX1*VNMvn@wxv');
define('LOGGED_IN_SALT',   'F[-t@_qx7!`(ai%Z+O80<rxh}m#}(s2BV~_C|d():VY^nu,wFi$nla)A-mTDP0_p');
define('NONCE_SALT',       '+~;mrqFiB!xu}1I!ghO%`,/D*>Pl;{x$5,J<yy87TkQ^;3m:I1~<{f{bF^Io>Gn:');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');