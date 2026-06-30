---
id: v1-attributemappings-all-of-transform-definition-attributes-input
title: AttributemappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'V1AttributemappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/go/machineaccountmappings/models/attributemappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'V1AttributemappingsAllOfTransformDefinitionAttributesInput']
---

# AttributemappingsAllOfTransformDefinitionAttributesInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The Type of Attribute | [optional] 
**Attributes** | Pointer to [**AttributemappingsAllOfTransformDefinitionAttributesInputAttributes**](attributemappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 

## Methods

### NewAttributemappingsAllOfTransformDefinitionAttributesInput

`func NewAttributemappingsAllOfTransformDefinitionAttributesInput() *AttributemappingsAllOfTransformDefinitionAttributesInput`

NewAttributemappingsAllOfTransformDefinitionAttributesInput instantiates a new AttributemappingsAllOfTransformDefinitionAttributesInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributemappingsAllOfTransformDefinitionAttributesInputWithDefaults

`func NewAttributemappingsAllOfTransformDefinitionAttributesInputWithDefaults() *AttributemappingsAllOfTransformDefinitionAttributesInput`

NewAttributemappingsAllOfTransformDefinitionAttributesInputWithDefaults instantiates a new AttributemappingsAllOfTransformDefinitionAttributesInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) GetAttributes() AttributemappingsAllOfTransformDefinitionAttributesInputAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) GetAttributesOk() (*AttributemappingsAllOfTransformDefinitionAttributesInputAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) SetAttributes(v AttributemappingsAllOfTransformDefinitionAttributesInputAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AttributemappingsAllOfTransformDefinitionAttributesInput) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


