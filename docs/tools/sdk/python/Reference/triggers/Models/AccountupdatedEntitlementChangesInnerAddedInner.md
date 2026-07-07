---
id: accountupdated-entitlement-changes-inner-added-inner
title: AccountupdatedEntitlementChangesInnerAddedInner
pagination_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountupdatedEntitlementChangesInnerAddedInner', 'AccountupdatedEntitlementChangesInnerAddedInner'] 
slug: /tools/sdk/python/triggers/models/accountupdated-entitlement-changes-inner-added-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInnerAddedInner', 'AccountupdatedEntitlementChangesInnerAddedInner']
---

# AccountupdatedEntitlementChangesInnerAddedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the entitlement. | [optional] 
**name** | **str** | The name of the entitlement. | [optional] 
**owner** | [**AccountupdatedEntitlementChangesInnerAddedInnerOwner**](accountupdated-entitlement-changes-inner-added-inner-owner) |  | [optional] 
**value** | **str** | The value of the entitlement. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.accountupdated_entitlement_changes_inner_added_inner import AccountupdatedEntitlementChangesInnerAddedInner

accountupdated_entitlement_changes_inner_added_inner = AccountupdatedEntitlementChangesInnerAddedInner(
id='2c9180835d2e5168015d32f890ca1581',
name='Admin',
owner=sailpoint.triggers.models.accountupdated_entitlement_changes_inner_added_inner_owner.accountupdated_entitlementChanges_inner_added_inner_owner(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'Owner Name', 
                    type = 'Primary', ),
value='Admin'
)

```
[[Back to top]](#) 

