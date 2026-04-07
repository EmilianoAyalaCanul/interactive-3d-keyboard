import * as THREE from 'three';
import {mainCamera} from '/scene/camera.js'
import {renderer} from '/scene/render.js'
import {scene} from '/scene/scene.js'
import {sizes} from '/tools/sizes.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { canvas } from '/scene/render.js';
import { box } from '/objects/box.js';


/**
 * camera update 
 */
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    mainCamera.aspect = sizes.width / sizes.height
    mainCamera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Orbit Controls
 */
const orbitControls = new OrbitControls(mainCamera,canvas)
orbitControls.enableDamping = true


scene.add(box)

/**
 * Render loop
*/
const loop = () =>{

    /*orbit controls update */
    orbitControls.update()

    /*renderer update */
    renderer.render(scene,mainCamera)

    requestAnimationFrame(loop)
}

loop()
