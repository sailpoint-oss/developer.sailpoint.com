---
id: v1-previewdatasourceresponse
title: Previewdatasourceresponse
pagination_label: Previewdatasourceresponse
sidebar_label: Previewdatasourceresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Previewdatasourceresponse', 'V1Previewdatasourceresponse'] 
slug: /tools/sdk/go/customforms/models/previewdatasourceresponse
tags: ['SDK', 'Software Development Kit', 'Previewdatasourceresponse', 'V1Previewdatasourceresponse']
---

# Previewdatasourceresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | Pointer to [**[]Formelementdatasourceconfigoptions**](formelementdatasourceconfigoptions) | Results holds a list of FormElementDataSourceConfigOptions items | [optional] 

## Methods

### NewPreviewdatasourceresponse

`func NewPreviewdatasourceresponse() *Previewdatasourceresponse`

NewPreviewdatasourceresponse instantiates a new Previewdatasourceresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreviewdatasourceresponseWithDefaults

`func NewPreviewdatasourceresponseWithDefaults() *Previewdatasourceresponse`

NewPreviewdatasourceresponseWithDefaults instantiates a new Previewdatasourceresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *Previewdatasourceresponse) GetResults() []Formelementdatasourceconfigoptions`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *Previewdatasourceresponse) GetResultsOk() (*[]Formelementdatasourceconfigoptions, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *Previewdatasourceresponse) SetResults(v []Formelementdatasourceconfigoptions)`

SetResults sets Results field to given value.

### HasResults

`func (o *Previewdatasourceresponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


