///Recursive solution for lca 
function lowestCommonAncestor(root, p, q){
    if(root.value > p && root.value > q){

    return lowestCommonAncestor(root.left, p, q); //if root value is greater than both roots then go left
    }

    else if(root.value < p && root.value < q) //if root value is smaller than both values go right
    {
    return lowestCommonAncestor(root.right, p, q);
    }
    else return root;   //if finally if none of above is true we are at ancestor of p and q 
}

//Time complexity will go upto O(h) given that height of tree is h.