---
id: v2024-access-item-requested-for-dto
title: AccessItemRequestedForDto
pagination_label: AccessItemRequestedForDto
sidebar_label: AccessItemRequestedForDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRequestedForDto', 'V2024AccessItemRequestedForDto'] 
slug: /tools/sdk/go/v2024/models/access-item-requested-for-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedForDto', 'V2024AccessItemRequestedForDto']
---

# AccessItemRequestedForDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity the access item is requested for. | [optional] 
**Id** | Pointer to **string** | ID of identity the access item is requested for. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity the access item is requested for. | [optional] 

## Methods

### NewAccessItemRequestedForDto

`func NewAccessItemRequestedForDto() *AccessItemRequestedForDto`

NewAccessItemRequestedForDto instantiates a new AccessItemRequestedForDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRequestedForDtoWithDefaults

`func NewAccessItemRequestedForDtoWithDefaults() *AccessItemRequestedForDto`

NewAccessItemRequestedForDtoWithDefaults instantiates a new AccessItemRequestedForDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemRequestedForDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemRequestedForDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemRequestedForDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemRequestedForDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemRequestedForDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRequestedForDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRequestedForDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRequestedForDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemRequestedForDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemRequestedForDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemRequestedForDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemRequestedForDto) HasName() bool`

HasName returns a boolean if a field has been set.


