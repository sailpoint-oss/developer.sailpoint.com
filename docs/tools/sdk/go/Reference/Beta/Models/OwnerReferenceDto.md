---
id: beta-owner-reference-dto
title: OwnerReferenceDto
pagination_label: OwnerReferenceDto
sidebar_label: OwnerReferenceDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OwnerReferenceDto', 'BetaOwnerReferenceDto'] 
slug: /tools/sdk/go/beta/models/owner-reference-dto
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceDto', 'BetaOwnerReferenceDto']
---

# OwnerReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The owner id for the entitlement | [optional] 
**Name** | Pointer to **string** | The owner name for the entitlement | [optional] 
**Type** | Pointer to **string** | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Methods

### NewOwnerReferenceDto

`func NewOwnerReferenceDto() *OwnerReferenceDto`

NewOwnerReferenceDto instantiates a new OwnerReferenceDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerReferenceDtoWithDefaults

`func NewOwnerReferenceDtoWithDefaults() *OwnerReferenceDto`

NewOwnerReferenceDtoWithDefaults instantiates a new OwnerReferenceDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OwnerReferenceDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OwnerReferenceDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OwnerReferenceDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OwnerReferenceDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OwnerReferenceDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerReferenceDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerReferenceDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerReferenceDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *OwnerReferenceDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OwnerReferenceDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OwnerReferenceDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OwnerReferenceDto) HasType() bool`

HasType returns a boolean if a field has been set.


