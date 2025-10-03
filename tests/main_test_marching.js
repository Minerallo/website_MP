import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import classes from "./style.css";
import "./style.css";
import { edgeTable, triTable } from './LookupTables.js';


// import * as THREE from './three.module.js';
// import { OrbitControls } from './OrbitControls.js';
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import "./style.css";


// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/controls/OrbitControls.js';
// import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/geometries/TextGeometry.js';
// import "./style.css";


/* import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.module.min.js';
import chroma from 'chroma-js'; */
/* import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'; */
/* import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"; */
/* import { BufferGeometry } from 'three';
import gsap from 'gsap'; */

// Get the buttonsfor simulations 
let solarSystemButton = document.getElementById("solar-system-button");
let earthSystemButton = document.getElementById("earth-system-button");
let topographySystemButton = document.getElementById("topography-system-button");

window.onload = function () {
    runEarthSystemSimulation();
    //runSolarSystemSimulation();
    //runTopographySystemSimulation
}



function runSolarSystemSimulation() {

    window.addEventListener('click', () => {
        document.getElementById("bg-music").play();
    })

    // Attach event listeners to the buttons
    solarSystemButton.addEventListener("click", function () {
        clearScene();
        runSolarSystemSimulation();
    });

    earthSystemButton.addEventListener("click", function () {
        clearScene();
        runEarthSystemSimulation();
    });

/*     topographySystemButton.addEventListener("click", function () {
        clearScene();
        runTopographySystemSimulation();
    });     */

    function clearScene() {
        for (let i = scene.children.length - 1; i >= 0; i--) {
            let object = scene.children[i];
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                object.material.dispose();
                scene.remove(object);
            }
        }
    }    

    let cutearthButton = document.getElementById("cut-earth-button")
    cutearthButton.style.display = "none"
    let exitClippingButton = document.getElementById("exit-clipping-button");
    exitClippingButton.style.display = "none"

    // Set up the scene, camera, and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.005, 1000);

    const canvas = document.querySelector('.webgl')

    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(2);
    const sizes = {
        width: innerWidth,
        height: innerHeight,
    }
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.minDistance = 0;
    controls.maxDistance = 50;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enableDamping = true;
    //controls.enable=true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;


    // Create an empty array to store the orbit paths for each planet
    var orbitPaths = [];
    //create a group to hold the planets and Sun
    //var planetGroup = new THREE.Group();
    var planetGroup = new THREE.Group();
    var planetObjects = [];
    var clock = new THREE.Clock();


    // Load the panoramic image of the Milky Way
    var milkyWayTexture = new THREE.TextureLoader().load("Texture_planets/Milkyway.jpg");

    // Create a large sphere geometry
    var milkyWayGeometry = new THREE.SphereGeometry(100, 64, 64);

    // Create a material for the sphere using the milky way texture
    var milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture });
    milkyWayMaterial.side = THREE.BackSide;
    milkyWayMaterial.renderOrder = -1;


    // Create the sphere mesh using the geometry and material
    var milkyWaySphere = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);

    // Add the sphere to the scene
    scene.add(milkyWaySphere);
    scene.add(planetGroup);

    var orbitPaths = [];
    var planetPositions = [[], [], [], [], [], [], [], [], []];


    //create the planets
    var planets = [
        { name: "Sun", radius: 3, distance: 0, color: 0xffcc33, info: "Hot sun.", rotationSpeed: 0.01, orbitSpeed: 0 },
        { name: "Mercury", radius: 0.05, distance: 5.8, color: 0xb9b9b9, info: "Mercury is the closest planet to the sun and is known for its extreme temperatures.", rotationSpeed: 0.02, orbitSpeed: 0.03 },
        { name: "Venus", radius: 0.1, distance: 6.2, color: 0xff9933, info: "Venus is the second planet from the sun and is known for its thick atmosphere.", rotationSpeed: 0.03, orbitSpeed: 0.02 },
        { name: "Earth", radius: 0.1, distance: 6.5, color: 0x3399ff, info: "Earth is the third planet from the sun and is the only known planet to support life.", rotationSpeed: 0.04, orbitSpeed: 0.01 },
        { name: "Mars", radius: 0.1, distance: 9.5, color: 0xff4500, info: "Mars is the fourth planet from the sun and is known as the Red Planet due to its reddish appearance.", rotationSpeed: 0.05, orbitSpeed: 0.009 },
        { name: "Jupiter", radius: 0.25, distance: 10.7, color: 0xf5de50, info: "Jupiter is the fifth planet from the sun and is the largest planet in our solar system.", rotationSpeed: 0.06, orbitSpeed: 0.008 },
        { name: "Saturn", radius: 0.2, distance: 16, color: 0xeee8aa, info: "Saturn is the sixth planet from the sun and is known for its large ring system.", rotationSpeed: 0.07, orbitSpeed: 0.007 },
        { name: "Uranus", radius: 0.15, distance: 25.7, color: 0x6699ff, info: "Uranus is the seventh planet from the sun and is known for its unique tilt on its axis.", rotationSpeed: 0.08, orbitSpeed: 0.006 },
        { name: "Neptune", radius: 0.15, distance: 36.6, color: 0x33ccff, info: "Neptune is the eighth planet from the sun and is known for its blue color.", rotationSpeed: 0.08, orbitSpeed: 0.005 },
    ];


    var SunTexture = new THREE.TextureLoader().load("Texture_planets/Sun-texture.jpg");
    var sunGeometry = new THREE.SphereGeometry(planets[0].radius, 64, 64);
    var sunMaterial = new THREE.MeshBasicMaterial({ map: SunTexture });
    var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    planetGroup.add(sun);

    for (var i = 1; i < planets.length; i++) {
        var planetGeometry = new THREE.SphereGeometry(planets[i].radius, 64, 64);
        var planetTexture = new THREE.TextureLoader().load("Texture_planets/" + planets[i].name + "-texture.jpg");
        var planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
        var planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.x = planets[i].distance;
        planetGroup.add(planet);
        planetObjects.push(planet);
    }


    // create light
    var light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 0);
    scene.add(light);

    // update the light
    light.intensity = 2;
    light.color.setHex(0xffffff);

    //add ambient light
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    //camera.position.z = 5;
    camera.position.set(10, 5, 10);
    //camera.lookAt(0, 0, -1);
    camera.lookAt(planetGroup.children[3]);

    //camera = new THREE.PerspectiveCamera( 130, window.innerWidth / window.innerHeight, 0.1, 100000 );
    //camera.position.set(0, 10, 0); // set the camera's position to be above the sun
    //camera.lookAt(planetGroup.children[0].position); // point the camera towards the sun 
    //camera.rotation.set(0, 0, 0);

    // create the orbit lines
    for (var i = 0; i < planets.length; i++) {
        var planetOrbit = new THREE.EllipseCurve(
            0, 0,                            // ax, aY
            planets[i].distance, planets[i].distance,           // xRadius, yRadius
            0, 2 * Math.PI,  // aStartAngle, aEndAngle
            false,            // aClockwise
            0                 // aRotation
        );

        var points = planetOrbit.getPoints(50);
        var orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
        var orbitMaterial = new THREE.LineBasicMaterial({ color: planets[i].color });
        var orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
        orbitLine.rotation.x = Math.PI / 2;
        planetGroup.add(orbitLine);
        orbitPaths.push(orbitLine);
    }

    var pastTraces = [];
    for (var i = 0; i < planets.length; i++) {
        var pastTraceGeometry = new THREE.BufferGeometry();
        var pastTraceMaterial = new THREE.LineBasicMaterial({ color: planets[i].color });
        var pastTraceLine = new THREE.Line(pastTraceGeometry, pastTraceMaterial);
        planetGroup.add(pastTraceLine);
        pastTraces.push(pastTraceLine);
    }

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.updateProjectionMatrix()
        camera.aspect = sizes.width / sizes.height
        renderer.setSize(sizes.width, sizes.height)
    })
    const loop = () => {
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()



    // Render loop
    function render() {
        requestAnimationFrame(render);
        var delta = clock.getDelta();

        for (var i = 0; i < planetObjects.length; i++) {
            var planet = planetObjects[i];
            var planetData = planets[i];
            planet.rotation.y += planetData.rotationSpeed * delta;
            planet.position.x = planetData.distance * Math.cos(planetData.orbitSpeed * clock.getElapsedTime() * 10);
            planet.position.z = planetData.distance * Math.sin(planetData.orbitSpeed * clock.getElapsedTime() * 10);

            planetPositions[i].push(planetObjects[i].position.clone());
            if (planetPositions[i].length > 5) {
                planetPositions[i].shift();
            }

            var pastTraceGeometry = pastTraces[i].geometry;
            pastTraceGeometry.setFromPoints(planetPositions[i]);
        }

        controls.update();
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);
    }
    render();
}

