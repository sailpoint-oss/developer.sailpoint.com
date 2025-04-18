---
id: v2024-attribute-definition-schema
title: AttributeDefinitionSchema
pagination_label: AttributeDefinitionSchema
sidebar_label: AttributeDefinitionSchema
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeDefinitionSchema', 'V2024AttributeDefinitionSchema'] 
slug: /tools/sdk/go/v2024/models/attribute-definition-schema
tags: ['SDK', 'Software Development Kit', 'AttributeDefinitionSchema', 'V2024AttributeDefinitionSchema']
---

# AttributeDefinitionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of object being referenced | [optional] 
**Id** | Pointer to **string** | The object ID this reference applies to. | [optional] 
**Name** | Pointer to **string** | The human-readable display name of the object. | [optional] 

## Methods

### NewAttributeDefinitionSchema

`func NewAttributeDefinitionSchema() *AttributeDefinitionSchema`

NewAttributeDefinitionSchema instantiates a new AttributeDefinitionSchema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeDefinitionSchemaWithDefaults

`func NewAttributeDefinitionSchemaWithDefaults() *AttributeDefinitionSchema`

NewAttributeDefinitionSchemaWithDefaults instantiates a new AttributeDefinitionSchema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributeDefinitionSchema) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeDefinitionSchema) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeDefinitionSchema) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeDefinitionSchema) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AttributeDefinitionSchema) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttributeDefinitionSchema) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttributeDefinitionSchema) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttributeDefinitionSchema) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AttributeDefinitionSchema) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributeDefinitionSchema) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributeDefinitionSchema) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributeDefinitionSchema) HasName() bool`

HasName returns a boolean if a field has been set.


