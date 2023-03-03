---
id: powershell-sdk
title: Powershell SDK
pagination_label: Powershell SDK
sidebar_label: Powershell
sidebar_position: 3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk']
description: Learn how to use the Powershell SDK in this guide.
slug: /tools/sdk/powershell
tags: ['SDK']
---

## Start using the Powershell SDK

Learn how to use the Powershell SDK in this guide. The Powershell SDK has some pre-built code examples you can use to build tools that can interact with IdentityNow (IDN).

The Powershell SDK includes the following functionality: 
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

You need the following to use the Powershell SDK:

- Your tenant name in IDN. To learn how to find it, refer to [Getting Started](https://developer.sailpoint.com/idn/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your IDN instance. 

- A PAT with a client secret and ID. To learn how to create one in IDN, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). The SDK will use this PAT to authenticate with the SailPoint APIs. 

## Setup

To set up your Powershell SDK, follow these steps:

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

```typescript
const getPaginatedAccounts = async () => {

    
    let apiConfig = new Configuration()
    apiConfig.retriesConfig = {
        retries: 4,
        retryDelay: axiosRetry.exponentialDelay,
        onRetry(retryCount, error, requestConfig) {
            console.log(`retrying due to request error, try number ${retryCount}`)
        },
    }
    let api = new AccountsApi(apiConfig)
    
    const val = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10)

    console.log(val)

}
```

### Search

```typescript
const search = async () => {
    let apiConfig = new Configuration()
    let api = new SearchApi(apiConfig)
    let search: Search = {
        indices: [
            "identities"
        ],
        query: {
            query: "*"
        },
        sort: ["-name"]
	}
    const val = await Paginator.paginateSearchApi(api, search, 100, 1000)

    for (const result of val.data) {
        const castedResult: IdentityDocument = result
        console.log(castedResult.name)
    }
    
}
```

### Search pagination

```typescript
const val = await Paginator.paginateSearchApi(api, search, 100, 1000)
```

### Transforms

```typescript
const createTransform = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsApi(apiConfig)
    let transform: TransformsApiCreateTransformRequest = 
    {
        transform:
        {
            name: "Test Transform",
            type: "dateFormat",
            attributes: {
                inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",
                outputFormat: "yyyy/dd/MM"
            }
        }
    }
    const val = await api.createTransform(transform)
    console.log(val)
}
```
### Transform pagination




