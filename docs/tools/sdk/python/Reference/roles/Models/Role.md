---
id: role
title: Role
pagination_label: Role
sidebar_label: Role
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Role', 'Role'] 
slug: /tools/sdk/python/roles/models/role
tags: ['SDK', 'Software Development Kit', 'Role', 'Role']
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
**owner** | [**Ownerreference**](ownerreference) |  | [required]
**additional_owners** | [**[]Additionalownerref**](additionalownerref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**access_profiles** | [**[]Accessprofileref**](accessprofileref) |  | [optional] 
**entitlements** | [**[]Entitlementref**](entitlementref) |  | [optional] 
**membership** | [**Rolemembershipselector**](rolemembershipselector) |  | [optional] 
**legacy_membership_info** | **map[string]object** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**enabled** | **bool** | Whether the Role is enabled or not. | [optional] [default to False]
**requestable** | **bool** | Whether the Role can be the target of access requests. | [optional] [default to False]
**access_request_config** | [**Requestabilityforrole**](requestabilityforrole) |  | [optional] 
**revocation_request_config** | [**Revocabilityforrole**](revocabilityforrole) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**dimensional** | **bool** | Whether the Role is dimensional. | [optional] [default to False]
**dimension_refs** | [**[]Dimensionref**](dimensionref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**access_model_metadata** | [**Attributedtolist**](attributedtolist) |  | [optional] 
**privilege_level** | **str** | The privilege level of the role, if applicable. | [optional] 
}

## Example

```python
from sailpoint.roles.models.role import Role

role = Role(
id='2c918086749d78830174a1a40e121518',
name='Role 2567',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
description='Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.',
owner=sailpoint.roles.models.ownerreference.ownerreference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
additional_owners=[
                    sailpoint.roles.models.additionalownerref.additionalownerref(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'support', )
                    ],
access_profiles=[
                    sailpoint.roles.models.accessprofileref.accessprofileref(
                        id = 'ff808081751e6e129f1518161919ecca', 
                        type = 'ACCESS_PROFILE', 
                        name = 'Access Profile 2567', )
                    ],
entitlements=[
                    sailpoint.roles.models.entitlementref.entitlementref(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
membership=sailpoint.roles.models.rolemembershipselector.rolemembershipselector(
                    type = 'IDENTITY_LIST', 
                    criteria = sailpoint.roles.models.rolecriterialevel1.rolecriterialevel1(
                        operation = 'EQUALS', 
                        key = sailpoint.roles.models.rolecriteriakey.rolecriteriakey(
                            type = 'ACCOUNT', 
                            property = 'attribute.email', 
                            source_id = '2c9180867427f3a301745aec18211519', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.roles.models.rolecriterialevel2.rolecriterialevel2(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], ), 
                    identities = [
                        sailpoint.roles.models.rolemembershipidentity.rolemembershipidentity(
                            id = '2c9180a46faadee4016fb4e018c20639', 
                            name = 'Thomas Edison', 
                            alias_name = 't.edison', )
                        ], ),
legacy_membership_info={"type":"IDENTITY_LIST"},
enabled=True,
requestable=True,
access_request_config=sailpoint.roles.models.requestabilityforrole.requestabilityforrole(
                    comments_required = True, 
                    denial_comments_required = True, 
                    reauthorization_required = True, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.roles.models.accessduration.accessduration(
                        value = 6, 
                        time_unit = 'MONTHS', ), 
                    approval_schemes = [
                        sailpoint.roles.models.approvalschemeforrole.approvalschemeforrole(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], 
                    dimension_schema = sailpoint.roles.models.dimensionschema.dimensionschema(
                        dimension_attributes = [
                            sailpoint.roles.models.dimensionattribute.dimensionattribute(
                                name = 'city', 
                                display_name = 'City', 
                                derived = True, )
                            ], ), 
                    form_definition_id = '78258e80-e9e2-4e1a-a11f-ce0b7c62f25d', ),
revocation_request_config=sailpoint.roles.models.revocabilityforrole.revocabilityforrole(
                    comments_required = False, 
                    denial_comments_required = False, 
                    approval_schemes = [
                        sailpoint.roles.models.approvalschemeforrole.approvalschemeforrole(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                        ], ),
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
dimensional=True,
dimension_refs=[
                    sailpoint.roles.models.dimensionref.dimensionref(
                        type = 'DIMENSION', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'Role 2', )
                    ],
access_model_metadata=sailpoint.roles.models.attributedtolist.attributedtolist(
                    attributes = [{"key":"iscPrivacy","name":"Privacy","multiselect":false,"status":"active","type":"governance","objectTypes":["all"],"description":"Specifies the level of privacy associated with an access item.","values":[{"value":"public","name":"Public","status":"active"}]}], ),
privilege_level='High'
)

```
[[Back to top]](#) 

