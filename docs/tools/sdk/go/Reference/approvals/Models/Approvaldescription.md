---
id: v1-approvaldescription
title: Approvaldescription
pagination_label: Approvaldescription
sidebar_label: Approvaldescription
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvaldescription', 'V1Approvaldescription'] 
slug: /tools/sdk/go/approvals/models/approvaldescription
tags: ['SDK', 'Software Development Kit', 'Approvaldescription', 'V1Approvaldescription']
---

# Approvaldescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The description of what the approval is asking for | [optional] 
**Locale** | Pointer to **string** | What locale the description of the approval is using | [optional] 

## Methods

### NewApprovaldescription

`func NewApprovaldescription() *Approvaldescription`

NewApprovaldescription instantiates a new Approvaldescription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovaldescriptionWithDefaults

`func NewApprovaldescriptionWithDefaults() *Approvaldescription`

NewApprovaldescriptionWithDefaults instantiates a new Approvaldescription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *Approvaldescription) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Approvaldescription) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Approvaldescription) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Approvaldescription) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLocale

`func (o *Approvaldescription) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Approvaldescription) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Approvaldescription) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Approvaldescription) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


