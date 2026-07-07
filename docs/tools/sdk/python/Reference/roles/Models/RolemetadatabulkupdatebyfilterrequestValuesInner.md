---
id: rolemetadatabulkupdatebyfilterrequest-values-inner
title: RolemetadatabulkupdatebyfilterrequestValuesInner
pagination_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'RolemetadatabulkupdatebyfilterrequestValuesInner'] 
slug: /tools/sdk/python/roles/models/rolemetadatabulkupdatebyfilterrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'RolemetadatabulkupdatebyfilterrequestValuesInner']
---

# RolemetadatabulkupdatebyfilterrequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | the key of metadata attribute | [optional] 
**values** | **[]str** | the values of attribute to be updated | [required]
}

## Example

```python
from sailpoint.roles.models.rolemetadatabulkupdatebyfilterrequest_values_inner import RolemetadatabulkupdatebyfilterrequestValuesInner

rolemetadatabulkupdatebyfilterrequest_values_inner = RolemetadatabulkupdatebyfilterrequestValuesInner(
attribute_key='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

