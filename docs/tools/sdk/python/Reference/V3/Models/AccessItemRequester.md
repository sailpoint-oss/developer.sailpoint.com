---
id: access-item-requester
title: AccessItemRequester
pagination_label: AccessItemRequester
sidebar_label: AccessItemRequester
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRequester', 'AccessItemRequester'] 
slug: /tools/sdk/go/v3/models/access-item-requester
tags: ['SDK', 'Software Development Kit', 'AccessItemRequester', 'AccessItemRequester']
---

# AccessItemRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Access item requester's DTO type. | [optional] 
**Id** | Pointer to **string** | Access item requester's identity ID. | [optional] 
**Name** | Pointer to **string** | Access item owner's human-readable display name. | [optional] 

## Methods

### NewAccessItemRequester

`func NewAccessItemRequester() *AccessItemRequester`

NewAccessItemRequester instantiates a new AccessItemRequester object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRequesterWithDefaults

`func NewAccessItemRequesterWithDefaults() *AccessItemRequester`

NewAccessItemRequesterWithDefaults instantiates a new AccessItemRequester object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemRequester) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemRequester) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemRequester) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemRequester) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemRequester) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRequester) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRequester) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRequester) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemRequester) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemRequester) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemRequester) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemRequester) HasName() bool`

HasName returns a boolean if a field has been set.


