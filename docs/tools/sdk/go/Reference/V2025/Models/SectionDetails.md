---
id: v2025-section-details
title: SectionDetails
pagination_label: SectionDetails
sidebar_label: SectionDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SectionDetails', 'V2025SectionDetails'] 
slug: /tools/sdk/go/v2025/models/section-details
tags: ['SDK', 'Software Development Kit', 'SectionDetails', 'V2025SectionDetails']
---

# SectionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | Name of the FormItem | [optional] 
**Label** | Pointer to **NullableString** | Label of the section | [optional] 
**FormItems** | Pointer to **[]map[string]interface{}** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Methods

### NewSectionDetails

`func NewSectionDetails() *SectionDetails`

NewSectionDetails instantiates a new SectionDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSectionDetailsWithDefaults

`func NewSectionDetailsWithDefaults() *SectionDetails`

NewSectionDetailsWithDefaults instantiates a new SectionDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SectionDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SectionDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SectionDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SectionDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *SectionDetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *SectionDetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetLabel

`func (o *SectionDetails) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *SectionDetails) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *SectionDetails) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *SectionDetails) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### SetLabelNil

`func (o *SectionDetails) SetLabelNil(b bool)`

 SetLabelNil sets the value for Label to be an explicit nil

### UnsetLabel
`func (o *SectionDetails) UnsetLabel()`

UnsetLabel ensures that no value is present for Label, not even an explicit nil
### GetFormItems

`func (o *SectionDetails) GetFormItems() []map[string]interface{}`

GetFormItems returns the FormItems field if non-nil, zero value otherwise.

### GetFormItemsOk

`func (o *SectionDetails) GetFormItemsOk() (*[]map[string]interface{}, bool)`

GetFormItemsOk returns a tuple with the FormItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormItems

`func (o *SectionDetails) SetFormItems(v []map[string]interface{})`

SetFormItems sets FormItems field to given value.

### HasFormItems

`func (o *SectionDetails) HasFormItems() bool`

HasFormItems returns a boolean if a field has been set.


