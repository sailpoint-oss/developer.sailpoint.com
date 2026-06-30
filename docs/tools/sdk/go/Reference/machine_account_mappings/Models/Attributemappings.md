---
id: v1-attributemappings
title: Attributemappings
pagination_label: Attributemappings
sidebar_label: Attributemappings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributemappings', 'V1Attributemappings'] 
slug: /tools/sdk/go/machineaccountmappings/models/attributemappings
tags: ['SDK', 'Software Development Kit', 'Attributemappings', 'V1Attributemappings']
---

# Attributemappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | Pointer to [**AttributemappingsAllOfTarget**](attributemappings-all-of-target) |  | [optional] 
**TransformDefinition** | Pointer to [**AttributemappingsAllOfTransformDefinition**](attributemappings-all-of-transform-definition) |  | [optional] 

## Methods

### NewAttributemappings

`func NewAttributemappings() *Attributemappings`

NewAttributemappings instantiates a new Attributemappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributemappingsWithDefaults

`func NewAttributemappingsWithDefaults() *Attributemappings`

NewAttributemappingsWithDefaults instantiates a new Attributemappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTarget

`func (o *Attributemappings) GetTarget() AttributemappingsAllOfTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Attributemappings) GetTargetOk() (*AttributemappingsAllOfTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Attributemappings) SetTarget(v AttributemappingsAllOfTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *Attributemappings) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetTransformDefinition

`func (o *Attributemappings) GetTransformDefinition() AttributemappingsAllOfTransformDefinition`

GetTransformDefinition returns the TransformDefinition field if non-nil, zero value otherwise.

### GetTransformDefinitionOk

`func (o *Attributemappings) GetTransformDefinitionOk() (*AttributemappingsAllOfTransformDefinition, bool)`

GetTransformDefinitionOk returns a tuple with the TransformDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformDefinition

`func (o *Attributemappings) SetTransformDefinition(v AttributemappingsAllOfTransformDefinition)`

SetTransformDefinition sets TransformDefinition field to given value.

### HasTransformDefinition

`func (o *Attributemappings) HasTransformDefinition() bool`

HasTransformDefinition returns a boolean if a field has been set.


