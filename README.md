# Grimm-user-pic
## This is my first release, so please be kind

This is vue component which handles an avatar selection with the use of [vue-carousel](https://github.com/SSENSE/vue-carousel) by [SSENSE](https://github.com/SSENSE). Inseide the assets folder there are 6 .svg's, that are imported and build into the module, if you want to change the images you have to rebuild the module. 

Grimm-user-pic also has a button to upload a custom image.


## Props

These are the props that are active at this point

- :url : (string) This is the url where to upload the file, default is a empty string
- :round : (boolean) Border radius of the image, if it's true the image is rounded, default is true
- :background : (string) The color of the background, default is TRANSPARENT
- :flat : (string) The style of the button, default is FALSE
- :buttonColor : (string) The background-color of the button, default is "grey", you can use also gradient
- :textColor : (string) The color of the button label, default is white
- :navigationNextLabel : (string) NextArrow default is '▶'
- :navigationPrevLabel : (string) PrevArrow default is '◀'

## Events

