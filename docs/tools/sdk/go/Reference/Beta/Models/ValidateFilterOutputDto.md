---
id: beta-validate-filter-output-dto
title: ValidateFilterOutputDto
pagination_label: ValidateFilterOutputDto
sidebar_label: ValidateFilterOutputDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ValidateFilterOutputDto', 'BetaValidateFilterOutputDto'] 
slug: /tools/sdk/go/beta/models/validate-filter-output-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterOutputDto', 'BetaValidateFilterOutputDto']
---

# ValidateFilterOutputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** | Pointer to **bool** | When this field is true, the filter expression is valid against the input. | [optional] [default to false]
**IsValidJSONPath** | Pointer to **bool** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to false]
**IsPathExist** | Pointer to **bool** | When this field is true, the filter expression is using an existing path. | [optional] [default to false]

## Methods

### NewValidateFilterOutputDto

`func NewValidateFilterOutputDto() *ValidateFilterOutputDto`

NewValidateFilterOutputDto instantiates a new ValidateFilterOutputDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateFilterOutputDtoWithDefaults

`func NewValidateFilterOutputDtoWithDefaults() *ValidateFilterOutputDto`

NewValidateFilterOutputDtoWithDefaults instantiates a new ValidateFilterOutputDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsValid

`func (o *ValidateFilterOutputDto) GetIsValid() bool`

GetIsValid returns the IsValid field if non-nil, zero value otherwise.

### GetIsValidOk

`func (o *ValidateFilterOutputDto) GetIsValidOk() (*bool, bool)`

GetIsValidOk returns a tuple with the IsValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValid

`func (o *ValidateFilterOutputDto) SetIsValid(v bool)`

SetIsValid sets IsValid field to given value.

### HasIsValid

`func (o *ValidateFilterOutputDto) HasIsValid() bool`

HasIsValid returns a boolean if a field has been set.

### GetIsValidJSONPath

`func (o *ValidateFilterOutputDto) GetIsValidJSONPath() bool`

GetIsValidJSONPath returns the IsValidJSONPath field if non-nil, zero value otherwise.

### GetIsValidJSONPathOk

`func (o *ValidateFilterOutputDto) GetIsValidJSONPathOk() (*bool, bool)`

GetIsValidJSONPathOk returns a tuple with the IsValidJSONPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValidJSONPath

`func (o *ValidateFilterOutputDto) SetIsValidJSONPath(v bool)`

SetIsValidJSONPath sets IsValidJSONPath field to given value.

### HasIsValidJSONPath

`func (o *ValidateFilterOutputDto) HasIsValidJSONPath() bool`

HasIsValidJSONPath returns a boolean if a field has been set.

### GetIsPathExist

`func (o *ValidateFilterOutputDto) GetIsPathExist() bool`

GetIsPathExist returns the IsPathExist field if non-nil, zero value otherwise.

### GetIsPathExistOk

`func (o *ValidateFilterOutputDto) GetIsPathExistOk() (*bool, bool)`

GetIsPathExistOk returns a tuple with the IsPathExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPathExist

`func (o *ValidateFilterOutputDto) SetIsPathExist(v bool)`

SetIsPathExist sets IsPathExist field to given value.

### HasIsPathExist

`func (o *ValidateFilterOutputDto) HasIsPathExist() bool`

HasIsPathExist returns a boolean if a field has been set.


