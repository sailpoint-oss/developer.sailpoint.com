# IdentityV2

# IdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | System-generated unique ID of the identity. | [optional] 
**Name** | Pointer to **NullableString** | Display name of the identity. | [optional] 
**Alias** | Pointer to **NullableString** | Alternate unique identifier of the identity. Equivalent to the account name on the authoritative source. | [optional] 
**Type** | Pointer to **NullableString** | The identity type. | [optional] 
**EmailAddress** | Pointer to **NullableString** | Email address of the identity. | [optional] 
**IdentityStatus** | Pointer to **NullableString** | The identity's status in the system. | [optional] 
**ProcessingState** | Pointer to **NullableString** | The processing state of the identity. | [optional] 
**Protected** | Pointer to **bool** | Whether the identity is protected from accidental deletion or modification. | [optional] [default to false]
**Correlated** | Pointer to **bool** | Whether the identity is correlated to an authoritative account. | [optional] [default to false]
**Inactive** | Pointer to **bool** | Whether the identity is inactive. | [optional] [default to false]
**IsManager** | Pointer to **bool** | Whether this identity is a manager of another identity. | [optional] [default to false]
**Locked** | Pointer to **bool** | Whether the identity is locked. | [optional] [default to false]
**Disabled** | Pointer to **bool** | Whether the identity is disabled. | [optional] [default to false]
**Manager** | Pointer to [**NullableIdentityV2Manager**](identity-v2-manager) |  | [optional] 
**LifecycleState** | Pointer to [**IdentityV2LifecycleState**](identity-v2-lifecycle-state) |  | [optional] 
**Created** | Pointer to **NullableTime** | Creation date of the identity. | [optional] 
**Modified** | Pointer to **NullableTime** | Last modification date of the identity. | [optional] 
**Synced** | Pointer to **NullableTime** | Last time the identity was synchronized to search. | [optional] 
**LastRefresh** | Pointer to **NullableTime** | The last time the identity was refreshed by the system. | [optional] 
**PrivilegeLevel** | Pointer to [**NullableIdentityV2PrivilegeLevel**](identity-v2-privilege-level) |  | [optional] 

## Methods

### NewIdentityV2

`func NewIdentityV2() *IdentityV2`

NewIdentityV2 instantiates a new IdentityV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityV2WithDefaults

`func NewIdentityV2WithDefaults() *IdentityV2`

NewIdentityV2WithDefaults instantiates a new IdentityV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityV2) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *IdentityV2) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *IdentityV2) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *IdentityV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityV2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityV2) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *IdentityV2) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *IdentityV2) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAlias

`func (o *IdentityV2) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *IdentityV2) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *IdentityV2) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *IdentityV2) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### SetAliasNil

`func (o *IdentityV2) SetAliasNil(b bool)`

 SetAliasNil sets the value for Alias to be an explicit nil

### UnsetAlias
`func (o *IdentityV2) UnsetAlias()`

UnsetAlias ensures that no value is present for Alias, not even an explicit nil
### GetType

`func (o *IdentityV2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityV2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityV2) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityV2) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *IdentityV2) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *IdentityV2) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetEmailAddress

`func (o *IdentityV2) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *IdentityV2) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *IdentityV2) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *IdentityV2) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### SetEmailAddressNil

`func (o *IdentityV2) SetEmailAddressNil(b bool)`

 SetEmailAddressNil sets the value for EmailAddress to be an explicit nil

### UnsetEmailAddress
`func (o *IdentityV2) UnsetEmailAddress()`

UnsetEmailAddress ensures that no value is present for EmailAddress, not even an explicit nil
### GetIdentityStatus

`func (o *IdentityV2) GetIdentityStatus() string`

GetIdentityStatus returns the IdentityStatus field if non-nil, zero value otherwise.

### GetIdentityStatusOk

`func (o *IdentityV2) GetIdentityStatusOk() (*string, bool)`

GetIdentityStatusOk returns a tuple with the IdentityStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityStatus

`func (o *IdentityV2) SetIdentityStatus(v string)`

SetIdentityStatus sets IdentityStatus field to given value.

### HasIdentityStatus

`func (o *IdentityV2) HasIdentityStatus() bool`

HasIdentityStatus returns a boolean if a field has been set.

### SetIdentityStatusNil

`func (o *IdentityV2) SetIdentityStatusNil(b bool)`

 SetIdentityStatusNil sets the value for IdentityStatus to be an explicit nil

### UnsetIdentityStatus
`func (o *IdentityV2) UnsetIdentityStatus()`

UnsetIdentityStatus ensures that no value is present for IdentityStatus, not even an explicit nil
### GetProcessingState

`func (o *IdentityV2) GetProcessingState() string`

GetProcessingState returns the ProcessingState field if non-nil, zero value otherwise.

### GetProcessingStateOk

`func (o *IdentityV2) GetProcessingStateOk() (*string, bool)`

GetProcessingStateOk returns a tuple with the ProcessingState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingState

`func (o *IdentityV2) SetProcessingState(v string)`

SetProcessingState sets ProcessingState field to given value.

### HasProcessingState

`func (o *IdentityV2) HasProcessingState() bool`

HasProcessingState returns a boolean if a field has been set.

### SetProcessingStateNil

`func (o *IdentityV2) SetProcessingStateNil(b bool)`

 SetProcessingStateNil sets the value for ProcessingState to be an explicit nil

### UnsetProcessingState
`func (o *IdentityV2) UnsetProcessingState()`

UnsetProcessingState ensures that no value is present for ProcessingState, not even an explicit nil
### GetProtected

`func (o *IdentityV2) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *IdentityV2) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *IdentityV2) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *IdentityV2) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetCorrelated

