/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

//Last three methods are optional. Complete them only if you could tackle all the rest.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // adds a child into the tree
    addChild(value) {
        let newNode = new Tree(value);
        // push a new tree into the current tree's children
        this.children.push(newNode);
      }
    
      forEach(fn) {
        //do this to the node
        fn(this);
        //do this to the children
        for (let child of this.children) {
          child.forEach(fn);
        }
      } 
    }

  let tree = new Tree(1);
  tree.addChild(2);
  tree.addChild(3);
  tree.addChild(4);
  tree.children[0].addChild(20);
  tree.children[0].children[0].addChild(200);
  //console.log(tree);

  tree.forEach(tree => {
    console.log(tree.value);
  });

 // returns true/false if the value is in the tree
  contains(value) 

    if (this.children === value) { //the tree value matches the value passed in
      return true

    } else {
    // loop through all the children
    // call the contains method located on each child (pass the value in)
      while (currNode.value !== value) {
        currNode == newNode.next;
        newNode.next = newNode;
    
   // return false if not found at all
    } else {
       return false;
 
    }


  // applies the function to each child in the tree

  traverse(fn) {
    
    fn(this);
    for (let child of this.children) {
      child.forEach(fn);
    }
  }

  // OPTIONAL
  //return the node with that value if found. Returns null otherwise
  find(value) {}

  // OPTIONAL
  //adds a node with "value" as a child of the node with refValue
  //returns the new node added
  //or null if refValue was not found
  insertChildUnder(refValue, value) {}

  // OPTIONAL
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {}
}

module.exports = Tree;
