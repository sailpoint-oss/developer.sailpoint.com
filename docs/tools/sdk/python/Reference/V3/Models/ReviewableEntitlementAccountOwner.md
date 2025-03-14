---
id: reviewable-entitlement-account-owner
title: ReviewableEntitlementAccountOwner
pagination_label: ReviewableEntitlementAccountOwner
sidebar_label: ReviewableEntitlementAccountOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewableEntitlementAccountOwner', 'ReviewableEntitlementAccountOwner'] 
slug: /tools/sdk/python/v3/models/reviewable-entitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccountOwner', 'ReviewableEntitlementAccountOwner']
---

# ReviewableEntitlementAccountOwner

Information about the machine account owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id associated with the machine account owner | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | An enumeration of the types of Owner supported within the IdentityNow infrastructure. | [optional] 
**display_name** | **str** | The machine account owner's display name | [optional] 
}

## Example

```python
from sailpoint.v3.models.reviewable_entitlement_account_owner import ReviewableEntitlementAccountOwner

reviewable_entitlement_account_owner = ReviewableEntitlementAccountOwner(
id='2c9180857182305e0171993737eb29e8',
type='IDENTITY',
display_name='Alison Ferguson'
)

```
[[Back to top]](#) 

