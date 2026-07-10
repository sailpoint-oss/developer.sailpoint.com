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

## List transforms

One of the most useful functionalities of the Python SDK is the ability to easily access all the [Identity Security Cloud APIs](/docs/api) and implement them in your project.

The SDK is organized by API resource rather than by API version. Each API class (for example, `TransformsApi`) is imported directly from the top-level `sailpoint` package, and each method is suffixed with the version of the endpoint it calls (for example, `list_transforms_v1` calls the `v1` version of the List Transforms endpoint). This lets a single SDK access every version of every endpoint without having to import a separate version package.

Here is an example of how to use the SDK to get a list of available [transforms](/docs/extensibility/transforms). This example leverages the [List Transforms endpoint](/docs/api/list-transforms-v-1). 

Create a file in your project called "sdk.py" and copy this content into it:

```python
from sailpoint import ApiClient, TransformsApi
from sailpoint.configuration import Configuration

configuration = Configuration()
with ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TransformsApi(api_client)

    # List transforms
    try:
        api_response = api_instance.list_transforms_v1()
        print("The response of TransformsApi->list_transforms_v1:\n")
        print(api_response)
    except Exception as e:
        print("Exception when calling TransformsApi->list_transforms_v1: %s\n" % e)
```

This example imports the Transforms API, which allows you to call the `v1` version of the List Transforms endpoint in your code with `list_transforms_v1`. 

To run the code, run this command:

```go
python sdk.py
```

The SDK will return a list of available transforms. 

You can use this example as a guide for how to access any API. To use a different API, import its class from `sailpoint` (for example, `from sailpoint import AccountsApi` for the Accounts API), and call the method for the endpoint version you need (for example, `list_accounts_v1`). 

### Use query parameters to filter your tenant's transform list

With the same SDK function, you can use query parameters to limit the results of your transforms list to only the results you want. 

Refer to the [List Transforms endpoint specification](/docs/api/list-transforms-v-1) to view all its query parameters. 

Here is an example that uses query parameters to limit the list to no more than 10 transforms that all start with the name "Test": 

```python
from sailpoint import ApiClient, TransformsApi
from sailpoint.configuration import Configuration

configuration = Configuration()
with ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TransformsApi(api_client)

    # List transforms
    try:
        api_response = api_instance.list_transforms_v1(filters='name sw "Test"', limit=10)
        print("The response of TransformsApi->list_transforms_v1:\n")
        print(api_response)
    except Exception as e:
        print("Exception when calling TransformsApi->list_transforms_v1: %s\n" % e)
```

To run the code, run this command:

```go
python sdk.py
```

The SDK will return a list of no more than 10 transforms that all start with the name "Test". 

## Use methods that return HTTP Info

Each method has two versions - one returns only the response sent back from the endpoint, and the other returns the status and other HTTP info along with the response.

An example of the first method version is the `list_transforms_v1()` method from earlier example. This method returns the response from the endpoint but no status or headers.

This is what the second method version would be: `list_transforms_v1_with_http_info()`. This method will return the response as well as status, headers and raw data from the endpoint. 
