---
id: pat-owner
title: PatOwner
pagination_label: PatOwner
sidebar_label: PatOwner
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PatOwner'] 
slug: /tools/sdk/go/beta/models/pat-owner
tags: ['SDK', 'Software Development Kit', 'PatOwner']
---

# PatOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | Personal access token owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **string** | Personal access token owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **string** | Personal access token owner&#39;s human-readable display name. | [optional] 

## Methods

### NewPatOwner

`func NewPatOwner() *PatOwner`

NewPatOwner instantiates a new PatOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatOwnerWithDefaults

`func NewPatOwnerWithDefaults() *PatOwner`

NewPatOwnerWithDefaults instantiates a new PatOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PatOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PatOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *PatOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PatOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PatOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PatOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PatOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatOwner) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


