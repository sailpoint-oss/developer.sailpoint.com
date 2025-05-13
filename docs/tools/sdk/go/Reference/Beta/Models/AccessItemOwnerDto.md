---
id: beta-access-item-owner-dto
title: AccessItemOwnerDto
pagination_label: AccessItemOwnerDto
sidebar_label: AccessItemOwnerDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto'] 
slug: /tools/sdk/go/beta/models/access-item-owner-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto']
---

# AccessItemOwnerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Access item owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Access item owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Access item owner's human-readable display name. | [optional] 

## Methods

### NewAccessItemOwnerDto

`func NewAccessItemOwnerDto() *AccessItemOwnerDto`

NewAccessItemOwnerDto instantiates a new AccessItemOwnerDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemOwnerDtoWithDefaults

`func NewAccessItemOwnerDtoWithDefaults() *AccessItemOwnerDto`

NewAccessItemOwnerDtoWithDefaults instantiates a new AccessItemOwnerDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemOwnerDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemOwnerDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemOwnerDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemOwnerDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemOwnerDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemOwnerDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemOwnerDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemOwnerDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemOwnerDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemOwnerDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemOwnerDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemOwnerDto) HasName() bool`

HasName returns a boolean if a field has been set.


