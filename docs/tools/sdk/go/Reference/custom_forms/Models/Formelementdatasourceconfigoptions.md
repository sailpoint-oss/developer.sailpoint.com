---
id: v1-formelementdatasourceconfigoptions
title: Formelementdatasourceconfigoptions
pagination_label: Formelementdatasourceconfigoptions
sidebar_label: Formelementdatasourceconfigoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formelementdatasourceconfigoptions', 'V1Formelementdatasourceconfigoptions'] 
slug: /tools/sdk/go/customforms/models/formelementdatasourceconfigoptions
tags: ['SDK', 'Software Development Kit', 'Formelementdatasourceconfigoptions', 'V1Formelementdatasourceconfigoptions']
---

# Formelementdatasourceconfigoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** | Pointer to **string** | Label is the main label to display to the user when selecting this option | [optional] 
**SubLabel** | Pointer to **string** | SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option | [optional] 
**Value** | Pointer to **string** | Value is the value to save as an entry when the user selects this option | [optional] 

## Methods

### NewFormelementdatasourceconfigoptions

`func NewFormelementdatasourceconfigoptions() *Formelementdatasourceconfigoptions`

NewFormelementdatasourceconfigoptions instantiates a new Formelementdatasourceconfigoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormelementdatasourceconfigoptionsWithDefaults

`func NewFormelementdatasourceconfigoptionsWithDefaults() *Formelementdatasourceconfigoptions`

NewFormelementdatasourceconfigoptionsWithDefaults instantiates a new Formelementdatasourceconfigoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLabel

`func (o *Formelementdatasourceconfigoptions) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Formelementdatasourceconfigoptions) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Formelementdatasourceconfigoptions) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Formelementdatasourceconfigoptions) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetSubLabel

`func (o *Formelementdatasourceconfigoptions) GetSubLabel() string`

GetSubLabel returns the SubLabel field if non-nil, zero value otherwise.

### GetSubLabelOk

`func (o *Formelementdatasourceconfigoptions) GetSubLabelOk() (*string, bool)`

GetSubLabelOk returns a tuple with the SubLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubLabel

`func (o *Formelementdatasourceconfigoptions) SetSubLabel(v string)`

SetSubLabel sets SubLabel field to given value.

### HasSubLabel

`func (o *Formelementdatasourceconfigoptions) HasSubLabel() bool`

HasSubLabel returns a boolean if a field has been set.

### GetValue

`func (o *Formelementdatasourceconfigoptions) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Formelementdatasourceconfigoptions) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Formelementdatasourceconfigoptions) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Formelementdatasourceconfigoptions) HasValue() bool`

HasValue returns a boolean if a field has been set.


