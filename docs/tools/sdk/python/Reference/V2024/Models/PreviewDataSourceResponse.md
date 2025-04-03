---
id: v2024-preview-data-source-response
title: PreviewDataSourceResponse
pagination_label: PreviewDataSourceResponse
sidebar_label: PreviewDataSourceResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PreviewDataSourceResponse', 'V2024PreviewDataSourceResponse'] 
slug: /tools/sdk/go/v2024/models/preview-data-source-response
tags: ['SDK', 'Software Development Kit', 'PreviewDataSourceResponse', 'V2024PreviewDataSourceResponse']
---

# PreviewDataSourceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | Pointer to [**[]FormElementDataSourceConfigOptions**](form-element-data-source-config-options) | Results holds a list of FormElementDataSourceConfigOptions items | [optional] 

## Methods

### NewPreviewDataSourceResponse

`func NewPreviewDataSourceResponse() *PreviewDataSourceResponse`

NewPreviewDataSourceResponse instantiates a new PreviewDataSourceResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreviewDataSourceResponseWithDefaults

`func NewPreviewDataSourceResponseWithDefaults() *PreviewDataSourceResponse`

NewPreviewDataSourceResponseWithDefaults instantiates a new PreviewDataSourceResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *PreviewDataSourceResponse) GetResults() []FormElementDataSourceConfigOptions`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PreviewDataSourceResponse) GetResultsOk() (*[]FormElementDataSourceConfigOptions, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PreviewDataSourceResponse) SetResults(v []FormElementDataSourceConfigOptions)`

SetResults sets Results field to given value.

### HasResults

`func (o *PreviewDataSourceResponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


