---
id: access-profile
title: AccessProfile
pagination_label: AccessProfile
sidebar_label: AccessProfile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfile', 'AccessProfile'] 
slug: /tools/sdk/python/v3/models/access-profile
tags: ['SDK', 'Software Development Kit', 'AccessProfile', 'AccessProfile']
---

# AccessProfile

Access Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Access Profile | [optional] [readonly] 
**name** | **str** | Name of the Access Profile | [required]
**description** | **str** | Information about the Access Profile | [optional] 
**created** | **datetime** | Date the Access Profile was created | [optional] [readonly] 
**modified** | **datetime** | Date the Access Profile was last modified. | [optional] [readonly] 
**enabled** | **bool** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to False]
**owner** | [**OwnerReference**](owner-reference) |  | [required]
**source** | [**AccessProfileSourceRef**](access-profile-source-ref) |  | [required]
**entitlements** | [**[]EntitlementRef**](entitlement-ref) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] 
**requestable** | **bool** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value  **false** in this field results in a 400 error. | [optional] [default to True]
**access_request_config** | [**Requestability**](requestability) |  | [optional] 
**revocation_request_config** | [**Revocability**](revocability) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**provisioning_criteria** | [**ProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_profile import AccessProfile

access_profile = AccessProfile(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
enabled=True,
owner=sailpoint.v3.models.owner_reference.OwnerReference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
source=sailpoint.v3.models.access_profile_source_ref.AccessProfileSourceRef(
                    id = '2c91809773dee3610173fdb0b6061ef4', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-SOURCE', ),
entitlements=[
                    sailpoint.v3.models.entitlement_ref.EntitlementRef(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
requestable=True,
access_request_config=sailpoint.v3.models.requestability.Requestability(
                    comments_required = True, 
                    denial_comments_required = True, 
                    approval_schemes = [
                        sailpoint.v3.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
revocation_request_config=sailpoint.v3.models.revocability.Revocability(
                    approval_schemes = [
                        sailpoint.v3.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
segments=[f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a],
provisioning_criteria=sailpoint.v3.models.provisioning_criteria_level1.ProvisioningCriteriaLevel1(
                    operation = 'EQUALS', 
                    attribute = 'email', 
                    value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.v3.models.provisioning_criteria_level2.ProvisioningCriteriaLevel2(
                            attribute = 'email', 
                            value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], )
)

```
[[Back to top]](#) 

