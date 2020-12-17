**Create an SPA from 0 to 100 in nn steps**

**Using eUI, Symony and Api-Platform**

**Table of Content**

- [Purpose](#purpose)
- [Remarks](#remarks)
- [Technologies](#technologies)
- [Building the application](#building-the-application)
  - [Installing the necessary tools](#installing-the-necessary-tools)
    - [NodeJS](#nodejs)
    - [NPM](#npm)
    - [YARN](#yarn)
    - [eUI-CLI](#eui-cli)
    - [Symfony CLI](#symfony-cli)
    - [Composer](#composer)
    - [GIT](#git)
    - [PHP 7.X](#php-7x)
  - [Initialise the applications with eUI CLI](#initialise-the-applications-with-eui-cli)


# Purpose

Soon...

# Remarks

This "tutorial" is based on a Windows 10 environment

# Technologies

- eUI 10.x (Set of component over Angular 10.x)
- Symfony (5.x) with API-Platform
- EUI Login for securing the app (@ECPHP/eulogin-bundle)
- MySQL for the database

# Building the application

DIGIT has create a CLI for generating the skeleton of an SPA frontend using eUI. The CLI offers the option of adding into the skeleton the backend part

## Installing the necessary tools

Before going further, we need to insure that the developer environment is having the necessary software.

***You will have to check the installation approach based on your environment (OS, network)***

### NodeJS

The version needed is the 10.x.

For managing the NodeJS version, we recommend is usage. If will allow you to install multiple NodeJS version and switch between the different version.

You can find NVM on github: <https://github.com/nvm-sh/nvm>

Several internet site explain how to install it over the different existing OS (Linux, OSX and Windows).

Below some site explaining how to install:

<https://heynode.com/tutorial/install-nodejs-locally-nvm>

<https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows>

```bash
nvm install 10.23.0
```

### NPM

You will need also to have NPM for installing packages. Which is installed along with NodeJs : <https://www.npmjs.com/get-npm>

### YARN

Yarn is another package manager.

<https://yarnpkg.com/getting-started/install>

```bash
npm install -g yarn
```

### eUI-CLI

You install the eUI Cli using NPM (or Yarn). The package is located here:

<https://www.npmjs.com/package/@eui/cli>

```bash
npm install -g @eui/cli@latest
```

### Symfony CLI

You can install also the Symfony CLI. The installed is located: <https://symfony.com/download>

The CLI is not mandatory but provide useful tools / shortcut to the command.

### Composer

You have to install Composer: <https://getcomposer.org/download/>

### GIT

You have to install GIT (which comes with Git-Bash): <https://git-scm.com/downloads>

Eventually, you can install a GUI: <https://git-scm.com/downloads/guis>

### PHP 7.X

You will also need PHP installed: <https://www.php.net/manual/en/install.windows.php>

## Initialise the applications with eUI CLI

You need to open a command line. As being under windows, launch a PowerShell terminal.
![power-shell-terminal](docs/images/doc-window-powershell.png)

We are creating a folder where we will create the SPA. We will execute the eUI CLI from that folder.

```bash
cd <your-root-dev-folder>
mkdir myApp
cd myApp
eui-cli
```

![folder-created](docs/images/doc-window-powershell-folder-created.png)
