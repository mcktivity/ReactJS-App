const initState = {
    projects: [
      {id: '1', title: 'VueJS App', body: 'This repository contains the VueJS files used to build the Github Page.', link: 'https://github.com/mcktivity/VueJS-App'},
      {id: '2', title: 'Github Page', body: 'This repository contains the build files of the VueJS from the first project. These build files are currently deployed in Github. ', link: 'https://mcktivity.github.io'},
      {id: '3', title: 'ReactJS App', body: 'This repository contains ReactJS folder I used to learn React, Router and Redux.', link: 'https://github.com/mcktivity/ReactJS-app'},
      {id: '4', title: 'MVC Part 1', body: 'This repository contains my first project in MVC.', link: 'https://github.com/mcktivity/ReactJS-app'},
      {id: '5', title: 'MVC Part 2', body: 'This repository contains my second project in MVC.', link: 'https://github.com/mcktivity/ReactJS-app'},
    ]
  }

  const reducer = (state = initState, action) => {
    return state;
  }
  
  export default reducer