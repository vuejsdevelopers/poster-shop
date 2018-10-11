# Vue.js Poster Shop

#### Demo

See the completed project here: [http://poster-shop.vuejsdevelopers.com/](http://vuejs-poster-shop.vuejsdevelopers.com/)

#### Pre-installation

Ensure [Node.js  >=4](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
 
#### Installation

1. Install this code on your local system
     
    1. Fork this repository (click 'Fork' button in top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/[your_username]/vuejs-poster-shop.git
        ```

2. Change directory into the local clone of the repository

    ```
    cd vuejs-poster-shop
    ```

3. Install dependencies

    ```
    npm install
    ```
    
4. Start project

    ```
    npm run serve
    ```

5. Your site will be available at *localhost:3000*.

#### Lecture branches

Note that branches in the repo named `lecture/xxx` correspond to course lectures.

## Troubleshooting

Here are some common mistakes people make, check these before filing an issue:

- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change manually set the `PORT` environment variable to resolve the conflict e.g. `3001`
- Ensure you have a version of Node >= 4

```
node -v
```