// Earth System simulation function
function runEarthSystemSimulation() {

    window.addEventListener('click', () => {
        document.getElementById("bg-music").play();
    })

    // Attach event listeners to the buttons
    solarSystemButton.addEventListener("click", function () {
        clearScene();
        runSolarSystemSimulation();
        
    });

    earthSystemButton.addEventListener("click", function () {
        clearScene();
        runEarthSystemSimulation();
    });

/*     topographySystemButton.addEventListener("click", function () {
        clearScene();
        runTopographySystemSimulation();
    }); */

    function clearScene() {
        for (let i = scene.children.length - 1; i >= 0; i--) {
            let object = scene.children[i];
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                object.material.dispose();
                scene.remove(object);
            }
        }
    }
    

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.005, 1000);

    const canvas = document.querySelector('.webgl')

    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(2);
    const sizes = {
        width: innerWidth,
        height: innerHeight,
    }
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.minDistance = 0;
    controls.maxDistance = 50;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enableDamping = true;

    //Around the data
    // Load the panoramic image of the Milky Way
    var milkyWayTexture = new THREE.TextureLoader().load("Texture_planets/Milkyway.jpg");

    // Create a large sphere geometry
    var milkyWayGeometry = new THREE.SphereGeometry(100, 64, 64);

    // Create a material for the sphere using the milky way texture
    var milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture });
    milkyWayMaterial.side = THREE.BackSide;
    milkyWayMaterial.renderOrder = -1;


    // Create the sphere mesh using the geometry and material
    var milkyWaySphere = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);

    // Add the sphere to the scene
    scene.add(milkyWaySphere);

    //planet information
    var planets = [{ name: "Earth", radius: 0.11, color: 0x3399ff, info: "Earth is the third planet from the sun and is the only known planet to support life." },];

    // Load the Earth texture and displacement map


    // Create the Earth geometry with a displacement map
    for (var i = 0; i < planets.length; i++) {

        var planetGeometry = new THREE.SphereGeometry(planets[i].radius, 720, 360);
        var planetTexture = new THREE.TextureLoader().load("Texture_planets/Earth2-texture.jpg");
        var bumpTexture = new THREE.TextureLoader().load("Texture_planets/Earth-bump-map.jpg");
        var planetMaterial = new THREE.MeshPhongMaterial({
            map: planetTexture,
            displacementMap: bumpTexture,
            displacementScale: 0.015
        });
        var planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.set(0, 0, 0);
        scene.add(planet);
    }

    // call showEarthSystemButtons() when entering the earth system, and hideEarthSystemButtons() when leaving it
    // Add event listener to button
    let cutmodelButton = document.getElementById("cut-earth-button");
    cutmodelButton.style.display = "block";
    cutmodelButton.addEventListener("click", function () {
        clearScene();
        runClipping();
    });

    var originalGeometry = planet.geometry;
    var originalMaterial = planet.material;

    function runClipping() {
        //Around the data
        // Load the panoramic image of the Milky Way
        var milkyWayTexture = new THREE.TextureLoader().load("Texture_planets/Milkyway.jpg");

        // Create a large sphere geometry
        var milkyWayGeometry = new THREE.SphereGeometry(100, 64, 64);

        // Create a material for the sphere using the milky way texture
        var milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture });
        milkyWayMaterial.side = THREE.BackSide;
        milkyWayMaterial.renderOrder = -1;


        // Create the sphere mesh using the geometry and material
        var milkyWaySphere = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);

        // Add the sphere to the scene
        scene.add(milkyWaySphere);
    //planet information
    var planets = [{ name: "Earth", radius: 0.11, color: 0x3399ff, info: "Earth is the third planet from the sun and is the only known planet to support life." },];


    // Half a sphere
    const phiStart = 0;
    const phiEnd = Math.PI;
    const thetaStart = 0;
    const thetaEnd = Math.PI;

    const halfGeometry = new THREE.SphereGeometry(planets[0].radius, 720, 360, phiStart, phiEnd, thetaStart, thetaEnd);
    //const halfMaterial = new THREE.MeshBasicMaterial({ color: 0x9900ff, wireframe: true });

        var planethalfTexture = new THREE.TextureLoader().load("Texture_planets/Earth2-half-texture.jpg");
        var bumphalfTexture = new THREE.TextureLoader().load("Texture_planets/Earth-half-bump-map.jpg");


    var halfMaterial = new THREE.MeshPhongMaterial({
        map: planethalfTexture,
        displacementMap: bumphalfTexture,
        displacementScale: 0.015,
        transparent : true,
        opacity : 0.25

    });

    planet.geometry = halfGeometry;
    planet.material = halfMaterial;
    planet.material.needsUpdate = true;
    planet.geometry.needsUpdate = true;
    planet = new THREE.Mesh(halfGeometry, halfMaterial);
    scene.add(planet);


    //earth radius
    const radius = planets[0].radius;
    //core radius
    const coreRadius = radius - radius * 0.45;
    const coreGeometry = new THREE.SphereGeometry(coreRadius, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x5F5F5F,
        roughness: 0.6,
        metalness: 0.5
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.set(0, 0, 0);
    scene.add(coreMesh);

    THREE.Vector3.prototype.equals = function (v, epsilon = Number.EPSILON) {

        return ((Math.abs(v.x - this.x) < epsilon) && (Math.abs(v.y - this.y) < epsilon) && (Math.abs(v.z - this.z) < epsilon));

    }

    const depths = [];
    for (let i = 25; i <= 2900; i += 25) {
        depths.push(("00" + i).slice(-4));
    }

    const radius_earth = 0.11;
    const scale = radius_earth;
    //const coreRadius = radius_earth - radius_earth * 0.45;
    // Create an array to store the thermal anomaly data
    const promises = [];
    // Create a new geometry to hold the thermal anomaly data
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.vertices = [];
    pointGeometry.colors = [];
    const underesolved_depths = 1; //depth slice interval to take knowing that each depth slice is 25km depth
    console.log("Depth lengths "+depths.length)
    console.log("depth length " + depths.length)
    //console.log(depths)
 
    //let numPoints = 0;
    const numPoints = 41785; //14283;//10205;//9716; //amount of points after filtering , I need to find a way to automatize it depending on the threshold, here we impose a loer amount of data to take
    const positions = new Float32Array(numPoints * 3); // 3 values per point
    const colors = new Float32Array(numPoints * 3); // 3 values per point
    let numPointstot=0;
    let ind_xyz = 0;
    const new_depths=[];

/*     var sphereGeometry = new THREE.SphereGeometry(0.002, 32, 32);
    var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x9a2a2a });
    var spheres = new THREE.Mesh(sphereGeometry, sphereMaterial); */

    // Read the data files and parse the data
    for (let i = 0; i < depths.length; i += underesolved_depths) {
        new_depths.push(depths[i])
    //    console.log("iteration i "+i)
        // Load the data file
        promises.push(fetch("SP12RTS_5defquid/SP12RTS..ES." + depths[i] + "." + "eqdst.5.latlon.dat")
            .then(response => {
                if (response.status === 200) {
                    console.log("File exists and Loaded");
                    return response.text();
                } else {
                    console.log("File does not exist or failed to load");
                }
            }));
    }

    let values: number[] = [];
    let points: THREE.Vector3[] = [];

    // Wait for all promises to resolve
    Promise.all(promises)
        .then(data => {
           // console.log("data.length : " + data.length)
           // console.log("NEw depths : " + new_depths)
            // Split the data into lines
            for (let j = 0; j < data.length; j++) //data.length
            {
               
                const lines = data[j].split('\n');
                // Loop through each line of data
                for (let k = 0; k < lines.length; k++) {
                    // Split the line into values
                    const values = lines[k].split(' ');

                    if (values[2] < -0.5 || values[2] > 0.5) {

                        //const phi = degrees_to_radians(90 - values[0]);
                        //const theta = degrees_to_radians(values[1] + 180);
                        const phi = THREE.MathUtils.degToRad(values[0]);
                        const theta = THREE.MathUtils.degToRad(values[1]);
                        const x = (((6371 - 2900) + (2900 - new_depths[j])) * scale / 6371) * Math.cos(phi) * Math.cos(theta);
                        const y = (((6371 - 2900) + (2900 - new_depths[j])) * scale / 6371) * Math.cos(phi) * Math.sin(theta)
                        const z = Math.sin(phi) * (((6371 - 2900) + (2900 - new_depths[j]))* scale/6371) ;

                        points.push( new THREE.Vector3(x,y,z))
                        

                        const vertex = new THREE.Vector3(x, y, z);
                        pointGeometry.vertices.push(vertex);
                               
                    //     numPointstot = numPointstot+1;
                    //    // console.log("numpointstot :"+numPointstot) // check what is the max of this value and replace it manually in numpoints before the loop
                    //     var index = ind_xyz * 3;
                    //     //console.log(index)
                    //     positions[index] = x;
                    //     positions[index + 1] = y;
                    //     positions[index + 2] = z;
                      
                    //     colors[ind_xyz * 3 + 0] = (values[2] > 0) ? (1 - values[2] / 1.5) : 1; //values[2] / lower lim
                    //     colors[ind_xyz * 3 + 1] = 0;//(values[2] + 1.5) / 3;
                    //     colors[ind_xyz * 3 + 2] = (values[2] < 0) ? (1 + values[2] / 0.5) : 1;//values[2] / upper lim

                    //     ind_xyz ++;

                        
                    }
  
                }
            }
            // pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            // pointGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        })
        .catch(error => console.log("Error in fetching the file: ", error));

        // generate values array for points
const total = resolution * resolution * resolution;
for (var i = 0; i < total; i++) 
    values[i] = 0;


let metaBalls = [];
metaBalls.push({ center: new THREE.Vector3(-3, 1, 0), radius: 0.2 });
metaBalls.push({ center: new THREE.Vector3(2, 0, 0), radius: 0.5 });
metaBalls.push({ center: new THREE.Vector3(2, 0, -2), radius: 0.25 });


function marchingCubes () {
    for (let i = 0; i < values.length; i++) {
        values[i] = 0;
    }
    // meta balls
    for (const metaBall of metaBalls) {
        for (let i = 0; i < points.length; i++) {
            // meta ball function
            const distance = metaBall.radius - metaBall.center.distanceTo(points[i]);
            values[i] += Math.exp(- (distance * distance) );
        }
    }

    // approximated intersection points
    var vlist = new Array(12);
    // resolution^2
    const resolution2 = resolution * resolution;
    // mesh triangles
    let trianglePoints: THREE.Vector3[] = [];

    for (var z = 0; z < resolution - 1; z++)
    for (var y = 0; y < resolution - 1; y++)
    for (var x = 0; x < resolution - 1; x++)
    {
        // indexes of points in the cube
        var p    = x + resolution * y + resolution2 * z,
        px   = p   + 1,
        py   = p   + resolution,
        pxy  = py  + 1,
        pz   = p   + resolution2,
        pxz  = px  + resolution2,
        pyz  = py  + resolution2,
        pxyz = pxy + resolution2;

        // store scalar values corresponding to vertices
        var value0 = values[ p    ],
        value1 = values[ px   ],
        value2 = values[ py   ],
        value3 = values[ pxy  ],
        value4 = values[ pz   ],
        value5 = values[ pxz  ],
        value6 = values[ pyz  ],
        value7 = values[ pxyz ];

        // cubeindex
        var cubeindex = 0;
        if ( value0 < isolevel ) cubeindex |= 1;
        if ( value1 < isolevel ) cubeindex |= 2;
        if ( value2 < isolevel ) cubeindex |= 8;
        if ( value3 < isolevel ) cubeindex |= 4;
        if ( value4 < isolevel ) cubeindex |= 16;
        if ( value5 < isolevel ) cubeindex |= 32;
        if ( value6 < isolevel ) cubeindex |= 128;
        if ( value7 < isolevel ) cubeindex |= 64;

        // lookup edges
        var bits = edgeTable[ cubeindex ];
        if ( bits === 0 ) continue;

        // approximate intersection points
        var mu = 0.5;
        if ( bits & 1 )
        {		
            mu = ( isolevel - value0 ) / ( value1 - value0 );
            vlist[0] = points[p].clone().lerp( points[px], mu );
        }
        if ( bits & 2 )
        {
            mu = ( isolevel - value1 ) / ( value3 - value1 );
            vlist[1] = points[px].clone().lerp( points[pxy], mu );
        }
        if ( bits & 4 )
        {
            mu = ( isolevel - value2 ) / ( value3 - value2 );
            vlist[2] = points[py].clone().lerp( points[pxy], mu );
        }
        if ( bits & 8 )
        {
            mu = ( isolevel - value0 ) / ( value2 - value0 );
            vlist[3] = points[p].clone().lerp( points[py], mu );
        }
        // top of the cube
        if ( bits & 16 )
        {
            mu = ( isolevel - value4 ) / ( value5 - value4 );
            vlist[4] = points[pz].clone().lerp( points[pxz], mu );
        }
        if ( bits & 32 )
        {
            mu = ( isolevel - value5 ) / ( value7 - value5 );
            vlist[5] = points[pxz].clone().lerp( points[pxyz], mu );
        }
        if ( bits & 64 )
        {
            mu = ( isolevel - value6 ) / ( value7 - value6 );
            vlist[6] = points[pyz].clone().lerp( points[pxyz], mu );
        }
        if ( bits & 128 )
        {
            mu = ( isolevel - value4 ) / ( value6 - value4 );
            vlist[7] = points[pz].clone().lerp( points[pyz], mu );
        }
        // vertical lines of the cube
        if ( bits & 256 )
        {
            mu = ( isolevel - value0 ) / ( value4 - value0 );
            vlist[8] = points[p].clone().lerp( points[pz], mu );
        }
        if ( bits & 512 )
        {
            mu = ( isolevel - value1 ) / ( value5 - value1 );
            vlist[9] = points[px].clone().lerp( points[pxz], mu );
        }
        if ( bits & 1024 )
        {
            mu = ( isolevel - value3 ) / ( value7 - value3 );
            vlist[10] = points[pxy].clone().lerp( points[pxyz], mu );
        }
        if ( bits & 2048 )
        {
            mu = ( isolevel - value2 ) / ( value6 - value2 );
            vlist[11] = points[py].clone().lerp( points[pyz], mu );
        }

        // lookup triangles
        var i = 0;
        cubeindex <<= 4;  // multiply by 16... 
        while ( triTable[ cubeindex + i ] != -1 ) 
        {
            var index1 = triTable[cubeindex + i];
            var index2 = triTable[cubeindex + i + 1];
            var index3 = triTable[cubeindex + i + 2];
            
            trianglePoints.push( vlist[index1].clone() );
            trianglePoints.push( vlist[index2].clone() );
            trianglePoints.push( vlist[index3].clone() );

            i += 3;
        }
    }

    return trianglePoints;
}

		// BUFFER GEOMETRY

		const maxPolygons = 30000;
		const vertices = Array(3 * maxPolygons).fill(0);

		const meshBufferGeometry = new THREE.BufferGeometry();
		const buffer = new THREE.Float32BufferAttribute( vertices, 3 );
		buffer.setUsage( THREE.DynamicDrawUsage );
		meshBufferGeometry.setAttribute( 'position', buffer );

		const mesh = new THREE.Mesh( meshBufferGeometry, new THREE.MeshPhongMaterial( { color: 0xffffff } ) );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		function updateMesh(trianglePoints: THREE.Vector3[]) {
			for (let i = 0; i < trianglePoints.length; i++) {
				const x = trianglePoints[i].x;
				const y = trianglePoints[i].y;
				const z = trianglePoints[i].z;
			
				vertices[i * 3    ] = x;
				vertices[i * 3 + 1] = y;
				vertices[i * 3 + 2] = z;
			}
			const positionAttribute = new THREE.Float32BufferAttribute( vertices, 3 );
			positionAttribute.setUsage( THREE.DynamicDrawUsage );
			meshBufferGeometry.setAttribute( 'position',  positionAttribute);
			meshBufferGeometry.setDrawRange( 0, trianglePoints.length);
			meshBufferGeometry.computeVertexNormals();
			meshBufferGeometry.getAttribute( 'position' ).needsUpdate = true;
			meshBufferGeometry.getAttribute( 'normal' ).needsUpdate = true;
		}

    camera.lookAt(points.position);

  
        var canvas_cmap = document.createElement('canvas');
        canvas_cmap.width = 256;
        canvas_cmap.height = 32;
        var ctx = canvas_cmap.getContext('2d');

        // Create the color gradient
        var gradient = ctx.createLinearGradient(0, 0, 256, 0);
        gradient.addColorStop(0, 'red');
        //gradient.addColorStop(0.75, 'transparent');
        gradient.addColorStop(1, 'blue');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 32);

        // Use the canvas as a texture for a plane
        var texture_cmap = new THREE.CanvasTexture(canvas_cmap);
        var plane_cmap = new THREE.PlaneBufferGeometry(0.05, 0.05*0.12);
        var material_cmap = new THREE.MeshBasicMaterial({ map: texture_cmap,side : THREE.BackSide });
        var mesh_cmap = new THREE.Mesh(plane_cmap, material_cmap);
        mesh_cmap.rotation.y = -Math.PI / 2;
        mesh_cmap.rotation.x = -Math.PI ;
        // Position the color bar in the scene
        mesh_cmap.position.set(0.1, -0.1, 0);
        scene.add(mesh_cmap);


        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var text1 = 'Warm';
            var text2 = 'Cold';
            var textGeometry = new TextGeometry(text1, {
                font: font,
                size: 0.003,
                height: 0.0015,
   /*              curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5 */
            });
                        var textGeometry2 = new TextGeometry(text2, {
                font: font,
                size: 0.003,
                height: 0.0015,
   /*              curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5 */
            });

            var textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            var textMesh = new THREE.Mesh(textGeometry, textMaterial);
            var textMesh2 = new THREE.Mesh(textGeometry2, textMaterial);
            textMesh.position.set(0.1, -0.1, 0.04);
            textMesh.rotation.y = Math.PI / 2 ;
            textMesh2.position.set(0.1, -0.1, -0.03);
            textMesh2.rotation.y = textMesh.rotation.y;
     
            //textMesh.rotation.x = -Math.PI ;
            scene.add(textMesh);
            scene.add(textMesh2);

            const triangles = marchingCubes();
            updateMesh(triangles);

        });


    //animation loop
    function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.setSize(sizes.width, sizes.height);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);

    }
    render();
}

    
let exitClippingButton = document.getElementById("exit-clipping-button");
exitClippingButton.style.display = "block"
exitClippingButton.addEventListener("click", function () {
        clearScene();
        exitClipping();
    });

