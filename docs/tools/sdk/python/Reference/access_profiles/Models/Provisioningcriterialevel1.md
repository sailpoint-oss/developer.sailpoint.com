---
id: provisioningcriterialevel1
title: Provisioningcriterialevel1
pagination_label: Provisioningcriterialevel1
sidebar_label: Provisioningcriterialevel1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Provisioningcriterialevel1', 'Provisioningcriterialevel1'] 
slug: /tools/sdk/python/access-profiles/models/provisioningcriterialevel1
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel1', 'Provisioningcriterialevel1']
---

# Provisioningcriterialevel1

Defines matching criteria for an account to be provisioned with a specific access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Provisioningcriteriaoperation**](provisioningcriteriaoperation) |  | [optional] 
**attribute** | **str** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**value** | **str** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**children** | [**[]Provisioningcriterialevel2**](provisioningcriterialevel2) | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.provisioningcriterialevel1 import Provisioningcriterialevel1

provisioningcriterialevel1 = Provisioningcriterialevel1(
operation='EQUALS',
attribute='email',
value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.access_profiles.models.provisioningcriterialevel2.provisioningcriterialevel2(
                        operation = 'EQUALS', 
                        attribute = 'email', 
                        value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.access_profiles.models.provisioningcriterialevel3.provisioningcriterialevel3(
                                attribute = 'email', 
                                value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

