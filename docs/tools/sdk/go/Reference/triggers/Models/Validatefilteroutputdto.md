---
id: v1-validatefilteroutputdto
title: Validatefilteroutputdto
pagination_label: Validatefilteroutputdto
sidebar_label: Validatefilteroutputdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Validatefilteroutputdto', 'V1Validatefilteroutputdto'] 
slug: /tools/sdk/go/triggers/models/validatefilteroutputdto
tags: ['SDK', 'Software Development Kit', 'Validatefilteroutputdto', 'V1Validatefilteroutputdto']
---

# Validatefilteroutputdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** | Pointer to **bool** | When this field is true, the filter expression is valid against the input. | [optional] [default to false]
**IsValidJSONPath** | Pointer to **bool** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to false]
**IsPathExist** | Pointer to **bool** | When this field is true, the filter expression is using an existing path. | [optional] [default to false]

## Methods

### NewValidatefilteroutputdto

`func NewValidatefilteroutputdto() *Validatefilteroutputdto`

NewValidatefilteroutputdto instantiates a new Validatefilteroutputdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatefilteroutputdtoWithDefaults

`func NewValidatefilteroutputdtoWithDefaults() *Validatefilteroutputdto`

NewValidatefilteroutputdtoWithDefaults instantiates a new Validatefilteroutputdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsValid

`func (o *Validatefilteroutputdto) GetIsValid() bool`

GetIsValid returns the IsValid field if non-nil, zero value otherwise.

### GetIsValidOk

`func (o *Validatefilteroutputdto) GetIsValidOk() (*bool, bool)`

GetIsValidOk returns a tuple with the IsValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValid

`func (o *Validatefilteroutputdto) SetIsValid(v bool)`

SetIsValid sets IsValid field to given value.

### HasIsValid

`func (o *Validatefilteroutputdto) HasIsValid() bool`

HasIsValid returns a boolean if a field has been set.

### GetIsValidJSONPath

`func (o *Validatefilteroutputdto) GetIsValidJSONPath() bool`

GetIsValidJSONPath returns the IsValidJSONPath field if non-nil, zero value otherwise.

### GetIsValidJSONPathOk

`func (o *Validatefilteroutputdto) GetIsValidJSONPathOk() (*bool, bool)`

GetIsValidJSONPathOk returns a tuple with the IsValidJSONPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValidJSONPath

`func (o *Validatefilteroutputdto) SetIsValidJSONPath(v bool)`

SetIsValidJSONPath sets IsValidJSONPath field to given value.

### HasIsValidJSONPath

`func (o *Validatefilteroutputdto) HasIsValidJSONPath() bool`

HasIsValidJSONPath returns a boolean if a field has been set.

### GetIsPathExist

`func (o *Validatefilteroutputdto) GetIsPathExist() bool`

GetIsPathExist returns the IsPathExist field if non-nil, zero value otherwise.

### GetIsPathExistOk

`func (o *Validatefilteroutputdto) GetIsPathExistOk() (*bool, bool)`

GetIsPathExistOk returns a tuple with the IsPathExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPathExist

`func (o *Validatefilteroutputdto) SetIsPathExist(v bool)`

SetIsPathExist sets IsPathExist field to given value.

### HasIsPathExist

`func (o *Validatefilteroutputdto) HasIsPathExist() bool`

HasIsPathExist returns a boolean if a field has been set.


