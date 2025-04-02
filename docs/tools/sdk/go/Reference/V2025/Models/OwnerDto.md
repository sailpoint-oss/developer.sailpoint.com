---
id: owner-dto
title: OwnerDto
pagination_label: OwnerDto
sidebar_label: OwnerDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OwnerDto', 'OwnerDto'] 
slug: /tools/sdk/go//models/owner-dto
tags: ['SDK', 'Software Development Kit', 'OwnerDto', 'OwnerDto']
---

# OwnerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's name. | [optional] 

## Methods

### NewOwnerDto

`func NewOwnerDto() *OwnerDto`

NewOwnerDto instantiates a new OwnerDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerDtoWithDefaults

`func NewOwnerDtoWithDefaults() *OwnerDto`

NewOwnerDtoWithDefaults instantiates a new OwnerDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *OwnerDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OwnerDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OwnerDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OwnerDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *OwnerDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OwnerDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OwnerDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OwnerDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OwnerDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerDto) HasName() bool`

HasName returns a boolean if a field has been set.