function exitClipping() {
    //Around the data
    // Load the panoramic image of the Milky Way
    var milkyWayTexture = new THREE.TextureLoader().load("Texture_planets/Milkyway.jpg");

    // Create a large sphere geometry
    var milkyWayGeometry = new THREE.SphereGeometry(100, 64, 64);

    // Create a material for the sphere using the milky way texture
    var milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture });
    milkyWayMaterial.side = THREE.BackSide;
    milkyWayMaterial.renderOrder = -1;


    // Create the sphere mesh using the geometry and material
    var milkyWaySphere = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);

    // Add the sphere to the scene
    scene.add(milkyWaySphere);
    //apply the original material and geometry to the planet
    planet.material = originalMaterial;
    planet.geometry = originalGeometry;
    originalMaterial = null;
    originalGeometry = null;
    planet.material.needsUpdate = true;
    planet.geometry.needsUpdate = true;
    scene.add(planet);
    //camera.position.z = 5;
    //camera.position.set(0.25, 0, 0);
    //camera.lookAt(0, 0, -1);
    camera.lookAt(planet);
}

// create light
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 3, 3);
scene.add(light);


// update the light
light.intensity = 0.5;
light.color.setHex(0xffffff);

//add ambient light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

    camera.position.z = 5;
    camera.position.set(0.25, 0, 0);
    //camera.lookAt(0, 0, -1);
    camera.lookAt(planet);

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.updateProjectionMatrix()
    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height)
})
const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()

    //animation loop
    function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);
    }
    render();
}

 /*  function runTopographySystemSimulation() {

    window.addEventListener('click', () => {
        document.getElementById("bg-music").play();
    })

    // Attach event listeners to the buttons
    solarSystemButton.addEventListener("click", function () {
        clearScene();
        runSolarSystemSimulation();
    });

    earthSystemButton.addEventListener("click", function () {
        clearScene();
        runEarthSystemSimulation();
    });

    topographySystemButton.addEventListener("click", function () {
        clearScene();
        runTopographySystemSimulation();
    });

    function clearScene() {
        for (let i = scene.children.length - 1; i >= 0; i--) {
            let object = scene.children[i];
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                object.material.dispose();
                scene.remove(object);
            }
        }
    }

    let cutearthButton = document.getElementById("cut-earth-button")
    cutearthButton.style.display = "none"
    let exitClippingButton = document.getElementById("exit-clipping-button");
    exitClippingButton.style.display = "none"

    // Set up the scene, camera, and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.005, 1000);

    const canvas = document.querySelector('.webgl')

    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(2);
    const sizes = {
        width: innerWidth,
        height: innerHeight,
    }
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.minDistance = 0;
    controls.maxDistance = 50;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enableDamping = true;
    controls.enable=true;
    //controls.autoRotate = true;
    //controls.autoRotateSpeed = 0.1;


    // Create an empty array to store the orbit paths for each planet
    var orbitPaths = [];
    //create a group to hold the planets and Sun
    //var planetGroup = new THREE.Group();
    var planetGroup = new THREE.Group();
    var planetObjects = [];
    var clock = new THREE.Clock();


    // Load the panoramic image of the Milky Way
    var milkyWayTexture = new THREE.TextureLoader().load('https://minerallo.github.io/Texture_planets/Milkyway.jpg');

    // Create a large sphere geometry
    var milkyWayGeometry = new THREE.SphereGeometry(100, 64, 64);

    // Create a material for the sphere using the milky way texture
    var milkyWayMaterial = new THREE.MeshBasicMaterial({ map: milkyWayTexture });
    milkyWayMaterial.side = THREE.BackSide;
    milkyWayMaterial.renderOrder = -1;


    // Create the sphere mesh using the geometry and material
    var milkyWaySphere = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);

    // Add the sphere to the scene
    scene.add(milkyWaySphere);

    const simplex = new SimplexNoise();

    const earthRadius = 0.11;
    const mountainHeight = 2 / 6371;
    const elevationFactor = 5;
    const noiseScale = 0.01;
    const topography = [];

    for (let i = 0; i < 100; i++) {
        topography[i] = [];
        for (let j = 0; j < 100; j++) {
            const x = i / 100 * noiseScale;
            const y = j / 100 * noiseScale;
            const noise = simplex.noise2D(x, y);
            topography[i][j] = earthRadius + earthRadius * noise * mountainHeight * elevationFactor;
        }
    }

    const planeGeometry = new THREE.PlaneBufferGeometry(100, 100, 100, 100);
    const positions = planeGeometry.getAttribute('position').array;
    const colors = [];

    for (let i = 0; i < 1000; i++) {
        const x = i % 100;
        const y = Math.floor(i / 100);
        positions[i * 3 + 2] = topography[y][x];
        const height = topography[y][x];
        let color = new THREE.Color();
        if (height < earthRadius) {
            color.setRGB(0, 0, 0.5);
        } else if (height < earthRadius + mountainHeight / 3) {
            color.setRGB(0.5, 0.5, 0.3);
        } else if (height < earthRadius + 2 * mountainHeight / 3) {
            color.setRGB(0.3, 0.5, 0.1);
        } else {
            color.setRGB(0.8, 0.8, 0.5);
        }
        colors.push(color.r, color.g, color.b);
    }

    const colorAttribute = new THREE.Float32BufferAttribute(colors, 3);
    planeGeometry.setAttribute('color', colorAttribute);
    planeGeometry.getAttribute('position').needsUpdate = true;

    const planeMaterial = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -1;
    plane.scale.set(20, 20, 1);
    scene.add(plane); */






    // Define the flow direction array and the stream power array
    let flowDirection = [];
    let streamPower = [];
    /* 
    // Compute the flow direction and stream power using the DEM
    for (let i = 0; i < topography.length; i++) {
        for (let j = 0; j < topography[0].length; j++) {
            // Compute the slope at the current cell
            let slope = calculateSlope(topography, i, j);

            // Compute the flow direction
            flowDirection[i][j] = getFlowDirection(topography, i, j);

            // Compute the stream power using the stream power law
            streamPower[i][j] = K * Math.pow(slope, n);
        }
    }

    // Update the elevation values of the plane
    function updateTopography(topography) {
        for (var i = 0; i < plane.geometry.vertices.length; i++) {
            var vertex = plane.geometry.vertices[i];
            vertex.z = topography[i];
        }
        plane.geometry.verticesNeedUpdate = true;
    }

    // Loop for the desired number of iterations
    for (let iteration = 0; iteration < numIterations; iteration++) {
        // Update the topography using the finite difference method
        for (let i = 0; i < topography.length; i++) {
            for (let j = 0; j < topography[0].length; j++) {
                let flowDirection = getFlowDirection(topography, i, j);
                let deltaH = -dt * streamPower[i][j] * Math.pow(slope[i][j], n - 1);
                topography[flowDirection[0]][flowDirection[1]] += deltaH;
            }
        }
        updateTopography(topography);
    }


    // Function to calculate the slope at a given cell
    function calculateSlope(topography, i, j) {
        let slope = 0;

        // Check the 8 neighboring cells
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                // Skip the current cell
                if (di == 0 && dj == 0) {
                    continue;
                }

                // Compute the slope between the current cell and the neighboring cell
                let deltaZ = topography[i + di][j + dj] - topography[i][j];
                let distance = Math.sqrt(di * di + dj * dj);
                let newSlope = deltaZ / distance;

                // Update the maximum slope
                slope = Math.max(slope, newSlope);
            }
        }

        return slope;
    }

    // Function to get the flow direction at a given cell
    function getFlowDirection(topography, i, j) {
        let flowDirection = [0, 0];

        // Check the 8 neighboring cells
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                // Skip the current cell
                if (di == 0 && dj == 0) {
                    continue;
                }

                // Check if the neighboring cell has a lower elevation
                let newElevation = topography[i + di][j + dj];
                if (newElevation < topography[i][j]) {
                    flowDirection[0] = di;
                    flowDirection[1] = dj;
                }
            }
        }

        return flowDirection;
    } */

   /*  // create light
    var light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 3, 3);
    scene.add(light);


    // update the light
    light.intensity = 0.5;
    light.color.setHex(0xffffff);

    //add ambient light
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    camera.position.z = 5;
    camera.position.set(0.25, 0, 0);
    //camera.lookAt(0, 0, -1);
    //camera.lookAt(planet);

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.updateProjectionMatrix()
        camera.aspect = sizes.width / sizes.height
        renderer.setSize(sizes.width, sizes.height)
    })
    const loop = () => {
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()

    //animation loop
    function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);
    }
    render();
} */

