---
id: v1-appaccountdetails-source-account
title: AppaccountdetailsSourceAccount
pagination_label: AppaccountdetailsSourceAccount
sidebar_label: AppaccountdetailsSourceAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppaccountdetailsSourceAccount', 'V1AppaccountdetailsSourceAccount'] 
slug: /tools/sdk/go/apps/models/appaccountdetails-source-account
tags: ['SDK', 'Software Development Kit', 'AppaccountdetailsSourceAccount', 'V1AppaccountdetailsSourceAccount']
---

# AppaccountdetailsSourceAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The account ID | [optional] 
**NativeIdentity** | Pointer to **string** | The native identity of account | [optional] 
**DisplayName** | Pointer to **string** | The display name of account | [optional] 
**SourceId** | Pointer to **string** | The source ID of account | [optional] 
**SourceDisplayName** | Pointer to **string** | The source name of account | [optional] 

## Methods

### NewAppaccountdetailsSourceAccount

`func NewAppaccountdetailsSourceAccount() *AppaccountdetailsSourceAccount`

NewAppaccountdetailsSourceAccount instantiates a new AppaccountdetailsSourceAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppaccountdetailsSourceAccountWithDefaults

`func NewAppaccountdetailsSourceAccountWithDefaults() *AppaccountdetailsSourceAccount`

NewAppaccountdetailsSourceAccountWithDefaults instantiates a new AppaccountdetailsSourceAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AppaccountdetailsSourceAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AppaccountdetailsSourceAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AppaccountdetailsSourceAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AppaccountdetailsSourceAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AppaccountdetailsSourceAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AppaccountdetailsSourceAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AppaccountdetailsSourceAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AppaccountdetailsSourceAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisplayName

`func (o *AppaccountdetailsSourceAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AppaccountdetailsSourceAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AppaccountdetailsSourceAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AppaccountdetailsSourceAccount) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceId

`func (o *AppaccountdetailsSourceAccount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AppaccountdetailsSourceAccount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AppaccountdetailsSourceAccount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AppaccountdetailsSourceAccount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceDisplayName

`func (o *AppaccountdetailsSourceAccount) GetSourceDisplayName() string`

GetSourceDisplayName returns the SourceDisplayName field if non-nil, zero value otherwise.

### GetSourceDisplayNameOk

`func (o *AppaccountdetailsSourceAccount) GetSourceDisplayNameOk() (*string, bool)`

GetSourceDisplayNameOk returns a tuple with the SourceDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDisplayName

`func (o *AppaccountdetailsSourceAccount) SetSourceDisplayName(v string)`

SetSourceDisplayName sets SourceDisplayName field to given value.

### HasSourceDisplayName

`func (o *AppaccountdetailsSourceAccount) HasSourceDisplayName() bool`

HasSourceDisplayName returns a boolean if a field has been set.


