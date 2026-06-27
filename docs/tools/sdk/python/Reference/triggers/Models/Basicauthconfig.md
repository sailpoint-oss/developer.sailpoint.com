---
id: basicauthconfig
title: Basicauthconfig
pagination_label: Basicauthconfig
sidebar_label: Basicauthconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Basicauthconfig', 'Basicauthconfig'] 
slug: /tools/sdk/python/triggers/models/basicauthconfig
tags: ['SDK', 'Software Development Kit', 'Basicauthconfig', 'Basicauthconfig']
---

# Basicauthconfig

Config required if BASIC_AUTH is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | The username to authenticate. | [optional] 
**password** | **str** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.basicauthconfig import Basicauthconfig

basicauthconfig = Basicauthconfig(
user_name='user@example.com',
password=''
)

```
[[Back to top]](#) 

