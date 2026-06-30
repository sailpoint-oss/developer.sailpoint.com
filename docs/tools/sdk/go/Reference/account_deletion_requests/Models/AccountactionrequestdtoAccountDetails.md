---
id: v1-accountactionrequestdto-account-details
title: AccountactionrequestdtoAccountDetails
pagination_label: AccountactionrequestdtoAccountDetails
sidebar_label: AccountactionrequestdtoAccountDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountactionrequestdtoAccountDetails', 'V1AccountactionrequestdtoAccountDetails'] 
slug: /tools/sdk/go/accountdeletionrequests/models/accountactionrequestdto-account-details
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoAccountDetails', 'V1AccountactionrequestdtoAccountDetails']
---

# AccountactionrequestdtoAccountDetails

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
**Attributes** | Pointer to **map[string]interface{}** |  | [optional] 
**Application** | Pointer to **map[string]interface{}** |  | [optional] 
**Identity** | Pointer to **map[string]interface{}** |  | [optional] 
**Schema** | Pointer to **map[string]interface{}** |  | [optional] 
**PendingAccessRequestIds** | Pointer to **[]string** |  | [optional] 
**Features** | Pointer to **[]string** |  | [optional] 
**Meta** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewAccountactionrequestdtoAccountDetails

`func NewAccountactionrequestdtoAccountDetails() *AccountactionrequestdtoAccountDetails`

NewAccountactionrequestdtoAccountDetails instantiates a new AccountactionrequestdtoAccountDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountactionrequestdtoAccountDetailsWithDefaults

`func NewAccountactionrequestdtoAccountDetailsWithDefaults() *AccountactionrequestdtoAccountDetails`

NewAccountactionrequestdtoAccountDetailsWithDefaults instantiates a new AccountactionrequestdtoAccountDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountactionrequestdtoAccountDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountactionrequestdtoAccountDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountactionrequestdtoAccountDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountactionrequestdtoAccountDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountactionrequestdtoAccountDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountactionrequestdtoAccountDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountactionrequestdtoAccountDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountactionrequestdtoAccountDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccountId

`func (o *AccountactionrequestdtoAccountDetails) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountactionrequestdtoAccountDetails) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountactionrequestdtoAccountDetails) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountactionrequestdtoAccountDetails) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetDescription

`func (o *AccountactionrequestdtoAccountDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccountactionrequestdtoAccountDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccountactionrequestdtoAccountDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccountactionrequestdtoAccountDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountactionrequestdtoAccountDetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountactionrequestdtoAccountDetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountactionrequestdtoAccountDetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountactionrequestdtoAccountDetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *AccountactionrequestdtoAccountDetails) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccountactionrequestdtoAccountDetails) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccountactionrequestdtoAccountDetails) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccountactionrequestdtoAccountDetails) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccountactionrequestdtoAccountDetails) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccountactionrequestdtoAccountDetails) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccountactionrequestdtoAccountDetails) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccountactionrequestdtoAccountDetails) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisabled

`func (o *AccountactionrequestdtoAccountDetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccountactionrequestdtoAccountDetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccountactionrequestdtoAccountDetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccountactionrequestdtoAccountDetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *AccountactionrequestdtoAccountDetails) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *AccountactionrequestdtoAccountDetails) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *AccountactionrequestdtoAccountDetails) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *AccountactionrequestdtoAccountDetails) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetUncorrelated

`func (o *AccountactionrequestdtoAccountDetails) GetUncorrelated() bool`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *AccountactionrequestdtoAccountDetails) GetUncorrelatedOk() (*bool, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *AccountactionrequestdtoAccountDetails) SetUncorrelated(v bool)`

SetUncorrelated sets Uncorrelated field to given value.

### HasUncorrelated

`func (o *AccountactionrequestdtoAccountDetails) HasUncorrelated() bool`

HasUncorrelated returns a boolean if a field has been set.

### GetSystemAccount

`func (o *AccountactionrequestdtoAccountDetails) GetSystemAccount() bool`

GetSystemAccount returns the SystemAccount field if non-nil, zero value otherwise.

### GetSystemAccountOk

`func (o *AccountactionrequestdtoAccountDetails) GetSystemAccountOk() (*bool, bool)`

