---
id: v1-multipolicyrequest
title: Multipolicyrequest
pagination_label: Multipolicyrequest
sidebar_label: Multipolicyrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multipolicyrequest', 'V1Multipolicyrequest'] 
slug: /tools/sdk/go/sodpolicies/models/multipolicyrequest
tags: ['SDK', 'Software Development Kit', 'Multipolicyrequest', 'V1Multipolicyrequest']
---

# Multipolicyrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilteredPolicyList** | Pointer to **[]string** | Multi-policy report will be run for this list of ids | [optional] 

## Methods

### NewMultipolicyrequest

`func NewMultipolicyrequest() *Multipolicyrequest`

NewMultipolicyrequest instantiates a new Multipolicyrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultipolicyrequestWithDefaults

`func NewMultipolicyrequestWithDefaults() *Multipolicyrequest`

NewMultipolicyrequestWithDefaults instantiates a new Multipolicyrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilteredPolicyList

`func (o *Multipolicyrequest) GetFilteredPolicyList() []string`

GetFilteredPolicyList returns the FilteredPolicyList field if non-nil, zero value otherwise.

### GetFilteredPolicyListOk

`func (o *Multipolicyrequest) GetFilteredPolicyListOk() (*[]string, bool)`

GetFilteredPolicyListOk returns a tuple with the FilteredPolicyList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilteredPolicyList

`func (o *Multipolicyrequest) SetFilteredPolicyList(v []string)`

SetFilteredPolicyList sets FilteredPolicyList field to given value.

### HasFilteredPolicyList

`func (o *Multipolicyrequest) HasFilteredPolicyList() bool`

HasFilteredPolicyList returns a boolean if a field has been set.


