import * as THREEE from 'three';
import {sizes} from '/tools/sizes.js'
export const canvas = document.querySelector('canvas.webgl')

export const renderer = new THREEE.WebGLRenderer({canvas:canvas})
renderer.setSize(sizes.width,sizes.height)
