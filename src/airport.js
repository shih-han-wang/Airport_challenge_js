Array.prototype.random = function(){
  return this[Math.floor(Math.random() * this.length)]
};

var DEFAULT_CAPACITY = function(){
  return 50
};

var Plane = function (){};

var Airport = function (capacity = DEFAULT_CAPACITY){
  this.weather = ["stormy", "sunny", "sunny", "sunny"].random();
  this.hangar = []
  this.capacity = capacity
};

Airport.prototype._isfull = function(length = this.hangar.length, capacity = this.capacity){
  if(length === capacity){
    return ture;
  }
   return false;
};

Airport.prototype.land = function(plane, weather = this.weather) {
  if (weather === 'stormy'){
    throw new TypeError("Plane is not allowed to land when stormy")
  }
  if (this.hangar.length === this.capacity ){
    throw new TypeError('Airport is full')
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
