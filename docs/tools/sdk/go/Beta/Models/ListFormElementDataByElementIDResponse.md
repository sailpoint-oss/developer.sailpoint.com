---
id: list-form-element-data-by-element-id-response
title: ListFormElementDataByElementIDResponse
pagination_label: ListFormElementDataByElementIDResponse
sidebar_label: ListFormElementDataByElementIDResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ListFormElementDataByElementIDResponse'] 
slug: /tools/sdk/go/beta/models/list-form-element-data-by-element-id-response
tags: ['SDK', 'Software Development Kit', 'ListFormElementDataByElementIDResponse']
---

# ListFormElementDataByElementIDResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** |  Pointer to [**[]FormElementDataSourceConfigOptions**](form-element-data-source-config-options) | Results holds a list of FormElementDataSourceConfigOptions items | [optional] 

## Methods

### NewListFormElementDataByElementIDResponse

`func NewListFormElementDataByElementIDResponse() *ListFormElementDataByElementIDResponse`

NewListFormElementDataByElementIDResponse instantiates a new ListFormElementDataByElementIDResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListFormElementDataByElementIDResponseWithDefaults

`func NewListFormElementDataByElementIDResponseWithDefaults() *ListFormElementDataByElementIDResponse`

NewListFormElementDataByElementIDResponseWithDefaults instantiates a new ListFormElementDataByElementIDResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *ListFormElementDataByElementIDResponse) GetResults() []FormElementDataSourceConfigOptions`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *ListFormElementDataByElementIDResponse) GetResultsOk() (*[]FormElementDataSourceConfigOptions, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *ListFormElementDataByElementIDResponse) SetResults(v []FormElementDataSourceConfigOptions)`

SetResults sets Results field to given value.

### HasResults

`func (o *ListFormElementDataByElementIDResponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to top]](#) 


