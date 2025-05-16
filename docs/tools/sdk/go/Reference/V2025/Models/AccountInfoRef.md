---
id: v2025-account-info-ref
title: AccountInfoRef
pagination_label: AccountInfoRef
sidebar_label: AccountInfoRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountInfoRef', 'V2025AccountInfoRef'] 
slug: /tools/sdk/go/v2025/models/account-info-ref
tags: ['SDK', 'Software Development Kit', 'AccountInfoRef', 'V2025AccountInfoRef']
---

# AccountInfoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | Pointer to **string** | The 'distinguishedName' attribute for the account | [optional] 
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | The account id | [optional] 
**Name** | Pointer to **string** | The account display name | [optional] 

## Methods

### NewAccountInfoRef

`func NewAccountInfoRef() *AccountInfoRef`

NewAccountInfoRef instantiates a new AccountInfoRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountInfoRefWithDefaults

`func NewAccountInfoRefWithDefaults() *AccountInfoRef`

NewAccountInfoRefWithDefaults instantiates a new AccountInfoRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *AccountInfoRef) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccountInfoRef) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccountInfoRef) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccountInfoRef) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountInfoRef) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountInfoRef) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountInfoRef) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountInfoRef) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetType

`func (o *AccountInfoRef) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountInfoRef) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountInfoRef) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *AccountInfoRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccountInfoRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountInfoRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountInfoRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountInfoRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountInfoRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountInfoRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountInfoRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountInfoRef) HasName() bool`

HasName returns a boolean if a field has been set.


