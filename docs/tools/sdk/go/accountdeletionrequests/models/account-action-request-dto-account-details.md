# AccountActionRequestDtoAccountDetails

# AccountActionRequestDtoAccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | unique id of this object | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**AccountId** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**NativeIdentity** | Pointer to **string** |  | [optional] 
**Uuid** | Pointer to **string** |  | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Locked** | Pointer to **bool** |  | [optional] 
**Uncorrelated** | Pointer to **bool** |  | [optional] 
**SystemAccount** | Pointer to **bool** |  | [optional] 
**Authoritative** | Pointer to **bool** |  | [optional] 
**SupportsPasswordChange** | Pointer to **bool** |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Application** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Identity** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Schema** | Pointer to **map[string]interface\{\}** |  | [optional] 
**PendingAccessRequestIds** | Pointer to **[]string** |  | [optional] 
**Features** | Pointer to **[]string** |  | [optional] 
**Meta** | Pointer to **map[string]interface\{\}** |  | [optional] 

## Methods

### NewAccountActionRequestDtoAccountDetails

`func NewAccountActionRequestDtoAccountDetails() *AccountActionRequestDtoAccountDetails`

NewAccountActionRequestDtoAccountDetails instantiates a new AccountActionRequestDtoAccountDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActionRequestDtoAccountDetailsWithDefaults

`func NewAccountActionRequestDtoAccountDetailsWithDefaults() *AccountActionRequestDtoAccountDetails`

NewAccountActionRequestDtoAccountDetailsWithDefaults instantiates a new AccountActionRequestDtoAccountDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountActionRequestDtoAccountDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountActionRequestDtoAccountDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountActionRequestDtoAccountDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountActionRequestDtoAccountDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountActionRequestDtoAccountDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountActionRequestDtoAccountDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountActionRequestDtoAccountDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountActionRequestDtoAccountDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccountId

`func (o *AccountActionRequestDtoAccountDetails) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountActionRequestDtoAccountDetails) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountActionRequestDtoAccountDetails) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountActionRequestDtoAccountDetails) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetDescription

`func (o *AccountActionRequestDtoAccountDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccountActionRequestDtoAccountDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccountActionRequestDtoAccountDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccountActionRequestDtoAccountDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountActionRequestDtoAccountDetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountActionRequestDtoAccountDetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountActionRequestDtoAccountDetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountActionRequestDtoAccountDetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *AccountActionRequestDtoAccountDetails) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccountActionRequestDtoAccountDetails) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccountActionRequestDtoAccountDetails) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccountActionRequestDtoAccountDetails) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccountActionRequestDtoAccountDetails) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccountActionRequestDtoAccountDetails) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccountActionRequestDtoAccountDetails) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccountActionRequestDtoAccountDetails) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisabled

`func (o *AccountActionRequestDtoAccountDetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccountActionRequestDtoAccountDetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccountActionRequestDtoAccountDetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccountActionRequestDtoAccountDetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *AccountActionRequestDtoAccountDetails) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *AccountActionRequestDtoAccountDetails) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *AccountActionRequestDtoAccountDetails) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *AccountActionRequestDtoAccountDetails) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetUncorrelated

`func (o *AccountActionRequestDtoAccountDetails) GetUncorrelated() bool`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *AccountActionRequestDtoAccountDetails) GetUncorrelatedOk() (*bool, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *AccountActionRequestDtoAccountDetails) SetUncorrelated(v bool)`

SetUncorrelated sets Uncorrelated field to given value.

### HasUncorrelated

`func (o *AccountActionRequestDtoAccountDetails) HasUncorrelated() bool`

HasUncorrelated returns a boolean if a field has been set.

### GetSystemAccount

`func (o *AccountActionRequestDtoAccountDetails) GetSystemAccount() bool`

GetSystemAccount returns the SystemAccount field if non-nil, zero value otherwise.

### GetSystemAccountOk

`func (o *AccountActionRequestDtoAccountDetails) GetSystemAccountOk() (*bool, bool)`

GetSystemAccountOk returns a tuple with the SystemAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemAccount

`func (o *AccountActionRequestDtoAccountDetails) SetSystemAccount(v bool)`

