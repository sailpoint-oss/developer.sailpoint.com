---
id: approval-description
title: ApprovalDescription
pagination_label: ApprovalDescription
sidebar_label: ApprovalDescription
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalDescription', 'ApprovalDescription'] 
slug: /tools/sdk/go//models/approval-description
tags: ['SDK', 'Software Development Kit', 'ApprovalDescription', 'ApprovalDescription']
---

# ApprovalDescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The description of what the approval is asking for | [optional] 
**Locale** | Pointer to **string** | What locale the description of the approval is using | [optional] 

## Methods

### NewApprovalDescription

`func NewApprovalDescription() *ApprovalDescription`

NewApprovalDescription instantiates a new ApprovalDescription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalDescriptionWithDefaults

`func NewApprovalDescriptionWithDefaults() *ApprovalDescription`

NewApprovalDescriptionWithDefaults instantiates a new ApprovalDescription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *ApprovalDescription) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApprovalDescription) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApprovalDescription) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApprovalDescription) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLocale

`func (o *ApprovalDescription) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ApprovalDescription) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ApprovalDescription) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ApprovalDescription) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


