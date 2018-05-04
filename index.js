var legende = document.querySelector('#legende');
var interactions = document.querySelector('#interactions');

var infos = [
  {
    top: 7,
    left: 68,
    text: 'Je suis une épaule !!!'
  },
  {
    top: 32,
    left: 38,
    text: 'Je suis une vertebre !!!'
  }
];

infos.forEach(function (info, idx) {

  var newCircle = document.createElement('div');
  newCircle.setAttribute('class', 'circle');
  newCircle.setAttribute('index', idx);  
  newCircle.style.top = infos[idx].top + '%';
  newCircle.style.left = infos[idx].left + '%';

  interactions.appendChild(newCircle);

  newCircle.onmouseover = function (event) {
    // 0 ou 1 ou 2
    var idx = event.target.attributes['index'].value;
    legende.innerHTML = infos[idx].text;
    event.target.style.backgroundColor = 'red';
  }

  newCircle.onmouseout = function (event) {
    event.target.style.backgroundColor = '#222';
    legende.innerHTML = '';
  }

});
