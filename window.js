document.addEventListener('DOMContentLoaded', function() {

  var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(
      45,
      innerWidth / innerHeight,
      .1,
      1000
    ),
    light = new THREE.PointLight(),
    cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshLambertMaterial()
    ),
    renderer = new THREE.WebGLRenderer()

  cube.position.set(0, 0, -5)
  scene.add(camera)
  scene.add(cube)
  scene.add(light)
  renderer.setSize(innerWidth, innerHeight)
  document.body.appendChild(renderer.domElement)
  render()

  function render() {
    requestAnimationFrame(render)
    beforeRender()
    renderer.render(scene, camera)
  }

  function beforeRender() {
    cube.rotation.z += .01
    cube.rotation.y += .01
  }

})
