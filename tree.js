function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function BinarySearchTree(val, comparator) {
    this.comparator = comparator || defaultComparator;
    this.size = 0;

    var elements = [];

    if (Array.isArray(val))
        elements = val;
    else if (val || val == 0)
        element.push(val);

    for(var i = 0; i < elements.length; i++)
        if (elements[i] || elements[i] == 0)
            this.insert(elements[i]);
}


BinarySearchTree.prototype.insert = function(val) {
    var parent = null;
    var current = this.root;

    while (current)
        if (this.comparator(val, current.val) < 0) {
            parent = current;
            current = current.left;
        } else if (this.comparator(val, current.val) > 0) {
            parent = current;
            current = current.right;
        } else { // element exists
            return false;
        }
    
    var newNode = new TreeNode(val);

    if (!parent)
        this.root = newNode;
    else if (this.comparator(val, parent.val) < 1)
        parent.left = newNode;
    else
        parent.right = newNode;

    this.size++;

    return true;
};

BinarySearchTree.prototype.delete = function(val) {
    var parent = null;
    var current = this.root;

    while (current)
        if (this.comparator(val, current.val) < 0) {
            parent = current;
            current = current.left;
        } else if (this.comparator(val, current.val) > 0) {
            parent = current;
            current = current.right;
        } else {
            break;
        }

    if (!current) // element not in tree
        return false;
    
    if (!current.left) { // current has no left tree
        if (!parent)
            this.root = current.right;
        else if (this.comparator(current.val, parent) < 1)
            parent.left = current.right;
        else
            parent.right = current.right;
    }
    else {
        var rightMost = current.left;
        var parentOfRightMost = current;

        while (rightMost.right) {
            parentOfRightMost = rightMost;
            rightMost = rightMost.right;
        }

        current.val = rightMost.val;

        if (this.comparator(parentOfRightMost.right == rightMost))
            parentOfRightMost.right = rightMost.left;
        else
            parentOfRightMost.left = rightMost.left;
    }

    this.size--;

    return true;
};

BinarySearchTree.prototype.preorder = function() {
    var elements = [];

    (function traverse(root) {
        if(root) {
            elements.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    })(this.root);

    return elements;
};

BinarySearchTree.prototype.postorder = function() {
    var elements = [];

    (function traverse(root) {
        if(root) {
            traverse(root.left);
            traverse(root.right);
            elements.push(root.val);
        }
    })(this.root);

    return elements;
};

BinarySearchTree.prototype.inorder = function() {
    var elements = [];

    (function traverse(root) {
        if(root) {
            traverse(root.left);
            elements.push(root.val);
            traverse(root.right);
        }
    })(this.root);

    return elements;
};


BinarySearchTree.prototype.getSize = function() {
    return this.size;
};


var defaultComparator = function(val, val2) {
    if (val < val2) return -1;
    else if (val > val2) return 1;
    else  return 0;
};

module.exports = {
    BinarySearchTree: BinarySearchTree
};