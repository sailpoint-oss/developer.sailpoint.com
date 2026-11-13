# RoleV2

# RoleV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | **string** | The human-readable display name of the Role | 
**Created** | Pointer to **SailPointTime** | Date the Role was created | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Date the Role was last modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | A human-readable description of the Role | [optional] 
**Owner** | [**NullableOwnerReference**](owner-reference) |  | 
**AdditionalOwners** | Pointer to [**[]AdditionalOwnerRef**](additional-owner-ref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**AccessProfiles** | Pointer to [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** | Pointer to [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** | Pointer to [**NullableRoleMembershipSelector**](role-membership-selector) |  | [optional] 
**LegacyMembershipInfo** | Pointer to **map[string]interface\{\}** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**Enabled** | Pointer to **bool** | Whether the Role is enabled or not. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Whether the Role can be the target of access requests. | [optional] [default to false]
**AccessRequestConfig** | Pointer to [**RequestabilityForRole**](requestability-for-role) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**RevocabilityForRole**](revocability-for-role) |  | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**Dimensional** | Pointer to **NullableBool** | Whether the Role is dimensional. | [optional] [default to false]
**DimensionRefs** | Pointer to [**[]DimensionRef**](dimension-ref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**AccessModelMetadata** | Pointer to [**AttributeDTOList**](attribute-dto-list) |  | [optional] 
**PrivilegeLevel** | Pointer to [**NullableRolePrivilegeLevel**](role-privilege-level) |  | [optional] [readonly] 

## Methods

### NewRoleV2

`func NewRoleV2(name string, owner NullableOwnerReference, ) *RoleV2`

NewRoleV2 instantiates a new RoleV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleV2WithDefaults

`func NewRoleV2WithDefaults() *RoleV2`

NewRoleV2WithDefaults instantiates a new RoleV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleV2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleV2) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *RoleV2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RoleV2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RoleV2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RoleV2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *RoleV2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RoleV2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RoleV2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RoleV2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *RoleV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleV2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleV2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleV2) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleV2) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwner

`func (o *RoleV2) GetOwner() OwnerReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *RoleV2) GetOwnerOk() (*OwnerReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *RoleV2) SetOwner(v OwnerReference)`

SetOwner sets Owner field to given value.


### SetOwnerNil

`func (o *RoleV2) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *RoleV2) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAdditionalOwners

`func (o *RoleV2) GetAdditionalOwners() []AdditionalOwnerRef`

GetAdditionalOwners returns the AdditionalOwners field if non-nil, zero value otherwise.

### GetAdditionalOwnersOk

`func (o *RoleV2) GetAdditionalOwnersOk() (*[]AdditionalOwnerRef, bool)`

GetAdditionalOwnersOk returns a tuple with the AdditionalOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalOwners

`func (o *RoleV2) SetAdditionalOwners(v []AdditionalOwnerRef)`

SetAdditionalOwners sets AdditionalOwners field to given value.

### HasAdditionalOwners

`func (o *RoleV2) HasAdditionalOwners() bool`

HasAdditionalOwners returns a boolean if a field has been set.

### SetAdditionalOwnersNil

`func (o *RoleV2) SetAdditionalOwnersNil(b bool)`

 SetAdditionalOwnersNil sets the value for AdditionalOwners to be an explicit nil

### UnsetAdditionalOwners
`func (o *RoleV2) UnsetAdditionalOwners()`

UnsetAdditionalOwners ensures that no value is present for AdditionalOwners, not even an explicit nil
### GetAccessProfiles

`func (o *RoleV2) GetAccessProfiles() []AccessProfileRef`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *RoleV2) GetAccessProfilesOk() (*[]AccessProfileRef, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *RoleV2) SetAccessProfiles(v []AccessProfileRef)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *RoleV2) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *RoleV2) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *RoleV2) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil
### GetEntitlements

`func (o *RoleV2) GetEntitlements() []EntitlementRef`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *RoleV2) GetEntitlementsOk() (*[]EntitlementRef, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *RoleV2) SetEntitlements(v []EntitlementRef)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *RoleV2) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetMembership

`func (o *RoleV2) GetMembership() RoleMembershipSelector`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *RoleV2) GetMembershipOk() (*RoleMembershipSelector, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *RoleV2) SetMembership(v RoleMembershipSelector)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *RoleV2) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### SetMembershipNil

`func (o *RoleV2) SetMembershipNil(b bool)`

 SetMembershipNil sets the value for Membership to be an explicit nil

### UnsetMembership
`func (o *RoleV2) UnsetMembership()`

UnsetMembership ensures that no value is present for Membership, not even an explicit nil
### GetLegacyMembershipInfo

`func (o *RoleV2) GetLegacyMembershipInfo() map[string]interface{}`

GetLegacyMembershipInfo returns the LegacyMembershipInfo field if non-nil, zero value otherwise.

### GetLegacyMembershipInfoOk

`func (o *RoleV2) GetLegacyMembershipInfoOk() (*map[string]interface{}, bool)`

GetLegacyMembershipInfoOk returns a tuple with the LegacyMembershipInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyMembershipInfo

`func (o *RoleV2) SetLegacyMembershipInfo(v map[string]interface{})`

SetLegacyMembershipInfo sets LegacyMembershipInfo field to given value.

### HasLegacyMembershipInfo

`func (o *RoleV2) HasLegacyMembershipInfo() bool`

HasLegacyMembershipInfo returns a boolean if a field has been set.

### SetLegacyMembershipInfoNil

`func (o *RoleV2) SetLegacyMembershipInfoNil(b bool)`

 SetLegacyMembershipInfoNil sets the value for LegacyMembershipInfo to be an explicit nil

### UnsetLegacyMembershipInfo
`func (o *RoleV2) UnsetLegacyMembershipInfo()`

UnsetLegacyMembershipInfo ensures that no value is present for LegacyMembershipInfo, not even an explicit nil
### GetEnabled

`func (o *RoleV2) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *RoleV2) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *RoleV2) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *RoleV2) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetRequestable

