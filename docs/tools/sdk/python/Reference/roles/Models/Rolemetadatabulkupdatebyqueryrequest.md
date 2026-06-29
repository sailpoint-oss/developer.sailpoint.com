---
id: rolemetadatabulkupdatebyqueryrequest
title: Rolemetadatabulkupdatebyqueryrequest
pagination_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolemetadatabulkupdatebyqueryrequest', 'Rolemetadatabulkupdatebyqueryrequest'] 
slug: /tools/sdk/python/roles/models/rolemetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyqueryrequest', 'Rolemetadatabulkupdatebyqueryrequest']
---

# Rolemetadatabulkupdatebyqueryrequest

Bulk update by query request of Role metadata. The maximum meta data values that one single role assigned can not exceed 25. Custom metadata need suit licensed. For more information about the query could refer to  [V3 API Perform Search](https://developer.sailpoint.com/docs/api/v3/search-post)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **object** | query the identities to be updated | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RolemetadatabulkupdatebyqueryrequestValuesInner**](rolemetadatabulkupdatebyqueryrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]
}

## Example

```python
from sailpoint.roles.models.rolemetadatabulkupdatebyqueryrequest import Rolemetadatabulkupdatebyqueryrequest

rolemetadatabulkupdatebyqueryrequest = Rolemetadatabulkupdatebyqueryrequest(
query={"query\"":{"indices":["roles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false}},
operation='REPLACE',
replace_scope='ALL',
values=[
                    sailpoint.roles.models.rolemetadatabulkupdatebyqueryrequest_values_inner.rolemetadatabulkupdatebyqueryrequest_values_inner(
                        attribute_key = 'iscFederalClassifications', 
                        attribute_value = ["topSecret"], )
                    ]
)

```
[[Back to top]](#) 

