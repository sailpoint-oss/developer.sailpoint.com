---
id: docs
slug: /docs
title: IdentityNow
pagination_label: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

🧭 There are many different ways in which you are able to extend the IdentityNow platfrom beyond what comes out of the box. Please, explore our documentation and see what is possible! This documentation assumes that you are a current customer or partner and already have access to the IdentityNow application.

:::info Looking to become a partner?
If you are interested in becoming a partner, be it a Technology or Channel/Implementation partner, [click here](https://www.sailpoint.com/partners/become-partner/).
:::

## Before You Get Started
Please read this introduction carefully, as it contains recommendations and need-to-know information pertaining to all features of the IdentityNow platform.


### Authentication
Many of the interactions you have through our various features will have you interacting with our APIs either directly or indirectly. It would be valuable to familiarize yourself with [Authentication](../../api/authentication.md) on our platform.

### Understanding JSON
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. JSON is at the heart of every API and development feature that SailPoint offers in IdentityNow—usually either inputs or outputs to/from a system. [Learn more about JSON here](https://www.w3schools.com/js/js_json_intro.asp).

### Understanding Webhooks
A webhook in web development is a method of augmenting or altering the behavior of a web page or web application with custom callbacks. These callbacks may be maintained, modified, and managed by third-party users and developers who may not necessarily be affiliated with the originating website or application. Our [Event Triggers](docs/identity-now/event-triggers) are a form of webhook, for example. [Learn more about webhooks here](https://zapier.com/blog/what-are-webhooks/).

## Recommended Technologies
While you can use whichever development tools you are most comfortable with or find most useful, we will recommend tools here for those that are new to development.

:::tip
Our team, when developing documentation, example code/applications, videos, etc. will almost always use one of the tools/languages listed below.
:::

### IDEs (Integrated Development Environments)
IDEs are great for consolidating different aspects of programming into one tool. They're great for not only writing code, but managing your code as well. While you can use any IDE you feel is best fit for you and the task, here is what we use:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

  | IDE | Description |
  |---|---|
  | [VS Code](https://code.visualstudio.com/) | VS Code is a lightweight IDE that we believe is perfect for development on our IdentityNow platform. We also have great plug-in support from our community, like [this one](https://marketplace.visualstudio.com/items?itemName=yannick-beot-sp.vscode-sailpoint-identitynow)! |
  | [IntelliJ](https://www.jetbrains.com/idea/) | If you happen to be writing in Java or developing Rules on our platform, we typically recommend IntelliJ. While Java development can be done in VS Code, you will have an easier time using an IDE that was purpose-built for Java. |
  </TabItem>
  <TabItem value="mac" label="Mac">

  | IDE | Description |
  |---|---|
  | [VS Code](https://code.visualstudio.com/) | VS Code is a lightweight IDE that we believe is perfect for development on our IdentityNow platform. We also have great plug-in support from our community, like [this one](https://marketplace.visualstudio.com/items?itemName=yannick-beot-sp.vscode-sailpoint-identitynow)! |
  | [IntelliJ](https://www.jetbrains.com/idea/) | If you happen to be writing in Java or developing Rules on our platform, we typically recommend IntelliJ. While Java development can be done in VS Code, you will have an easier time using an IDE that was purpose-built for Java. |
  </TabItem>
  <TabItem value="linux" label="Linux">

  | IDE | Description |
  |---|---|
  | [VS Code](https://code.visualstudio.com/) | VS Code is a lightweight IDE that we believe is perfect for development on our IdentityNow platform. We also have great plug-in support from our community, like [this one](https://marketplace.visualstudio.com/items?itemName=yannick-beot-sp.vscode-sailpoint-identitynow)! |
  | [IntelliJ](https://www.jetbrains.com/idea/) | If you happen to be writing in Java or developing Rules on our platform, we typically recommend IntelliJ. While Java development can be done in VS Code, you will have an easier time using an IDE that was purpose-built for Java. |
  </TabItem>
</Tabs>

---

### CLI Environments
When interacting with our platform or writing code related to IdentityNow, we often use the CLI. While you can use any CLI that you feel is best fit for you and your job, here are the CLI environments we use and recommend:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

| CLI Tool | Description |
|---|---|
| Windows PowerShell | Windows PowerShell is a modern terminal on windows (also available on Mac/Linux) that offers versatile CLI, task automation, and configuration management options. |
| [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=us) | The Windows Terminal is a modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL. Its main features include multiple tabs, panes, Unicode and UTF-8 character support, a GPU accelerated text rendering engine, and custom themes, styles, and configurations. Terminal is just a more beautiful version of PowerShell 😁 |
  </TabItem>
  <TabItem value="mac" label="Mac">

| CLI Tool | Description |
|---|---|
| Mac Terminal (default) | On Mac, we recommend using the default terminal. |
  </TabItem>
  <TabItem value="linux" label="Linux">

| CLI Tool | Description |
|---|---|
| Linux Terminal (default) | On Linux, we recommend using the default terminal. |
  </TabItem>
</Tabs>

---

### Version Control
Writing code typically requires version control to adequately track changes in sets of files. While you can use any version control that you feel is best fit for you and your job, here are the version control tools that we use and recommend:

| Version Control Tool | Description |
|---|---|
| [git](https://git-scm.com/) | Git is a free and open-source, distributed version control system designed to handle everything from small to very large projects. Git runs locally on your machine. |
| [GitHub](https://github.com) | GitHub is an internet hosting service for managing git in the cloud. We use GitHub on our team to collaborate amongst the other developers on our team, as well as with our community. |

---

### Programming Languages

| Language | Primary Platform Uses | Description |
|---|---|---|
| Typescript | <ul><li>SaaS Connectivity</li><li>Test</li></ul> | This is a description of why Typescript. |

---

### API Clients
API clients make it easy to call APIs without having to first write code. API clients are great for testing and getting familiar with APIs to get a better understanding of what the inputs/outputs are and how they work.

| API Client | Description |
|---|---|
| [Postman](https://www.postman.com/downloads/) | Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster. |

## Glossary
Identity is a complex topic and there are many terms used, and quite often! Please [refer to our glossary](https://documentation.sailpoint.com/saas/help/common/glossary.html) whenever possible if you aren't sure what something means.
