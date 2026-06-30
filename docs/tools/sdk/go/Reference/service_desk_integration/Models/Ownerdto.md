---
id: v1-ownerdto
title: Ownerdto
pagination_label: Ownerdto
sidebar_label: Ownerdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Ownerdto', 'V1Ownerdto'] 
slug: /tools/sdk/go/servicedeskintegration/models/ownerdto
tags: ['SDK', 'Software Development Kit', 'Ownerdto', 'V1Ownerdto']
---

# Ownerdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's name. | [optional] 

## Methods

### NewOwnerdto

`func NewOwnerdto() *Ownerdto`

NewOwnerdto instantiates a new Ownerdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerdtoWithDefaults

`func NewOwnerdtoWithDefaults() *Ownerdto`

NewOwnerdtoWithDefaults instantiates a new Ownerdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Ownerdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Ownerdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Ownerdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Ownerdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Ownerdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Ownerdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Ownerdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Ownerdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Ownerdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Ownerdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Ownerdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Ownerdto) HasName() bool`

HasName returns a boolean if a field has been set.


