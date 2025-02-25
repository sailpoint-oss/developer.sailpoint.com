---
id: v2024-entitlement-summary
title: EntitlementSummary
pagination_label: EntitlementSummary
sidebar_label: EntitlementSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementSummary', 'V2024EntitlementSummary'] 
slug: /tools/sdk/python/v2024/models/entitlement-summary
tags: ['SDK', 'Software Development Kit', 'EntitlementSummary', 'V2024EntitlementSummary']
---

# EntitlementSummary

EntitlementReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**description** | **str** |  | [optional] 
**source** | [**Reference**](reference) |  | [optional] 
**privileged** | **bool** |  | [optional] 
**attribute** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**standalone** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement_summary import EntitlementSummary

entitlement_summary = EntitlementSummary(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
type='IDENTITY',
description='',
source=sailpoint.v2024.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
privileged=False,
attribute='memberOf',
value='CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com',
standalone=False
)

```
[[Back to top]](#) 

