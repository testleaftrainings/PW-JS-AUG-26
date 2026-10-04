📘 Installing Git Bash & Setting up Git for GitHub Actions
1. Download Git for Windows

Open your browser and go to:
👉 https://git-scm.com/downloads

Under Windows, click Download.

This will download the installer (.exe file).

2. Install Git Bash

Run the downloaded installer.

Follow the installation wizard:

Select Destination Location → Keep default (C:\Program Files\Git).

Select Components → Leave defaults checked.

Select Start Menu Folder → Default is fine.

Choosing the default editor → Select Visual Studio Code (recommended).

Adjusting PATH environment → Select
✅ “Git from the command line and also from 3rd-party software”.

HTTPS transport backend → Choose Use HTTPS.

Line endings → Choose
✅ “Checkout Windows-style, commit Unix-style line endings”.

Leave the rest as default, click Install.

Once installation completes, launch Git Bash.

3. Verify Installation

Open Git Bash and run:

git --version


You should see output like:

git version 2.xx.x.windows.x

4. Configure Git (First-Time Setup)

Set your username and email (used for commits):

git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"


Check if it’s set correctly:

git config --list