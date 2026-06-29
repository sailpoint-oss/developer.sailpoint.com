---
id: v1-accountinforef
title: Accountinforef
pagination_label: Accountinforef
sidebar_label: Accountinforef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountinforef', 'V1Accountinforef'] 
slug: /tools/sdk/go/accessrequests/models/accountinforef
tags: ['SDK', 'Software Development Kit', 'Accountinforef', 'V1Accountinforef']
---

# Accountinforef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | Pointer to **string** | The 'distinguishedName' attribute for the account | [optional] 
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | The account id | [optional] 
**Name** | Pointer to **string** | The account display name | [optional] 

## Methods

### NewAccountinforef

`func NewAccountinforef() *Accountinforef`

NewAccountinforef instantiates a new Accountinforef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountinforefWithDefaults

`func NewAccountinforefWithDefaults() *Accountinforef`

NewAccountinforefWithDefaults instantiates a new Accountinforef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Accountinforef) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Accountinforef) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Accountinforef) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Accountinforef) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Accountinforef) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Accountinforef) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Accountinforef) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Accountinforef) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetType

`func (o *Accountinforef) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accountinforef) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accountinforef) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Accountinforef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Accountinforef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accountinforef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accountinforef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accountinforef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accountinforef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accountinforef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accountinforef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accountinforef) HasName() bool`

HasName returns a boolean if a field has been set.


