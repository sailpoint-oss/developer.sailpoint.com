---
id: v1-accessitemref
title: Accessitemref
pagination_label: Accessitemref
sidebar_label: Accessitemref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemref', 'V1Accessitemref'] 
slug: /tools/sdk/go/iairecommendations/models/accessitemref
tags: ['SDK', 'Software Development Kit', 'Accessitemref', 'V1Accessitemref']
---

# Accessitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the access item to retrieve the recommendation for. | [optional] 
**Type** | Pointer to **string** | Access item's type. | [optional] 

## Methods

### NewAccessitemref

`func NewAccessitemref() *Accessitemref`

NewAccessitemref instantiates a new Accessitemref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemrefWithDefaults

`func NewAccessitemrefWithDefaults() *Accessitemref`

NewAccessitemrefWithDefaults instantiates a new Accessitemref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessitemref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Accessitemref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessitemref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessitemref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessitemref) HasType() bool`

HasType returns a boolean if a field has been set.


