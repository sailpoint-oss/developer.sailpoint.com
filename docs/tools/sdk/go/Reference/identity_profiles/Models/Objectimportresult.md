---
id: v1-objectimportresult
title: Objectimportresult
pagination_label: Objectimportresult
sidebar_label: Objectimportresult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectimportresult', 'V1Objectimportresult'] 
slug: /tools/sdk/go/identityprofiles/models/objectimportresult
tags: ['SDK', 'Software Development Kit', 'Objectimportresult', 'V1Objectimportresult']
---

# Objectimportresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]Spconfigmessage**](spconfigmessage) | Informational messages returned from the target service on import. | 
**Warnings** | [**[]Spconfigmessage**](spconfigmessage) | Warning messages returned from the target service on import. | 
**Errors** | [**[]Spconfigmessage**](spconfigmessage) | Error messages returned from the target service on import. | 
**ImportedObjects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | 

## Methods

### NewObjectimportresult

`func NewObjectimportresult(infos []Spconfigmessage, warnings []Spconfigmessage, errors []Spconfigmessage, importedObjects []Importobject, ) *Objectimportresult`

NewObjectimportresult instantiates a new Objectimportresult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectimportresultWithDefaults

`func NewObjectimportresultWithDefaults() *Objectimportresult`

NewObjectimportresultWithDefaults instantiates a new Objectimportresult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfos

`func (o *Objectimportresult) GetInfos() []Spconfigmessage`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *Objectimportresult) GetInfosOk() (*[]Spconfigmessage, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *Objectimportresult) SetInfos(v []Spconfigmessage)`

SetInfos sets Infos field to given value.


### GetWarnings

`func (o *Objectimportresult) GetWarnings() []Spconfigmessage`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Objectimportresult) GetWarningsOk() (*[]Spconfigmessage, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Objectimportresult) SetWarnings(v []Spconfigmessage)`

SetWarnings sets Warnings field to given value.


### GetErrors

`func (o *Objectimportresult) GetErrors() []Spconfigmessage`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Objectimportresult) GetErrorsOk() (*[]Spconfigmessage, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Objectimportresult) SetErrors(v []Spconfigmessage)`

SetErrors sets Errors field to given value.


### GetImportedObjects

`func (o *Objectimportresult) GetImportedObjects() []Importobject`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *Objectimportresult) GetImportedObjectsOk() (*[]Importobject, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *Objectimportresult) SetImportedObjects(v []Importobject)`

SetImportedObjects sets ImportedObjects field to given value.



