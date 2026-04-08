import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()

export const loadKeyboard = () => {
    return new Promise((resolve, reject) => {
        /*load model 3d */
        gltfLoader.load(
            '/models/teclado.glb',

            (gltf) => {
                const keyboard = gltf.scene

                /*settings keyboard */
                keyboard.position.set(0, 0, 0)
                keyboard.scale.set(1, 1, 1)

                /*show meshes */
                keyboard.traverse((child) => {
                if (child.isMesh) {
                    const keyName = child.parent.name
                    console.log(keyName)
                }
        })

                resolve(keyboard)
            },

            undefined,

            (error) => {
                reject(error)
            }
        )
    })
}