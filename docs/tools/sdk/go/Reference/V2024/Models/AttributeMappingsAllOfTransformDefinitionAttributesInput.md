---
id: v2024-attribute-mappings-all-of-transform-definition-attributes-input
title: AttributeMappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2024AttributeMappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/go/v2024/models/attribute-mappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2024AttributeMappingsAllOfTransformDefinitionAttributesInput']
---

# AttributeMappingsAllOfTransformDefinitionAttributesInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The Type of Attribute | [optional] 
**Attributes** | Pointer to [**AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes**](attribute-mappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 

## Methods

### NewAttributeMappingsAllOfTransformDefinitionAttributesInput

`func NewAttributeMappingsAllOfTransformDefinitionAttributesInput() *AttributeMappingsAllOfTransformDefinitionAttributesInput`

NewAttributeMappingsAllOfTransformDefinitionAttributesInput instantiates a new AttributeMappingsAllOfTransformDefinitionAttributesInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeMappingsAllOfTransformDefinitionAttributesInputWithDefaults

`func NewAttributeMappingsAllOfTransformDefinitionAttributesInputWithDefaults() *AttributeMappingsAllOfTransformDefinitionAttributesInput`

NewAttributeMappingsAllOfTransformDefinitionAttributesInputWithDefaults instantiates a new AttributeMappingsAllOfTransformDefinitionAttributesInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) GetAttributes() AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) GetAttributesOk() (*AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) SetAttributes(v AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AttributeMappingsAllOfTransformDefinitionAttributesInput) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