//Pages links
const cvLink = document.querySelector('.cv-link');
const aboutMeLink = document.querySelector('.about-me-link');
const researchLink = document.querySelector('.research-link');
const publicationsLink = document.querySelector('.publications-link');
const modelGalleryLink = document.querySelector('.model-gallery-link');
const socialNetworksLink = document.querySelector('.social-networks-link');
const cvpopup = document.querySelector('#cv-popup');
const publicationspopup = document.querySelector('#publications-popup');
const aboutmepopup = document.querySelector('#aboutme-popup');
const researchpopup = document.querySelector('#research-popup');
//const gallerypopup = document.querySelector('#gallery-popup');
const socialpopup = document.querySelector('#social-popup');
//const popupHeader = document.querySelector('.popup-header');
//const popupBody = document.querySelector('.popup-body');

cvLink.addEventListener('click', function (event) {
    event.preventDefault();

    //popupHeader.innerHTML = '<h2>My Curriculum Vitae</h2><a href="#" class="close-popup">X</a>';
    //popupBody.innerHTML = '<p>CV content goes here</p>';
    //popupBody.innerHTML = '<a href="Documents/CV_Mika.pdf" download>Download my CV</a>';
    /*   fetch('cv.html')
        .then(response => response.text())
        .then(data => {
          popupBody.innerHTML = data;
        }); */

    cvpopup.style.display = 'block';
    const closePopup = document.querySelector("#cv-popup .close-popup");
    closePopup.addEventListener('click', function () {
        cvpopup.style.display = 'none';
        window.location.href = "index.html";
    });
});

