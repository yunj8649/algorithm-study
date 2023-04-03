var BSTIterator = function (root) {
    this.node = root;
    // 목록의 순서대로 순회를 가져오는 데 사용할 스택
    this.stack = [];
  
    const bst_in_order = (node) => {
        // 콜 스택을 반환합니다
        if (!node) {
            return null;
        }

        // 맨 오른쪽 노드로 이동
        bst_in_order(node.right);
        // 스택에 추가
        this.stack.push(node);
        // 왼쪽 노드 가져오기
        bst_in_order(node.left);
    };

    // 스택 채우기
    bst_in_order(root);
};

BSTIterator.prototype.next = function () {
    this.node = this.stack.pop();
    return this.node.val;
};

BSTIterator.prototype.hasNext = function () {
    // 비어 있으면 false를 반환하고, 비어 있지 않으면 true를 반환합니다
    return this.stack.length;
};
