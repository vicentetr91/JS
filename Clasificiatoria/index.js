const ranking = [
    { position: 1, name: 'Pepito', scoring: 5},
    { position: 1, name: 'Manolo', scoring: 5},
    { position: 1, name: 'Jose', scoring: 1},
    { position: 1, name: 'Pepito', scoring: 3},
    { position: 1, name: 'Pepito', scoring: 4},
    { position: 1, name: 'Sara', scoring: 3},
    { position: 1, name: 'Marisa', scoring: 5},
]
const rankingNode = document.querySelector('.ranking');
let rankingHtml = '';
ranking.forEach((positionInfo) => {
    const pointslabel = positionInfo.scoring === 1 ? 'punto' : 'puntos';
    
    rankingHtml += 
    `<div class="ranking">
    <div><strong>${positionInfo.position}</strong> ${positionInfo.name}</div>
    <div>${positionInfo.scoring} ${pointslabel}</div>
    </div>`;
   });
rankingNode.innerHTML = rankingHtml