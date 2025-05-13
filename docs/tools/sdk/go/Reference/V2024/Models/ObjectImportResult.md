---
id: v2024-object-import-result
title: ObjectImportResult
pagination_label: ObjectImportResult
sidebar_label: ObjectImportResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectImportResult', 'V2024ObjectImportResult'] 
slug: /tools/sdk/go/v2024/models/object-import-result
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult', 'V2024ObjectImportResult']
---

# ObjectImportResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]SpConfigMessage**](sp-config-message) | Informational messages returned from the target service on import. | 
**Warnings** | [**[]SpConfigMessage**](sp-config-message) | Warning messages returned from the target service on import. | 
**Errors** | [**[]SpConfigMessage**](sp-config-message) | Error messages returned from the target service on import. | 
**ImportedObjects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | 

## Methods

### NewObjectImportResult

`func NewObjectImportResult(infos []SpConfigMessage, warnings []SpConfigMessage, errors []SpConfigMessage, importedObjects []ImportObject, ) *ObjectImportResult`

NewObjectImportResult instantiates a new ObjectImportResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectImportResultWithDefaults

`func NewObjectImportResultWithDefaults() *ObjectImportResult`

NewObjectImportResultWithDefaults instantiates a new ObjectImportResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfos

`func (o *ObjectImportResult) GetInfos() []SpConfigMessage`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *ObjectImportResult) GetInfosOk() (*[]SpConfigMessage, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *ObjectImportResult) SetInfos(v []SpConfigMessage)`

SetInfos sets Infos field to given value.


### GetWarnings

`func (o *ObjectImportResult) GetWarnings() []SpConfigMessage`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ObjectImportResult) GetWarningsOk() (*[]SpConfigMessage, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ObjectImportResult) SetWarnings(v []SpConfigMessage)`

SetWarnings sets Warnings field to given value.


### GetErrors

`func (o *ObjectImportResult) GetErrors() []SpConfigMessage`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ObjectImportResult) GetErrorsOk() (*[]SpConfigMessage, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ObjectImportResult) SetErrors(v []SpConfigMessage)`

SetErrors sets Errors field to given value.


### GetImportedObjects

`func (o *ObjectImportResult) GetImportedObjects() []ImportObject`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *ObjectImportResult) GetImportedObjectsOk() (*[]ImportObject, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *ObjectImportResult) SetImportedObjects(v []ImportObject)`

SetImportedObjects sets ImportedObjects field to given value.



