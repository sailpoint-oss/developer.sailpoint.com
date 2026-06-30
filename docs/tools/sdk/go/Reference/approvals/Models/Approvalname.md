---
id: v1-approvalname
title: Approvalname
pagination_label: Approvalname
sidebar_label: Approvalname
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalname', 'V1Approvalname'] 
slug: /tools/sdk/go/approvals/models/approvalname
tags: ['SDK', 'Software Development Kit', 'Approvalname', 'V1Approvalname']
---

# Approvalname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Name of the approval | [optional] 
**Locale** | Pointer to **string** | What locale the name of the approval is using | [optional] 

## Methods

### NewApprovalname

`func NewApprovalname() *Approvalname`

NewApprovalname instantiates a new Approvalname object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalnameWithDefaults

`func NewApprovalnameWithDefaults() *Approvalname`

NewApprovalnameWithDefaults instantiates a new Approvalname object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *Approvalname) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Approvalname) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Approvalname) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Approvalname) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetLocale

`func (o *Approvalname) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *Approvalname) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *Approvalname) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *Approvalname) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


