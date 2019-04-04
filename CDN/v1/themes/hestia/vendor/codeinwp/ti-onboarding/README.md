# ThemeIsle Onboarding Module
[![GitHub version](https://badge.fury.io/gh/Codeinwp%2Fti-onboarding.svg)](https://github.com/codeinwp/ti-onboarding)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0) 
[![Monthly Downloads](https://poser.pugx.org/codeinwp/ti-onboarding/d/monthly)](https://packagist.org/packages/codeinwp/ti-onboarding)

The ThemeIsle onboarding module serves as aid for theme authors to enable an easier onboarding UX, allowing to install and activate plugins, change theme mods, and import content with XML files.

How do I use this?
---
1. [Include the ThemeIsle Onboarding Module.](#1-include-the-themeisle-onboarding-module)
2. [Declare theme support in your theme.](#2-declare-theme-support)
3. [Add the import files in your theme folder.](#3-add-import-files-to-your-theme-folder)
4. [Render the onboarding application in your admin page](#4-render-the-onboarding-in-your-admin-page)

### 1. Include the ThemeIsle Onboarding Module
There are two ways in which you can use the Onboarding Module: 
- Include this repository directly in your project
- Include it as a composer dependency - `composer require "codeinwp/ti-onboarding":"dev-master"`

### 2. Declare Theme Support
You have to declare theme support in order to make the Onboarding work. Here's an example:
```
add_theme_support( 'themeisle-demo-import', array(
	'local' => array(
		'neve-main' => array(
			'url'   => 'https://demo.themeisle.com/neve',
			'title' => 'Neve 2018',
		),
	),
	'i18n'  => array(
		'templates_title'       => __( 'Ready to use pre-built websites with 1-click installation', 'neve' ),
		'templates_description' => __( 'With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve' ),
	),
);
```

### 3. Add Import Files to Your Theme Folder
There are three main files that must be added to your theme so that the demo import can work:
1. An XML file containing the demo content - you can get that by using the WordPress exporter. It should be named `export.xml`;
2. A screenshot file that will be displayed for your demo instance. It should be named `screenshot.png`;
4. A `data.json` file containing other data. You can see the format in which it should be delivered [here](#-formatting-the-datajson-file)

### 4. Render the Onboarding in Your Admin Page
After everything is loaded, you should make sure that you render the onboarding application where you want it displayed.
The snippet below should do this:
```
if ( class_exists( '\Themeisle_Onboarding' ) ) {
    $onboarding = \Themeisle_Onboarding::instance();
    $onboarding->render_onboarding();
}
```

_**NOTE:** The styling of this might not work ideal everywhere, so you might have to tweak it with some of your own CSS magic._ 

 Formatting the `data.json` File
---
The `data.json` file you deliver should respect the following format:
```
{
  "theme_mods": {
    "neve_navigation_layout": "left",
    "neve_theme_color": "#00a4f7",  
    "__ti_import_menus_location": {
      "primary": "main-menu"
    }
  }, 
  "widgets": {
    "blog-sidebar": {
      "rss-1": {
        "title": "",
        "url": "https:\/\/www.themeisle.com\/blog\/feed\/",
        "items": 5,
        "show_summary": 0,
        "show_author": 0,
        "show_date": 0
      },
    },
    "shop-sidebar": {
      "woocommerce_product_search-9": [],
      "woocommerce_widget_cart-5": []
    }
  },
  "recommended_plugins": {
    "woocommerce": "WooCommerce",
    "themeisle-companion": "Orbit Fox by ThemeIsle"
  },
  "front_page": {
    "front_page": "neve-home",
    "blog_page": "blog"
  },
  "shop_pages": {
      "woocommerce_shop_page_id": "shop",
      "woocommerce_cart_page_id": "cart",
      "woocommerce_checkout_page_id": "checkout",
      "woocommerce_myaccount_page_id": "my-account"
  }
}
```

#### There are 5 main things to define here: 

---
##### The `theme_mods` key:
This holds `key:value` pairs of the theme mod key and the value that you want to set upon importing.

Also inside the `theme_mods` key you have to define where the navigation menus are going to be placed (under the `__ti_import_menus_location` key). In the example above, the `primary` nav menu location is assigned the menu with the `main-menu` slug. 

---
##### The `widgets` key:
This holds the widgets that you will import. You can get the content of this using the [Widget Importer & Exporter Plugin](https://wordpress.org/plugins/widget-importer-exporter/). The `.wie` file that it exports holds the data you need to add here in order to properly map the widgets.

---
##### The `recommended_plugins` key:
This holds the plugins that you recommend. The format used is `"plugin-slug":"Plugin Nicename"`.

---
##### The `front_page` key:
This holds key value pairs for the static front page setup using the page slug (`neve-home`/`blog`). If you don't want to set anything, you should just send `null` here.

---
##### The `shop_pages` key:
This holds key value pairs for the shop pages that you want to set in case you're importing a WooCommerce shop. The logic is the same as in the case of the front page. You should use the page slug to set this up.

---

License
---
The ThemeIsle Onboarding Module is licensed under the GPLv2 or later. 

Credits
---
- The XML importer is based on the [HumanMade WordPress-Importer](https://github.com/humanmade/WordPress-Importer) repository, licensed under GPLv2 or later.
- The widgets importer is based on the [CrunchThemes Widget Importer & Exporter](https://github.com/churchthemes/widget-importer-exporter), licensed under GPLv2 or later.
