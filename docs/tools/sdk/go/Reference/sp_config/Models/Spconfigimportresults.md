---
id: v1-spconfigimportresults
title: Spconfigimportresults
pagination_label: Spconfigimportresults
sidebar_label: Spconfigimportresults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigimportresults', 'V1Spconfigimportresults'] 
slug: /tools/sdk/go/spconfig/models/spconfigimportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigimportresults', 'V1Spconfigimportresults']
---

# Spconfigimportresults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**map[string]Objectimportresult2**](objectimportresult2) | The results of an object configuration import job. | 
**ExportJobId** | Pointer to **string** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 

## Methods

### NewSpconfigimportresults

`func NewSpconfigimportresults(results map[string]Objectimportresult2, ) *Spconfigimportresults`

NewSpconfigimportresults instantiates a new Spconfigimportresults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigimportresultsWithDefaults

`func NewSpconfigimportresultsWithDefaults() *Spconfigimportresults`

NewSpconfigimportresultsWithDefaults instantiates a new Spconfigimportresults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *Spconfigimportresults) GetResults() map[string]Objectimportresult2`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *Spconfigimportresults) GetResultsOk() (*map[string]Objectimportresult2, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *Spconfigimportresults) SetResults(v map[string]Objectimportresult2)`

SetResults sets Results field to given value.


### GetExportJobId

`func (o *Spconfigimportresults) GetExportJobId() string`

GetExportJobId returns the ExportJobId field if non-nil, zero value otherwise.

### GetExportJobIdOk

`func (o *Spconfigimportresults) GetExportJobIdOk() (*string, bool)`

GetExportJobIdOk returns a tuple with the ExportJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportJobId

`func (o *Spconfigimportresults) SetExportJobId(v string)`

SetExportJobId sets ExportJobId field to given value.

### HasExportJobId

`func (o *Spconfigimportresults) HasExportJobId() bool`

HasExportJobId returns a boolean if a field has been set.