SetSystemAccount sets SystemAccount field to given value.

### HasSystemAccount

`func (o *AccountActionRequestDtoAccountDetails) HasSystemAccount() bool`

HasSystemAccount returns a boolean if a field has been set.

### GetAuthoritative

`func (o *AccountActionRequestDtoAccountDetails) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *AccountActionRequestDtoAccountDetails) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *AccountActionRequestDtoAccountDetails) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *AccountActionRequestDtoAccountDetails) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetSupportsPasswordChange

`func (o *AccountActionRequestDtoAccountDetails) GetSupportsPasswordChange() bool`

GetSupportsPasswordChange returns the SupportsPasswordChange field if non-nil, zero value otherwise.

### GetSupportsPasswordChangeOk

`func (o *AccountActionRequestDtoAccountDetails) GetSupportsPasswordChangeOk() (*bool, bool)`

GetSupportsPasswordChangeOk returns a tuple with the SupportsPasswordChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsPasswordChange

`func (o *AccountActionRequestDtoAccountDetails) SetSupportsPasswordChange(v bool)`

SetSupportsPasswordChange sets SupportsPasswordChange field to given value.

### HasSupportsPasswordChange

`func (o *AccountActionRequestDtoAccountDetails) HasSupportsPasswordChange() bool`

HasSupportsPasswordChange returns a boolean if a field has been set.

### GetAttributes

`func (o *AccountActionRequestDtoAccountDetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountActionRequestDtoAccountDetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountActionRequestDtoAccountDetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AccountActionRequestDtoAccountDetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetApplication

`func (o *AccountActionRequestDtoAccountDetails) GetApplication() map[string]interface{}`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *AccountActionRequestDtoAccountDetails) GetApplicationOk() (*map[string]interface{}, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *AccountActionRequestDtoAccountDetails) SetApplication(v map[string]interface{})`

SetApplication sets Application field to given value.

### HasApplication

`func (o *AccountActionRequestDtoAccountDetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetIdentity

`func (o *AccountActionRequestDtoAccountDetails) GetIdentity() map[string]interface{}`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountActionRequestDtoAccountDetails) GetIdentityOk() (*map[string]interface{}, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountActionRequestDtoAccountDetails) SetIdentity(v map[string]interface{})`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *AccountActionRequestDtoAccountDetails) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetSchema

`func (o *AccountActionRequestDtoAccountDetails) GetSchema() map[string]interface{}`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *AccountActionRequestDtoAccountDetails) GetSchemaOk() (*map[string]interface{}, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *AccountActionRequestDtoAccountDetails) SetSchema(v map[string]interface{})`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *AccountActionRequestDtoAccountDetails) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPendingAccessRequestIds

`func (o *AccountActionRequestDtoAccountDetails) GetPendingAccessRequestIds() []string`

GetPendingAccessRequestIds returns the PendingAccessRequestIds field if non-nil, zero value otherwise.

### GetPendingAccessRequestIdsOk

`func (o *AccountActionRequestDtoAccountDetails) GetPendingAccessRequestIdsOk() (*[]string, bool)`

GetPendingAccessRequestIdsOk returns a tuple with the PendingAccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAccessRequestIds

`func (o *AccountActionRequestDtoAccountDetails) SetPendingAccessRequestIds(v []string)`

SetPendingAccessRequestIds sets PendingAccessRequestIds field to given value.

### HasPendingAccessRequestIds

`func (o *AccountActionRequestDtoAccountDetails) HasPendingAccessRequestIds() bool`

HasPendingAccessRequestIds returns a boolean if a field has been set.

### GetFeatures

`func (o *AccountActionRequestDtoAccountDetails) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *AccountActionRequestDtoAccountDetails) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *AccountActionRequestDtoAccountDetails) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *AccountActionRequestDtoAccountDetails) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetMeta

`func (o *AccountActionRequestDtoAccountDetails) GetMeta() map[string]interface{}`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *AccountActionRequestDtoAccountDetails) GetMetaOk() (*map[string]interface{}, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *AccountActionRequestDtoAccountDetails) SetMeta(v map[string]interface{})`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *AccountActionRequestDtoAccountDetails) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


