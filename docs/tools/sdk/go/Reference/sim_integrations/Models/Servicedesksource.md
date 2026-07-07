---
id: v1-servicedesksource
title: Servicedesksource
pagination_label: Servicedesksource
sidebar_label: Servicedesksource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Servicedesksource', 'V1Servicedesksource'] 
slug: /tools/sdk/go/simintegrations/models/servicedesksource
tags: ['SDK', 'Software Development Kit', 'Servicedesksource', 'V1Servicedesksource']
---

# Servicedesksource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of source for service desk integration template. | [optional] 
**Id** | Pointer to **string** | ID of source for service desk integration template. | [optional] 
**Name** | Pointer to **string** | Human-readable name of source for service desk integration template. | [optional] 

## Methods

### NewServicedesksource

`func NewServicedesksource() *Servicedesksource`

NewServicedesksource instantiates a new Servicedesksource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServicedesksourceWithDefaults

`func NewServicedesksourceWithDefaults() *Servicedesksource`

NewServicedesksourceWithDefaults instantiates a new Servicedesksource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Servicedesksource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Servicedesksource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Servicedesksource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Servicedesksource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Servicedesksource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Servicedesksource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Servicedesksource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Servicedesksource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Servicedesksource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Servicedesksource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Servicedesksource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Servicedesksource) HasName() bool`

HasName returns a boolean if a field has been set.


