---
id: owner-reference
title: OwnerReference
pagination_label: OwnerReference
sidebar_label: OwnerReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OwnerReference', 'OwnerReference'] 
slug: /tools/sdk/go/v3/models/owner-reference
tags: ['SDK', 'Software Development Kit', 'OwnerReference', 'OwnerReference']
---

# OwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Methods

### NewOwnerReference

`func NewOwnerReference() *OwnerReference`

NewOwnerReference instantiates a new OwnerReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerReferenceWithDefaults

`func NewOwnerReferenceWithDefaults() *OwnerReference`

NewOwnerReferenceWithDefaults instantiates a new OwnerReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *OwnerReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OwnerReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OwnerReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OwnerReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *OwnerReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OwnerReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OwnerReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OwnerReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OwnerReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerReference) HasName() bool`

HasName returns a boolean if a field has been set.


