# AccessProfile

# AccessProfile

Access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access profile ID. | [optional] [readonly] 
**name** | **str** | Access profile name. | [required]
**description** | **str** | Access profile description. | [optional] 
**created** | **datetime** | Date and time when the access profile was created. | [optional] [readonly] 
**modified** | **datetime** | Date and time when the access profile was last modified. | [optional] [readonly] 
**enabled** | **bool** | Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement. | [optional] [default to False]
**owner** | [**OwnerReference**](owner-reference) |  | [required]
**source** | [**AccessProfileSourceRef**](access-profile-source-ref) |  | [required]
**entitlements** | [**[]EntitlementRef**](entitlement-ref) | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [optional] 
**requestable** | **bool** | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [optional] [default to True]
**access_request_config** | [**Requestability**](requestability) |  | [optional] 
**revocation_request_config** | [**Revocability**](revocability) |  | [optional] 
**segments** | **[]str** | List of segment IDs, if any, that the access profile is assigned to. | [optional] 
**access_model_metadata** | [**AttributeDTOList**](attribute-dto-list) |  | [optional] 
**provisioning_criteria** | [**ProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 
**additional_owners** | [**[]AdditionalOwnerRef**](additional-owner-ref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile import AccessProfile

access_profile = AccessProfile(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
enabled=True,
owner=sailpoint.access_profiles.models.owner_reference.OwnerReference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
source=sailpoint.access_profiles.models.access_profile_source_ref.AccessProfileSourceRef(
                    id = '2c91809773dee3610173fdb0b6061ef4', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-SOURCE', ),
entitlements=[
                    sailpoint.access_profiles.models.entitlement_ref.EntitlementRef(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
requestable=True,
access_request_config=sailpoint.access_profiles.models.requestability.Requestability(
                    comments_required = True, 
                    denial_comments_required = True, 
                    reauthorization_required = True, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.access_profiles.models.access_duration.AccessDuration(
                        value = 6, 
                        time_unit = 'MONTHS', ), 
                    approval_schemes = [
                        sailpoint.access_profiles.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], 
                    form_definition_id = '78258e80-e9e2-4e1a-a11f-ce0b7c62f25d', ),
revocation_request_config=sailpoint.access_profiles.models.revocability.Revocability(
                    approval_schemes = [
                        sailpoint.access_profiles.models.access_profile_approval_scheme.AccessProfileApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
access_model_metadata=sailpoint.access_profiles.models.attribute_dto_list.AttributeDTOList(
                    attributes = [{"key":"iscPrivacy","name":"Privacy","multiselect":false,"status":"active","type":"governance","objectTypes":["all"],"description":"Specifies the level of privacy associated with an access item.","values":[{"value":"public","name":"Public","status":"active"}]}], ),
provisioning_criteria=sailpoint.access_profiles.models.provisioning_criteria_level1.ProvisioningCriteriaLevel1(
                    operation = 'EQUALS', 
                    attribute = 'email', 
                    value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.access_profiles.models.provisioning_criteria_level2.ProvisioningCriteriaLevel2(
                            attribute = 'email', 
                            value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], ),
additional_owners=[
                    sailpoint.access_profiles.models.additional_owner_ref.AdditionalOwnerRef(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'support', )
                    ]
)

```
[[Back to top]](#) 

