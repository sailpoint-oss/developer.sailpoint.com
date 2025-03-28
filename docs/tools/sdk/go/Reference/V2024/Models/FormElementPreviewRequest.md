---
id: v2024-form-element-preview-request
title: FormElementPreviewRequest
pagination_label: FormElementPreviewRequest
sidebar_label: FormElementPreviewRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest'] 
slug: /tools/sdk/go/v2024/models/form-element-preview-request
tags: ['SDK', 'Software Development Kit', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest']
---

# FormElementPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataSource** | Pointer to [**FormElementDynamicDataSource**](form-element-dynamic-data-source) |  | [optional] 

## Methods

### NewFormElementPreviewRequest

`func NewFormElementPreviewRequest() *FormElementPreviewRequest`

NewFormElementPreviewRequest instantiates a new FormElementPreviewRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementPreviewRequestWithDefaults

`func NewFormElementPreviewRequestWithDefaults() *FormElementPreviewRequest`

NewFormElementPreviewRequestWithDefaults instantiates a new FormElementPreviewRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataSource

`func (o *FormElementPreviewRequest) GetDataSource() FormElementDynamicDataSource`

GetDataSource returns the DataSource field if non-nil, zero value otherwise.

### GetDataSourceOk

`func (o *FormElementPreviewRequest) GetDataSourceOk() (*FormElementDynamicDataSource, bool)`

GetDataSourceOk returns a tuple with the DataSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSource

`func (o *FormElementPreviewRequest) SetDataSource(v FormElementDynamicDataSource)`

SetDataSource sets DataSource field to given value.

### HasDataSource

`func (o *FormElementPreviewRequest) HasDataSource() bool`

HasDataSource returns a boolean if a field has been set.


