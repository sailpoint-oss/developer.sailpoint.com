---
id: v1-formelement
title: Formelement
pagination_label: Formelement
sidebar_label: Formelement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formelement', 'V1Formelement'] 
slug: /tools/sdk/go/customforms/models/formelement
tags: ['SDK', 'Software Development Kit', 'Formelement', 'V1Formelement']
---

# Formelement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Form element identifier. | [optional] 
**ElementType** | Pointer to **string** | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** | Pointer to **map[string]interface{}** | Config object. | [optional] 
**Key** | Pointer to **string** | Technical key. | [optional] 
**Validations** | Pointer to [**[]Formelementvalidationsset**](formelementvalidationsset) |  | [optional] 

## Methods

### NewFormelement

`func NewFormelement() *Formelement`

NewFormelement instantiates a new Formelement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormelementWithDefaults

`func NewFormelementWithDefaults() *Formelement`

NewFormelementWithDefaults instantiates a new Formelement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Formelement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formelement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formelement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formelement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetElementType

`func (o *Formelement) GetElementType() string`

GetElementType returns the ElementType field if non-nil, zero value otherwise.

### GetElementTypeOk

`func (o *Formelement) GetElementTypeOk() (*string, bool)`

GetElementTypeOk returns a tuple with the ElementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementType

`func (o *Formelement) SetElementType(v string)`

SetElementType sets ElementType field to given value.

### HasElementType

`func (o *Formelement) HasElementType() bool`

HasElementType returns a boolean if a field has been set.

### GetConfig

`func (o *Formelement) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *Formelement) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *Formelement) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *Formelement) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetKey

`func (o *Formelement) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Formelement) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Formelement) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Formelement) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValidations

`func (o *Formelement) GetValidations() []Formelementvalidationsset`

GetValidations returns the Validations field if non-nil, zero value otherwise.

### GetValidationsOk

`func (o *Formelement) GetValidationsOk() (*[]Formelementvalidationsset, bool)`

GetValidationsOk returns a tuple with the Validations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidations

`func (o *Formelement) SetValidations(v []Formelementvalidationsset)`

SetValidations sets Validations field to given value.

### HasValidations

`func (o *Formelement) HasValidations() bool`

HasValidations returns a boolean if a field has been set.

### SetValidationsNil

`func (o *Formelement) SetValidationsNil(b bool)`

 SetValidationsNil sets the value for Validations to be an explicit nil

### UnsetValidations
`func (o *Formelement) UnsetValidations()`

UnsetValidations ensures that no value is present for Validations, not even an explicit nil

