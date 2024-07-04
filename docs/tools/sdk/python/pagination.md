---
id: python-sdk-pagination
title: Paginate Results with The Python SDK
pagination_label: Paginate Results
sidebar_label: Paginate Results
sidebar_position: 5
sidebar_class_name: pythonsdk
keywords: ['python', 'sdk', 'paginate']
description: Learn how to use the Python SDK to paginate results.
slug: /tools/sdk/python/paginate
tags: ['SDK']
---

By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to [Paginating Results](/docs/api/standard-collection-parameters/#paginating-results).

Here is an example of how to implement pagination with the SDK on line 10:

```python showLineNumbers
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
from sailpoint.paginator import Paginator

configuration = Configuration()

api_client = sailpoint.v3.ApiClient(configuration)

accounts = Paginator.paginate(sailpoint.v3.AccountsApi(api_client).list_accounts, result_limit=1000, limit=250)

print(accounts)
```

Run this command to run the code:

```bash
python sdk.py
```

This example returns 1000 accounts, 250 accounts per page. 

The function takes a few parameters: the first is the function you want to invoke the pagination against. The earlier example calls `sailpoint.v3.AccountsApi(api_client).list_accounts` to list accounts. 

The `result_limit` specifies the total number of results you can return, 1000. The following limit number, 250, refers to the `increment`, the number of records per page. For example, changing the `result_limit` to 50 and the following "250" to 5 would change the request to return a total of 50 records, 5 per page.

You can also provide an `offset` value to specify which record number to start the request on. For example, you can add `offset=11` to start getting accounts from the 12th record, 11, instead of the first, 0.

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](/docs/api/standard-collection-parameters/#paginating-results).
