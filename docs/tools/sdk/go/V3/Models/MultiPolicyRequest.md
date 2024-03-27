---
id: multi-policy-request
title: MultiPolicyRequest
pagination_label: MultiPolicyRequest
sidebar_label: MultiPolicyRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'MultiPolicyRequest'] 
slug: /tools/sdk/go/v3/models/multi-policy-request
tags: ['SDK', 'Software Development Kit', 'MultiPolicyRequest']
---

# MultiPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilteredPolicyList** |  Pointer to **[]string** | Multi-policy report will be run for this list of ids | [optional] 

## Methods

### NewMultiPolicyRequest

`func NewMultiPolicyRequest() *MultiPolicyRequest`

NewMultiPolicyRequest instantiates a new MultiPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiPolicyRequestWithDefaults

`func NewMultiPolicyRequestWithDefaults() *MultiPolicyRequest`

NewMultiPolicyRequestWithDefaults instantiates a new MultiPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilteredPolicyList

`func (o *MultiPolicyRequest) GetFilteredPolicyList() []string`

GetFilteredPolicyList returns the FilteredPolicyList field if non-nil, zero value otherwise.

### GetFilteredPolicyListOk

`func (o *MultiPolicyRequest) GetFilteredPolicyListOk() (*[]string, bool)`

GetFilteredPolicyListOk returns a tuple with the FilteredPolicyList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilteredPolicyList

`func (o *MultiPolicyRequest) SetFilteredPolicyList(v []string)`

SetFilteredPolicyList sets FilteredPolicyList field to given value.

### HasFilteredPolicyList

`func (o *MultiPolicyRequest) HasFilteredPolicyList() bool`

HasFilteredPolicyList returns a boolean if a field has been set.


[[Back to top]](#) 


