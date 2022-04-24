const maxDepth = function (root, depth = 0) {
  if (!root) {
    return depth;
  }

  depth++;

  if (root.children && root.children.length > 0) {
    let depths = root.children.map((value) => maxDepth(value, 0));
    depth += Math.max(...depths);
  }

  return depth;
};