`func (o *IdentityV2) GetCorrelated() bool`

GetCorrelated returns the Correlated field if non-nil, zero value otherwise.

### GetCorrelatedOk

`func (o *IdentityV2) GetCorrelatedOk() (*bool, bool)`

GetCorrelatedOk returns a tuple with the Correlated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelated

`func (o *IdentityV2) SetCorrelated(v bool)`

SetCorrelated sets Correlated field to given value.

### HasCorrelated

`func (o *IdentityV2) HasCorrelated() bool`

HasCorrelated returns a boolean if a field has been set.

### GetInactive

`func (o *IdentityV2) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *IdentityV2) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *IdentityV2) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *IdentityV2) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIsManager

`func (o *IdentityV2) GetIsManager() bool`

GetIsManager returns the IsManager field if non-nil, zero value otherwise.

### GetIsManagerOk

`func (o *IdentityV2) GetIsManagerOk() (*bool, bool)`

GetIsManagerOk returns a tuple with the IsManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsManager

`func (o *IdentityV2) SetIsManager(v bool)`

SetIsManager sets IsManager field to given value.

### HasIsManager

`func (o *IdentityV2) HasIsManager() bool`

HasIsManager returns a boolean if a field has been set.

### GetLocked

`func (o *IdentityV2) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *IdentityV2) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *IdentityV2) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *IdentityV2) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetDisabled

`func (o *IdentityV2) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *IdentityV2) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *IdentityV2) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *IdentityV2) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetManager

`func (o *IdentityV2) GetManager() IdentityV2Manager`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *IdentityV2) GetManagerOk() (*IdentityV2Manager, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *IdentityV2) SetManager(v IdentityV2Manager)`

SetManager sets Manager field to given value.

### HasManager

`func (o *IdentityV2) HasManager() bool`

HasManager returns a boolean if a field has been set.

### SetManagerNil

`func (o *IdentityV2) SetManagerNil(b bool)`

 SetManagerNil sets the value for Manager to be an explicit nil

### UnsetManager
`func (o *IdentityV2) UnsetManager()`

UnsetManager ensures that no value is present for Manager, not even an explicit nil
### GetLifecycleState

`func (o *IdentityV2) GetLifecycleState() IdentityV2LifecycleState`

GetLifecycleState returns the LifecycleState field if non-nil, zero value otherwise.

### GetLifecycleStateOk

`func (o *IdentityV2) GetLifecycleStateOk() (*IdentityV2LifecycleState, bool)`

GetLifecycleStateOk returns a tuple with the LifecycleState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLifecycleState

`func (o *IdentityV2) SetLifecycleState(v IdentityV2LifecycleState)`

SetLifecycleState sets LifecycleState field to given value.

### HasLifecycleState

`func (o *IdentityV2) HasLifecycleState() bool`

HasLifecycleState returns a boolean if a field has been set.

### GetCreated

`func (o *IdentityV2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityV2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityV2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityV2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *IdentityV2) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *IdentityV2) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *IdentityV2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityV2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityV2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityV2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *IdentityV2) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *IdentityV2) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSynced

`func (o *IdentityV2) GetSynced() SailPointTime`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *IdentityV2) GetSyncedOk() (*SailPointTime, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *IdentityV2) SetSynced(v SailPointTime)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *IdentityV2) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### SetSyncedNil

`func (o *IdentityV2) SetSyncedNil(b bool)`

 SetSyncedNil sets the value for Synced to be an explicit nil

### UnsetSynced
`func (o *IdentityV2) UnsetSynced()`

UnsetSynced ensures that no value is present for Synced, not even an explicit nil
### GetLastRefresh

`func (o *IdentityV2) GetLastRefresh() SailPointTime`

GetLastRefresh returns the LastRefresh field if non-nil, zero value otherwise.

### GetLastRefreshOk

`func (o *IdentityV2) GetLastRefreshOk() (*SailPointTime, bool)`

GetLastRefreshOk returns a tuple with the LastRefresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRefresh

`func (o *IdentityV2) SetLastRefresh(v SailPointTime)`

SetLastRefresh sets LastRefresh field to given value.

### HasLastRefresh

`func (o *IdentityV2) HasLastRefresh() bool`

HasLastRefresh returns a boolean if a field has been set.

### SetLastRefreshNil

`func (o *IdentityV2) SetLastRefreshNil(b bool)`

 SetLastRefreshNil sets the value for LastRefresh to be an explicit nil

### UnsetLastRefresh
`func (o *IdentityV2) UnsetLastRefresh()`

UnsetLastRefresh ensures that no value is present for LastRefresh, not even an explicit nil
### GetPrivilegeLevel

`func (o *IdentityV2) GetPrivilegeLevel() IdentityV2PrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *IdentityV2) GetPrivilegeLevelOk() (*IdentityV2PrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *IdentityV2) SetPrivilegeLevel(v IdentityV2PrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *IdentityV2) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *IdentityV2) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *IdentityV2) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil

