---
id: python-sdk-search
title: Search with The Python SDK
pagination_label: Search
sidebar_label: Search
sidebar_position: 6
sidebar_class_name: pythonsdk
keywords: ['py', 'python', 'sdk', 'search']
description: Learn how to use the Python SDK to search.
slug: /tools/sdk/python/search
tags: ['SDK']
---

To try using the IDN [search functionality](/idn/api/v3/search-post) along with pagination, copy this code into your "sdk.py" file:

```python

import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
from sailpoint.paginator import Paginator

configuration = Configuration()

api_client = sailpoint.v3.ApiClient(configuration)

search = sailpoint.v3.Search(
    indices=['identities'], 
    query=sailpoint.v3.Query(query='*'), 
    sort=['-name'])
    
identities = Paginator.paginate_search(sailpoint.v3.SearchApi(api_client), search, increment=100, limit=1000)

print(identities.count)
```

Run this command to run the code:

```bash
python sdk.py
```

This example returns 1000 identities, 100 at a time, and sorts them in descending order by name. You can also change the search pagination by changing "100" and "1000", respectively.

The two main ways you can manipulate this example are to change the `indices` or the `query`. For example, if you add `"access profiles"` to the indices, the SDK will search access profiles too. If you change the query to "a*", the search will return all records starting with the letter "a".

You can also change the sorting logic in the brackets next to `sort`.
