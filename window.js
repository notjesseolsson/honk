$(function() {
  var renderer = new THREE.WebGLRenderer()
  renderer.setSize(innerWidth, innerHeight)
  $('body').append(renderer.domElement)
  var loader = new THREE.SceneLoader()
  loader.load('scene.json', function(json) {
    var scene = json.scene
    var camera = json.cameras.Camera
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    render()

    function render() {
      requestAnimationFrame(render)
      beforeRender(scene, camera)
      renderer.render(scene, camera)
    }
  })
})

function beforeRender(scene, camera) {
  var cyl = scene.getObjectByName('Cylinder')
  cyl.rotation.y += .01
  cyl.rotation.z += .01
  cyl.rotation.x += .01
}
