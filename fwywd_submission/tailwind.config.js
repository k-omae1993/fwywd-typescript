module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': {'max': '415px'},
      'desktop': {'min': '416px', },
    },
    extend: {
      backgroundImage: theme => ({
        'about-pattern': "url('/introduction/bg-about.png')",
        'skills-pattern': "url('/introduction/bg-skills.png')",
        'phone-skills-pattern': "url('/introduction/bg-skills-sp.png')",
        'future-pattern': "url('/introduction/bg-future.png')",
        'phone-future-pattern': "url('/introduction/bg-future-sp.png')",
       })
    },
  },
  plugins: [],
}
