---
id: v2025-access-item-requested-for
title: AccessItemRequestedFor
pagination_label: AccessItemRequestedFor
sidebar_label: AccessItemRequestedFor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRequestedFor', 'V2025AccessItemRequestedFor'] 
slug: /tools/sdk/go/v2025/models/access-item-requested-for
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedFor', 'V2025AccessItemRequestedFor']
---

# AccessItemRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity the access item is requested for. | [optional] 
**Id** | Pointer to **string** | ID of identity the access item is requested for. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity the access item is requested for. | [optional] 

## Methods

### NewAccessItemRequestedFor

`func NewAccessItemRequestedFor() *AccessItemRequestedFor`

NewAccessItemRequestedFor instantiates a new AccessItemRequestedFor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRequestedForWithDefaults

`func NewAccessItemRequestedForWithDefaults() *AccessItemRequestedFor`

NewAccessItemRequestedForWithDefaults instantiates a new AccessItemRequestedFor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemRequestedFor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemRequestedFor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemRequestedFor) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemRequestedFor) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemRequestedFor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemRequestedFor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemRequestedFor) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemRequestedFor) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemRequestedFor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemRequestedFor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemRequestedFor) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemRequestedFor) HasName() bool`

HasName returns a boolean if a field has been set.


