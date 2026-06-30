---
id: v1-attributedefinition-schema
title: AttributedefinitionSchema
pagination_label: AttributedefinitionSchema
sidebar_label: AttributedefinitionSchema
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributedefinitionSchema', 'V1AttributedefinitionSchema'] 
slug: /tools/sdk/go/sources/models/attributedefinition-schema
tags: ['SDK', 'Software Development Kit', 'AttributedefinitionSchema', 'V1AttributedefinitionSchema']
---

# AttributedefinitionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of object being referenced | [optional] 
**Id** | Pointer to **string** | The object ID this reference applies to. | [optional] 
**Name** | Pointer to **string** | The human-readable display name of the object. | [optional] 

## Methods

### NewAttributedefinitionSchema

`func NewAttributedefinitionSchema() *AttributedefinitionSchema`

NewAttributedefinitionSchema instantiates a new AttributedefinitionSchema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributedefinitionSchemaWithDefaults

`func NewAttributedefinitionSchemaWithDefaults() *AttributedefinitionSchema`

NewAttributedefinitionSchemaWithDefaults instantiates a new AttributedefinitionSchema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributedefinitionSchema) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributedefinitionSchema) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributedefinitionSchema) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributedefinitionSchema) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AttributedefinitionSchema) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttributedefinitionSchema) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttributedefinitionSchema) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttributedefinitionSchema) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AttributedefinitionSchema) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributedefinitionSchema) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributedefinitionSchema) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributedefinitionSchema) HasName() bool`

HasName returns a boolean if a field has been set.


