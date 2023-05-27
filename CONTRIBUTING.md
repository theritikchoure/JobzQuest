# Contribution Guidelines

Thank you for your interest in contributing to JobzQuest! Your contributions help us expand our job and internship listings, providing valuable opportunities for job seekers. Please follow these guidelines to ensure a smooth and efficient contribution process.

## Add Job listings

1. **Fork the JobzQuest repository:** Start by forking the JobzQuest repository to your GitHub account. This creates a copy of the repository under your account where you can make changes.
2. **Create a new branch:** Switch to your forked repository and create a new branch.
3. **Make the necessary changes:** Navigate to the `data` directory within the repository, if you want to add full time job then go to `data/jobs.js` file and if you want to add internships then go to `data/internships.js` file. Add listing as first element in the array.
4. **Add the job listing details:** Open the `data/jobs.js` or `data/internships.js` (based on your listing) and use the below format (Listing format) to structure the job listing. Include essential information such as the job title, company name, apply link and tags. Ensure the information is accurate and well-formatted.
5. **Commit your changes:** Once you've added the job listing details, commit your changes to your branch. Provide a clear and concise commit message that describes the addition you've made.
6. **Push the changes:** Push your branch with the new commit to your forked repository on GitHub.
7. **Create a pull request:** Go to the original JobzQuest repository and navigate to the "Pull requests" tab. Click on the "New pull request" button.
8. **Compare changes:** Ensure that the base repository is set to the original JobzQuest repository and the base branch is set to the appropriate branch (usually the main or master branch). Set your forked repository and branch as the head repository and branch.
9. **Review and submit:** Review the changes you've made in the pull request. Include a clear title and description that summarize the job listing you've added. Once you're satisfied, submit the pull request.
10. **Collaborate and address feedback:** Keep an eye on the pull request for any feedback or suggestions from the project maintainers. Be responsive and address any requested changes or discussions promptly.

### Listing format
```
{
    role: "Job title",
    company: "Company name",
    apply_link: "https://apply.link",
    tags: ["Skill1", "skill2", "Skill3"]
}, 
```

Congratulations! You have successfully generated a pull request to add a job listing to JobzQuest. Your contribution will be reviewed by the project maintainers, and if everything is in order, it may be merged into the main repository to make the job listing available to JobzQuest users.

## Issues & Pull Requests (not for Job listing)

### Creating an Issue

Before creating an Issue for `features/bugs/improvements` please follow these steps:
> Note: this does not apply to creating/editing your profile

1. search existing issues before creating a new issue (has someone raised this already)
2. If it doesn't exist create a new issue giving as much context as possible (please select the correct Issue type, for example bug or feature)
3. Please wait until the maintainers review the Issue and update the labels
4. Look out for when the Issue label changes to status: `ready for dev`
5. Comment on the Issue asking for it to be assigned to you (do not tag maintainers as all maintainers receive your comment notifications)
6. Only start working on this issue (and open a Pull Request) when it has been assigned to you - this will prevent confusion, multiple people working on the same issue and work not being used.

### Working on an Issue (get it assigned to you)

Before working on an existing Issue please follow these steps:

1. Only ask to be assigned 1 issue at a time
2. Look out for the Issue label `status: ready for dev` (if it does not have this label, your work might not be accepted)
3. To request assignment of the issue, leave a comment specifying your interest (avoid tagging individual maintainers, as all maintainers receive comment notifications).
4. After the issue has been assigned to you, you can proceed with working on it. 
5. Please refrain from enabling GitHub Actions on your fork. 
6. Additionally, remember to reference the related issue in your pull request using the appropriate syntax (e.g., `closes #123`).


> For efficient workflow management, please note the following guidelines regarding issue assignments:

> - Assignments after label status: To streamline the process, maintainers will only consider requests for issue assignment if they are made after the 'status: ready for dev' label has been added. Historical comments requesting assignments before this label was added may not be reviewed.

> - Timely activity: Issues that remain inactive for a period of two weeks will be unassigned and reassigned to other contributors. It's important to maintain regular communication and progress updates.

> - Seek clarity when needed: If an issue is unclear or lacks sufficient information, it is recommended to ask questions and seek clarification before requesting assignment. This ensures that you have a clear understanding of the task at hand.

> - Request assignments responsibly: Only request assignment for an issue if you have the necessary knowledge and skills to work on it effectively. This helps maintain a focused and productive development process.

> - Collaborative assignments: In some cases, an issue can be assigned to multiple individuals if they agree to collaborate on the task. Pull requests can then include commits from different collaborators, promoting teamwork and shared contributions.

## Important Considerations

- Ensure that you have the necessary rights and permissions to contribute the job or internship listings you add. Respect the - confidentiality and intellectual property rights of the companies and organizations involved.
- Do not include any personally identifiable information (PII) or sensitive data in the listings.
- Double-check your work for any typos, grammatical errors, or formatting issues before submitting the pull request.
- Be responsive to any feedback or requests for changes from our team. Collaboration and open communication are key to maintaining the quality and integrity of JobzQuest.


## Pull Request Review Guidelines

We encourage and appreciate community participation in reviewing pull requests. It provides an excellent opportunity to learn and connect with fellow contributors.

### DOs

- Be kind and respectful, utilizing inclusive and gender-neutral language (e.g., they/them instead of guy/man).
- Use inline comments to explain your suggestions, providing clear and constructive feedback.
- Utilize inline suggestions to propose specific changes, helping to enhance the pull request.

### DON'Ts

- Avoid being rude, disrespectful, or aggressive in your feedback. Maintain a positive and collaborative atmosphere.
- Refrain from repeating feedback that has already been provided, as it adds unnecessary noise to the conversation. Instead, review existing comments and use GitHub reactions to indicate your agreement or disagreement.
- Do not blindly approve pull requests solely to enhance your GitHub contributors graph. Approvals should be based on the merits of the code and the overall value it brings to the project.

Your contributions to reviewing pull requests are greatly appreciated. By maintaining a supportive and inclusive environment, we can foster growth and ensure the quality of our codebase.


By contributing to JobzQuest, you are helping job seekers discover new opportunities and empowering individuals in their career journeys. We appreciate your valuable contributions and look forward to building an extensive and diverse collection of job and internship listings together!