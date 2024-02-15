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

One of the most useful functionalities of the Python SDK is the ability to easily access all the [V3 APIs](/idn/api/v3) and [Beta APIs](/idn/api/beta) and implement them in your project. 

Here is an example of how to use the SDK to get a list of available [transforms](/idn/docs/transforms). This example leverages the [List Transforms endpoint](/idn/api/v3/list-transforms). 

Create a file in your project called "sdk.py" and copy this content into it:

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

This example imports the V3 APIs, which allows you to call the List Transforms V3 endpoint in your code. 

To run the code, run this command:

```go
python sdk.py
```

The SDK will return a list of available transforms. 

You can use this example as a guide for how to access all the V3 and Beta APIs (you would use `import sailpoint.beta` to import the Beta APIs). 

### Use query parameters to filter your tenant's transform list

With the same SDK function, you can use query parameters to limit the results of your transforms list to only the results you want. 

Refer to the [List Transforms endpoint specification](/idn/api/v3/list-transforms) to view all its query parameters. 

Here is an example that uses query parameters to limit the list to no more than 10 transforms that all start with the name "Test": 

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

The SDK will return a list of no more than 10 transforms that all start with the name "Test". 

## Use methods that return HTTP Info

Each method has two versions - one returns only the response sent back from the endpoint, and the other returns the status and other HTTP info along with the response.

An example of the first method version is the `list_transforms()` method from earlier example. This method returns the response from the endpoint but no status or headers.

This is what the second method version would be: `list_transforms_with_http_info()`. This method will return the response as well as status, headers and raw data from the endpoint. 
