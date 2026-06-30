---
id: v1-import-sp-config-v1-request
title: ImportSpConfigV1Request
pagination_label: ImportSpConfigV1Request
sidebar_label: ImportSpConfigV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportSpConfigV1Request', 'V1ImportSpConfigV1Request'] 
slug: /tools/sdk/go/spconfig/models/import-sp-config-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigV1Request', 'V1ImportSpConfigV1Request']
---

# ImportSpConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | ***os.File** | JSON file containing the objects to be imported. | 
**Options** | Pointer to [**Importoptions**](importoptions) |  | [optional] 

## Methods

### NewImportSpConfigV1Request

`func NewImportSpConfigV1Request(data *os.File, ) *ImportSpConfigV1Request`

NewImportSpConfigV1Request instantiates a new ImportSpConfigV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportSpConfigV1RequestWithDefaults

`func NewImportSpConfigV1RequestWithDefaults() *ImportSpConfigV1Request`

NewImportSpConfigV1RequestWithDefaults instantiates a new ImportSpConfigV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ImportSpConfigV1Request) GetData() *os.File`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ImportSpConfigV1Request) GetDataOk() (**os.File, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ImportSpConfigV1Request) SetData(v *os.File)`

SetData sets Data field to given value.


### GetOptions

`func (o *ImportSpConfigV1Request) GetOptions() Importoptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ImportSpConfigV1Request) GetOptionsOk() (*Importoptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ImportSpConfigV1Request) SetOptions(v Importoptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ImportSpConfigV1Request) HasOptions() bool`

HasOptions returns a boolean if a field has been set.


