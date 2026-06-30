---
id: v1-objectimportresult2
title: Objectimportresult2
pagination_label: Objectimportresult2
sidebar_label: Objectimportresult2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectimportresult2', 'V1Objectimportresult2'] 
slug: /tools/sdk/go/spconfig/models/objectimportresult2
tags: ['SDK', 'Software Development Kit', 'Objectimportresult2', 'V1Objectimportresult2']
---

# Objectimportresult2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]Spconfigmessage2**](spconfigmessage2) | Informational messages returned from the target service on import. | 
**Warnings** | [**[]Spconfigmessage2**](spconfigmessage2) | Warning messages returned from the target service on import. | 
**Errors** | [**[]Spconfigmessage2**](spconfigmessage2) | Error messages returned from the target service on import. | 
**ImportedObjects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | 

## Methods

### NewObjectimportresult2

`func NewObjectimportresult2(infos []Spconfigmessage2, warnings []Spconfigmessage2, errors []Spconfigmessage2, importedObjects []Importobject, ) *Objectimportresult2`

NewObjectimportresult2 instantiates a new Objectimportresult2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectimportresult2WithDefaults

`func NewObjectimportresult2WithDefaults() *Objectimportresult2`

NewObjectimportresult2WithDefaults instantiates a new Objectimportresult2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfos

`func (o *Objectimportresult2) GetInfos() []Spconfigmessage2`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *Objectimportresult2) GetInfosOk() (*[]Spconfigmessage2, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *Objectimportresult2) SetInfos(v []Spconfigmessage2)`

SetInfos sets Infos field to given value.


### GetWarnings

`func (o *Objectimportresult2) GetWarnings() []Spconfigmessage2`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Objectimportresult2) GetWarningsOk() (*[]Spconfigmessage2, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Objectimportresult2) SetWarnings(v []Spconfigmessage2)`

SetWarnings sets Warnings field to given value.


### GetErrors

`func (o *Objectimportresult2) GetErrors() []Spconfigmessage2`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Objectimportresult2) GetErrorsOk() (*[]Spconfigmessage2, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Objectimportresult2) SetErrors(v []Spconfigmessage2)`

SetErrors sets Errors field to given value.


### GetImportedObjects

`func (o *Objectimportresult2) GetImportedObjects() []Importobject`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *Objectimportresult2) GetImportedObjectsOk() (*[]Importobject, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *Objectimportresult2) SetImportedObjects(v []Importobject)`

SetImportedObjects sets ImportedObjects field to given value.