aboutMeLink.addEventListener('click', function (event) {
    event.preventDefault();
    //popupHeader.innerHTML = '<h2>About Me</h2><a href="#" class="close-popup">X</a>';
    //popupBody.innerHTML = '<p>I am a PhD student at the University of Potsdam and at the Helmholtz Centre Potsdam GFZ in section 2.5 Geodynamic modeling. I develop numerical regional scale models of the Earth to better understand the mechanism behind the evolution of the surface and its deformation at convergent margins.  In particular, my studies focus on the role of subduction dynamics and its interaction with the overriding plate. </p>';

    /*   fetch('aboutme.html')
        .then(response => response.text())
        .then(data => {
          popupBody.innerHTML = data;
        }); */

    aboutmepopup.style.display = 'block';
    const closePopup = document.querySelector("#aboutme-popup .close-popup");
    closePopup.addEventListener('click', function () {
        aboutmepopup.style.display = 'none';
        window.location.href = "index.html";
    });
});

researchLink.addEventListener('click', function (event) {
    event.preventDefault();
    //popupHeader.innerHTML = '<h2>Research</h2><a href="#" class="close-popup">X</a>';
    //popupBody.innerHTML = '<p>Research content goes here</p>';
    researchpopup.style.display = 'block';
    const closePopup = document.querySelector("#research-popup .close-popup");
    closePopup.addEventListener('click', function () {
        researchpopup.style.display = 'none';
        window.location.href = "index.html";
    });
});

