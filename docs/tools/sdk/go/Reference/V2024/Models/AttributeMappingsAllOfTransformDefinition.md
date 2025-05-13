---
id: v2024-attribute-mappings-all-of-transform-definition
title: AttributeMappingsAllOfTransformDefinition
pagination_label: AttributeMappingsAllOfTransformDefinition
sidebar_label: AttributeMappingsAllOfTransformDefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition'] 
slug: /tools/sdk/go/v2024/models/attribute-mappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition']
---

# AttributeMappingsAllOfTransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of transform | [optional] 
**Attributes** | Pointer to [**AttributeMappingsAllOfTransformDefinitionAttributes**](attribute-mappings-all-of-transform-definition-attributes) |  | [optional] 
**Id** | Pointer to **string** | Transform Operation | [optional] 

## Methods

### NewAttributeMappingsAllOfTransformDefinition

`func NewAttributeMappingsAllOfTransformDefinition() *AttributeMappingsAllOfTransformDefinition`

NewAttributeMappingsAllOfTransformDefinition instantiates a new AttributeMappingsAllOfTransformDefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeMappingsAllOfTransformDefinitionWithDefaults

`func NewAttributeMappingsAllOfTransformDefinitionWithDefaults() *AttributeMappingsAllOfTransformDefinition`

NewAttributeMappingsAllOfTransformDefinitionWithDefaults instantiates a new AttributeMappingsAllOfTransformDefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributeMappingsAllOfTransformDefinition) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeMappingsAllOfTransformDefinition) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeMappingsAllOfTransformDefinition) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeMappingsAllOfTransformDefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *AttributeMappingsAllOfTransformDefinition) GetAttributes() AttributeMappingsAllOfTransformDefinitionAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttributeMappingsAllOfTransformDefinition) GetAttributesOk() (*AttributeMappingsAllOfTransformDefinitionAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttributeMappingsAllOfTransformDefinition) SetAttributes(v AttributeMappingsAllOfTransformDefinitionAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AttributeMappingsAllOfTransformDefinition) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetId

`func (o *AttributeMappingsAllOfTransformDefinition) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttributeMappingsAllOfTransformDefinition) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttributeMappingsAllOfTransformDefinition) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttributeMappingsAllOfTransformDefinition) HasId() bool`

HasId returns a boolean if a field has been set.


