---
id: identity-compare-response
title: IdentityCompareResponse
pagination_label: IdentityCompareResponse
sidebar_label: IdentityCompareResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityCompareResponse'] 
slug: /tools/sdk/go/beta/models/identity-compare-response
tags: ['SDK', 'Software Development Kit', 'IdentityCompareResponse']
---

# IdentityCompareResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItemDiff** |  Pointer to **map[string]map[string]interface{}** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Methods

### NewIdentityCompareResponse

`func NewIdentityCompareResponse() *IdentityCompareResponse`

NewIdentityCompareResponse instantiates a new IdentityCompareResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCompareResponseWithDefaults

`func NewIdentityCompareResponseWithDefaults() *IdentityCompareResponse`

NewIdentityCompareResponseWithDefaults instantiates a new IdentityCompareResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItemDiff

`func (o *IdentityCompareResponse) GetAccessItemDiff() map[string]map[string]interface{}`

GetAccessItemDiff returns the AccessItemDiff field if non-nil, zero value otherwise.

### GetAccessItemDiffOk

`func (o *IdentityCompareResponse) GetAccessItemDiffOk() (*map[string]map[string]interface{}, bool)`

GetAccessItemDiffOk returns a tuple with the AccessItemDiff field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemDiff

`func (o *IdentityCompareResponse) SetAccessItemDiff(v map[string]map[string]interface{})`

SetAccessItemDiff sets AccessItemDiff field to given value.

### HasAccessItemDiff

`func (o *IdentityCompareResponse) HasAccessItemDiff() bool`

HasAccessItemDiff returns a boolean if a field has been set.


[[Back to top]](#) 


