---
id: passworddigittokenreset
title: Passworddigittokenreset
pagination_label: Passworddigittokenreset
sidebar_label: Passworddigittokenreset
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passworddigittokenreset', 'Passworddigittokenreset'] 
slug: /tools/sdk/python/password-management/models/passworddigittokenreset
tags: ['SDK', 'Software Development Kit', 'Passworddigittokenreset', 'Passworddigittokenreset']
---

# Passworddigittokenreset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The uid of the user requested for digit token | [required]
**length** | **int** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**duration_minutes** | **int** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passworddigittokenreset import Passworddigittokenreset

passworddigittokenreset = Passworddigittokenreset(
user_id='Abby.Smith',
length=8,
duration_minutes=5
)

```
[[Back to top]](#) 

