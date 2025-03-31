---
id: remediation-item-details
title: RemediationItemDetails
pagination_label: RemediationItemDetails
sidebar_label: RemediationItemDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RemediationItemDetails', 'RemediationItemDetails'] 
slug: /tools/sdk/python/v3/models/remediation-item-details
tags: ['SDK', 'Software Development Kit', 'RemediationItemDetails', 'RemediationItemDetails']
---

# RemediationItemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the certification | [optional] 
**target_id** | **str** | The ID of the certification target | [optional] 
**target_name** | **str** | The name of the certification target | [optional] 
**target_display_name** | **str** | The display name of the certification target | [optional] 
**application_name** | **str** | The name of the application/source | [optional] 
**attribute_name** | **str** | The name of the attribute being certified | [optional] 
**attribute_operation** | **str** | The operation of the certification on the attribute | [optional] 
**attribute_value** | **str** | The value of the attribute being certified | [optional] 
**native_identity** | **str** | The native identity of the target | [optional] 
}

## Example

```python
from sailpoint.v3.models.remediation_item_details import RemediationItemDetails

remediation_item_details = RemediationItemDetails(
id='2c9180835d2e5168015d32f890ca1581',
target_id='2c9180835d2e5168015d32f890ca1581',
target_name='john.smith',
target_display_name='emailAddress',
application_name='Active Directory',
attribute_name='phoneNumber',
attribute_operation='update',
attribute_value='512-555-1212',
native_identity='jason.smith2'
)

```
[[Back to top]](#) 

