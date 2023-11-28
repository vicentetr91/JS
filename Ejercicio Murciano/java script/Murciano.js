function startGame() {
  const availableClasses = [
    'josemi--t',
    'josemi--b',
    'josemi--corner-bl',
    'josemi--corner-br',
    'josemi--corner-tl',
    'josemi--corner-tr'
  ];
  const availableTimers = [1000, 1200, 1500, 2000, 2500, 3000];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pickJosemi() {
    if (!availableClasses.length) {
      return;
    }

    const randomIndex = getRandomInt(0, availableClasses.length - 1);
    const randomTimerIndex = getRandomInt(0, availableTimers.length - 1);
    const timerToUse = availableTimers[randomTimerIndex];
    const classToUse = availableClasses.splice(randomIndex, 1)[0];
    const josemiNode = document.querySelector('.josemi:not(.josemi--selected)');

    if (!josemiNode) {
      return;
    }

    josemiNode.classList.add('josemi--selected');
    josemiNode.classList.add(classToUse);

    const clickListener = josemiNode.addEventListener('click', () => {
      josemiNode.classList.remove('josemi--show');
    });

    setTimeout(() => {
      josemiNode.classList.add('josemi--show');
    }, 400);

    setTimeout(() => {
      josemiNode.classList.remove('josemi--show');

      setTimeout(() => {
        josemiNode.classList.remove('josemi--selected');
        josemiNode.classList.remove(classToUse);
        availableClasses.push(classToUse);
        josemiNode.removeEventListener('click', clickListener);
      }, 400);
    }, timerToUse);
  }

  pickJosemi();
  return setInterval(pickJosemi, 1000);
}




function startGame() {
}



const ctaButton = document.querySelector('.cts--start');
ctaButton.addEventListener('click', function(){
    startGame();
    ctaButton.style.display = 'none';
});

const totalPointsNode = document.querySelector('#totalPoints');
console.log(totalPointsNode,innerText);

document.querySelectorAll('josemi').forEach((josemiNode) => {
    josemiNode.addEventListener('click', () =>  {
        let totalPoints = Number(totalPointsNode.innerText) + 1;

        if (josemiNode.classList.contains('josemi--sm')) {
          totalPoints = totalPoints + 1;
        }

        totalPointsNode.innerText = totalPoints;
    });
})

/* PASOS PARA QUE UN MARTILLO SIGA EL CURSOR

.Necesitamos un elementos en el código al html que sea la iamgen de un martillo.

.Detectar cuando se mueve el cursor.

.Saber cuál es la posición del cursor en todo momento.

.Poner el martillo donde está el cursor.

.Establecer la posición top y la posición left del martillo usando las coordenadas del cursor.

*/


const
document.addEventListener('mousemove', (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
})