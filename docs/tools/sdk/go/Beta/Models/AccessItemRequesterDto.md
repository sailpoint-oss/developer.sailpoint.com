---
id: access-item-requester-dto
title: AccessItemRequesterDto
pagination_label: AccessItemRequesterDto
sidebar_label: AccessItemRequesterDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessItemRequesterDto'] 
slug: /tools/sdk/go/beta/models/access-item-requester-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemRequesterDto']
---

# AccessItemRequesterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | Access item requester&#39;s DTO type. | [optional] 
**Id** |  Pointer to **string** | Access item requester&#39;s identity ID. | [optional] 
**Name** |  Pointer to **string** | Access item owner&#39;s human-readable display name. | [optional] 

## Methods

### NewAccessItemRequesterDto

`func NewAccessItemRequesterDto() *AccessItemRequesterDto`

NewAccessItemRequesterDto instantiates a new AccessItemRequesterDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRequesterDtoWithDefaults

`func NewAccessItemRequesterDtoWithDefaults() *AccessItemRequesterDto`

NewAccessItemRequesterDtoWithDefaults instantiates a new AccessItemRequesterDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemRequesterDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemRequesterDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemRequesterDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemRequesterDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemRequesterDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRequesterDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRequesterDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRequesterDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemRequesterDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemRequesterDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemRequesterDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemRequesterDto) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


