// create a mixin(glideMixin) that defined a method named glide. 
// Then use the glideMixin to give both bird and boat the ability to glide



let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = obj => {
  obj.glide = () => {
    console.log("I am gliding")
  }
}

glideMixin(bird)
glideMixin(boat)

console.log(bird.glide())