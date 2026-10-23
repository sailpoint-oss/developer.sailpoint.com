# AccountReference

# AccountReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** | Pointer to **string** | The native identity for this account | [optional] 
**Disabled** | Pointer to **bool** | Indicates whether this account is currently disabled | [optional] [default to false]
**Locked** | Pointer to **bool** | Indicates whether this account is currently locked | [optional] [default to false]
**Type** | Pointer to **string** | The type of the Account Reference | [optional] 
**Id** | Pointer to **string** | The id associated with the account | [optional] 
**Name** | Pointer to **string** | The account name | [optional] 
**Created** | Pointer to **SailPointTime** | When the account was created | [optional] 
**Modified** | Pointer to **SailPointTime** | When the account was last modified | [optional] 

## Methods

### NewAccountReference

`func NewAccountReference() *AccountReference`

NewAccountReference instantiates a new AccountReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountReferenceWithDefaults

`func NewAccountReferenceWithDefaults() *AccountReference`

NewAccountReferenceWithDefaults instantiates a new AccountReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNativeIdentity

`func (o *AccountReference) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountReference) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountReference) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountReference) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisabled

`func (o *AccountReference) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccountReference) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccountReference) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccountReference) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *AccountReference) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *AccountReference) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *AccountReference) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *AccountReference) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetType

`func (o *AccountReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccountReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *AccountReference) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccountReference) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccountReference) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccountReference) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccountReference) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccountReference) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccountReference) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccountReference) HasModified() bool`

HasModified returns a boolean if a field has been set.


