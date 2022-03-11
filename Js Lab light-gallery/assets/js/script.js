lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgVideo],
    speed: 500,
});

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  isFitWidth: true,
});