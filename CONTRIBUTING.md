# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. We are happy to welcome all the contributors who are willing to enhance/add documentation and features to this project. Feel free to contribute and remember, no contribution is too small.

## Submitting Contributions :woman_technologist: :man_technologist:

### Step 1 : Find an issue

- Kindly have a look at the existing issues or [create your own issues!](#creating-an-issue)
- Kindly wait for the issue to be assigned to you. Once assigned you can get started with working on the same.
- Note : Every change in this project should/must have an associated issue.

### Step 2: Fork the repository

- Fork this Repository. This will create a local copy of this repository on your GitHub Profile.

![fork](https://user-images.githubusercontent.com/66238394/114071871-3cbb1080-98bf-11eb-94aa-4b5f811ece77.png)

### Step 3: Clone the repository:

- Clone this Github repository. Open up the terminal and type in:

```git
$ git clone https://github.com/YOUR_USERNAME/NeoAlgo-Docs.git
```

Don't forget to write your GitHub user name in place of _YOUR_USERNAME_

- Keep a reference to the original project in upstream remote.

```git
$ cd NeoAlgo-Docs
$ git remote add upstream https://github.com/TesseractCoding/NeoAlgo-Docs
```

- Update your copy before working.

```git
$ git remote update
$ git checkout <branch-name>
$ git rebase upstream/<branch-name>
```

### Step 4: Create a development branch

- `cd` into the parent directory. Now create a branch of the master by pushing the command

```git
$ git checkout -b <YOUR_USERNAME>
```

You can now check the branches by pushing in the command: `git branch`. You will see the `main` branch and another branch with your username.

- Switch to the Development branch. Never develop on the `main` branch. Push in the command:

```git
$ git checkout <YOUR_USERNAME>
```

Voila! You've completed the initial setup :smiley:

Start Coding 👩‍💻👨‍💻

### Step 5: Commit your changes

- Stage the files that you want to include in your commit. To stage a specific changed file, type in:

  ```git
  $ git add <FILE_NAME>
  ```

  To stage all the changed files, type in:

  ```git
  $ git add --all  or  $ git add .
  ```

  This command snapshots the file in preparation for versioning and further adds it to the staging area.

- Once you've staged the files that you want to include in your commit, you're ready. Make appropriate commits with proper commit messages. Commit messages should be short and descriptive of your change. If you are looking through your repository's history, you'll be guided by the commit messages, so they should tell a story.  
   Make a commit by pushing the command:
  
  ```git
  $ git commit -m "Your Message"
  ```

### Step 6: Push your changes

- Upload all local branch commits to the remote repository.
  
  ```git
  $ git push
  ```

### Step 7: Creating a Pull Request

- Go to your repository in browser and click on compare.

![fork](https://user-images.githubusercontent.com/66238394/114072909-590b7d00-98c0-11eb-90dd-fe4b63c9238f.png)

- Open a pull request by clicking the Create pull request button.

![fork](https://user-images.githubusercontent.com/66238394/114072909-590b7d00-98c0-11eb-90dd-fe4b63c9238f.png)

- Then add a title and description to your pull request that explains your contribution. Click on _Create Pull Request_ button.

Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged. :partying_face:

## Creating an issue

Issues can be used to keep track of bugs, enhancements, or other requests.

- On GitHub, navigate to the main page of the repository.
- Under your repository name, click on the Issues button.

![issue](https://user-images.githubusercontent.com/66238394/114073960-7ee55180-98c1-11eb-98ad-77954d5f76db.png)

- Click New issue.

![newissue](https://user-images.githubusercontent.com/66238394/114075186-e64fd100-98c2-11eb-98b7-8d8cf6c18eba.png)

- If there are multiple issue types, click Get started next to the type of issue you'd like to open.

![issuetype](https://user-images.githubusercontent.com/66238394/114075732-80177e00-98c3-11eb-8bd1-e75b08521915.png)

- Type a title and description for your issue.
- After creating the issue please wait until the project maintainer assigns the issue to you.

## Add a new article :page_with_curl:

- Install the Project locally. You need to use NodeJS and Yarn (Instructions are on [README.md](README.md))
- Find the directory in `docs` where this should ideally go. We have multiple sub-directories where we organize all our articles and documentation. Find the best fit and please create a new file within one of the sub-directories. Please use meaningful filenames and keep the file extension as `mdx`. If in doubt, please ask.
- Once you had added your article, we need to render it on the main website. To make that happen, please go over to the `sidebars.js` on the root directory. Open the file and add the relative path of your article in the JSON Data Structure. You will see your article rendered on the local server and you can make appropriate changes to the same.
- The basic layout for the article should be:
  - Introduction
  - Explanation
  - Algorithm
  - Code (Use C++/Java and Python; At least two languages should be present and pick up code from NeoAlgo with apt credits to author)
  - Sample I/O
  - Complexity Analysis
- Always check the application build and see if your article is being correctly rendered on the local server.
- Once you are done with the changes and are ready to make a PR, please build the website once using the below command. It would ensure that the build is successful.   
  
  ```bash
  yarn build
  ```

## Add a blog post :writing_hand:

- Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
title: Greetings!
author: Author Name
author_title: NeoAlgo Docs Contributor
author_url: https://github.com/<author_username>
author_image_url: https://github.com/<author_username>.png
---

Here goes your blog content
```

- A new blog post is now available at `http://localhost:3000/blog/greetings`.  

## Here are some 9 Rules

#### You should be following while doing Open-Source to make your Contributions shine during the whole process:

- Be Nice, Be Respectful (BNBR)
- Check if the Issue you created, exists or not.
- Make proper commit messages and document your PR well.
- Squash your commits before you push them.
- Always create a Pull Request from a Branch; Never from the Master.
- Issues would be served on "First Come, First Serve" basis.
- Issues would be tagged as Easy, Medium, Hard. Scores would be assigned on the difficulty of Issue you solve.
- Code would be reviewed by Mentors before they are merged. Every PR requires 3 Reviews.
- No person can take up more than 2 Issues at a single point in time.
