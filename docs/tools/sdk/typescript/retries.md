---
id: typescript-sdk-retries
title: Retries with The TypeScript SDK
pagination_label: Retries
sidebar_label: Retries
sidebar_position: 7
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'retry']
description: Learn how to configure retries when using the TypeScript SDK.
slug: /tools/sdk/typescript/retries
tags: ['SDK']
---

The SDK supports retry logic in the case of an unexpected error. You are able to configure the number of retries and the delay between retries. This logic is implemented in lines 7-12:

```typescript showLineNumbers
import {Configuration, axiosRetry, AccountsApi, Paginator} from "sailpoint-api-client"

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

getPaginatedAccounts()
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```
