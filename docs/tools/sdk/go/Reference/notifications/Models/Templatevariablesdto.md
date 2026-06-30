---
id: v1-templatevariablesdto
title: Templatevariablesdto
pagination_label: Templatevariablesdto
sidebar_label: Templatevariablesdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templatevariablesdto', 'V1Templatevariablesdto'] 
slug: /tools/sdk/go/notifications/models/templatevariablesdto
tags: ['SDK', 'Software Development Kit', 'Templatevariablesdto', 'V1Templatevariablesdto']
---

# Templatevariablesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The notification template key. | [optional] 
**Medium** | Pointer to [**Templatemediumdto**](templatemediumdto) |  | [optional] 
**GlobalVariables** | Pointer to [**[]Templatevariable**](templatevariable) | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [optional] 
**TemplateVariables** | Pointer to [**[]Templatevariable**](templatevariable) | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [optional] 

## Methods

### NewTemplatevariablesdto

`func NewTemplatevariablesdto() *Templatevariablesdto`

NewTemplatevariablesdto instantiates a new Templatevariablesdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatevariablesdtoWithDefaults

`func NewTemplatevariablesdtoWithDefaults() *Templatevariablesdto`

NewTemplatevariablesdtoWithDefaults instantiates a new Templatevariablesdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templatevariablesdto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templatevariablesdto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templatevariablesdto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Templatevariablesdto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMedium

`func (o *Templatevariablesdto) GetMedium() Templatemediumdto`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Templatevariablesdto) GetMediumOk() (*Templatemediumdto, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Templatevariablesdto) SetMedium(v Templatemediumdto)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Templatevariablesdto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetGlobalVariables

`func (o *Templatevariablesdto) GetGlobalVariables() []Templatevariable`

GetGlobalVariables returns the GlobalVariables field if non-nil, zero value otherwise.

### GetGlobalVariablesOk

`func (o *Templatevariablesdto) GetGlobalVariablesOk() (*[]Templatevariable, bool)`

GetGlobalVariablesOk returns a tuple with the GlobalVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalVariables

`func (o *Templatevariablesdto) SetGlobalVariables(v []Templatevariable)`

SetGlobalVariables sets GlobalVariables field to given value.

### HasGlobalVariables

`func (o *Templatevariablesdto) HasGlobalVariables() bool`

HasGlobalVariables returns a boolean if a field has been set.

### SetGlobalVariablesNil

`func (o *Templatevariablesdto) SetGlobalVariablesNil(b bool)`

 SetGlobalVariablesNil sets the value for GlobalVariables to be an explicit nil

### UnsetGlobalVariables
`func (o *Templatevariablesdto) UnsetGlobalVariables()`

UnsetGlobalVariables ensures that no value is present for GlobalVariables, not even an explicit nil
### GetTemplateVariables

`func (o *Templatevariablesdto) GetTemplateVariables() []Templatevariable`

GetTemplateVariables returns the TemplateVariables field if non-nil, zero value otherwise.

### GetTemplateVariablesOk

`func (o *Templatevariablesdto) GetTemplateVariablesOk() (*[]Templatevariable, bool)`

GetTemplateVariablesOk returns a tuple with the TemplateVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateVariables

`func (o *Templatevariablesdto) SetTemplateVariables(v []Templatevariable)`

SetTemplateVariables sets TemplateVariables field to given value.

### HasTemplateVariables

`func (o *Templatevariablesdto) HasTemplateVariables() bool`

HasTemplateVariables returns a boolean if a field has been set.

### SetTemplateVariablesNil

`func (o *Templatevariablesdto) SetTemplateVariablesNil(b bool)`

 SetTemplateVariablesNil sets the value for TemplateVariables to be an explicit nil

### UnsetTemplateVariables
`func (o *Templatevariablesdto) UnsetTemplateVariables()`

UnsetTemplateVariables ensures that no value is present for TemplateVariables, not even an explicit nil

