---
id: postman-collections
title: Postman Collections
pagination_label: Postman Collections
sidebar_label: Postman Collections
sidebar_position: 7
sidebar_class_name: postmanCollections
keywords: ['postman']
description: How to run the APIs in Postman.
tags: ['postman']
---


import GitHubPublicFileComponent from '@site/src/components/GitHubLink';

[Postman](https://www.postman.com/) is a platform you can use to design, build, test, and iterate your APIs. Postman users and teams can create public workspaces they can use to make it easy to access their API collections and environments and get started. SailPoint maintains a [public workspace for the IdentityNow API collections](https://www.postman.com/sailpoint/workspace/identitynow). You can use this workspace to access all the IDN API collections and stay up to date.

## Run in Postman

Each IDN API version is broken out into a separate collection within the workspace. The following table lists the available IDN API collections. To import a collection into your workspace, select the 'Run in Postman' button for your desired version. Doing so forks the collection into your workspace.



| API | Postman Collection |
|------|----------------------------|
| V3 API | <GitHubPublicFileComponent source="https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/postman/links/v3-link.txt"></GitHubPublicFileComponent> |
| Beta API | <GitHubPublicFileComponent source="https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/postman/links/beta-link.txt"></GitHubPublicFileComponent> |
| V2 API | <GitHubPublicFileComponent source="https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/postman/links/v2-link.txt"></GitHubPublicFileComponent> |
| cc/private API | <GitHubPublicFileComponent source="https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/postman/links/cc-link.txt"></GitHubPublicFileComponent> |
| SaaS Connectivity | [![Run in Postman](./img/button.svg)](https://god.gw.postman.com/run-collection/23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef?action=collection%2Ffork&collection-url=entityId%3D23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |

You can also fork a collection by selecting the ellipses to the right of the collection and selecting 'Create a fork.'

When you fork the collection, even if you check the 'Watch original collection' checkbox to get notifications when there are changes to the collection because of limitations of Postman, to get the most recent version of changes to the collection, you will need to click the link to fork the most up to date collection.

## Update your collections

SailPoint is often making improvements to the IDN API collections. To keep your workspace in sync with updates to one of SailPoint's public collections, you will need to visit the [sailpoint workspace](https://www.postman.com/sailpoint/workspace/identitynow) and create a fork of the most recently published version or click the links above to fork the most recent version.

## Configure your environment

The SailPoint workspace provides an environment, a set of variables you can use in your requests, that you can fork and pull changes from to stay up to date the same way you can with collections. To import the environment into your workspace, select 'Run in Postman'.

| Environment | [![Run in Postman](./img/button.svg)](https://www.postman.com/sailpoint/workspace/identitynow/environment/23226990-ed571d4f-37a3-4a2c-9105-5d8d8cce1d20/fork) |
|------|----------------------------|

To send API requests in Postman, you must authenticate to the APIs. To authenticate to the APIs, you must specify these variables in your Postman environment:

| Environment Variable | Required | Description |
| ----------- | ----------- | ----------- |
| tenant | Yes | Your IDN tenant, typically your company's name |
| clientId | Yes | The client ID for the API client or personal access token |
| clientSecret | Yes | The client secret for the API client or personal access token |
| domain | No | This optional field is only necessary for those who have a domain in their API URL that isn't "identitynow". |

:::caution

Don't specify your baseUrl in your environment variables. When you fork an API collection, the baseUrl is automatically set as <https://{{tenant}}.api.{{domain}}.com>. Setting your baseURl in your environment variables may interfere with this process.

:::

Once you have configured your environment, you can start using Postman with all the endpoints provided in the collections.

:::tip

Anything you want to change about the Postman collection? We love feedback! Discuss the Postman collection [here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153).

:::
