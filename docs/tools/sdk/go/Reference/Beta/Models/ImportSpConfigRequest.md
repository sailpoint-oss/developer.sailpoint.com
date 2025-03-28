---
id: beta-import-sp-config-request
title: ImportSpConfigRequest
pagination_label: ImportSpConfigRequest
sidebar_label: ImportSpConfigRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportSpConfigRequest', 'BetaImportSpConfigRequest'] 
slug: /tools/sdk/go/beta/models/import-sp-config-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigRequest', 'BetaImportSpConfigRequest']
---

# ImportSpConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | ***os.File** | JSON file containing the objects to be imported. | 
**Options** | Pointer to [**ImportOptions**](import-options) |  | [optional] 

## Methods

### NewImportSpConfigRequest

`func NewImportSpConfigRequest(data *os.File, ) *ImportSpConfigRequest`

NewImportSpConfigRequest instantiates a new ImportSpConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportSpConfigRequestWithDefaults

`func NewImportSpConfigRequestWithDefaults() *ImportSpConfigRequest`

NewImportSpConfigRequestWithDefaults instantiates a new ImportSpConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ImportSpConfigRequest) GetData() *os.File`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ImportSpConfigRequest) GetDataOk() (**os.File, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ImportSpConfigRequest) SetData(v *os.File)`

SetData sets Data field to given value.


### GetOptions

`func (o *ImportSpConfigRequest) GetOptions() ImportOptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ImportSpConfigRequest) GetOptionsOk() (*ImportOptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ImportSpConfigRequest) SetOptions(v ImportOptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ImportSpConfigRequest) HasOptions() bool`

HasOptions returns a boolean if a field has been set.


