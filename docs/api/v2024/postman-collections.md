---
id: postman-collections
title: Postman Collections
pagination_label: Postman Collections
sidebar_label: Postman Collections
sidebar_position: 7
sidebar_class_name: postmanCollections
keywords: ['postman']
description: Run ISC APIs in Postman.
slug: api/v2024/postman-collections
tags: ['postman']
---
import CMSComponent from '@site/src/components/PostmanLink';
import GitHubPublicFileComponent from '@site/src/components/GitHubLink';

[Postman](https://www.postman.com/) is a platform you can use to design, build, test, and iterate your APIs. Postman users and teams can create public workspaces they can use to make it easy to access their API collections and environments and get started. SailPoint maintains a [public workspace for the Identity Security Cloud API collections](https://www.postman.com/sailpoint/workspace/identitynow). You can use this workspace to access all the ISC API collections and stay up to date.

## Run in Postman

Each ISC API version is broken out into a separate collection within the workspace. The following table lists the available ISC API collections. To import a collection into your workspace, select the 'Run in Postman' button for your desired version. Doing so forks the collection into your workspace.

| API | Postman Collection |
| --- | --- |
| V2024 API | <CMSComponent source="https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/postman/links/v3-link.txt"></CMSComponent> |
| V3 API | [![Run in Postman](../img/button.svg)](https://god.gw.postman.com/run-collection/23226990-3721beea-5615-44b4-9459-e858a0ca7aed?action=collection%2Ffork&collection-url=entityId%3D23226990-3721beea-5615-44b4-9459-e858a0ca7aed%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| Beta API | [![Run in Postman](../img/button.svg)](https://god.gw.postman.com/run-collection/23226990-3b87172a-cd55-40a2-9ace-1560a1158a4e?action=collection%2Ffork&collection-url=entityId%3D23226990-3b87172a-cd55-40a2-9ace-1560a1158a4e%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| NERM API | [![Run in Postman](../img/button.svg)](https://god.gw.postman.com/run-collection/23226990-20d718e3-b9b3-43ad-850c-637b00864ae2?action=collection%2Ffork&collection-url=entityId%3D23226990-20d718e3-b9b3-43ad-850c-637b00864ae2%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |
| SaaS Connectivity | [![Run in Postman](../img/button.svg)](https://god.gw.postman.com/run-collection/23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef?action=collection%2Ffork&collection-url=entityId%3D23226990-a0b5c429-d8dd-4fe2-a4a2-eb7ff85322ef%26entityType%3Dcollection%26workspaceId%3D80af54be-a333-4712-af5e-41aa9eccbdd0) |

You can also fork a collection by selecting the ellipses to the right of the collection and selecting 'Create a fork.'

When you fork the collection, when you check the 'Watch original collection' checkbox to get notifications when there are changes to the collection, you will be notified by email whenever a collection changes.

## Update your collections

SailPoint is often making improvements to the ISC API collections. To keep your workspace in sync with updates to one of SailPoint's public collections, you can right click on the forked collection and select "pull changes". sometimes this process will fail because of the size of our collection and limitations of the Postman tool. In that case, in order to update, you will need to visit the [sailpoint workspace](https://www.postman.com/sailpoint/workspace/identitynow) and create a fork of the most recently published version or click the links above to fork the most recent version.

## Configure your environment

The SailPoint workspace provides an environment, a set of variables you can use in your requests, that you can fork and pull changes from to stay up to date the same way you can with collections. To import the environment into your workspace, select 'Run in Postman'.

| Environment | [![Run in Postman](../img/button.svg)](https://www.postman.com/sailpoint/workspace/identitynow/environment/23226990-ed571d4f-37a3-4a2c-9105-5d8d8cce1d20/fork) |
| --- | --- |

To send API requests in Postman, you must authenticate to the APIs. To authenticate to the APIs, you must specify these variables in your Postman environment:

| Environment Variable | Required | Description |
| --- | --- | --- |
| tenant | Yes | Your ISC tenant, typically your company's name |
| clientId | Yes | The client ID for the API client or personal access token |
| clientSecret | Yes | The client secret for the API client or personal access token |
| domain | No | This optional field is only necessary for those who have a domain in their API URL that isn't "identitynow". |

:::caution

Don't specify your baseUrl in your environment variables. When you fork an API collection, the baseUrl is automatically set as `https://{{tenant}}.api.{{domain}}.com`. Setting your baseURl in your environment variables may interfere with this process.

:::

Once you have configured your environment, you can start using Postman with all the endpoints provided in the collections.

:::tip

Anything you want to change about the Postman collection? We love feedback! Discuss the Postman collection [here](https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153).

:::
