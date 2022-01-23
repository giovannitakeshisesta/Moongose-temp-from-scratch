###  This is the Moongoose lab done again from scratch to understand each step of the exercise and the connection between the files.

###  We have an array of datas, we are going to store the datas in a DB and interact with them CRUD
--------------------------------------------------------

## CREATE FOLDERS AND FILES

❯ touch index.js data.json .gitignore

❯ mkdir config && touch $_/db.config.js

❯ mkdir models && touch $_/Scheme.model.js


## SETTINGS

❯ code .

❯ npm init -y

 automatically creates a package.json file , 
 
 you have to change the script to:
 ``` js
 
 "scripts": {
 
    "start": "node ./index.js",
    
    "dev": "node ./index.js"
    
  },
  
```


❯ npm install mongoose

automatically creates the package-lock.json file

automatically creates the node_modules file

automatically adds to the package.json file the dependencies
	

``` JS
  "dependencies": {
     "mongoose": "^6.1.7"
  }
```


in the gitignore file add the following:
```
.DS_Store
node_modules
package-lock.json
yarn.lock
```

The rest of the files, check them one by one.

Finally on the terminal : npm start or mongo
