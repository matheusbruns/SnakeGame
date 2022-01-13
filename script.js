window.onload = function(){
  var stage = document.getElementById('stage')
  var ctx   = stage.getContext("2d")

  setInterval(game, 60)

  const vel = 1

  // velocidade
  var vx = 0
  var vy = 0
  //posição da cobra
  var px = 10
  var py = 15
  // tamanho de cada quadradinho
  var tp = 20
  var qp = 20
  // posição da maçã
  var ax=ay=15

  var trail = []
  var tail = 5

  function game(){
    px += vx
    py += vy
    // se sair da tela
    if(px < 0){
      px = qp-1
    }
    if(px >qp-1){
      px = 0
    }
    if(py < 0){
      py = qp-1
    }
    if(py > qp-1){
      py = 0
    }

    ctx.fillStyle = "black"
    ctx.fillRect(0,0, stage.width, stage.height)

    ctx.fillStyle = "red"
    ctx.fillRect(ax*tp, ay*tp, tp,tp)

    ctx.fillStyle = "gray"
    for(var i = 0; i<trail.length; i++){
      ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp,tp)
      // se bater nela mesmo
      if(trail[i].x == px && trail[i].y == py){
        vx = vy = 0 //vai parar a cobra
      }
    }
    trail.push({x:px,y:py})
    while(trail.length > tail){
      trail.shift()
    }
    if(ax==px && ay==py){
      taill++
      ax = Math.floor(Math.random()*qp)
      ay = Math.floor(Math.random()*qp)
    }



  }

}