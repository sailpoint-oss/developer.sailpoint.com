---
id: v1-selfimportexportdto
title: Selfimportexportdto
pagination_label: Selfimportexportdto
sidebar_label: Selfimportexportdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Selfimportexportdto', 'V1Selfimportexportdto'] 
slug: /tools/sdk/go/spconfig/models/selfimportexportdto
tags: ['SDK', 'Software Development Kit', 'Selfimportexportdto', 'V1Selfimportexportdto']
---

# Selfimportexportdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Imported/exported object's DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [optional] 
**Id** | Pointer to **string** | Imported/exported object's ID. | [optional] 
**Name** | Pointer to **string** | Imported/exported object's display name. | [optional] 

## Methods

### NewSelfimportexportdto

`func NewSelfimportexportdto() *Selfimportexportdto`

NewSelfimportexportdto instantiates a new Selfimportexportdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelfimportexportdtoWithDefaults

`func NewSelfimportexportdtoWithDefaults() *Selfimportexportdto`

NewSelfimportexportdtoWithDefaults instantiates a new Selfimportexportdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Selfimportexportdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Selfimportexportdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Selfimportexportdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Selfimportexportdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Selfimportexportdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Selfimportexportdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Selfimportexportdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Selfimportexportdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Selfimportexportdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Selfimportexportdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Selfimportexportdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Selfimportexportdto) HasName() bool`

HasName returns a boolean if a field has been set.


