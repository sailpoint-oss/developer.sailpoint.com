---
id: v1-attributemappings-all-of-transform-definition
title: AttributemappingsAllOfTransformDefinition
pagination_label: AttributemappingsAllOfTransformDefinition
sidebar_label: AttributemappingsAllOfTransformDefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributemappingsAllOfTransformDefinition', 'V1AttributemappingsAllOfTransformDefinition'] 
slug: /tools/sdk/go/machineaccountmappings/models/attributemappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinition', 'V1AttributemappingsAllOfTransformDefinition']
---

# AttributemappingsAllOfTransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of transform | [optional] 
**Attributes** | Pointer to [**AttributemappingsAllOfTransformDefinitionAttributes**](attributemappings-all-of-transform-definition-attributes) |  | [optional] 
**Id** | Pointer to **string** | Transform Operation | [optional] 

## Methods

### NewAttributemappingsAllOfTransformDefinition

`func NewAttributemappingsAllOfTransformDefinition() *AttributemappingsAllOfTransformDefinition`

NewAttributemappingsAllOfTransformDefinition instantiates a new AttributemappingsAllOfTransformDefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributemappingsAllOfTransformDefinitionWithDefaults

`func NewAttributemappingsAllOfTransformDefinitionWithDefaults() *AttributemappingsAllOfTransformDefinition`

NewAttributemappingsAllOfTransformDefinitionWithDefaults instantiates a new AttributemappingsAllOfTransformDefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributemappingsAllOfTransformDefinition) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributemappingsAllOfTransformDefinition) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributemappingsAllOfTransformDefinition) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributemappingsAllOfTransformDefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *AttributemappingsAllOfTransformDefinition) GetAttributes() AttributemappingsAllOfTransformDefinitionAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttributemappingsAllOfTransformDefinition) GetAttributesOk() (*AttributemappingsAllOfTransformDefinitionAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttributemappingsAllOfTransformDefinition) SetAttributes(v AttributemappingsAllOfTransformDefinitionAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AttributemappingsAllOfTransformDefinition) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetId

`func (o *AttributemappingsAllOfTransformDefinition) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttributemappingsAllOfTransformDefinition) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttributemappingsAllOfTransformDefinition) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttributemappingsAllOfTransformDefinition) HasId() bool`

HasId returns a boolean if a field has been set.


