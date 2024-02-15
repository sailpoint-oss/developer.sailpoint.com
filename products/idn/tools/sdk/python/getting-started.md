---
id: python-sdk-getting-started
title: Getting started with the Python SDK
pagination_label: Python SDK
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: pythonsdk
keywords: ['python', 'sdk', 'start']
description: Learn how to use the Python SDK in this guide.
slug: /tools/sdk/python/getting-started
tags: ['SDK']
---

Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the Python SDK, refer to [Installation and Configuration](./index.mdx).

## List Transforms

Create a file in your project called `sdk.py` with the following content:

```python
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
import urllib3

configuration = Configuration()
with sailpoint.v3.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sailpoint.v3.TransformsApi(api_client)

    # List transforms
    try:
        api_response = api_instance.list_transforms()
        print("The response of TransformsApi->list_transforms:\n")
        print(api_response)
    except Exception as e:
        print("Exception when calling TransformsApi->list_transforms: %s\n" % e)
```

To run the code, run this command:

```go
python sdk.py
```

### Use query parameters to filter your tenant's transform list

Using the same SDK function, you can list your transforms but limit the results to only what you want. This example wants a list of no more than 10 transforms that start with the name "Test":

Refer to [List Transforms](https://developer.sailpoint.com/idn/api/v3/list-transforms) for all its supported query parameters.

```python
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
import urllib3

configuration = Configuration()
with sailpoint.v3.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sailpoint.v3.TransformsApi(api_client)

    # List transforms
    try:
        api_response = api_instance.list_transforms(filters='name sw "Test"', limit=10)
        print("The response of TransformsApi->list_transforms:\n")
        print(api_response)
    except Exception as e:
        print("Exception when calling TransformsApi->list_transforms: %s\n" % e)
```

To run the code, run this command:

```go
python sdk.py
```

## With Http Info

Each method has two versions, one returns only the response sent back from the endpoint, the other returns the status and other http info along with the response.

First we have `list_transforms()`. As shown above this returns the response from the api and no status or headers returned from the endpoint.

The other option is `list_transforms_with_http_info()`, this will return the response as well as status, headers and raw data.
