---
id: v1-identityreference
title: Identityreference
pagination_label: Identityreference
sidebar_label: Identityreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityreference', 'V1Identityreference'] 
slug: /tools/sdk/go/accountdeletionrequests/models/identityreference
tags: ['SDK', 'Software Development Kit', 'Identityreference', 'V1Identityreference']
---

# Identityreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity. | [optional] 

## Methods

### NewIdentityreference

`func NewIdentityreference() *Identityreference`

NewIdentityreference instantiates a new Identityreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityreferenceWithDefaults

`func NewIdentityreferenceWithDefaults() *Identityreference`

NewIdentityreferenceWithDefaults instantiates a new Identityreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Identityreference) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identityreference) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identityreference) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Identityreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Identityreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityreference) HasName() bool`

HasName returns a boolean if a field has been set.


