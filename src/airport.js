Array.prototype.random = function(){
  return this[Math.floor(Math.random() * this.length)]
};

var Airport = function (){
  this.weather = ["stormy", "sunny", "sunny", "sunny"].random();
  this.hangar = []
};

var Plane = function (){};


Airport.prototype.land = function(plane, weather = this.weather) {
  if (weather === 'stormy'){
    throw new TypeError("Plane is not allowed to land when stormy")
  }
  else{
    this.hangar.push(plane)
  }
};

Airport.prototype.take_off = function(plane, weather = this.weather) {
  if (weather === 'stormy'){
    throw new TypeError('Plane is not allowed to take off when stormy')
  }
  else{
    this.hangar.pop(plane)
  }
};
