---
id: v2025-reviewable-entitlement-account
title: ReviewableEntitlementAccount
pagination_label: ReviewableEntitlementAccount
sidebar_label: ReviewableEntitlementAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewableEntitlementAccount', 'V2025ReviewableEntitlementAccount'] 
slug: /tools/sdk/python/v2025/models/reviewable-entitlement-account
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccount', 'V2025ReviewableEntitlementAccount']
---

# ReviewableEntitlementAccount

Information about the status of the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**native_identity** | **str** | The native identity for this account | [optional] 
**disabled** | **bool** | Indicates whether this account is currently disabled | [optional] [default to False]
**locked** | **bool** | Indicates whether this account is currently locked | [optional] [default to False]
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | The id associated with the account | [optional] 
**name** | **str** | The account name | [optional] 
**created** | **datetime** | When the account was created | [optional] 
**modified** | **datetime** | When the account was last modified | [optional] 
**activity_insights** | [**ActivityInsights**](activity-insights) |  | [optional] 
**description** | **str** | Information about the account | [optional] 
**governance_group_id** | **str** | The id associated with the machine Account Governance Group | [optional] 
**owner** | [**ReviewableEntitlementAccountOwner**](reviewable-entitlement-account-owner) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.reviewable_entitlement_account import ReviewableEntitlementAccount

reviewable_entitlement_account = ReviewableEntitlementAccount(
native_identity='CN=Alison Ferguso',
disabled=False,
locked=False,
type='IDENTITY',
id='2c9180857182305e0171993737eb29e6',
name='Alison Ferguso',
created='2020-04-20T20:11:05.067Z',
modified='2020-05-20T18:57:16.987Z',
activity_insights=sailpoint.v2025.models.activity_insights.Activity Insights(
                    account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                    usage_days = 45, 
                    usage_days_state = 'COMPLETE', ),
description='Account for Read/write to the company database',
governance_group_id='2c9180857182305e0171993737eb29e6',
owner=sailpoint.v2025.models.reviewable_entitlement_account_owner.ReviewableEntitlement_account_owner(
                    id = '2c9180857182305e0171993737eb29e8', 
                    type = 'IDENTITY', 
                    display_name = 'Alison Ferguson', )
)

```
[[Back to top]](#) 

