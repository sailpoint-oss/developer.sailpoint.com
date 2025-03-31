---
id: entitlement-document-all-of-permissions
title: EntitlementDocumentAllOfPermissions
pagination_label: EntitlementDocumentAllOfPermissions
sidebar_label: EntitlementDocumentAllOfPermissions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementDocumentAllOfPermissions', 'EntitlementDocumentAllOfPermissions'] 
slug: /tools/sdk/python/v3/models/entitlement-document-all-of-permissions
tags: ['SDK', 'Software Development Kit', 'EntitlementDocumentAllOfPermissions', 'EntitlementDocumentAllOfPermissions']
---

# EntitlementDocumentAllOfPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | The target the permission would grants rights on. | [optional] 
**rights** | **[]str** | All the rights (e.g. actions) that this permission allows on the target | [optional] 
}

## Example

```python
from sailpoint.v3.models.entitlement_document_all_of_permissions import EntitlementDocumentAllOfPermissions

entitlement_document_all_of_permissions = EntitlementDocumentAllOfPermissions(
target='SYS.GV_$TRANSACTION',
rights=[
                    'SELECT'
                    ]
)

```
[[Back to top]](#) 

