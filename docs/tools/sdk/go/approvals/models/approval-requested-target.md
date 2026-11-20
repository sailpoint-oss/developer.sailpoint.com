# ApprovalRequestedTarget

# ApprovalRequestedTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Target ID (for example a role ID or access profile ID). | [optional] 
**Ids** | Pointer to **[]string** | Target IDs when the approval request applies to multiple targets. | [optional] 
**Name** | Pointer to **string** | Target name (for example a role name or access profile name). | [optional] 
**Names** | Pointer to **[]string** | Target names when the approval request applies to multiple targets. | [optional] 
**TargetType** | Pointer to **string** | Target type (for example Role or Access Profile). | [optional] 
**TargetTypes** | Pointer to **[]string** | Target types when the approval request applies to multiple targets. | [optional] 
**Description** | Pointer to **string** | Optional description for the requested target. | [optional] 
**EpLevelAtCreation** | Pointer to **string** | Effective privilege (EP) level at approval creation. | [optional] 
**CurrentEPLevel** | Pointer to **string** | Current effective privilege (EP) level for the requested target. | [optional] 
**CurrentEPModifiedDate** | Pointer to **SailPointTime** | Date and time when the current effective privilege level was last modified. | [optional] 
**RequestType** | Pointer to **string** | Access request type (for example GRANT_ACCESS or REVOKE_ACCESS). | [optional] 
**ForcedAuthSignature** | Pointer to **string** | Signature required for forced authentication. | [optional] 
**ReauthRequired** | Pointer to **bool** | Indicates whether forced reauthentication is required upon approval. | [optional] [default to false]
**StartDate** | Pointer to **SailPointTime** | When temporary access will be granted, if applicable. | [optional] 
**RemovalDate** | Pointer to **SailPointTime** | When temporary access will be removed, if applicable. | [optional] 
**ModifiedStartDate** | Pointer to **SailPointTime** | Updated start date when startDate is edited during the approval request. | [optional] 
**ModifiedRemovalDate** | Pointer to **SailPointTime** | Updated removal date when removalDate is edited during the approval request. | [optional] 

## Methods

### NewApprovalRequestedTarget

`func NewApprovalRequestedTarget() *ApprovalRequestedTarget`

NewApprovalRequestedTarget instantiates a new ApprovalRequestedTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalRequestedTargetWithDefaults

`func NewApprovalRequestedTargetWithDefaults() *ApprovalRequestedTarget`

NewApprovalRequestedTargetWithDefaults instantiates a new ApprovalRequestedTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApprovalRequestedTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalRequestedTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalRequestedTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalRequestedTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIds

`func (o *ApprovalRequestedTarget) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *ApprovalRequestedTarget) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *ApprovalRequestedTarget) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *ApprovalRequestedTarget) HasIds() bool`

HasIds returns a boolean if a field has been set.

### GetName

`func (o *ApprovalRequestedTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalRequestedTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalRequestedTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalRequestedTarget) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNames

`func (o *ApprovalRequestedTarget) GetNames() []string`

GetNames returns the Names field if non-nil, zero value otherwise.

### GetNamesOk

`func (o *ApprovalRequestedTarget) GetNamesOk() (*[]string, bool)`

GetNamesOk returns a tuple with the Names field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNames

`func (o *ApprovalRequestedTarget) SetNames(v []string)`

SetNames sets Names field to given value.

### HasNames

`func (o *ApprovalRequestedTarget) HasNames() bool`

HasNames returns a boolean if a field has been set.

### GetTargetType

`func (o *ApprovalRequestedTarget) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *ApprovalRequestedTarget) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *ApprovalRequestedTarget) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *ApprovalRequestedTarget) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetTypes

`func (o *ApprovalRequestedTarget) GetTargetTypes() []string`

GetTargetTypes returns the TargetTypes field if non-nil, zero value otherwise.

### GetTargetTypesOk

`func (o *ApprovalRequestedTarget) GetTargetTypesOk() (*[]string, bool)`

GetTargetTypesOk returns a tuple with the TargetTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTypes

`func (o *ApprovalRequestedTarget) SetTargetTypes(v []string)`

SetTargetTypes sets TargetTypes field to given value.

### HasTargetTypes

`func (o *ApprovalRequestedTarget) HasTargetTypes() bool`

HasTargetTypes returns a boolean if a field has been set.

### GetDescription

