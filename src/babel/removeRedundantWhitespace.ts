const removeRedundantWhitespace = () => ({
  visitor: {
    // Code removed for easier repro
  },
});

// SyntaxError: Unexpected token 'export' here
export default removeRedundantWhitespace;
