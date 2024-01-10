// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      height: {
        r: '8%',
        n: '8%'
      },
      maxHeight: {
        home: '84%'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
