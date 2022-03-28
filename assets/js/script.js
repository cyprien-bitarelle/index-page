let meteo = document.querySelector('.meteo');
let animes = document.querySelector('.animes');
let cinema = document.querySelector('.cinema');

meteo.addEventListener('mouseover', function ()
  {
    meteo.classList.remove('meteo');
    meteo.classList.add('animation');
  });

meteo.addEventListener('mouseout', function ()
  {
    meteo.classList.remove('animation');
    meteo.classList.add('meteo');
  });

cinema.addEventListener('mouseover', function ()
  {
    cinema.classList.remove('cinema');
    cinema.classList.add('animation');
  });

cinema.addEventListener('mouseout', function ()
  {
    cinema.classList.remove('animation');
    cinema.classList.add('cinema');
  });

animes.addEventListener('mouseover', function ()
  {
    animes.classList.remove('animes');
    animes.classList.add('animation');
  });

animes.addEventListener('mouseout', function ()
  {
    animes.classList.remove('animation');
    animes.classList.add('animes');
  });
