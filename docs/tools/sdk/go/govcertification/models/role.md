# Role

# Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the Role | [optional] 
**Name** | Pointer to **string** | The name of the Role | [optional] 
**Description** | Pointer to **string** | Information about the Role | [optional] 
**Privileged** | Pointer to **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility. | [optional] [default to false]
**Owner** | Pointer to [**IdentityReference**](identity-reference) |  | [optional] 
**Revocable** | Pointer to **bool** | Indicates whether the Role can be revoked or requested | [optional] [default to false]
**AssignmentId** | Pointer to **string** | the ID of the role assignment | [optional] 
**EndDate** | Pointer to **SailPointTime** | The date when a user's access expires. | [optional] 
**Entitlements** | Pointer to [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this Role. | [optional] 
**AccessProfiles** | Pointer to [**[]AccessProfileReference**](access-profile-reference) | A list of access profile references associated to this Role. | [optional] 

## Methods

### NewRole

`func NewRole() *Role`

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

### HasName

`func (o *Role) HasName() bool`

HasName returns a boolean if a field has been set.

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

### GetPrivileged

`func (o *Role) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Role) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Role) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Role) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetOwner

`func (o *Role) GetOwner() IdentityReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Role) GetOwnerOk() (*IdentityReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Role) SetOwner(v IdentityReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Role) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRevocable

`func (o *Role) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Role) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Role) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *Role) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetAssignmentId

`func (o *Role) GetAssignmentId() string`

GetAssignmentId returns the AssignmentId field if non-nil, zero value otherwise.

### GetAssignmentIdOk

`func (o *Role) GetAssignmentIdOk() (*string, bool)`

GetAssignmentIdOk returns a tuple with the AssignmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentId

`func (o *Role) SetAssignmentId(v string)`

SetAssignmentId sets AssignmentId field to given value.

### HasAssignmentId

`func (o *Role) HasAssignmentId() bool`

HasAssignmentId returns a boolean if a field has been set.

### GetEndDate

`func (o *Role) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Role) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Role) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Role) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetEntitlements

`func (o *Role) GetEntitlements() []EntitlementReference`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Role) GetEntitlementsOk() (*[]EntitlementReference, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Role) SetEntitlements(v []EntitlementReference)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Role) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetAccessProfiles

`func (o *Role) GetAccessProfiles() []AccessProfileReference`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Role) GetAccessProfilesOk() (*[]AccessProfileReference, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Role) SetAccessProfiles(v []AccessProfileReference)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Role) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.


