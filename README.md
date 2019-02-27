# SEO Fields plugin for Craft CMS 3.1

Fields for your meta & OG data, sitemaps & robots.txt

## Requirements

This plugin requires Craft CMS 3.1.0 or later.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

```bash
# go to the project directory
cd /path/to/my-craft-project.dev

# tell Composer to install the plugin
composer require studioespresso/craft-seo-fields

# tell Craft to install the plugin
./craft install/plugin seo-fields
```

## Features overview

SEO Fields lets you set default title & description for your site (or sites) and gives you a field to overwrite those defaults per entry.

Additionally, you can configure your robots.txt and your sitemaps as well.


## Usage

To let SEO Fields handle your meta html, just add `{% hook 'seo-fields' %}` within the `<head>` tag in your layout. 

---
Brought to you by [Studio Espresso](https://studioespresso.co)
