---
id: v1-accountdetails
title: Accountdetails
pagination_label: Accountdetails
sidebar_label: Accountdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountdetails', 'V1Accountdetails'] 
slug: /tools/sdk/go/accountdeletionrequests/models/accountdetails
tags: ['SDK', 'Software Development Kit', 'Accountdetails', 'V1Accountdetails']
---

# Accountdetails

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

### NewAccountdetails

`func NewAccountdetails() *Accountdetails`

NewAccountdetails instantiates a new Accountdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountdetailsWithDefaults

`func NewAccountdetailsWithDefaults() *Accountdetails`

NewAccountdetailsWithDefaults instantiates a new Accountdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accountdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accountdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accountdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accountdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accountdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accountdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accountdetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accountdetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccountId

`func (o *Accountdetails) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Accountdetails) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Accountdetails) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Accountdetails) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetDescription

`func (o *Accountdetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accountdetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accountdetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accountdetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Accountdetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Accountdetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Accountdetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Accountdetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *Accountdetails) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Accountdetails) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Accountdetails) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Accountdetails) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetDisplayName

`func (o *Accountdetails) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Accountdetails) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Accountdetails) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Accountdetails) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisabled

`func (o *Accountdetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *Accountdetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *Accountdetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *Accountdetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *Accountdetails) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *Accountdetails) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *Accountdetails) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *Accountdetails) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetUncorrelated

`func (o *Accountdetails) GetUncorrelated() bool`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *Accountdetails) GetUncorrelatedOk() (*bool, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *Accountdetails) SetUncorrelated(v bool)`

SetUncorrelated sets Uncorrelated field to given value.

### HasUncorrelated

`func (o *Accountdetails) HasUncorrelated() bool`

HasUncorrelated returns a boolean if a field has been set.

### GetSystemAccount

`func (o *Accountdetails) GetSystemAccount() bool`

GetSystemAccount returns the SystemAccount field if non-nil, zero value otherwise.

### GetSystemAccountOk

`func (o *Accountdetails) GetSystemAccountOk() (*bool, bool)`

GetSystemAccountOk returns a tuple with the SystemAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemAccount

`func (o *Accountdetails) SetSystemAccount(v bool)`

SetSystemAccount sets SystemAccount field to given value.

### HasSystemAccount

`func (o *Accountdetails) HasSystemAccount() bool`

HasSystemAccount returns a boolean if a field has been set.

### GetAuthoritative

`func (o *Accountdetails) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *Accountdetails) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *Accountdetails) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *Accountdetails) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetSupportsPasswordChange

`func (o *Accountdetails) GetSupportsPasswordChange() bool`

GetSupportsPasswordChange returns the SupportsPasswordChange field if non-nil, zero value otherwise.

### GetSupportsPasswordChangeOk

`func (o *Accountdetails) GetSupportsPasswordChangeOk() (*bool, bool)`

GetSupportsPasswordChangeOk returns a tuple with the SupportsPasswordChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsPasswordChange

`func (o *Accountdetails) SetSupportsPasswordChange(v bool)`

SetSupportsPasswordChange sets SupportsPasswordChange field to given value.

### HasSupportsPasswordChange

`func (o *Accountdetails) HasSupportsPasswordChange() bool`

HasSupportsPasswordChange returns a boolean if a field has been set.

### GetAttributes

`func (o *Accountdetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Accountdetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Accountdetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Accountdetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetApplication

`func (o *Accountdetails) GetApplication() map[string]interface{}`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *Accountdetails) GetApplicationOk() (*map[string]interface{}, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *Accountdetails) SetApplication(v map[string]interface{})`

SetApplication sets Application field to given value.

### HasApplication

`func (o *Accountdetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetIdentity

`func (o *Accountdetails) GetIdentity() map[string]interface{}`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountdetails) GetIdentityOk() (*map[string]interface{}, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountdetails) SetIdentity(v map[string]interface{})`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Accountdetails) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetSchema

`func (o *Accountdetails) GetSchema() map[string]interface{}`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *Accountdetails) GetSchemaOk() (*map[string]interface{}, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *Accountdetails) SetSchema(v map[string]interface{})`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *Accountdetails) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPendingAccessRequestIds

`func (o *Accountdetails) GetPendingAccessRequestIds() []string`

GetPendingAccessRequestIds returns the PendingAccessRequestIds field if non-nil, zero value otherwise.

### GetPendingAccessRequestIdsOk

`func (o *Accountdetails) GetPendingAccessRequestIdsOk() (*[]string, bool)`

GetPendingAccessRequestIdsOk returns a tuple with the PendingAccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAccessRequestIds

`func (o *Accountdetails) SetPendingAccessRequestIds(v []string)`

SetPendingAccessRequestIds sets PendingAccessRequestIds field to given value.

### HasPendingAccessRequestIds

`func (o *Accountdetails) HasPendingAccessRequestIds() bool`

HasPendingAccessRequestIds returns a boolean if a field has been set.

### GetFeatures

`func (o *Accountdetails) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *Accountdetails) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *Accountdetails) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *Accountdetails) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetMeta

`func (o *Accountdetails) GetMeta() map[string]interface{}`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *Accountdetails) GetMetaOk() (*map[string]interface{}, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *Accountdetails) SetMeta(v map[string]interface{})`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *Accountdetails) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


