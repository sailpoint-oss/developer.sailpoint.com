---
id: v2025-attribute-mappings
title: AttributeMappings
pagination_label: AttributeMappings
sidebar_label: AttributeMappings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeMappings', 'V2025AttributeMappings'] 
slug: /tools/sdk/go/v2025/models/attribute-mappings
tags: ['SDK', 'Software Development Kit', 'AttributeMappings', 'V2025AttributeMappings']
---

# AttributeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | Pointer to [**AttributeMappingsAllOfTarget**](attribute-mappings-all-of-target) |  | [optional] 
**TransformDefinition** | Pointer to [**AttributeMappingsAllOfTransformDefinition**](attribute-mappings-all-of-transform-definition) |  | [optional] 

## Methods

### NewAttributeMappings

`func NewAttributeMappings() *AttributeMappings`

NewAttributeMappings instantiates a new AttributeMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeMappingsWithDefaults

`func NewAttributeMappingsWithDefaults() *AttributeMappings`

NewAttributeMappingsWithDefaults instantiates a new AttributeMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTarget

`func (o *AttributeMappings) GetTarget() AttributeMappingsAllOfTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *AttributeMappings) GetTargetOk() (*AttributeMappingsAllOfTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *AttributeMappings) SetTarget(v AttributeMappingsAllOfTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *AttributeMappings) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetTransformDefinition

`func (o *AttributeMappings) GetTransformDefinition() AttributeMappingsAllOfTransformDefinition`

GetTransformDefinition returns the TransformDefinition field if non-nil, zero value otherwise.

### GetTransformDefinitionOk

`func (o *AttributeMappings) GetTransformDefinitionOk() (*AttributeMappingsAllOfTransformDefinition, bool)`

GetTransformDefinitionOk returns a tuple with the TransformDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformDefinition

`func (o *AttributeMappings) SetTransformDefinition(v AttributeMappingsAllOfTransformDefinition)`

SetTransformDefinition sets TransformDefinition field to given value.

### HasTransformDefinition

`func (o *AttributeMappings) HasTransformDefinition() bool`

HasTransformDefinition returns a boolean if a field has been set.


