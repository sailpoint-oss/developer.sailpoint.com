---
id: approval-name
title: ApprovalName
pagination_label: ApprovalName
sidebar_label: ApprovalName
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalName', 'ApprovalName'] 
slug: /tools/sdk/go//models/approval-name
tags: ['SDK', 'Software Development Kit', 'ApprovalName', 'ApprovalName']
---

# ApprovalName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Name of the approval | [optional] 
**Locale** | Pointer to **string** | What locale the name of the approval is using | [optional] 

## Methods

### NewApprovalName

`func NewApprovalName() *ApprovalName`

NewApprovalName instantiates a new ApprovalName object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalNameWithDefaults

`func NewApprovalNameWithDefaults() *ApprovalName`

NewApprovalNameWithDefaults instantiates a new ApprovalName object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *ApprovalName) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApprovalName) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApprovalName) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApprovalName) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLocale

`func (o *ApprovalName) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ApprovalName) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ApprovalName) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ApprovalName) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


