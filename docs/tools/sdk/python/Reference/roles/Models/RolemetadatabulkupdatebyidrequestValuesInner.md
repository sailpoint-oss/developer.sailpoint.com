---
id: rolemetadatabulkupdatebyidrequest-values-inner
title: RolemetadatabulkupdatebyidrequestValuesInner
pagination_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolemetadatabulkupdatebyidrequestValuesInner', 'RolemetadatabulkupdatebyidrequestValuesInner'] 
slug: /tools/sdk/python/roles/models/rolemetadatabulkupdatebyidrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyidrequestValuesInner', 'RolemetadatabulkupdatebyidrequestValuesInner']
---

# RolemetadatabulkupdatebyidrequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | the key of metadata attribute | [required]
**values** | **[]str** | the values of attribute to be updated | [required]
}

## Example

```python
from sailpoint.roles.models.rolemetadatabulkupdatebyidrequest_values_inner import RolemetadatabulkupdatebyidrequestValuesInner

rolemetadatabulkupdatebyidrequest_values_inner = RolemetadatabulkupdatebyidrequestValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

