---
id: v2024-role
title: Role
pagination_label: Role
sidebar_label: Role
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Role', 'V2024Role'] 
slug: /tools/sdk/go/v2024/models/role
tags: ['SDK', 'Software Development Kit', 'Role', 'V2024Role']
---

# Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | **string** | The human-readable display name of the Role | 
**Created** | Pointer to **SailPointTime** | Date the Role was created | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date the Role was last modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | A human-readable description of the Role | [optional] 
**Owner** | [**OwnerReference**](owner-reference) |  | 
**AccessProfiles** | Pointer to [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** | Pointer to [**NullableRoleMembershipSelector**](role-membership-selector) |  | [optional] 
**LegacyMembershipInfo** | Pointer to **map[string]interface{}** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**Enabled** | Pointer to **bool** | Whether the Role is enabled or not. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Whether the Role can be the target of access requests. | [optional] [default to false]
**AccessRequestConfig** | Pointer to [**RequestabilityForRole**](requestability-for-role) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**RevocabilityForRole**](revocability-for-role) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**Dimensional** | Pointer to **NullableBool** | Whether the Role is dimensional. | [optional] [default to false]
**DimensionRefs** | Pointer to [**[]DimensionRef**](dimension-ref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**AccessModelMetadata** | Pointer to [**AttributeDTOList**](attribute-dto-list) |  | [optional] 

## Methods

### NewRole

`func NewRole(name string, owner OwnerReference, ) *Role`

NewRole instantiates a new Role object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleWithDefaults

`func NewRoleWithDefaults() *Role`

NewRoleWithDefaults instantiates a new Role object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Role) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Role) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Role) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Role) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Role) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Role) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Role) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Role) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Role) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Role) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Role) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Role) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Role) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Role) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Role) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Role) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Role) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Role) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Role) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Role) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Role) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *Role) GetOwner() OwnerReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Role) GetOwnerOk() (*OwnerReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Role) SetOwner(v OwnerReference)`

SetOwner sets Owner field to given value.


### GetAccessProfiles

`func (o *Role) GetAccessProfiles() []AccessProfileRef`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Role) GetAccessProfilesOk() (*[]AccessProfileRef, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Role) SetAccessProfiles(v []AccessProfileRef)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Role) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *Role) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *Role) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetEntitlements

`func (o *Role) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Role) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Role) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Role) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetMembership

`func (o *Role) GetMembership() RoleMembershipSelector`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *Role) GetMembershipOk() (*RoleMembershipSelector, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *Role) SetMembership(v RoleMembershipSelector)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *Role) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### SetMembershipNil

`func (o *Role) SetMembershipNil(b bool)`

 SetMembershipNil sets the value for Membership to be an explicit nil

### UnsetMembership
`func (o *Role) UnsetMembership()`

UnsetMembership ensures that no value is present for Membership, not even an explicit nil
### GetLegacyMembershipInfo

`func (o *Role) GetLegacyMembershipInfo() map[string]interface{}`

GetLegacyMembershipInfo returns the LegacyMembershipInfo field if non-nil, zero value otherwise.

### GetLegacyMembershipInfoOk

`func (o *Role) GetLegacyMembershipInfoOk() (*map[string]interface{}, bool)`

GetLegacyMembershipInfoOk returns a tuple with the LegacyMembershipInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyMembershipInfo

`func (o *Role) SetLegacyMembershipInfo(v map[string]interface{})`

SetLegacyMembershipInfo sets LegacyMembershipInfo field to given value.

### HasLegacyMembershipInfo

`func (o *Role) HasLegacyMembershipInfo() bool`

HasLegacyMembershipInfo returns a boolean if a field has been set.

### SetLegacyMembershipInfoNil

`func (o *Role) SetLegacyMembershipInfoNil(b bool)`

 SetLegacyMembershipInfoNil sets the value for LegacyMembershipInfo to be an explicit nil

### UnsetLegacyMembershipInfo
`func (o *Role) UnsetLegacyMembershipInfo()`

UnsetLegacyMembershipInfo ensures that no value is present for LegacyMembershipInfo, not even an explicit nil
### GetEnabled

`func (o *Role) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Role) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Role) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Role) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetRequestable

`func (o *Role) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Role) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Role) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Role) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *Role) GetAccessRequestConfig() RequestabilityForRole`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Role) GetAccessRequestConfigOk() (*RequestabilityForRole, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Role) SetAccessRequestConfig(v RequestabilityForRole)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Role) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *Role) GetRevocationRequestConfig() RevocabilityForRole`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Role) GetRevocationRequestConfigOk() (*RevocabilityForRole, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Role) SetRevocationRequestConfig(v RevocabilityForRole)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Role) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### GetSegments

`func (o *Role) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Role) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Role) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Role) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *Role) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *Role) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetDimensional

`func (o *Role) GetDimensional() bool`

GetDimensional returns the Dimensional field if non-nil, zero value otherwise.

### GetDimensionalOk

`func (o *Role) GetDimensionalOk() (*bool, bool)`

GetDimensionalOk returns a tuple with the Dimensional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensional

`func (o *Role) SetDimensional(v bool)`

SetDimensional sets Dimensional field to given value.

### HasDimensional

`func (o *Role) HasDimensional() bool`

HasDimensional returns a boolean if a field has been set.

### SetDimensionalNil

`func (o *Role) SetDimensionalNil(b bool)`

 SetDimensionalNil sets the value for Dimensional to be an explicit nil

### UnsetDimensional
`func (o *Role) UnsetDimensional()`

UnsetDimensional ensures that no value is present for Dimensional, not even an explicit nil
### GetDimensionRefs

`func (o *Role) GetDimensionRefs() []DimensionRef`

GetDimensionRefs returns the DimensionRefs field if non-nil, zero value otherwise.

### GetDimensionRefsOk

`func (o *Role) GetDimensionRefsOk() (*[]DimensionRef, bool)`

GetDimensionRefsOk returns a tuple with the DimensionRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionRefs

`func (o *Role) SetDimensionRefs(v []DimensionRef)`

SetDimensionRefs sets DimensionRefs field to given value.

### HasDimensionRefs

`func (o *Role) HasDimensionRefs() bool`

HasDimensionRefs returns a boolean if a field has been set.

### SetDimensionRefsNil

`func (o *Role) SetDimensionRefsNil(b bool)`

 SetDimensionRefsNil sets the value for DimensionRefs to be an explicit nil

### UnsetDimensionRefs
`func (o *Role) UnsetDimensionRefs()`

UnsetDimensionRefs ensures that no value is present for DimensionRefs, not even an explicit nil
### GetAccessModelMetadata

`func (o *Role) GetAccessModelMetadata() AttributeDTOList`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *Role) GetAccessModelMetadataOk() (*AttributeDTOList, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *Role) SetAccessModelMetadata(v AttributeDTOList)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *Role) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.


