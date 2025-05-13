---
id: identity-reference
title: IdentityReference
pagination_label: IdentityReference
sidebar_label: IdentityReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityReference', 'IdentityReference'] 
slug: /tools/sdk/go/v3/models/identity-reference
tags: ['SDK', 'Software Development Kit', 'IdentityReference', 'IdentityReference']
---

# IdentityReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity. | [optional] 

## Methods

### NewIdentityReference

`func NewIdentityReference() *IdentityReference`

NewIdentityReference instantiates a new IdentityReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityReferenceWithDefaults

`func NewIdentityReferenceWithDefaults() *IdentityReference`

NewIdentityReferenceWithDefaults instantiates a new IdentityReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityReference) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityReference) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityReference) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *IdentityReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityReference) HasName() bool`

HasName returns a boolean if a field has been set.


