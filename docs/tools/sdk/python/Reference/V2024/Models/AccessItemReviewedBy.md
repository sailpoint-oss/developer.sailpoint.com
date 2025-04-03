---
id: v2024-access-item-reviewed-by
title: AccessItemReviewedBy
pagination_label: AccessItemReviewedBy
sidebar_label: AccessItemReviewedBy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy'] 
slug: /tools/sdk/go/v2024/models/access-item-reviewed-by
tags: ['SDK', 'Software Development Kit', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy']
---

# AccessItemReviewedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | Pointer to **string** | ID of identity who reviewed the access item request. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Methods

### NewAccessItemReviewedBy

`func NewAccessItemReviewedBy() *AccessItemReviewedBy`

NewAccessItemReviewedBy instantiates a new AccessItemReviewedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemReviewedByWithDefaults

`func NewAccessItemReviewedByWithDefaults() *AccessItemReviewedBy`

NewAccessItemReviewedByWithDefaults instantiates a new AccessItemReviewedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemReviewedBy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemReviewedBy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemReviewedBy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemReviewedBy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemReviewedBy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemReviewedBy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemReviewedBy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemReviewedBy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemReviewedBy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemReviewedBy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemReviewedBy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemReviewedBy) HasName() bool`

HasName returns a boolean if a field has been set.


