---
id: v1-templatevariable
title: Templatevariable
pagination_label: Templatevariable
sidebar_label: Templatevariable
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templatevariable', 'V1Templatevariable'] 
slug: /tools/sdk/go/notifications/models/templatevariable
tags: ['SDK', 'Software Development Kit', 'Templatevariable', 'V1Templatevariable']
---

# Templatevariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The variable name as used when rendering context in templates. | [optional] 
**Type** | Pointer to **string** | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or \"function\" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [optional] 
**Description** | Pointer to **NullableString** | Human-readable description explaining what this variable represents. | [optional] 
**Example** | Pointer to **interface{}** | Example value demonstrating the format and usage. For type \"function\", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [optional] 

## Methods

### NewTemplatevariable

`func NewTemplatevariable() *Templatevariable`

NewTemplatevariable instantiates a new Templatevariable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatevariableWithDefaults

`func NewTemplatevariableWithDefaults() *Templatevariable`

NewTemplatevariableWithDefaults instantiates a new Templatevariable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templatevariable) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templatevariable) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templatevariable) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Templatevariable) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetType

`func (o *Templatevariable) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Templatevariable) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Templatevariable) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Templatevariable) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *Templatevariable) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Templatevariable) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Templatevariable) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Templatevariable) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Templatevariable) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Templatevariable) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetExample

`func (o *Templatevariable) GetExample() interface{}`

GetExample returns the Example field if non-nil, zero value otherwise.

### GetExampleOk

`func (o *Templatevariable) GetExampleOk() (*interface{}, bool)`

GetExampleOk returns a tuple with the Example field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExample

`func (o *Templatevariable) SetExample(v interface{})`

SetExample sets Example field to given value.

### HasExample

`func (o *Templatevariable) HasExample() bool`

HasExample returns a boolean if a field has been set.

### SetExampleNil

`func (o *Templatevariable) SetExampleNil(b bool)`

 SetExampleNil sets the value for Example to be an explicit nil

### UnsetExample
`func (o *Templatevariable) UnsetExample()`

UnsetExample ensures that no value is present for Example, not even an explicit nil