`func (o *ApprovalRequestedTarget) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApprovalRequestedTarget) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApprovalRequestedTarget) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ApprovalRequestedTarget) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEpLevelAtCreation

`func (o *ApprovalRequestedTarget) GetEpLevelAtCreation() string`

GetEpLevelAtCreation returns the EpLevelAtCreation field if non-nil, zero value otherwise.

### GetEpLevelAtCreationOk

`func (o *ApprovalRequestedTarget) GetEpLevelAtCreationOk() (*string, bool)`

GetEpLevelAtCreationOk returns a tuple with the EpLevelAtCreation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEpLevelAtCreation

`func (o *ApprovalRequestedTarget) SetEpLevelAtCreation(v string)`

SetEpLevelAtCreation sets EpLevelAtCreation field to given value.

### HasEpLevelAtCreation

`func (o *ApprovalRequestedTarget) HasEpLevelAtCreation() bool`

HasEpLevelAtCreation returns a boolean if a field has been set.

### GetCurrentEPLevel

`func (o *ApprovalRequestedTarget) GetCurrentEPLevel() string`

GetCurrentEPLevel returns the CurrentEPLevel field if non-nil, zero value otherwise.

### GetCurrentEPLevelOk

`func (o *ApprovalRequestedTarget) GetCurrentEPLevelOk() (*string, bool)`

GetCurrentEPLevelOk returns a tuple with the CurrentEPLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentEPLevel

`func (o *ApprovalRequestedTarget) SetCurrentEPLevel(v string)`

SetCurrentEPLevel sets CurrentEPLevel field to given value.

### HasCurrentEPLevel

`func (o *ApprovalRequestedTarget) HasCurrentEPLevel() bool`

HasCurrentEPLevel returns a boolean if a field has been set.

### GetCurrentEPModifiedDate

`func (o *ApprovalRequestedTarget) GetCurrentEPModifiedDate() SailPointTime`

GetCurrentEPModifiedDate returns the CurrentEPModifiedDate field if non-nil, zero value otherwise.

### GetCurrentEPModifiedDateOk

`func (o *ApprovalRequestedTarget) GetCurrentEPModifiedDateOk() (*SailPointTime, bool)`

GetCurrentEPModifiedDateOk returns a tuple with the CurrentEPModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentEPModifiedDate

`func (o *ApprovalRequestedTarget) SetCurrentEPModifiedDate(v SailPointTime)`

SetCurrentEPModifiedDate sets CurrentEPModifiedDate field to given value.

### HasCurrentEPModifiedDate

`func (o *ApprovalRequestedTarget) HasCurrentEPModifiedDate() bool`

HasCurrentEPModifiedDate returns a boolean if a field has been set.

### GetRequestType

`func (o *ApprovalRequestedTarget) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *ApprovalRequestedTarget) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *ApprovalRequestedTarget) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *ApprovalRequestedTarget) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetForcedAuthSignature

`func (o *ApprovalRequestedTarget) GetForcedAuthSignature() string`

GetForcedAuthSignature returns the ForcedAuthSignature field if non-nil, zero value otherwise.

### GetForcedAuthSignatureOk

`func (o *ApprovalRequestedTarget) GetForcedAuthSignatureOk() (*string, bool)`

GetForcedAuthSignatureOk returns a tuple with the ForcedAuthSignature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForcedAuthSignature

`func (o *ApprovalRequestedTarget) SetForcedAuthSignature(v string)`

SetForcedAuthSignature sets ForcedAuthSignature field to given value.

### HasForcedAuthSignature

`func (o *ApprovalRequestedTarget) HasForcedAuthSignature() bool`

HasForcedAuthSignature returns a boolean if a field has been set.

### GetReauthRequired

`func (o *ApprovalRequestedTarget) GetReauthRequired() bool`

GetReauthRequired returns the ReauthRequired field if non-nil, zero value otherwise.

### GetReauthRequiredOk

`func (o *ApprovalRequestedTarget) GetReauthRequiredOk() (*bool, bool)`

GetReauthRequiredOk returns a tuple with the ReauthRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthRequired

`func (o *ApprovalRequestedTarget) SetReauthRequired(v bool)`

SetReauthRequired sets ReauthRequired field to given value.

### HasReauthRequired

`func (o *ApprovalRequestedTarget) HasReauthRequired() bool`

HasReauthRequired returns a boolean if a field has been set.

### GetStartDate

`func (o *ApprovalRequestedTarget) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ApprovalRequestedTarget) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ApprovalRequestedTarget) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ApprovalRequestedTarget) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetRemovalDate

`func (o *ApprovalRequestedTarget) GetRemovalDate() SailPointTime`

GetRemovalDate returns the RemovalDate field if non-nil, zero value otherwise.

### GetRemovalDateOk

`func (o *ApprovalRequestedTarget) GetRemovalDateOk() (*SailPointTime, bool)`

GetRemovalDateOk returns a tuple with the RemovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovalDate

`func (o *ApprovalRequestedTarget) SetRemovalDate(v SailPointTime)`

SetRemovalDate sets RemovalDate field to given value.

### HasRemovalDate

`func (o *ApprovalRequestedTarget) HasRemovalDate() bool`

HasRemovalDate returns a boolean if a field has been set.

### GetModifiedStartDate

`func (o *ApprovalRequestedTarget) GetModifiedStartDate() SailPointTime`

GetModifiedStartDate returns the ModifiedStartDate field if non-nil, zero value otherwise.

### GetModifiedStartDateOk

`func (o *ApprovalRequestedTarget) GetModifiedStartDateOk() (*SailPointTime, bool)`

GetModifiedStartDateOk returns a tuple with the ModifiedStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedStartDate

`func (o *ApprovalRequestedTarget) SetModifiedStartDate(v SailPointTime)`

SetModifiedStartDate sets ModifiedStartDate field to given value.

### HasModifiedStartDate

`func (o *ApprovalRequestedTarget) HasModifiedStartDate() bool`

HasModifiedStartDate returns a boolean if a field has been set.

### GetModifiedRemovalDate

`func (o *ApprovalRequestedTarget) GetModifiedRemovalDate() SailPointTime`

GetModifiedRemovalDate returns the ModifiedRemovalDate field if non-nil, zero value otherwise.

### GetModifiedRemovalDateOk

`func (o *ApprovalRequestedTarget) GetModifiedRemovalDateOk() (*SailPointTime, bool)`

GetModifiedRemovalDateOk returns a tuple with the ModifiedRemovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedRemovalDate

`func (o *ApprovalRequestedTarget) SetModifiedRemovalDate(v SailPointTime)`

SetModifiedRemovalDate sets ModifiedRemovalDate field to given value.

### HasModifiedRemovalDate

`func (o *ApprovalRequestedTarget) HasModifiedRemovalDate() bool`

HasModifiedRemovalDate returns a boolean if a field has been set.


