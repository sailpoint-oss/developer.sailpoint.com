---
id: postman-collections
title: Postman Collections
pagination_label: Postman Collections
sidebar_label: Postman Collections
sidebar_position: 6
sidebar_class_name: postmanCollections
keywords: ['postman']
description: How to run the APIs in Postman.
tags: ['postman']
---

[Postman](https://www.postman.com/) is a platform you can use to design, build, test, and iterate your APIs. Postman users and teams can create public workspaces they can use to make it easy to access their API collections and environments and get started. SailPoint maintains a [public workspace for the IdentityNow API collections](https://www.postman.com/sailpoint/workspace/identitynow). You can use this workspace to access all the IDN API collections and stay up to date. 

## Run in Postman

Each IDN API version is broken out into a separate collection within the workspace. The following table lists the available IDN API collections. To import a collection into your workspace, select the 'Run in Postman' button for your desired version. Doing so automatically syncs the collection with the one in your workspace. 

| API | Postman Collection |
|------|----------------------------|
| V3 API | [![Run in Postman](./img/button.svg)](https://app.getpostman.com/run-collection/23226990-5f6a4855-8012-406f-9456-c8fa6311b080?action=collection%2Ffork&collection-url=entityId%3D23226990-5f6a4855-8012-406f-9456-c8fa6311b080%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| Beta API | [![Run in Postman](./img/button.svg)](https://god.gw.postman.com/run-collection/23226990-18091672-ede8-4a27-a1b8-251d4bda2da1?action=collection%2Ffork&collection-url=entityId%3D23226990-18091672-ede8-4a27-a1b8-251d4bda2da1%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| V2 API | [![Run in Postman](./img/button.svg)](https://god.gw.postman.com/run-collection/23226990-624bf09b-7d1b-4ee6-9833-4b581b41db40?action=collection%2Ffork&collection-url=entityId%3D23226990-624bf09b-7d1b-4ee6-9833-4b581b41db40%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| cc/private API | [![Run in Postman](./img/button.svg)](https://god.gw.postman.com/run-collection/23226990-4ec40b38-cdac-44bf-a07c-8606895d2233?action=collection%2Ffork&collection-url=entityId%3D23226990-4ec40b38-cdac-44bf-a07c-8606895d2233%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| SaaS Connectivity | [![Run in Postman](./img/button.svg)](https://god.gw.postman.com/run-collection/23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef?action=collection%2Ffork&collection-url=entityId%3D23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |

## Get collection updates

SailPoint is often making improvements to the IDN API collections. To keep your workspace in sync with updates to one of SailPoint's public collections, hover over the collection, select the ellipse to the righ, and select 'Pull changes'. 

![image|230x500, 75%](./img/pull-changes.png)

If there are no changes, you're up to date. If there are changes, the screen lists the changes you're pulling, as shown in the following image. Select 'Pull changes' again to pull them in. Then you're up to date!

![image|666x500, 75%](./img/diff-changes.png)

## Update your environment

The SailPoint workspace also provides an environment, a set of variables you can use in your requests. SailPoint also makes improvements to this environment to add new capabilities to the workspace. You may want to keep your own environment. If so, you can pull the environment changes the same you did with the collection updates. 

You will need these variables in your own Postman environment: 

:::caution 

Do not include your baseURL in your variables. 

:::

| Environment Variable | Required | Description | 
| ----------- | ----------- | ----------- |
| tenant | Yes | Your IDN tenant, typically your company's name |
| clientId | Yes | The client ID for the API client or personal access token |
| clientSecret | Yes | The client secret for the API client or personal access token |
| domain | No | This optional field is only necessary for those who have a domain in their API URL that isn't "identitynow". |

:::tip

Anything you want to change about the Postman collection? We love feedback! Discuss the Postman collection [here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153).

:::