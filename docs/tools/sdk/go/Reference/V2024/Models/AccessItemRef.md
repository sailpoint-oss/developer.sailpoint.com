---
id: v2024-access-item-ref
title: AccessItemRef
pagination_label: AccessItemRef
sidebar_label: AccessItemRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRef', 'V2024AccessItemRef'] 
slug: /tools/sdk/go/v2024/models/access-item-ref
tags: ['SDK', 'Software Development Kit', 'AccessItemRef', 'V2024AccessItemRef']
---

# AccessItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the access item to retrieve the recommendation for. | [optional] 
**Type** | Pointer to **string** | Access item's type. | [optional] 

## Methods

### NewAccessItemRef

`func NewAccessItemRef() *AccessItemRef`

NewAccessItemRef instantiates a new AccessItemRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRefWithDefaults

`func NewAccessItemRefWithDefaults() *AccessItemRef`

NewAccessItemRefWithDefaults instantiates a new AccessItemRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessItemRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemRef) HasType() bool`

HasType returns a boolean if a field has been set.


