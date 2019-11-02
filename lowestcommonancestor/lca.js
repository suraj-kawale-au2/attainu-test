//construct a node for BST
class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
}

//CONSTRUCT TREE
class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    //insert method
    insert(value){
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }

    //find lowest common ancestor by sending root and 2 nodes value.
    lowestCommonAncestor(root, p, q){
        if(root.val > p.val && root.val > q.val) 
        return lowestCommonAncestor(root.left, p, q);
        else if(root.val < p.val && root.val < q.val) 
        return lowestCommonAncestor(root.right, p, q);
        else return root;
    }
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(21)
tree.insert(171)
tree.insert(16)
tree.insert(2)
tree.lowestCommonAncestor(10,16,6)
//         10
//     5      7
//    2 6   16  171
