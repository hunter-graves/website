const matWines = Array(12)
  .fill(0)
  .map((value, index) => `/assets/images/mat/mat${index + 1}.jpg`);
const prisWines = Array(12)
  .fill(0)
  .map((value, index) => `/assets/images/pris/pris${index + 1}.jpg`);
const ulyWines = Array(11)
  .fill(0)
  .map((value, index) => `/assets/images/uly/uly${index + 2}.jpg`);

(function() {
  let timeoutId = undefined;

  const images = [
    { image: document.querySelector(".pris-image"), index: 0, wineImages: prisWines },
    { image: document.querySelector(".uly-image"), index: 0, wineImages: ulyWines },
    { image: document.querySelector(".mat-image"), index: 0, wineImages: matWines }
  ];

  document.querySelector('.wine-list').addEventListener('mousemove', mouseEvent => {
    if( timeoutId === undefined ) {
      timeoutId = window.setTimeout( () => {
        images.forEach( entry => {
          console.log( entry )
          const { image, index, wineImages } = entry;
          const nextImage = ( index + 1 ) % wineImages.length;


          const src = document.createAttribute( 'src' );
          src.value = wineImages[ nextImage ];

          console.log( src.value )

          image.attributes.setNamedItem( src );
          entry.index = nextImage;
        });

        timeoutId = undefined;
      }, 500 );
    }
  });
})( document, window );