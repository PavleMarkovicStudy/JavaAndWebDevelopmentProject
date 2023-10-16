## Requirements

For development, you will only need Node.js and a node global package, NPM , installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have git available in your PATH, npm might need it (You can find git [here](https://git-scm.com/)).
  
  If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.2

    $ npm --version
    8.5.0

    newer versions should work as well

 ## Install through git

   open a terminal and paste the following commands one by one

    $ git clone https://github.com/PavleMarkovicStudy/JavaAndWebDevelopmentProject.git
    $ cd JavaAndWebDevelopmentProject
    $ npm install

 ## If zip folder was downloaded
   
   there shuold not be a need for any npm install since all packages shuold be included in the zip folder
   even though all the files should be there, npm and node must still be installed, and angular cli must be in PATH so make sure to run the following command 
   regardless of having the node_modules folder already there, and make sure the terminal is on the project folder

    $ npm install @angular/cli

 ## Running the project

    $ ng serve

Important to declare that I've used the same instructions from a nodejs repository on which I'm working on my current job and I've simply changed links and names to make it work