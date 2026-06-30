---
id: reviewableentitlement-account-owner
title: ReviewableentitlementAccountOwner
pagination_label: ReviewableentitlementAccountOwner
sidebar_label: ReviewableentitlementAccountOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewableentitlementAccountOwner', 'ReviewableentitlementAccountOwner'] 
slug: /tools/sdk/python/certifications/models/reviewableentitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementAccountOwner', 'ReviewableentitlementAccountOwner']
---

# ReviewableentitlementAccountOwner

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
from sailpoint.certifications.models.reviewableentitlement_account_owner import ReviewableentitlementAccountOwner

reviewableentitlement_account_owner = ReviewableentitlementAccountOwner(
id='2c9180857182305e0171993737eb29e8',
type='IDENTITY',
display_name='Alison Ferguson'
)

```
[[Back to top]](#) 

