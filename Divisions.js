class Division {
    constructor(x, y, w, h) {
      var options = {
        isStatic: true
      }
  
      this.width = w;
      this.height = h;
  
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
  
    display() {
      fill("lightgreen");
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  }