publicationsLink.addEventListener('click', function (event) {
    event.preventDefault();
    //popupHeader.innerHTML = '<h2>Publications</h2><a href="#" class="close-popup">X</a>';
    //popupBody.innerHTML = '<p>Publications content goes here</p>';

    /*   fetch('./Publications.html')
        .then(response => response.text())
        .then(data => {
          popupBody.innerHTML = data;
        }); */

    publicationspopup.style.display = 'block';
    const closePopup = document.querySelector("#publications-popup .close-popup");
    closePopup.addEventListener('click', function () {
        publicationspopup.style.display = 'none';
        window.location.href = "index.html";
    });
});

modelGalleryLink.addEventListener('click', function () {
        //clearScene();
        //runGallerySimulation();
    window.location.href = "gallery.html";
    });


socialNetworksLink.addEventListener('click', function (event) {
    event.preventDefault();
    //popupHeader.innerHTML = '<h2>Social Networks</h2><a href="#" class="close-popup">X</a>';
    //popupBody.innerHTML = '<p>Social Networks content goes here</p>';
    socialpopup.style.display = 'block';
    const closePopup = document.querySelector("#social-popup .close-popup");
    closePopup.addEventListener('click', function () {
        socialpopup.style.display = 'none';
        window.location.href = "index.html";
    });
});




//planetGroup.scale
/* // check if a planet is clicked
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
document.addEventListener("mousedown", onDocumentMouseDown, false);
function onDocumentMouseDown(event) {
    event.preventDefault();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(planetGroup.children);
    if (intersects.length > 0) {
        document.getElementById("planet-info").style.display = "block";
        document.getElementById("planet-desc").innerHTML = "Object: " + intersects[0].object.name + "<br>" + planetObjects.find(p => p.name === intersects[0].object.name).info;
    }
}
// close the planet info window
document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("planet-info").style.display = "none";
}); */

//setupCounter(document.querySelector('#counter'))
