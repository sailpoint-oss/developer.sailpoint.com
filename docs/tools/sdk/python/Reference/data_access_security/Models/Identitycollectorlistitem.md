---
id: identitycollectorlistitem
title: Identitycollectorlistitem
pagination_label: Identitycollectorlistitem
sidebar_label: Identitycollectorlistitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitycollectorlistitem', 'Identitycollectorlistitem'] 
slug: /tools/sdk/python/data-access-security/models/identitycollectorlistitem
tags: ['SDK', 'Software Development Kit', 'Identitycollectorlistitem', 'Identitycollectorlistitem']
---

# Identitycollectorlistitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the identity collector. | [optional] 
**name** | **str** | The display name of the identity collector. | [optional] 
**type** | **str** | The identity collector type, derived from its underlying source. Possible values include \"Active Directory\", \"Azure Active Directory\", \"Google Drive\", \"Dropbox\", \"Box\", \"Microsoft Entra SaaS\", \"Snowflake\", and \"Databricks\". | [optional] 
**source_id** | **str** | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.identitycollectorlistitem import Identitycollectorlistitem

identitycollectorlistitem = Identitycollectorlistitem(
id='12345',
name='Active Directory Identity Collector',
type='Active Directory',
source_id='2c9180835d2e5168015d32f890ca1581'
)

```
[[Back to top]](#) 

