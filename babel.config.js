module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // Enables the new JSX transform
      },
    ],
  ],
};
