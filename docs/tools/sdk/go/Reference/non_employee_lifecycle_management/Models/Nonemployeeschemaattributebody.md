---
id: v1-nonemployeeschemaattributebody
title: Nonemployeeschemaattributebody
pagination_label: Nonemployeeschemaattributebody
sidebar_label: Nonemployeeschemaattributebody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeschemaattributebody', 'V1Nonemployeeschemaattributebody'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeschemaattributebody
tags: ['SDK', 'Software Development Kit', 'Nonemployeeschemaattributebody', 'V1Nonemployeeschemaattributebody']
---

# Nonemployeeschemaattributebody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of the attribute. Only type 'TEXT' is supported for custom attributes. | 
**Label** | **string** | Label displayed on the UI for this schema attribute. | 
**TechnicalName** | **string** | The technical name of the attribute. Must be unique per source. | 
**HelpText** | Pointer to **string** | help text displayed by UI. | [optional] 
**Placeholder** | Pointer to **string** | Hint text that fills UI box. | [optional] 
**Required** | Pointer to **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] 

## Methods

### NewNonemployeeschemaattributebody

`func NewNonemployeeschemaattributebody(type_ string, label string, technicalName string, ) *Nonemployeeschemaattributebody`

NewNonemployeeschemaattributebody instantiates a new Nonemployeeschemaattributebody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeschemaattributebodyWithDefaults

`func NewNonemployeeschemaattributebodyWithDefaults() *Nonemployeeschemaattributebody`

NewNonemployeeschemaattributebodyWithDefaults instantiates a new Nonemployeeschemaattributebody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Nonemployeeschemaattributebody) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Nonemployeeschemaattributebody) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Nonemployeeschemaattributebody) SetType(v string)`

SetType sets Type field to given value.


### GetLabel

`func (o *Nonemployeeschemaattributebody) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Nonemployeeschemaattributebody) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Nonemployeeschemaattributebody) SetLabel(v string)`

SetLabel sets Label field to given value.


### GetTechnicalName

`func (o *Nonemployeeschemaattributebody) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Nonemployeeschemaattributebody) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Nonemployeeschemaattributebody) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetHelpText

`func (o *Nonemployeeschemaattributebody) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *Nonemployeeschemaattributebody) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *Nonemployeeschemaattributebody) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *Nonemployeeschemaattributebody) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetPlaceholder

`func (o *Nonemployeeschemaattributebody) GetPlaceholder() string`

GetPlaceholder returns the Placeholder field if non-nil, zero value otherwise.

### GetPlaceholderOk

`func (o *Nonemployeeschemaattributebody) GetPlaceholderOk() (*string, bool)`

GetPlaceholderOk returns a tuple with the Placeholder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlaceholder

`func (o *Nonemployeeschemaattributebody) SetPlaceholder(v string)`

SetPlaceholder sets Placeholder field to given value.

### HasPlaceholder

`func (o *Nonemployeeschemaattributebody) HasPlaceholder() bool`

HasPlaceholder returns a boolean if a field has been set.

### GetRequired

`func (o *Nonemployeeschemaattributebody) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Nonemployeeschemaattributebody) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Nonemployeeschemaattributebody) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *Nonemployeeschemaattributebody) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


