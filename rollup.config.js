import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [['env', { modules: false }], 'stage-2', 'react'],
      plugins: [
        'external-helpers',
        ['transform-react-remove-prop-types', { mode: 'remove' }],
      ],
    }),
    process.env.MINIFY ? minify() : false,
  ].filter(Boolean),
  external: ['react', 'react-dom', 'prop-types', 'popper.js'],
  output: {
    sourcemap: true,
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      'popper.js': 'Popper',
    },
  },
};
