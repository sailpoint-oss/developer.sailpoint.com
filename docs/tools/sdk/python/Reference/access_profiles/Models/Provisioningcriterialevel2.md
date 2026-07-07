---
id: provisioningcriterialevel2
title: Provisioningcriterialevel2
pagination_label: Provisioningcriterialevel2
sidebar_label: Provisioningcriterialevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Provisioningcriterialevel2', 'Provisioningcriterialevel2'] 
slug: /tools/sdk/python/access-profiles/models/provisioningcriterialevel2
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel2', 'Provisioningcriterialevel2']
---

# Provisioningcriterialevel2

Defines matching criteria for an account to be provisioned with a specific access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Provisioningcriteriaoperation**](provisioningcriteriaoperation) |  | [optional] 
**attribute** | **str** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**value** | **str** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**children** | [**[]Provisioningcriterialevel3**](provisioningcriterialevel3) | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.provisioningcriterialevel2 import Provisioningcriterialevel2

provisioningcriterialevel2 = Provisioningcriterialevel2(
operation='EQUALS',
attribute='email',
value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.access_profiles.models.provisioningcriterialevel3.provisioningcriterialevel3(
                        operation = 'EQUALS', 
                        attribute = 'email', 
                        value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = '', )
                    ]
)

```
[[Back to top]](#) 

