---
id: field-details-dto
title: FieldDetailsDto
pagination_label: FieldDetailsDto
sidebar_label: FieldDetailsDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FieldDetailsDto'] 
slug: /tools/sdk/go/beta/models/field-details-dto
tags: ['SDK', 'Software Development Kit', 'FieldDetailsDto']
---

# FieldDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **string** | The name of the attribute. | [optional] 
**Transform** |  Pointer to **map[string]interface{}** | The transform to apply to the field | [optional] [default to {}]
**Attributes** |  Pointer to **map[string]interface{}** | Attributes required for the transform | [optional] 
**IsRequired** |  Pointer to **bool** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to false]
**Type** |  Pointer to **string** | The type of the attribute. | [optional] 
**IsMultiValued** |  Pointer to **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to false]

## Methods

### NewFieldDetailsDto

`func NewFieldDetailsDto() *FieldDetailsDto`

NewFieldDetailsDto instantiates a new FieldDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFieldDetailsDtoWithDefaults

`func NewFieldDetailsDtoWithDefaults() *FieldDetailsDto`

NewFieldDetailsDtoWithDefaults instantiates a new FieldDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FieldDetailsDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FieldDetailsDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FieldDetailsDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FieldDetailsDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTransform

`func (o *FieldDetailsDto) GetTransform() map[string]interface{}`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *FieldDetailsDto) GetTransformOk() (*map[string]interface{}, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *FieldDetailsDto) SetTransform(v map[string]interface{})`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *FieldDetailsDto) HasTransform() bool`

HasTransform returns a boolean if a field has been set.

### GetAttributes

`func (o *FieldDetailsDto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *FieldDetailsDto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *FieldDetailsDto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *FieldDetailsDto) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetIsRequired

`func (o *FieldDetailsDto) GetIsRequired() bool`

GetIsRequired returns the IsRequired field if non-nil, zero value otherwise.

### GetIsRequiredOk

`func (o *FieldDetailsDto) GetIsRequiredOk() (*bool, bool)`

GetIsRequiredOk returns a tuple with the IsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRequired

`func (o *FieldDetailsDto) SetIsRequired(v bool)`

SetIsRequired sets IsRequired field to given value.

### HasIsRequired

`func (o *FieldDetailsDto) HasIsRequired() bool`

HasIsRequired returns a boolean if a field has been set.

### GetType

`func (o *FieldDetailsDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FieldDetailsDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FieldDetailsDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FieldDetailsDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIsMultiValued

`func (o *FieldDetailsDto) GetIsMultiValued() bool`

GetIsMultiValued returns the IsMultiValued field if non-nil, zero value otherwise.

### GetIsMultiValuedOk

`func (o *FieldDetailsDto) GetIsMultiValuedOk() (*bool, bool)`

GetIsMultiValuedOk returns a tuple with the IsMultiValued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiValued

`func (o *FieldDetailsDto) SetIsMultiValued(v bool)`

SetIsMultiValued sets IsMultiValued field to given value.

### HasIsMultiValued

`func (o *FieldDetailsDto) HasIsMultiValued() bool`

HasIsMultiValued returns a boolean if a field has been set.


[[Back to top]](#) 


