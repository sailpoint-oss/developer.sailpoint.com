---
id: beta-app-account-details-source-account
title: AppAccountDetailsSourceAccount
pagination_label: AppAccountDetailsSourceAccount
sidebar_label: AppAccountDetailsSourceAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppAccountDetailsSourceAccount', 'BetaAppAccountDetailsSourceAccount'] 
slug: /tools/sdk/go/beta/models/app-account-details-source-account
tags: ['SDK', 'Software Development Kit', 'AppAccountDetailsSourceAccount', 'BetaAppAccountDetailsSourceAccount']
---

# AppAccountDetailsSourceAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The account ID | [optional] 
**NativeIdentity** | Pointer to **string** | The native identity of account | [optional] 
**DisplayName** | Pointer to **string** | The display name of account | [optional] 
**SourceId** | Pointer to **string** | The source ID of account | [optional] 
**SourceDisplayName** | Pointer to **string** | The source name of account | [optional] 

## Methods

### NewAppAccountDetailsSourceAccount

`func NewAppAccountDetailsSourceAccount() *AppAccountDetailsSourceAccount`

NewAppAccountDetailsSourceAccount instantiates a new AppAccountDetailsSourceAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppAccountDetailsSourceAccountWithDefaults

`func NewAppAccountDetailsSourceAccountWithDefaults() *AppAccountDetailsSourceAccount`

NewAppAccountDetailsSourceAccountWithDefaults instantiates a new AppAccountDetailsSourceAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AppAccountDetailsSourceAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AppAccountDetailsSourceAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AppAccountDetailsSourceAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AppAccountDetailsSourceAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AppAccountDetailsSourceAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AppAccountDetailsSourceAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AppAccountDetailsSourceAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AppAccountDetailsSourceAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisplayName

`func (o *AppAccountDetailsSourceAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AppAccountDetailsSourceAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AppAccountDetailsSourceAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AppAccountDetailsSourceAccount) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceId

`func (o *AppAccountDetailsSourceAccount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AppAccountDetailsSourceAccount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AppAccountDetailsSourceAccount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AppAccountDetailsSourceAccount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceDisplayName

`func (o *AppAccountDetailsSourceAccount) GetSourceDisplayName() string`

GetSourceDisplayName returns the SourceDisplayName field if non-nil, zero value otherwise.

### GetSourceDisplayNameOk

`func (o *AppAccountDetailsSourceAccount) GetSourceDisplayNameOk() (*string, bool)`

GetSourceDisplayNameOk returns a tuple with the SourceDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDisplayName

`func (o *AppAccountDetailsSourceAccount) SetSourceDisplayName(v string)`

SetSourceDisplayName sets SourceDisplayName field to given value.

### HasSourceDisplayName

`func (o *AppAccountDetailsSourceAccount) HasSourceDisplayName() bool`

HasSourceDisplayName returns a boolean if a field has been set.