`func (o *RoleV2) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *RoleV2) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *RoleV2) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *RoleV2) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetAccessRequestConfig

`func (o *RoleV2) GetAccessRequestConfig() RequestabilityForRole`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *RoleV2) GetAccessRequestConfigOk() (*RequestabilityForRole, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *RoleV2) SetAccessRequestConfig(v RequestabilityForRole)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *RoleV2) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *RoleV2) GetRevocationRequestConfig() RevocabilityForRole`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *RoleV2) GetRevocationRequestConfigOk() (*RevocabilityForRole, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *RoleV2) SetRevocationRequestConfig(v RevocabilityForRole)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *RoleV2) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.

### GetSegments

`func (o *RoleV2) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *RoleV2) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *RoleV2) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *RoleV2) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### SetSegmentsNil

`func (o *RoleV2) SetSegmentsNil(b bool)`

 SetSegmentsNil sets the value for Segments to be an explicit nil

### UnsetSegments
`func (o *RoleV2) UnsetSegments()`

UnsetSegments ensures that no value is present for Segments, not even an explicit nil
### GetDimensional

`func (o *RoleV2) GetDimensional() bool`

GetDimensional returns the Dimensional field if non-nil, zero value otherwise.

### GetDimensionalOk

`func (o *RoleV2) GetDimensionalOk() (*bool, bool)`

GetDimensionalOk returns a tuple with the Dimensional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensional

`func (o *RoleV2) SetDimensional(v bool)`

SetDimensional sets Dimensional field to given value.

### HasDimensional

`func (o *RoleV2) HasDimensional() bool`

HasDimensional returns a boolean if a field has been set.

### SetDimensionalNil

`func (o *RoleV2) SetDimensionalNil(b bool)`

 SetDimensionalNil sets the value for Dimensional to be an explicit nil

### UnsetDimensional
`func (o *RoleV2) UnsetDimensional()`

UnsetDimensional ensures that no value is present for Dimensional, not even an explicit nil
### GetDimensionRefs

`func (o *RoleV2) GetDimensionRefs() []DimensionRef`

GetDimensionRefs returns the DimensionRefs field if non-nil, zero value otherwise.

### GetDimensionRefsOk

`func (o *RoleV2) GetDimensionRefsOk() (*[]DimensionRef, bool)`

GetDimensionRefsOk returns a tuple with the DimensionRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionRefs

`func (o *RoleV2) SetDimensionRefs(v []DimensionRef)`

SetDimensionRefs sets DimensionRefs field to given value.

### HasDimensionRefs

`func (o *RoleV2) HasDimensionRefs() bool`

HasDimensionRefs returns a boolean if a field has been set.

### SetDimensionRefsNil

`func (o *RoleV2) SetDimensionRefsNil(b bool)`

 SetDimensionRefsNil sets the value for DimensionRefs to be an explicit nil

### UnsetDimensionRefs
`func (o *RoleV2) UnsetDimensionRefs()`

UnsetDimensionRefs ensures that no value is present for DimensionRefs, not even an explicit nil
### GetAccessModelMetadata

`func (o *RoleV2) GetAccessModelMetadata() AttributeDTOList`

GetAccessModelMetadata returns the AccessModelMetadata field if non-nil, zero value otherwise.

### GetAccessModelMetadataOk

`func (o *RoleV2) GetAccessModelMetadataOk() (*AttributeDTOList, bool)`

GetAccessModelMetadataOk returns a tuple with the AccessModelMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessModelMetadata

`func (o *RoleV2) SetAccessModelMetadata(v AttributeDTOList)`

SetAccessModelMetadata sets AccessModelMetadata field to given value.

### HasAccessModelMetadata

`func (o *RoleV2) HasAccessModelMetadata() bool`

HasAccessModelMetadata returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *RoleV2) GetPrivilegeLevel() RolePrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *RoleV2) GetPrivilegeLevelOk() (*RolePrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *RoleV2) SetPrivilegeLevel(v RolePrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *RoleV2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *RoleV2) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *RoleV2) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil

