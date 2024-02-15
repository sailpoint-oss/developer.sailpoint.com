---
id: python-sdk-error-handling
title: Error Handling with The Python SDK
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 8
sidebar_class_name: pythonsdk
keywords: ['py', 'python', 'sdk', 'error']
description: Learn how to configure error handling when using the Python SDK.
slug: /tools/sdk/python/error-handling
tags: ['SDK']
---

The Python SDK returns key exceptions if the request fails. These exceptions can be found at `sailpoint.v3.exceptions`.

In this example, `name rt "Test"` is not a valid filter which causes the function to return a 400 bad request. Line 11 will catch that bad request response and you can log out the appropriate message. This example will also catch 401 unauthorized and 500 service exception messages as well.

```python showLineNumbers
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
from sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException

configuration = Configuration()
api_client = sailpoint.v3.ApiClient(configuration)

try:
    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters='name rt "Test"')
except BadRequestException as e:
    print("Exception when calling TransformsApi->list_transforms: %s\n" % e)
except UnauthorizedException as e:
    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\n" % e)
except ServiceException as e:
    print("Service exception when calling TransformsApi->list_transforms: %s\n" % e)
```

If you don't want the program to exit for any error response, you can include `pass` in each of your except blocks after printing the error message.

```python
import sailpoint
import sailpoint.v3
from sailpoint.configuration import Configuration
from sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException

configuration = Configuration()
api_client = sailpoint.v3.ApiClient(configuration)

try:
    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters='name rt "Test"')
except BadRequestException as e:
    print("Exception when calling TransformsApi->list_transforms: %s\n" % e)
    pass
except UnauthorizedException as e:
    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\n" % e)
    pass
except ServiceException as e:
    print("Service exception when calling TransformsApi->list_transforms: %s\n" % e)
    pass
```
