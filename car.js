var hololens = new HoloBuild.HoloCamera();
var holoscene = new HoloBuild.HoloSpace();
var holorenderer = new HoloBuild.HoloRenderer();

//var directionalLight = new HoloBuild.HoloDirectionalLight( 0xffffff, 1 );
//directionalLight.position.set( 1, 1 , 1 );
//holoscene.add(directionalLight );

var bird;                
var loaders = new HoloBuild.HoloLoaders();


loaders.loadModel(HoloBuild.loader.OBJ, 'https://rawcdn.githack.com/AdnanBoota/holojs-car-model/7fe79317f3382e6272e75f15d294e9cf4dacabc4/Car%20Obj.obj', function (model) {
    //note that some model could be too large so you need to scale them down otherwise they will not be visible
    model.scale.set(0.1115, 0.1115, 0.1115);
    holoscene.add(model);
}, {
        hotspot: true,
        mtlPath: 'material.mtl',
        //group: true
});

var hololens = new HoloBuild.HoloCamera();
var holoscene = new HoloBuild.HoloSpace();
var holorenderer = new HoloBuild.HoloRenderer();

function animation() {
window.requestAnimationFrame(animation);
holorenderer.render(holoscene, hololens);
}

animation();
		