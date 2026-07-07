---
id: v1-taskresultdto
title: Taskresultdto
pagination_label: Taskresultdto
sidebar_label: Taskresultdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskresultdto', 'V1Taskresultdto'] 
slug: /tools/sdk/go/accounts/models/taskresultdto
tags: ['SDK', 'Software Development Kit', 'Taskresultdto', 'V1Taskresultdto']
---

# Taskresultdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Task result DTO type. | [optional] 
**Id** | Pointer to **string** | Task result ID. | [optional] 
**Name** | Pointer to **NullableString** | Task result display name. | [optional] 

## Methods

### NewTaskresultdto

`func NewTaskresultdto() *Taskresultdto`

NewTaskresultdto instantiates a new Taskresultdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskresultdtoWithDefaults

`func NewTaskresultdtoWithDefaults() *Taskresultdto`

NewTaskresultdtoWithDefaults instantiates a new Taskresultdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Taskresultdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taskresultdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taskresultdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Taskresultdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Taskresultdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskresultdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskresultdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Taskresultdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Taskresultdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Taskresultdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Taskresultdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Taskresultdto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Taskresultdto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Taskresultdto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

