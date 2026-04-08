import * as THREE from 'three';
import {mainCamera} from '/scene/camera.js'
import {renderer} from '/scene/render.js'
import {scene} from '/scene/scene.js'
import {sizes} from '/tools/sizes.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { canvas } from '/scene/render.js';
// import { box } from '/objects/box.js';
import { loadKeyboard } from '/objects/keyboard.js'
import { sun } from '/tools/ambienthLight.js';


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

/**
 *Keyboard  
 */ 
let keyboard = null
let keyA = null

const init = async () => {

    keyboard = await loadKeyboard()
    keyA = keyboard.getObjectByName('A')
    scene.add(keyboard)
}
init()


/**
 *Lights
 */ 
scene.add(sun)

/*Timer */
const clock = new THREE.Clock()

/**
 * Render loop
*/
const loop = () =>{
    const elapsedTime = clock.getElapsedTime()

    if(keyboard){
        keyboard.rotation.x = Math.PI * 0.25
        keyboard.position.x = -9
        keyboard.position.y = -2
        keyboard.position.z = -2
        keyA.position.set(1,1,1)
        keyA.rotation.x = elapsedTime * 3
    }
    
    /*orbit controls update */
    orbitControls.update()

    /*renderer update */
    renderer.render(scene,mainCamera)

    requestAnimationFrame(loop)
}

loop()
