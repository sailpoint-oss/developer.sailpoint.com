---
id: v2024-sp-config-import-results
title: SpConfigImportResults
pagination_label: SpConfigImportResults
sidebar_label: SpConfigImportResults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigImportResults', 'V2024SpConfigImportResults'] 
slug: /tools/sdk/go/v2024/models/sp-config-import-results
tags: ['SDK', 'Software Development Kit', 'SpConfigImportResults', 'V2024SpConfigImportResults']
---

# SpConfigImportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**map[string]ObjectImportResult1**](object-import-result1) | The results of an object configuration import job. | 
**ExportJobId** | Pointer to **string** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 

## Methods

### NewSpConfigImportResults

`func NewSpConfigImportResults(results map[string]ObjectImportResult1, ) *SpConfigImportResults`

NewSpConfigImportResults instantiates a new SpConfigImportResults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigImportResultsWithDefaults

`func NewSpConfigImportResultsWithDefaults() *SpConfigImportResults`

NewSpConfigImportResultsWithDefaults instantiates a new SpConfigImportResults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *SpConfigImportResults) GetResults() map[string]ObjectImportResult1`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *SpConfigImportResults) GetResultsOk() (*map[string]ObjectImportResult1, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *SpConfigImportResults) SetResults(v map[string]ObjectImportResult1)`

SetResults sets Results field to given value.


### GetExportJobId

`func (o *SpConfigImportResults) GetExportJobId() string`

GetExportJobId returns the ExportJobId field if non-nil, zero value otherwise.

### GetExportJobIdOk

`func (o *SpConfigImportResults) GetExportJobIdOk() (*string, bool)`

GetExportJobIdOk returns a tuple with the ExportJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportJobId

`func (o *SpConfigImportResults) SetExportJobId(v string)`

SetExportJobId sets ExportJobId field to given value.

### HasExportJobId

`func (o *SpConfigImportResults) HasExportJobId() bool`

HasExportJobId returns a boolean if a field has been set.


