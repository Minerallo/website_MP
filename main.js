import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import classes from "./style.css";
import "./style.css";

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

                        const vertex = new THREE.Vector3(x, y, z);
                        pointGeometry.vertices.push(vertex);
                               
                        numPointstot = numPointstot+1;
                       // console.log("numpointstot :"+numPointstot) // check what is the max of this value and replace it manually in numpoints before the loop
                        var index = ind_xyz * 3;
                        //console.log(index)
                        positions[index] = x;
                        positions[index + 1] = y;
                        positions[index + 2] = z;
                      
                        colors[ind_xyz * 3 + 0] = (values[2] > 0) ? (1 - values[2] / 1.5) : 1; //values[2] / lower lim
                        colors[ind_xyz * 3 + 1] = 0;//(values[2] + 1.5) / 3;
                        colors[ind_xyz * 3 + 2] = (values[2] < 0) ? (1 + values[2] / 0.5) : 1;//values[2] / upper lim

                        ind_xyz ++;
                        //console.log(z)

                        //sphere works but really slow
           /*              pointGeometry.vertices.forEach(function (vertex) {
                            var sphere = spheres.clone();
                            sphere.position.copy(vertex);
                            scene.add(sphere); 
                        });*/
                        
                    }
  
                }
            }
            pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            pointGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        })
        .catch(error => console.log("Error in fetching the file: ", error));

    //const numPoints = 1781 * file_numbers_used;//1781 is the number of points by files
    //console.log("Number total of points " + numPoints)
    console.log("Point geometry " + pointGeometry)

        var pointMaterial = new THREE.PointsMaterial({
            size: 0.003,
            vertexColors: true
            //color: 0x9a2a2a
        });
   
  /*       myMesh.geometry.computeBoundingSphere(); */
    // THREE.Points INSTANCE UISNG THREE.PointsMaterial
    var points = new THREE.Points(pointGeometry,pointMaterial);
        points.frustumCulled = false;
    console.log(pointGeometry)
    scene.add(points);
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

    
document.querySelector('.menu-toggle').addEventListener('click', toggleSidebar);

document.querySelectorAll('.content a').forEach(link => {
    link.addEventListener('click', function() {
        var title = this.textContent.trim();
        openSidebar(title);
    });
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function openSidebar(title) {
    var sidebar = document.getElementById('sidebar');
    // var sidebarTitle = document.getElementById('sidebarTitle');
    var sidebarContent = document.getElementById('sidebarContent');

    // sidebarTitle.textContent = title;
    if (title === 'About me') {
        // Load the content of social_networks.html
        fetch("files/about_me.html")
            .then(response => response.text())
            .then(data1 => {
                sidebarContent.innerHTML = data1;
                                        });
    } else if (title === 'Research') {
        // Load the content of social_networks.html
        fetch("files/research.html")
            .then(response => response.text())
            .then(data2 => {
                sidebarContent.innerHTML = data2;
                                        }); 
    } else if (title === 'Publications') {
        // Load the content of social_networks.html
        fetch("files/publications.html")
            .then(response => response.text())
            .then(data3 => {
                sidebarContent.innerHTML = data3;
                                        }); 
    } else if (title === 'View my CV') {
        // Load the content of social_networks.html
        fetch("files/curriculum.html")
            .then(response => response.text())
            .then(data4 => {
                sidebarContent.innerHTML = data4;
            });                                 
    } else if (title === 'Social Networks') {
        // Load the content of social_networks.html
        fetch("files/social_networks.html")
            .then(response => response.text())
            .then(data5 => {
                sidebarContent.innerHTML = data5;
            });    
    } else if (title === 'Model Gallery') {
        // Load the content of social_networks.html
        fetch("files/model_gallery.html")
            .then(response => response.text())
            .then(data6 => {
                sidebarContent.innerHTML = data6;
            });                                                                    
    }

    sidebar.classList.add('open');
}




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
