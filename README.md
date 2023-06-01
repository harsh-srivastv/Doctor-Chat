## **Doctor Chat - A Health Consultancy Platform**

## **Project Overview**
Doctor Chat is a medical chat application that works in real time using webRTC that forms a peer to peer connection between the Doctor and Patient. It provides users with a very smooth and attractive UI, where patients can schedule their appointment with the doctor and later join rooms created by doctors.

## **Getting Started**
To get the project up and running on your local system, follow these steps:

### **Prerequisites**

- Node.js: Ensure that Node.js is installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/en)

- Git: Ensure that Node.js is installed on your machine. You can download it from the official website: [Git](https://git-scm.com/downloads)

- MongoDB:Ensure that Node.js is installed on your machine. You can download it from the official website: [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

### **Setting up Node**
**Step 1: Download the Installer**
Download the [Windows Installer](https://nodejs.org/en/download/) from Node.js official website. Make sure you have downloaded the latest version of Node.js. It includes the NPM package manager.

Here, we are choosing the 64-bit version of the Node.js installer.
After choosing the path, double-click to install .msi binary files to initiate the installation process. Then give access to run the application.

**Step 2: Install Node.js and NPM**
You will get a welcome message on your screen and click the "Next" button. The installation process will start.

- Choose the desired path where you want to install Node.js.
- By clicking on the Next button, you will get a custom page setup on the screen. Make sure you choose **npm package manager**, not the default of Node.js runtime. This way, we can install Node.js and NPM simultaneously.

You should have **143MB** of space to install Node.js and npm features.

The following features will be installed by default:

- Node.js runtime
- Npm package manager
- Online documentation shortcuts
- Add to Path
- The setup is ready to install Node and NPM. Click on the Install button 

**Step 3: Check Node.js and NPM Version**
- If you have a doubt whether you have installed everything correctly or not, let’s verify it with “Command Prompt”.

Command Prompt window will appear on the screen.

To confirm Node installation, type node -v command.

To confirm NPM installation, type npm -v command.

And you don’t need to worry if you see different numbers than mine as Node and NPM are updated frequently.

### **Setting up Git**

#### **Using Git**

To use Git on the command line, you will need to download, install, and configure Git on your computer. You can also install GitHub CLI to use GitHub from the command line. For more information, see ["About GitHub CLI"](https://cli.github.com/).

If you want to work with Git locally but do not want to use the command line, you can download and install the GitHub Desktop client. For more information, see ["Installing and configuring GitHub Desktop"](https://desktop.github.com/).

If you do not need to work with files locally, GitHub lets you complete many Git-related actions directly in the browser, including:

- Creating a repository
- Forking a repository
- Managing files
- Being social

#### **Setting up Git**
1. Download and install the latest version of Git from the [official Git website](https://git-scm.com/downloads).

2. Set your username in Git by running the following command in your terminal or command prompt:
```bash
git config --global user.name "Your Username"
```
3. Set your commit email address in Git by running the following command in your terminal or command prompt:
```bash
git config --global user.email "your@email.com"
```
#### **Authenticating with GitHub from Git**
When you connect to a GitHub repository from Git, you will need to authenticate with GitHub using either HTTPS or SSH.

**Connecting over HTTPS (recommended)**
If you clone with HTTPS, you can cache your GitHub credentials in Git using a credential helper. For more information, see ["About remote repositories"](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) and ["Caching your GitHub credentials in Git"](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).

**Connecting over SSH**
If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from GitHub. For more information, see ["About remote repositories"](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) and ["Generating a new SSH key and adding it to the ssh-agent"](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).


### **Installation**
No specific project directory is required.

1. Open Command Prompt and clone the repository to your local machine using the following command:

```bash
git clone https://github.com/harsh-srivastv/Doctor-Chat
```
2. Navigate to the project directory:
```bash
cd project-directory
```
3. Install the dependencies for the frontend and backend:

- Frontend
```bash
cd frontend
npm install
```
   - Backend
```bash
cd backend
npm install
```
4. Set up the environment variables:

- Create a `.env` file in the backend directory.
- Copy the contents of the `.env.example` file and replace the values with your specific configuration.
- Create an account at [https://www.twilio.com/en-us]
- Set your SID, Token, and Phone Number in .env file of backend folder

5. Set up the database:
 - Make sure you have MongoDB installed and running on your local machine.
 - Update the MongoDB connection URL in the backend configuration file (`config.js` or `config.js`).


6. Start the frontend and backend servers:

-   Frontend:

```bash
cd frontend
npm start
```
- Backend:

```bash
cd backend
node server.js
```
Open your web browser and visit http://localhost:3000 to access the application.
 
## **Technologies Used**
**Frontend**: React.js, HTML, CSS, JavaScript, Redux

**Backend**: Node.js, Express.js, MongoDB, Mongoose

### **Created By**

1. Harsh Srivastava - harshsrivastv12@gmail.com
2. Aviral Tiwari - aviraltiwari49@gmail.com
3. Divyam Kakkar - kakkardivyam24@gmail.com
4. Anshika Gupta  - sonalgupta6394@gmail.com 

**Under Supervision of**:
- Ms. Akansha Singh (Assistant Professor), Computer Science and Engineering Department
- Pranveer Singh Institute of Technology, AKTU

## **Contact**
For any inquiries or support, please contact our team at [Email](harshsrivastv12@gmail.com)

Feel free to customize this README file based on your project's specific requirements and details.

