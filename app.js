var mergeSort = require('./mergesort');
var BinarySearchTree = require('./tree').BinarySearchTree;

var nums = [5,4,3,2,1];

console.log('merge sort', nums);
mergeSort(nums);
console.log('=> ', nums);

console.log('-----------------------------------------------');
var bstElements = [60, 55, 45, 57, 59, 100, 67, 107, 101];
console.log('Binary search tree:', bstElements);
var bst = new BinarySearchTree(bstElements);
console.log('tree size:', bst.getSize());
console.log('bst preorder: ' + bst.preorder());
console.log('bst inorder: ' + bst.inorder());
console.log('bst postorder: ' + bst.postorder());
