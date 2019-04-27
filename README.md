# :boom: Develop-your-First-CLI-Workshop :boom:

This repo is the step-by-step guide to develop the CLI in Nodejs. This repo is the part of the GDG (Google Developer Groups), New Delhi.

# :calendar: Event Details

- **Event Name**: Web Developers Day 4 by Google Developer Group, New Delhi
- **Date**: 28th April 2019
- **Location**: 91Sprinrboard, Gurgaon
- **Event Link**: [GDG Event Page](https://www.meetup.com/GDGNewDelhi/events/260830507/)

# :heavy_exclamation_mark: prerequists :heavy_exclamation_mark:

- :white_check_mark: Knowledge of Javascript
- :white_check_mark: Knowledge of nodejs
- :white_check_mark: Comfortble working with CLI and IDE
- :white_check_mark: Github account

# :memo: Agenda

1. What is nodejs & CLI
2. Project walkthrough
3. Folder structure
4. Installing package.json
5. Create your data
6. Code time
7. Publish the npm

# Content

0. [Walkthrough of Nodejs, CLI , and Project](#zero-walkthrough-theory)
1. [Setup your machine - nodejs, folder structure, package.json](#one-setup-your-machine-codelab)
1. [Create your data](#two-create-your-data-codelab)
1. [Install require package and print your first message](#three-code-time-codelab)
1. [Write the code](#four-beautification)
1. [Publish the NPM](#five-publish-npm-codelab)

# :bell: How to use this repo?

This repo is step-by-step guide. You can clone the repo or follow along.Every folder is marked
below with what is expected in it.

## :zero: Walkthrough [Theory]

Introduction to nodejs and CLI.

## :one: Setup your machine [Codelab]

Folder : `session-1`

- Install nodejs
- Create a folder - "resume-cli"
- Create package.json

  `npm init`

## :two: Create your Data [Codelab]

Folder : `session-2`

Go to folder `session-2/resume-cli/data`.
If you want to update the content you can edit it in `data.js`

## :three: Code Time [Codelab]

Folder : `session-3`

Go to folder `session-3/resume-cli`.
In this we will identify the commands and add it to the commands folder.

To sync with `data.js` we have following commands (user input) :

- about me
- contact me
- experience
- summary

To print the choices on the terminal we will use the npm package `inquirer`.

## :four: Beautification

Folder : `session-4`

This section is totally optional.
To make the CLI' content more colorful and presentable. We will use two more packages:

- chalk : will let us provide the colors to the texts.
- cfonts : will let us write a big fancy welcome message.
- commander

## :five: Publish NPM [Codelab]

# How to run it?

1. Go to the desire folder. eg :

`cd session-2/resume-cli`

2. Install the dependency

`npm install`

3. From the root of the `resume-cli` run the following command to start the application

   `node index.js`

# :hearts: Collabrations

Collabrations are the awesome way to create small things better, and big. If you see anything which can be improved ? If you see something can be added here? Before telling to anyone else, raise the PR :) . If you are new to the collabrations and have no idea how to do it. Do not worry, reach to me nsharma215@gmail.com