GetSystemAccountOk returns a tuple with the SystemAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemAccount

`func (o *AccountactionrequestdtoAccountDetails) SetSystemAccount(v bool)`

SetSystemAccount sets SystemAccount field to given value.

### HasSystemAccount

`func (o *AccountactionrequestdtoAccountDetails) HasSystemAccount() bool`

HasSystemAccount returns a boolean if a field has been set.

### GetAuthoritative

`func (o *AccountactionrequestdtoAccountDetails) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *AccountactionrequestdtoAccountDetails) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *AccountactionrequestdtoAccountDetails) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *AccountactionrequestdtoAccountDetails) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetSupportsPasswordChange

`func (o *AccountactionrequestdtoAccountDetails) GetSupportsPasswordChange() bool`

GetSupportsPasswordChange returns the SupportsPasswordChange field if non-nil, zero value otherwise.

### GetSupportsPasswordChangeOk

`func (o *AccountactionrequestdtoAccountDetails) GetSupportsPasswordChangeOk() (*bool, bool)`

GetSupportsPasswordChangeOk returns a tuple with the SupportsPasswordChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsPasswordChange

`func (o *AccountactionrequestdtoAccountDetails) SetSupportsPasswordChange(v bool)`

SetSupportsPasswordChange sets SupportsPasswordChange field to given value.

### HasSupportsPasswordChange

`func (o *AccountactionrequestdtoAccountDetails) HasSupportsPasswordChange() bool`

HasSupportsPasswordChange returns a boolean if a field has been set.

### GetAttributes

`func (o *AccountactionrequestdtoAccountDetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountactionrequestdtoAccountDetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountactionrequestdtoAccountDetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AccountactionrequestdtoAccountDetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetApplication

`func (o *AccountactionrequestdtoAccountDetails) GetApplication() map[string]interface{}`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *AccountactionrequestdtoAccountDetails) GetApplicationOk() (*map[string]interface{}, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *AccountactionrequestdtoAccountDetails) SetApplication(v map[string]interface{})`

SetApplication sets Application field to given value.

### HasApplication

`func (o *AccountactionrequestdtoAccountDetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetIdentity

`func (o *AccountactionrequestdtoAccountDetails) GetIdentity() map[string]interface{}`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountactionrequestdtoAccountDetails) GetIdentityOk() (*map[string]interface{}, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountactionrequestdtoAccountDetails) SetIdentity(v map[string]interface{})`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *AccountactionrequestdtoAccountDetails) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetSchema

`func (o *AccountactionrequestdtoAccountDetails) GetSchema() map[string]interface{}`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *AccountactionrequestdtoAccountDetails) GetSchemaOk() (*map[string]interface{}, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *AccountactionrequestdtoAccountDetails) SetSchema(v map[string]interface{})`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *AccountactionrequestdtoAccountDetails) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPendingAccessRequestIds

`func (o *AccountactionrequestdtoAccountDetails) GetPendingAccessRequestIds() []string`

GetPendingAccessRequestIds returns the PendingAccessRequestIds field if non-nil, zero value otherwise.

### GetPendingAccessRequestIdsOk

`func (o *AccountactionrequestdtoAccountDetails) GetPendingAccessRequestIdsOk() (*[]string, bool)`

GetPendingAccessRequestIdsOk returns a tuple with the PendingAccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAccessRequestIds

`func (o *AccountactionrequestdtoAccountDetails) SetPendingAccessRequestIds(v []string)`

SetPendingAccessRequestIds sets PendingAccessRequestIds field to given value.

### HasPendingAccessRequestIds

`func (o *AccountactionrequestdtoAccountDetails) HasPendingAccessRequestIds() bool`

HasPendingAccessRequestIds returns a boolean if a field has been set.

### GetFeatures

`func (o *AccountactionrequestdtoAccountDetails) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *AccountactionrequestdtoAccountDetails) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *AccountactionrequestdtoAccountDetails) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *AccountactionrequestdtoAccountDetails) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetMeta

`func (o *AccountactionrequestdtoAccountDetails) GetMeta() map[string]interface{}`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *AccountactionrequestdtoAccountDetails) GetMetaOk() (*map[string]interface{}, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *AccountactionrequestdtoAccountDetails) SetMeta(v map[string]interface{})`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *AccountactionrequestdtoAccountDetails) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


