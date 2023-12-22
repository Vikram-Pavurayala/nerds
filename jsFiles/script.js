        import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
        import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
        import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 1366 / 2 / 574, 0.1, 1000);
        camera.position.set(1, 0, 17); // Adjust the camera position

        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(1366 / 4, 574 / 2); // Adjust the renderer size
        document.getElementById('nerdContainer').appendChild(renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        // Declare model variable
        let model;
        var mouseX;
        var mouseY;
        // Add model
        const loader = new GLTFLoader();
        loader.load('/assets/scene.gltf', (gltf) => {
          model = gltf.scene;
          scene.add(model);
        });

        // Set up camera position
        camera.position.z = 2;

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);



        // Animation loop
        /*const animate = () => {
          requestAnimationFrame(animate);

          model.rotation.y = mouseX / window.innerWidth + 50;
          model.rotation.x = mouseY / window.innerHeight + 50;
          // Update controls
          //controls.update();

          // Render the scene
         
        };
        *///commented beacose of lag in website 
        document.onmousemove = (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          
          model.rotation.y = mouseX / window.innerWidth + 50;
          model.rotation.x = mouseY / window.innerHeight + 50;
          renderer.render(scene, camera);
          //animate();
        }
        function rotateModel(){
          model.rotation.y = 250;
        }
        controls.enableZoom = false;
        controls.enablePan = false;
        // Set some initial parameters for the controls
        controls.rotateSpeed = 0;