var options={
    height:350, 
    interval: 7000, 
    duration: 1500
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);

  });