---
id: v2024-list-predefined-select-options-response
title: ListPredefinedSelectOptionsResponse
pagination_label: ListPredefinedSelectOptionsResponse
sidebar_label: ListPredefinedSelectOptionsResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListPredefinedSelectOptionsResponse', 'V2024ListPredefinedSelectOptionsResponse'] 
slug: /tools/sdk/go/v2024/models/list-predefined-select-options-response
tags: ['SDK', 'Software Development Kit', 'ListPredefinedSelectOptionsResponse', 'V2024ListPredefinedSelectOptionsResponse']
---

# ListPredefinedSelectOptionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | Pointer to **[]string** | Results holds a list of PreDefinedSelectOption items | [optional] 

## Methods

### NewListPredefinedSelectOptionsResponse

`func NewListPredefinedSelectOptionsResponse() *ListPredefinedSelectOptionsResponse`

NewListPredefinedSelectOptionsResponse instantiates a new ListPredefinedSelectOptionsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPredefinedSelectOptionsResponseWithDefaults

`func NewListPredefinedSelectOptionsResponseWithDefaults() *ListPredefinedSelectOptionsResponse`

NewListPredefinedSelectOptionsResponseWithDefaults instantiates a new ListPredefinedSelectOptionsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *ListPredefinedSelectOptionsResponse) GetResults() []string`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *ListPredefinedSelectOptionsResponse) GetResultsOk() (*[]string, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *ListPredefinedSelectOptionsResponse) SetResults(v []string)`

SetResults sets Results field to given value.

### HasResults

`func (o *ListPredefinedSelectOptionsResponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


