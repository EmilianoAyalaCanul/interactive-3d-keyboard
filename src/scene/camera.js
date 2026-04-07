import * as THREE from 'three'
import {sizes} from '/tools/sizes.js'

/*main camera */
export const mainCamera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)

/*camera position */
mainCamera.position.z = 5
