const rightSideView = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const helper = (root, level) => {
    if (result[level] === undefined) {
      result[level] = root.val;
    }
    if (root.right) {
      helper(root.right, level + 1);
    }
    if (root.left) {
      helper(root.left, level + 1);
    }
  };
  helper(root, 0);

  return result;
};
