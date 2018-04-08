var $grid  = $('.portfolio-gallery').masonry({

  itemSelector: '.portfolio-gallery__item',

});


$grid.imagesLoaded().progress(function () {
  $grid.masonry('layout');
});