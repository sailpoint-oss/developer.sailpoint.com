---
id: python-sdk-retries
title: Retries with The Python SDK
pagination_label: Retries
sidebar_label: Retries
sidebar_position: 7
sidebar_class_name: pythonsdk
keywords: ['py', 'python', 'sdk', 'retry']
description: Learn how to configure retries when using the Python SDK.
slug: /tools/sdk/python/retries
tags: ['SDK']
---

The Python SDK uses the [urllib3 retry](https://urllib3.readthedocs.io/en/stable/reference/urllib3.util.html) module to support retry logic.

Here is an example of the retry logic, implemented on line 8. With this configuration, if the returned status code from the API is equal to 502, 503, or 504, the SDK will retry the call up to 5 times: 

```python showLineNumbers
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
from sailpoint.paginator import Paginator
import urllib3

configuration = Configuration()
configuration.retries = urllib3.Retry(total=5, status_forcelist=[ 502, 503, 504 ])

api_client = sailpoint.v3.ApiClient(configuration)

accounts = Paginator.paginate(sailpoint.v3.AccountsApi(api_client).list_accounts, result_limit=1000, limit=250)

print(accounts)
```

Run this command to run the code:

```bash
python sdk.go
```
