const path = require("path")

exports.onCreateNode = async ({ node, getNode, actions, graphql }) => {
  const { createNodeField } = actions
  // Query for all the project markdown files
  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: "contentType",
      value: parent.sourceInstanceName || "",
    })
  }
}
