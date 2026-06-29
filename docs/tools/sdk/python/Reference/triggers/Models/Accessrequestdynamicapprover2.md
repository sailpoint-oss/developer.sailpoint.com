---
id: accessrequestdynamicapprover2
title: Accessrequestdynamicapprover2
pagination_label: Accessrequestdynamicapprover2
sidebar_label: Accessrequestdynamicapprover2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestdynamicapprover2', 'Accessrequestdynamicapprover2'] 
slug: /tools/sdk/python/triggers/models/accessrequestdynamicapprover2
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover2', 'Accessrequestdynamicapprover2']
---

# Accessrequestdynamicapprover2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity to add to the approver list for the access request. | [required]
**name** | **str** | The name of the identity to add to the approver list for the access request. | [required]
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of object being referenced. | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestdynamicapprover2 import Accessrequestdynamicapprover2

accessrequestdynamicapprover2 = Accessrequestdynamicapprover2(
id='2c91808b6ef1d43e016efba0ce470906',
name='Adam Adams',
type='IDENTITY'
)

```
[[Back to top]](#) 

