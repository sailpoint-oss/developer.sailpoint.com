---
id: typescript-sdk
title: TypeScript SDK
pagination_label: TypeScript SDK
sidebar_label: TypeScript
sidebar_position: 3
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk']
description: Learn how to use the TypeScript SDK in this guide.
slug: /tools/sdk/typescript
tags: ['SDK']
---

## Start using the TypeScript SDK

Learn how to use the TypeScript SDK in this guide. The TypeScript SDK has some pre-built code examples you can use to build tools that can interact with IdentityNow (IDN).

- [APIs](#apis): 
	- All [V3](https://developer.sailpoint.com/idn/api/v3) and [Beta](https://developer.sailpoint.com/idn/api/beta) APIs are available.
	- The following V2 APIs are available: 
		| Collection | Endpoint | 
		| --- | --- | 
		| Workgroups | GET Workgroup<br>PATCH Workgroup<br>DELETE Workgroup<br>GET Workgroups<br>POST Workgroups<br>GET Workgroup Members<br>POST Workgroup Members<br>GET Workgroup Connections<br>POST Bulk Delete Workgroups | 
		| Organizations | GET Organization <br>PATCH Organization | 
	- The following CC APIs are available: 
		| Collection | Endpoint | 
		| --- | --- | 
		| Accounts | GET Accounts<br>POST Remove Account | 
		| Applications | GET Applications<br>GET Application<br>POST Application<br>POST Update Application<br>POST Delete Application<br>GET Application Access Profiles | 
		| Connectors | GET Connectors<br>POST Connector<br>POST Delete Connector<br>GET Export Connector<br>POST Import Connector | 
		| User | POST Update User Permissions | 
		| Sources | POST Account Aggregation<br>GET Export Account Feed | 
		| System | POST Refresh Identities | 

- [Search](#search): You can use IDN's search. To learn more about IDN's search, refer to [Search](https://documentation.sailpoint.com/saas/help/search/index.html).

- [Transforms](#transforms): You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to [Transforms](https://developer.sailpoint.com/idn/docs/transforms).

- [Pagination](#pagination): You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results).

## Requirements

You need the following to use the TypeScript SDK:

- Your tenant name in IDN. To learn how to find it, refer to [Getting Started](https://developer.sailpoint.com/idn/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your IDN instance. 

- A PAT with a client secret and ID. To learn how to create one in IDN, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). The SDK will use this PAT to authenticate with the SailPoint APIs. 

## Setup

To set up your TypeScript SDK, follow these steps: 

1. [Install the SDK](#install-the-sdk)
2. [Configure the SDK](#configure-the-sdk)

### Install the SDK

### Configure the SDK

## Other functionality

Once you are configured and you have your SDK running, you can start trying out the SDK's other functionality. 

Read further to learn more about the following functionality: 
- [APIs](#apis)
- [Pagination](#pagination)
- [Search](#search)
- [Search pagination](#search-pagination)
- [Transforms](#transforms)

### APIs

### Pagination

### Search

### Search pagination

### Transforms

