---
id: v2025-role
title: Role
pagination_label: Role
sidebar_label: Role
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Role', 'V2025Role'] 
slug: /tools/sdk/python/v2025/models/role
tags: ['SDK', 'Software Development Kit', 'Role', 'V2025Role']
---

# Role

A Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] 
**name** | **str** | The human-readable display name of the Role | [required]
**created** | **datetime** | Date the Role was created | [optional] [readonly] 
**modified** | **datetime** | Date the Role was last modified. | [optional] [readonly] 
**description** | **str** | A human-readable description of the Role | [optional] 
**owner** | [**OwnerReference**](owner-reference) |  | [required]
**access_profiles** | [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**entitlements** | [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**membership** | [**RoleMembershipSelector**](role-membership-selector) |  | [optional] 
**legacy_membership_info** | **map[string]object** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**enabled** | **bool** | Whether the Role is enabled or not. | [optional] [default to False]
**requestable** | **bool** | Whether the Role can be the target of access requests. | [optional] [default to False]
**access_request_config** | [**RequestabilityForRole**](requestability-for-role) |  | [optional] 
**revocation_request_config** | [**RevocabilityForRole**](revocability-for-role) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**dimensional** | **bool** | Whether the Role is dimensional. | [optional] [default to False]
**dimension_refs** | [**[]DimensionRef**](dimension-ref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**access_model_metadata** | [**AttributeDTOList**](attribute-dto-list) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role import Role

role = Role(
id='2c918086749d78830174a1a40e121518',
name='Role 2567',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
description='Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.',
owner=sailpoint.v2025.models.owner_reference.OwnerReference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
access_profiles=[
                    sailpoint.v2025.models.access_profile_ref.AccessProfileRef(
                        id = 'ff808081751e6e129f1518161919ecca', 
                        type = 'ACCESS_PROFILE', 
                        name = 'Access Profile 2567', )
                    ],
entitlements=[
                    sailpoint.v2025.models.entitlement_ref.EntitlementRef(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
membership=sailpoint.v2025.models.role_membership_selector.RoleMembershipSelector(
                    type = 'IDENTITY_LIST', 
                    criteria = sailpoint.v2025.models.role_criteria_level1.RoleCriteriaLevel1(
                        operation = 'EQUALS', 
                        key = sailpoint.v2025.models.role_criteria_key.RoleCriteriaKey(
                            type = 'ACCOUNT', 
                            property = 'attribute.email', 
                            source_id = '2c9180867427f3a301745aec18211519', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.v2025.models.role_criteria_level2.RoleCriteriaLevel2(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], ), 
                    identities = [
                        sailpoint.v2025.models.role_membership_identity.RoleMembershipIdentity(
                            id = '2c9180a46faadee4016fb4e018c20639', 
                            name = 'Thomas Edison', 
                            alias_name = 't.edison', )
                        ], ),
legacy_membership_info={type=IDENTITY_LIST},
enabled=True,
requestable=True,
access_request_config=sailpoint.v2025.models.requestability_for_role.RequestabilityForRole(
                    comments_required = True, 
                    denial_comments_required = True, 
                    reauthorization_required = True, 
                    approval_schemes = [
                        sailpoint.v2025.models.approval_scheme_for_role.ApprovalSchemeForRole(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], 
                    dimension_schema = sailpoint.v2025.models.dimension_schema.DimensionSchema(
                        dimension_attributes = [
                            sailpoint.v2025.models.dimension_attribute.DimensionAttribute(
                                name = 'city', 
                                display_name = 'City', 
                                derived = True, )
                            ], ), ),
revocation_request_config=sailpoint.v2025.models.revocability_for_role.RevocabilityForRole(
                    comments_required = False, 
                    denial_comments_required = False, 
                    approval_schemes = [
                        sailpoint.v2025.models.approval_scheme_for_role.ApprovalSchemeForRole(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
segments=[f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a],
dimensional=True,
dimension_refs=[
                    sailpoint.v2025.models.dimension_ref.DimensionRef(
                        type = 'DIMENSION', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'Role 2', )
                    ],
access_model_metadata=sailpoint.v2025.models.attribute_dto_list.AttributeDTOList(
                    attributes = [{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}], )
)

```
[[Back to top]](#) 

