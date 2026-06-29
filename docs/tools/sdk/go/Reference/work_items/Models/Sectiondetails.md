---
id: v1-sectiondetails
title: Sectiondetails
pagination_label: Sectiondetails
sidebar_label: Sectiondetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sectiondetails', 'V1Sectiondetails'] 
slug: /tools/sdk/go/workitems/models/sectiondetails
tags: ['SDK', 'Software Development Kit', 'Sectiondetails', 'V1Sectiondetails']
---

# Sectiondetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | Name of the FormItem | [optional] 
**Label** | Pointer to **NullableString** | Label of the section | [optional] 
**FormItems** | Pointer to **[]map[string]interface{}** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Methods

### NewSectiondetails

`func NewSectiondetails() *Sectiondetails`

NewSectiondetails instantiates a new Sectiondetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSectiondetailsWithDefaults

`func NewSectiondetailsWithDefaults() *Sectiondetails`

NewSectiondetailsWithDefaults instantiates a new Sectiondetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Sectiondetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sectiondetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sectiondetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sectiondetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Sectiondetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Sectiondetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetLabel

`func (o *Sectiondetails) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Sectiondetails) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Sectiondetails) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Sectiondetails) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### SetLabelNil

`func (o *Sectiondetails) SetLabelNil(b bool)`

 SetLabelNil sets the value for Label to be an explicit nil

### UnsetLabel
`func (o *Sectiondetails) UnsetLabel()`

UnsetLabel ensures that no value is present for Label, not even an explicit nil
### GetFormItems

`func (o *Sectiondetails) GetFormItems() []map[string]interface{}`

GetFormItems returns the FormItems field if non-nil, zero value otherwise.

### GetFormItemsOk

`func (o *Sectiondetails) GetFormItemsOk() (*[]map[string]interface{}, bool)`

GetFormItemsOk returns a tuple with the FormItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormItems

`func (o *Sectiondetails) SetFormItems(v []map[string]interface{})`

SetFormItems sets FormItems field to given value.

### HasFormItems

`func (o *Sectiondetails) HasFormItems() bool`

HasFormItems returns a boolean if a field has been set.


