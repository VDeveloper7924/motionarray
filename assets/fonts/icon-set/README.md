## Add/Update/Remove Icons in icon set

We are using [fontello](http://fontello.com/) for converting svgs to icons. There is `config.json` file in this same directory that represents the icons in json format for fontello. You can upload this file to fontello and the complete icon set will show there and icons then can be removed/added.

### How to Add Icons

Fontello doesn't support strokes or complex rules/attributes of SVG. So, you need to make sure that either they are not present or be converted.

You can follow this [fontello](https://github.com/fontello/fontello/wiki/How-to-use-custom-images#preparing-images-in-inkscape) or [icomoon](https://icomoon.io/#docs/stroke-to-fill) guides if your icon isn't showing up or does not look correct.

When everything is okay, download and extract it to this directory. You can reference any icon using CSS class in `laravel\resources\assets\shared\sass\objects\_icons.scss`
