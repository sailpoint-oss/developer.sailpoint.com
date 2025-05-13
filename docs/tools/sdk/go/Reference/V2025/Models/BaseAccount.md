---
id: v2025-base-account
title: BaseAccount
pagination_label: BaseAccount
sidebar_label: BaseAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseAccount', 'V2025BaseAccount'] 
slug: /tools/sdk/go/v2025/models/base-account
tags: ['SDK', 'Software Development Kit', 'BaseAccount', 'V2025BaseAccount']
---

# BaseAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**AccountId** | Pointer to **string** | Account ID. | [optional] 
**Source** | Pointer to [**AccountSource**](account-source) |  | [optional] 
**Disabled** | Pointer to **bool** | Indicates whether the account is disabled. | [optional] [default to false]
**Locked** | Pointer to **bool** | Indicates whether the account is locked. | [optional] [default to false]
**Privileged** | Pointer to **bool** | Indicates whether the account is privileged. | [optional] [default to false]
**ManuallyCorrelated** | Pointer to **bool** | Indicates whether the account has been manually correlated to an identity. | [optional] [default to false]
**PasswordLastSet** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**EntitlementAttributes** | Pointer to **map[string]interface{}** | Map or dictionary of key/value pairs. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**SupportsPasswordChange** | Pointer to **bool** | Indicates whether the account supports password change. | [optional] [default to false]
**AccountAttributes** | Pointer to **map[string]interface{}** | Map or dictionary of key/value pairs. | [optional] 

## Methods

### NewBaseAccount

`func NewBaseAccount() *BaseAccount`

NewBaseAccount instantiates a new BaseAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseAccountWithDefaults

`func NewBaseAccountWithDefaults() *BaseAccount`

NewBaseAccountWithDefaults instantiates a new BaseAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseAccount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseAccount) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccountId

`func (o *BaseAccount) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *BaseAccount) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *BaseAccount) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *BaseAccount) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetSource

`func (o *BaseAccount) GetSource() AccountSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *BaseAccount) GetSourceOk() (*AccountSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *BaseAccount) SetSource(v AccountSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *BaseAccount) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDisabled

`func (o *BaseAccount) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *BaseAccount) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *BaseAccount) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *BaseAccount) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *BaseAccount) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *BaseAccount) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *BaseAccount) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *BaseAccount) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetPrivileged

`func (o *BaseAccount) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *BaseAccount) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *BaseAccount) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *BaseAccount) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetManuallyCorrelated

`func (o *BaseAccount) GetManuallyCorrelated() bool`

GetManuallyCorrelated returns the ManuallyCorrelated field if non-nil, zero value otherwise.

### GetManuallyCorrelatedOk

`func (o *BaseAccount) GetManuallyCorrelatedOk() (*bool, bool)`

GetManuallyCorrelatedOk returns a tuple with the ManuallyCorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCorrelated

`func (o *BaseAccount) SetManuallyCorrelated(v bool)`

SetManuallyCorrelated sets ManuallyCorrelated field to given value.

### HasManuallyCorrelated

`func (o *BaseAccount) HasManuallyCorrelated() bool`

HasManuallyCorrelated returns a boolean if a field has been set.

### GetPasswordLastSet

`func (o *BaseAccount) GetPasswordLastSet() SailPointTime`

GetPasswordLastSet returns the PasswordLastSet field if non-nil, zero value otherwise.

### GetPasswordLastSetOk

`func (o *BaseAccount) GetPasswordLastSetOk() (*SailPointTime, bool)`

GetPasswordLastSetOk returns a tuple with the PasswordLastSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordLastSet

`func (o *BaseAccount) SetPasswordLastSet(v SailPointTime)`

SetPasswordLastSet sets PasswordLastSet field to given value.

### HasPasswordLastSet

`func (o *BaseAccount) HasPasswordLastSet() bool`

HasPasswordLastSet returns a boolean if a field has been set.

### SetPasswordLastSetNil

`func (o *BaseAccount) SetPasswordLastSetNil(b bool)`

 SetPasswordLastSetNil sets the value for PasswordLastSet to be an explicit nil

### UnsetPasswordLastSet
`func (o *BaseAccount) UnsetPasswordLastSet()`

UnsetPasswordLastSet ensures that no value is present for PasswordLastSet, not even an explicit nil
### GetEntitlementAttributes

`func (o *BaseAccount) GetEntitlementAttributes() map[string]interface{}`

GetEntitlementAttributes returns the EntitlementAttributes field if non-nil, zero value otherwise.

### GetEntitlementAttributesOk

`func (o *BaseAccount) GetEntitlementAttributesOk() (*map[string]interface{}, bool)`

GetEntitlementAttributesOk returns a tuple with the EntitlementAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementAttributes

`func (o *BaseAccount) SetEntitlementAttributes(v map[string]interface{})`

SetEntitlementAttributes sets EntitlementAttributes field to given value.

### HasEntitlementAttributes

`func (o *BaseAccount) HasEntitlementAttributes() bool`

HasEntitlementAttributes returns a boolean if a field has been set.

### SetEntitlementAttributesNil

`func (o *BaseAccount) SetEntitlementAttributesNil(b bool)`

 SetEntitlementAttributesNil sets the value for EntitlementAttributes to be an explicit nil

### UnsetEntitlementAttributes
`func (o *BaseAccount) UnsetEntitlementAttributes()`

UnsetEntitlementAttributes ensures that no value is present for EntitlementAttributes, not even an explicit nil
### GetCreated

`func (o *BaseAccount) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BaseAccount) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BaseAccount) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BaseAccount) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *BaseAccount) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *BaseAccount) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetSupportsPasswordChange

`func (o *BaseAccount) GetSupportsPasswordChange() bool`

GetSupportsPasswordChange returns the SupportsPasswordChange field if non-nil, zero value otherwise.

### GetSupportsPasswordChangeOk

`func (o *BaseAccount) GetSupportsPasswordChangeOk() (*bool, bool)`

GetSupportsPasswordChangeOk returns a tuple with the SupportsPasswordChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsPasswordChange

`func (o *BaseAccount) SetSupportsPasswordChange(v bool)`

SetSupportsPasswordChange sets SupportsPasswordChange field to given value.

### HasSupportsPasswordChange

`func (o *BaseAccount) HasSupportsPasswordChange() bool`

HasSupportsPasswordChange returns a boolean if a field has been set.

### GetAccountAttributes

`func (o *BaseAccount) GetAccountAttributes() map[string]interface{}`

GetAccountAttributes returns the AccountAttributes field if non-nil, zero value otherwise.

### GetAccountAttributesOk

`func (o *BaseAccount) GetAccountAttributesOk() (*map[string]interface{}, bool)`

GetAccountAttributesOk returns a tuple with the AccountAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountAttributes

`func (o *BaseAccount) SetAccountAttributes(v map[string]interface{})`

SetAccountAttributes sets AccountAttributes field to given value.

### HasAccountAttributes

`func (o *BaseAccount) HasAccountAttributes() bool`

HasAccountAttributes returns a boolean if a field has been set.

### SetAccountAttributesNil

`func (o *BaseAccount) SetAccountAttributesNil(b bool)`

 SetAccountAttributesNil sets the value for AccountAttributes to be an explicit nil

### UnsetAccountAttributes
`func (o *BaseAccount) UnsetAccountAttributes()`

UnsetAccountAttributes ensures that no value is present for AccountAttributes, not even an explicit nil

