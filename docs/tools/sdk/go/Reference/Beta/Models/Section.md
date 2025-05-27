---
id: beta-section
title: Section
pagination_label: Section
sidebar_label: Section
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Section', 'BetaSection'] 
slug: /tools/sdk/go/beta/models/section
tags: ['SDK', 'Software Development Kit', 'Section', 'BetaSection']
---

# Section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the FormItem | [optional] 
**Label** | Pointer to **string** | Label of the section | [optional] 
**FormItems** | Pointer to **[]map[string]interface{}** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Methods

### NewSection

`func NewSection() *Section`

NewSection instantiates a new Section object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSectionWithDefaults

`func NewSectionWithDefaults() *Section`

NewSectionWithDefaults instantiates a new Section object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Section) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Section) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Section) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Section) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLabel

`func (o *Section) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Section) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Section) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Section) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetFormItems

`func (o *Section) GetFormItems() []map[string]interface{}`

GetFormItems returns the FormItems field if non-nil, zero value otherwise.

### GetFormItemsOk

`func (o *Section) GetFormItemsOk() (*[]map[string]interface{}, bool)`

GetFormItemsOk returns a tuple with the FormItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormItems

`func (o *Section) SetFormItems(v []map[string]interface{})`

SetFormItems sets FormItems field to given value.

### HasFormItems

`func (o *Section) HasFormItems() bool`

HasFormItems returns a boolean if a field has been set.


