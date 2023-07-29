# Webnao

Toolset for debugging, calibration and analysis of rUNSWift NAO robots' peformance.

## Overview
The toolset currently consists of two parts:
- the web application that provides the tools that can be used on a laptop or mobile
- the server that provides information about the robots and facilitates streaming from network or dumps

## Getting started
### Installing Node.js 

The preferred method of using Node.js is via [NVM](https://github.com/nvm-sh/nvm) as it allows for different versions of Node to be installed and used on one machine.

For Linux or MacOS please follow the [nvm documentation](https://github.com/nvm-sh/nvm#installing-and-updating), and for Windows, please follows the [nvm-windows](https://github.com/coreybutler/nvm-windows).

Once NVM is installed, run :

1. `nvm install 19`
2. `nvm use 19`
3. Reload VScode

### Installing dependencies

1. Run `npm i` inside *webnao/server* folder 
2. Run `npm i` inside *webnao/webapp-react* folder
### Running the tool
1. Run `npm start` inside the *server* folder, wait for "Servers started" message
2. In as separate terminal, run `npm start` inside the *webapp-react* folder 
3. The tools should launch a browser to http://localhost:1234

## Folder structure

`server` - server part
`server/.dumps` - where all dumps should go, with *.bbd2* extension
`react-webapp` - web application

## Useful commands
* Re-generate types from Protobuf defintions `npm run protobuf-gen` (useful when we've changed the Blackboard structure)
* Sync time over ssh 
```
ssh user@server sudo date -s @`( date -u +"%s" )` 
```


## Example dumps
If you want to work with dump files, here are a couple of examples:  

https://limenutt-drive.s3.amazonaws.com/temp/rUNSWift/dump1.bbd2  
https://limenutt-drive.s3.amazonaws.com/temp/rUNSWift/dump-mirror2.bbd2 