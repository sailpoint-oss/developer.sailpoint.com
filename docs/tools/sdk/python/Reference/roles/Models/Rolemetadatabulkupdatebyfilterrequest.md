---
id: rolemetadatabulkupdatebyfilterrequest
title: Rolemetadatabulkupdatebyfilterrequest
pagination_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolemetadatabulkupdatebyfilterrequest', 'Rolemetadatabulkupdatebyfilterrequest'] 
slug: /tools/sdk/python/roles/models/rolemetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyfilterrequest', 'Rolemetadatabulkupdatebyfilterrequest']
---

# Rolemetadatabulkupdatebyfilterrequest

This API initialize a a Bulk update by filter request of Role metadata. The maximum meta data values that one single role assigned can not exceed 25. Custom metadata need suit licensed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RolemetadatabulkupdatebyfilterrequestValuesInner**](rolemetadatabulkupdatebyfilterrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]
}

## Example

```python
from sailpoint.roles.models.rolemetadatabulkupdatebyfilterrequest import Rolemetadatabulkupdatebyfilterrequest

rolemetadatabulkupdatebyfilterrequest = Rolemetadatabulkupdatebyfilterrequest(
filters=' requestable eq false',
operation='REPLACE',
replace_scope='ALL',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

