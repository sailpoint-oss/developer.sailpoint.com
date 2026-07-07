---
id: passworddigittoken
title: Passworddigittoken
pagination_label: Passworddigittoken
sidebar_label: Passworddigittoken
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passworddigittoken', 'Passworddigittoken'] 
slug: /tools/sdk/python/password-management/models/passworddigittoken
tags: ['SDK', 'Software Development Kit', 'Passworddigittoken', 'Passworddigittoken']
---

# Passworddigittoken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digit_token** | **str** | The digit token for password management | [optional] 
**request_id** | **str** | The reference ID of the digit token generation request | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passworddigittoken import Passworddigittoken

passworddigittoken = Passworddigittoken(
digit_token='9087713',
request_id='e1267ecd-fcd9-4c73-9c55-12555efad136'
)

```
[[Back to top]](#) 

