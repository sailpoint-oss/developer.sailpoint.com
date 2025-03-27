---
id: v2024-source-schemas-inner
title: SourceSchemasInner
pagination_label: SourceSchemasInner
sidebar_label: SourceSchemasInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSchemasInner', 'V2024SourceSchemasInner'] 
slug: /tools/sdk/go/v2024/models/source-schemas-inner
tags: ['SDK', 'Software Development Kit', 'SourceSchemasInner', 'V2024SourceSchemasInner']
---

# SourceSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Schema ID. | [optional] 
**Name** | Pointer to **string** | Schema&#39;s human-readable display name. | [optional] 

## Methods

### NewSourceSchemasInner

`func NewSourceSchemasInner() *SourceSchemasInner`

NewSourceSchemasInner instantiates a new SourceSchemasInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSchemasInnerWithDefaults

`func NewSourceSchemasInnerWithDefaults() *SourceSchemasInner`

NewSourceSchemasInnerWithDefaults instantiates a new SourceSchemasInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceSchemasInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSchemasInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSchemasInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceSchemasInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceSchemasInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSchemasInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSchemasInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSchemasInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceSchemasInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceSchemasInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceSchemasInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceSchemasInner) HasName() bool`

HasName returns a boolean if a field has been set.


