# goit-js-hw-07

## Tasks

### 1.Task 1

#### Image gallery

Create a gallery with the ability to click on its elements and view the full-size image in a modal window. Watch a demo video of the gallery.

Perform this task in files 01-gallery.html and 01-gallery.js. Break it down into several subtasks:
- Create and render markup based on the galleryItems data array and the provided gallery item template.
- Implementation of delegation to ul.gallery and obtaining the url of a large image.
- Connecting the script and styles of the basicLightbox modal window library. Use the jsdelivr CDN service and add a link to the minified (.min) library files to the project.
- Opening a modal window by clicking on a gallery element. To do this, familiarize yourself with the documentation and examples.
- Overriding the value of the src attribute of the <img> element in the modal window before opening. Use the ready-made markup of the modal window with an image from the examples of the basicLightbox library.

##### Gallery element markup
The link to the original image must be stored in the data-attribute source on the <img> element, and specified in the href of the link. Do not add any HTML tags or CSS classes other than those contained in this template.

```html
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
     <img
       class="gallery__image"
       src="small-image.jpg"
       data-source="large-image.jpg"
       alt="Image description"
     />
   </a>
</li>
```

Please note that the image is wrapped in a link, so by default the user will be redirected to another page. Disable this behavior by default.

##### Close from the keyboard

Add closing the modal window after pressing the Escape key. Make it so that listening to the keyboard is only until you open a modal window. The basicLightbox library contains a method to programmatically close a modal window.

### 2. Task 2

#### SimpleLightbox library

Make the same gallery as in the first task, but using the SimpleLightbox library, which will handle image clicks, opening and closing the modal window, and scrolling images using the keyboard.

Need to change the layout of the gallery card a bit, use this template.
```html
<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
    </a>
</li>
```

Perform this task in the files 02-lightbox.html and 02-lightbox.js. Break it down into several subtasks:
- Create and render markup based on the galleryItems data array and the provided gallery item template. Use the ready-made code from the first task.
- Connection of script and library styles using CDN service cdnjs. You need to add links to two files: simple-lightbox.min.js and simple-lightbox.min.css.
- Initializing the library after creating and adding gallery elements to ul.gallery. To do this, read the SimpleLightbox documentation - primarily the "Usage" and "Markup" sections.
- See the "Options" section in the documentation and add captions to images from the alt attribute. Let the signature be at the bottom and appear 250 milliseconds after opening the image.
