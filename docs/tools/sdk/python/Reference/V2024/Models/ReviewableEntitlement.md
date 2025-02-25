---
id: v2024-reviewable-entitlement
title: ReviewableEntitlement
pagination_label: ReviewableEntitlement
sidebar_label: ReviewableEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewableEntitlement', 'V2024ReviewableEntitlement'] 
slug: /tools/sdk/python/v2024/models/reviewable-entitlement
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlement', 'V2024ReviewableEntitlement']
---

# ReviewableEntitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for the entitlement | [optional] 
**name** | **str** | The name of the entitlement | [optional] 
**description** | **str** | Information about the entitlement | [optional] 
**privileged** | **bool** | Indicates if the entitlement is a privileged entitlement | [optional] [default to False]
**owner** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**attribute_name** | **str** | The name of the attribute on the source | [optional] 
**attribute_value** | **str** | The value of the attribute on the source | [optional] 
**source_schema_object_type** | **str** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**source_name** | **str** | The name of the source for which this entitlement belongs | [optional] 
**source_type** | **str** | The type of the source for which the entitlement belongs | [optional] 
**source_id** | **str** | The ID of the source for which the entitlement belongs | [optional] 
**has_permissions** | **bool** | Indicates if the entitlement has permissions | [optional] [default to False]
**is_permission** | **bool** | Indicates if the entitlement is a representation of an account permission | [optional] [default to False]
**revocable** | **bool** | Indicates whether the entitlement can be revoked | [optional] [default to False]
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] [default to False]
**contains_data_access** | **bool** | True if the entitlement has DAS data | [optional] [default to False]
**data_access** | [**DataAccess**](data-access) |  | [optional] 
**account** | [**ReviewableEntitlementAccount**](reviewable-entitlement-account) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.reviewable_entitlement import ReviewableEntitlement

reviewable_entitlement = ReviewableEntitlement(
id='2c918085718230600171993742c63558',
name='CN=entitlement.bbb7c650',
description='Gives read/write access to the company database',
privileged=False,
owner=sailpoint.v2024.models.identity_reference_with_name_and_email.IdentityReferenceWithNameAndEmail(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
attribute_name='memberOf',
attribute_value='CN=entitlement.bbb7c650',
source_schema_object_type='groups',
source_name='ODS-AD-Source',
source_type='Active Directory - Direct',
source_id='78ca6be511cb41fbb86dba2fcca7780c',
has_permissions=False,
is_permission=False,
revocable=True,
cloud_governed=False,
contains_data_access=True,
data_access=sailpoint.v2024.models.data_access.DataAccess(
                    policies = [
                        sailpoint.v2024.models.data_access_policies_inner.DataAccess_policies_inner(
                            value = 'GDPR-20', )
                        ], 
                    categories = [
                        sailpoint.v2024.models.data_access_categories_inner.DataAccess_categories_inner(
                            value = 'email-7', 
                            match_count = 10, )
                        ], 
                    impact_score = sailpoint.v2024.models.data_access_impact_score.DataAccess_impactScore(
                        value = 'Medium', ), ),
account=sailpoint.v2024.models.reviewable_entitlement_account.ReviewableEntitlement_account(
                    native_identity = 'CN=Alison Ferguso', 
                    disabled = False, 
                    locked = False, 
                    type = 'IDENTITY', 
                    id = '2c9180857182305e0171993737eb29e6', 
                    name = 'Alison Ferguso', 
                    created = '2020-04-20T20:11:05.067Z', 
                    modified = '2020-05-20T18:57:16.987Z', 
                    activity_insights = sailpoint.v2024.models.activity_insights.ActivityInsights(
                        account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                        usage_days = 45, 
                        usage_days_state = 'COMPLETE', ), 
                    description = 'Account for Read/write to the company database', 
                    governance_group_id = '2c9180857182305e0171993737eb29e6', 
                    owner = sailpoint.v2024.models.reviewable_entitlement_account_owner.ReviewableEntitlement_account_owner(
                        id = '2c9180857182305e0171993737eb29e8', 
                        display_name = 'Alison Ferguson', ), )
)

```
[[Back to top]](#) 

