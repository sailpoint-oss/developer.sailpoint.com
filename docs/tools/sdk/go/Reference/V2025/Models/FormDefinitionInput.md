---
id: v2025-form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionInput', 'V2025FormDefinitionInput'] 
slug: /tools/sdk/go/v2025/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput', 'V2025FormDefinitionInput']
---

# FormDefinitionInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the form input. | [optional] 
**Type** | Pointer to **string** | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**Label** | Pointer to **string** | Name for the form input. | [optional] 
**Description** | Pointer to **string** | Form input's description. | [optional] 

## Methods

### NewFormDefinitionInput

`func NewFormDefinitionInput() *FormDefinitionInput`

NewFormDefinitionInput instantiates a new FormDefinitionInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionInputWithDefaults

`func NewFormDefinitionInputWithDefaults() *FormDefinitionInput`

NewFormDefinitionInputWithDefaults instantiates a new FormDefinitionInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormDefinitionInput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormDefinitionInput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormDefinitionInput) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormDefinitionInput) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *FormDefinitionInput) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormDefinitionInput) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormDefinitionInput) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormDefinitionInput) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLabel

`func (o *FormDefinitionInput) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *FormDefinitionInput) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *FormDefinitionInput) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *FormDefinitionInput) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetDescription

`func (o *FormDefinitionInput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FormDefinitionInput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FormDefinitionInput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FormDefinitionInput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


