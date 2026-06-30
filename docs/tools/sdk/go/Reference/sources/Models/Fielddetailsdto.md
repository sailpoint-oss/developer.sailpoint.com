---
id: v1-fielddetailsdto
title: Fielddetailsdto
pagination_label: Fielddetailsdto
sidebar_label: Fielddetailsdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Fielddetailsdto', 'V1Fielddetailsdto'] 
slug: /tools/sdk/go/sources/models/fielddetailsdto
tags: ['SDK', 'Software Development Kit', 'Fielddetailsdto', 'V1Fielddetailsdto']
---

# Fielddetailsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the attribute. | [optional] 
**Transform** | Pointer to **map[string]interface{}** | The transform to apply to the field | [optional] [default to {}]
**Attributes** | Pointer to **map[string]interface{}** | Attributes required for the transform | [optional] 
**IsRequired** | Pointer to **bool** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to false]
**Type** | Pointer to **string** | The type of the attribute.  string: For text-based data.  int: For whole numbers.  long: For larger whole numbers.  date: For date and time values.  boolean: For true/false values.  secret: For sensitive data like passwords, which will be masked and encrypted.  | [optional] 
**IsMultiValued** | Pointer to **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to false]

## Methods

### NewFielddetailsdto

`func NewFielddetailsdto() *Fielddetailsdto`

NewFielddetailsdto instantiates a new Fielddetailsdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFielddetailsdtoWithDefaults

`func NewFielddetailsdtoWithDefaults() *Fielddetailsdto`

NewFielddetailsdtoWithDefaults instantiates a new Fielddetailsdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Fielddetailsdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Fielddetailsdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Fielddetailsdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Fielddetailsdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTransform

`func (o *Fielddetailsdto) GetTransform() map[string]interface{}`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *Fielddetailsdto) GetTransformOk() (*map[string]interface{}, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *Fielddetailsdto) SetTransform(v map[string]interface{})`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *Fielddetailsdto) HasTransform() bool`

HasTransform returns a boolean if a field has been set.

### GetAttributes

`func (o *Fielddetailsdto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Fielddetailsdto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Fielddetailsdto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Fielddetailsdto) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetIsRequired

`func (o *Fielddetailsdto) GetIsRequired() bool`

GetIsRequired returns the IsRequired field if non-nil, zero value otherwise.

### GetIsRequiredOk

`func (o *Fielddetailsdto) GetIsRequiredOk() (*bool, bool)`

GetIsRequiredOk returns a tuple with the IsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRequired

`func (o *Fielddetailsdto) SetIsRequired(v bool)`

SetIsRequired sets IsRequired field to given value.

### HasIsRequired

`func (o *Fielddetailsdto) HasIsRequired() bool`

HasIsRequired returns a boolean if a field has been set.

### GetType

`func (o *Fielddetailsdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Fielddetailsdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Fielddetailsdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Fielddetailsdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIsMultiValued

`func (o *Fielddetailsdto) GetIsMultiValued() bool`

GetIsMultiValued returns the IsMultiValued field if non-nil, zero value otherwise.

### GetIsMultiValuedOk

`func (o *Fielddetailsdto) GetIsMultiValuedOk() (*bool, bool)`

GetIsMultiValuedOk returns a tuple with the IsMultiValued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiValued

`func (o *Fielddetailsdto) SetIsMultiValued(v bool)`

SetIsMultiValued sets IsMultiValued field to given value.

### HasIsMultiValued

`func (o *Fielddetailsdto) HasIsMultiValued() bool`

HasIsMultiValued returns a boolean if a field has been set.


