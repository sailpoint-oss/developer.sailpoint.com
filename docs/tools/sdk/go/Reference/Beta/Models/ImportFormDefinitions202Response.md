---
id: beta-import-form-definitions202-response
title: ImportFormDefinitions202Response
pagination_label: ImportFormDefinitions202Response
sidebar_label: ImportFormDefinitions202Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportFormDefinitions202Response', 'BetaImportFormDefinitions202Response'] 
slug: /tools/sdk/go/beta/models/import-form-definitions202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202Response', 'BetaImportFormDefinitions202Response']
---

# ImportFormDefinitions202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**ImportedObjects** | Pointer to [**[]ExportFormDefinitionsByTenant200ResponseInner**](export-form-definitions-by-tenant200-response-inner) |  | [optional] 
**Infos** | Pointer to [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**Warnings** | Pointer to [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 

## Methods

### NewImportFormDefinitions202Response

`func NewImportFormDefinitions202Response() *ImportFormDefinitions202Response`

NewImportFormDefinitions202Response instantiates a new ImportFormDefinitions202Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportFormDefinitions202ResponseWithDefaults

`func NewImportFormDefinitions202ResponseWithDefaults() *ImportFormDefinitions202Response`

NewImportFormDefinitions202ResponseWithDefaults instantiates a new ImportFormDefinitions202Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *ImportFormDefinitions202Response) GetErrors() []ImportFormDefinitions202ResponseErrorsInner`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ImportFormDefinitions202Response) GetErrorsOk() (*[]ImportFormDefinitions202ResponseErrorsInner, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ImportFormDefinitions202Response) SetErrors(v []ImportFormDefinitions202ResponseErrorsInner)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ImportFormDefinitions202Response) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetImportedObjects

`func (o *ImportFormDefinitions202Response) GetImportedObjects() []ExportFormDefinitionsByTenant200ResponseInner`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *ImportFormDefinitions202Response) GetImportedObjectsOk() (*[]ExportFormDefinitionsByTenant200ResponseInner, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *ImportFormDefinitions202Response) SetImportedObjects(v []ExportFormDefinitionsByTenant200ResponseInner)`

SetImportedObjects sets ImportedObjects field to given value.

### HasImportedObjects

`func (o *ImportFormDefinitions202Response) HasImportedObjects() bool`

HasImportedObjects returns a boolean if a field has been set.

### GetInfos

`func (o *ImportFormDefinitions202Response) GetInfos() []ImportFormDefinitions202ResponseErrorsInner`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *ImportFormDefinitions202Response) GetInfosOk() (*[]ImportFormDefinitions202ResponseErrorsInner, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *ImportFormDefinitions202Response) SetInfos(v []ImportFormDefinitions202ResponseErrorsInner)`

SetInfos sets Infos field to given value.

### HasInfos

`func (o *ImportFormDefinitions202Response) HasInfos() bool`

HasInfos returns a boolean if a field has been set.

### GetWarnings

`func (o *ImportFormDefinitions202Response) GetWarnings() []ImportFormDefinitions202ResponseErrorsInner`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ImportFormDefinitions202Response) GetWarningsOk() (*[]ImportFormDefinitions202ResponseErrorsInner, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ImportFormDefinitions202Response) SetWarnings(v []ImportFormDefinitions202ResponseErrorsInner)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ImportFormDefinitions202Response) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


