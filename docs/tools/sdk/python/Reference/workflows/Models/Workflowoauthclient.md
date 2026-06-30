---
id: workflowoauthclient
title: Workflowoauthclient
pagination_label: Workflowoauthclient
sidebar_label: Workflowoauthclient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowoauthclient', 'Workflowoauthclient'] 
slug: /tools/sdk/python/workflows/models/workflowoauthclient
tags: ['SDK', 'Software Development Kit', 'Workflowoauthclient', 'Workflowoauthclient']
---

# Workflowoauthclient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | OAuth client ID for the trigger. This is a UUID generated upon creation. | [optional] 
**secret** | **str** | OAuthClient secret. | [optional] 
**url** | **str** | URL for the external trigger to invoke | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowoauthclient import Workflowoauthclient

workflowoauthclient = Workflowoauthclient(
id='1a58c03a6bf64dc2876f6988c6e2c7b7',
secret='00cc24a7fe810fe06a7cb38bc168ae104d703c7abb296f9944dc68e69ddb578b',
url='https://example-tenant.api.identitynow.com/beta/workflows/execute/external/c17bea3a-574d-453c-9e04-4365fbf5af0b'
)

```
[[Back to top]](#) 

