# BrilliantI

dependencies:
    "@fortawesome/fontawesome-svg-core": "^1.2.35",
    "@fortawesome/free-solid-svg-icons": "^5.15.3",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "autoprefixer": "^10.2.6",
    "axios": "^0.21.1",
    "data": "^0.6.1",
    "gatsby-source-airtable": "^2.2.0",
    "lodash.shuffle": "^4.2.0",
    "postcss-cli": "^8.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-spring": "^9.2.3",
    "tailwindcss": "^2.2.4",

scripts:
    "build:css": "postcss src/index.css -o src/tailwind.css",
    "watch:css": "postcss src/index.css -o src/tailwind.css -w",
    "start": "npm run build:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
steps:
npm start
npm run build(with alterations)
