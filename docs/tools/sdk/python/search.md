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

One of the most useful functionalities you can access with the Python SDK is Identity Security Cloud's [search functionality](/api/v3/search-post). 

Here is an example of how you can implement Search, along with pagination. Copy this code into your "sdk.py" file to try it out: 

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

This example returns 1000 identities, 100 per page, and sorts them in descending order by name (`'-name'`). You can also change the search pagination by changing "100" and "1000", respectively.

There are two main ways you can manipulate this example to search for the results you want: 

The first way is to change the `indices`, the document types you want to limit your search to. For example, if you add `"access profiles"` to the indices, the SDK will search access profiles too. To see all the indices you can search, refer to the [Search endpoint specification](/api/v3/search-post). 

The second way is to change the `query`, the value you're searching for. For example, if you change the query to "a*", the search will return all records starting with the letter "a". To learn more about how to build search queries, refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html). 

You can also change the sorting logic in the brackets next to `sort`. For more information about sorting results, refer to [Sorting Results](/api/standard-collection-parameters/#sorting-results).

