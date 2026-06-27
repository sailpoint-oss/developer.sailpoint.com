---
id: v1-basereferencedto
title: Basereferencedto
pagination_label: Basereferencedto
sidebar_label: Basereferencedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Basereferencedto', 'V1Basereferencedto'] 
slug: /tools/sdk/go/machineidentities/models/basereferencedto
tags: ['SDK', 'Software Development Kit', 'Basereferencedto', 'V1Basereferencedto']
---

# Basereferencedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewBasereferencedto

`func NewBasereferencedto() *Basereferencedto`

NewBasereferencedto instantiates a new Basereferencedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasereferencedtoWithDefaults

`func NewBasereferencedtoWithDefaults() *Basereferencedto`

NewBasereferencedtoWithDefaults instantiates a new Basereferencedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Basereferencedto) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Basereferencedto) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Basereferencedto) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Basereferencedto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Basereferencedto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Basereferencedto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Basereferencedto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Basereferencedto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Basereferencedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Basereferencedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Basereferencedto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Basereferencedto) HasName() bool`

HasName returns a boolean if a field has been set.


