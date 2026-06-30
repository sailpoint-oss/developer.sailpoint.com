---
id: approverreference
title: Approverreference
pagination_label: Approverreference
sidebar_label: Approverreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approverreference', 'Approverreference'] 
slug: /tools/sdk/python/account-deletion-requests/models/approverreference
tags: ['SDK', 'Software Development Kit', 'Approverreference', 'Approverreference']
---

# Approverreference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**type** | **str** | Type of Dto | [optional] 
**name** | **str** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.approverreference import Approverreference

approverreference = Approverreference(
id='85131bd73fdc423599e57f40b29f01fe',
type='IDENTITY',
name='SailPoint Support'
)

```
[[Back to top]](#) 

