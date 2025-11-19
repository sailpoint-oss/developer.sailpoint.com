---
id: v2025-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormElement', 'V2025FormElement'] 
slug: /tools/sdk/go/v2025/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'V2025FormElement']
---

# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Form element identifier. | [optional] 
**ElementType** | Pointer to **string** | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** | Pointer to **map[string]interface{}** | Config object. | [optional] 
**Key** | Pointer to **string** | Technical key. | [optional] 
**Validations** | Pointer to [**[]FormElementValidationsSet**](form-element-validations-set) |  | [optional] 

## Methods

### NewFormElement

`func NewFormElement() *FormElement`

NewFormElement instantiates a new FormElement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementWithDefaults

`func NewFormElementWithDefaults() *FormElement`

NewFormElementWithDefaults instantiates a new FormElement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormElement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormElement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormElement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormElement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetElementType

`func (o *FormElement) GetElementType() string`

GetElementType returns the ElementType field if non-nil, zero value otherwise.

### GetElementTypeOk

`func (o *FormElement) GetElementTypeOk() (*string, bool)`

GetElementTypeOk returns a tuple with the ElementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementType

`func (o *FormElement) SetElementType(v string)`

SetElementType sets ElementType field to given value.

### HasElementType

`func (o *FormElement) HasElementType() bool`

HasElementType returns a boolean if a field has been set.

### GetConfig

`func (o *FormElement) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *FormElement) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *FormElement) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *FormElement) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetKey

`func (o *FormElement) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *FormElement) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *FormElement) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *FormElement) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValidations

`func (o *FormElement) GetValidations() []FormElementValidationsSet`

GetValidations returns the Validations field if non-nil, zero value otherwise.

### GetValidationsOk

`func (o *FormElement) GetValidationsOk() (*[]FormElementValidationsSet, bool)`

GetValidationsOk returns a tuple with the Validations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidations

`func (o *FormElement) SetValidations(v []FormElementValidationsSet)`

SetValidations sets Validations field to given value.

### HasValidations

`func (o *FormElement) HasValidations() bool`

HasValidations returns a boolean if a field has been set.

### SetValidationsNil

`func (o *FormElement) SetValidationsNil(b bool)`

 SetValidationsNil sets the value for Validations to be an explicit nil

### UnsetValidations
`func (o *FormElement) UnsetValidations()`

UnsetValidations ensures that no value is present for Validations, not even an explicit nil

