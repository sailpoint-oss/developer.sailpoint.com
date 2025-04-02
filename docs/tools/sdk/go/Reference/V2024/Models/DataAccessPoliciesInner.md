---
id: v2024-data-access-policies-inner
title: DataAccessPoliciesInner
pagination_label: DataAccessPoliciesInner
sidebar_label: DataAccessPoliciesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataAccessPoliciesInner', 'V2024DataAccessPoliciesInner'] 
slug: /tools/sdk/go/v2024/models/data-access-policies-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessPoliciesInner', 'V2024DataAccessPoliciesInner']
---

# DataAccessPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Value of the policy | [optional] 

## Methods

### NewDataAccessPoliciesInner

`func NewDataAccessPoliciesInner() *DataAccessPoliciesInner`

NewDataAccessPoliciesInner instantiates a new DataAccessPoliciesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataAccessPoliciesInnerWithDefaults

`func NewDataAccessPoliciesInnerWithDefaults() *DataAccessPoliciesInner`

NewDataAccessPoliciesInnerWithDefaults instantiates a new DataAccessPoliciesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *DataAccessPoliciesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DataAccessPoliciesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DataAccessPoliciesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DataAccessPoliciesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


