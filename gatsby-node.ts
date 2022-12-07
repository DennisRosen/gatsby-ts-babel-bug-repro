import { GatsbyNode } from "gatsby"
import path from "path"

// Modify babel config
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = (
  { actions, stage },
  options
) => {
  if (stage === 'build-html' || stage === 'build-javascript') {
    actions.setBabelPlugin({
      // Plugin location should be relative to gatsby-node.ts
      name: path.resolve(__dirname, './src/babel/removeRedundantWhitespace.ts'),
      options,
    })
  }
}