---
id: v2025-import-object
title: ImportObject
pagination_label: ImportObject
sidebar_label: ImportObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportObject', 'V2025ImportObject'] 
slug: /tools/sdk/go/v2025/models/import-object
tags: ['SDK', 'Software Development Kit', 'ImportObject', 'V2025ImportObject']
---

# ImportObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of object created or updated by import. | [optional] 
**Id** | Pointer to **string** | ID of object created or updated by import. | [optional] 
**Name** | Pointer to **string** | Display name of object created or updated by import. | [optional] 

## Methods

### NewImportObject

`func NewImportObject() *ImportObject`

NewImportObject instantiates a new ImportObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportObjectWithDefaults

`func NewImportObjectWithDefaults() *ImportObject`

NewImportObjectWithDefaults instantiates a new ImportObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ImportObject) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ImportObject) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ImportObject) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ImportObject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ImportObject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ImportObject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ImportObject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ImportObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ImportObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ImportObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ImportObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ImportObject) HasName() bool`

HasName returns a boolean if a field has been set.


