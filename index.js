function newImage(fileName, position, left, bottom) {
    let image = document.createElement('img')
    image.src = fileName
    image.style.position = position
    image.style.left = left
    image.style.bottom = bottom
   document.body.append(image)
    return image;

}

function newItem (item) {
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}
 

newImage('assets/green-character.gif', 'fixed','100px','100px')
newImage('assets/pine-tree.png', 'fixed', '450px', '200px')
newImage('assets/tree.png', 'fixed', '200px', '300px')
newImage('assets/pillar.png', 'fixed','350px','100px')
newImage('assets/crate.png', 'fixed', '150px', '200px')
newImage('assets/well.png','fixed','500px','425px')
let sword = newImage('assets/sword.png', 'fixed', '500px', '405px')
let shield = newImage('assets/sheild.png','fixed', '165px','185px')
let staff = newImage('assets/staff.png','fixed','600px','100px')
newImage('assets/grass.png','fixed', '50px', '50px')
newImage('assets/sky.png','any', 'any', 'any')
newItem(sword)
newItem(shield)
newItem(staff)





// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
//  pineTree.src = 'assets/pine-tree.png'
//  pineTree.style.position = 'fixed'
//  pineTree.style.left = '450px'
//  pineTree.style.bottom = '200px'
// document.body.append(pineTree)
