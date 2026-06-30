---
id: v1-import-form-definitions-v1202-response
title: ImportFormDefinitionsV1202Response
pagination_label: ImportFormDefinitionsV1202Response
sidebar_label: ImportFormDefinitionsV1202Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportFormDefinitionsV1202Response', 'V1ImportFormDefinitionsV1202Response'] 
slug: /tools/sdk/go/customforms/models/import-form-definitions-v1202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1202Response', 'V1ImportFormDefinitionsV1202Response']
---

# ImportFormDefinitionsV1202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 
**ImportedObjects** | Pointer to [**[]ImportFormDefinitionsV1RequestInner**](import-form-definitions-v1-request-inner) |  | [optional] 
**Infos** | Pointer to [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 
**Warnings** | Pointer to [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 

## Methods

### NewImportFormDefinitionsV1202Response

`func NewImportFormDefinitionsV1202Response() *ImportFormDefinitionsV1202Response`

NewImportFormDefinitionsV1202Response instantiates a new ImportFormDefinitionsV1202Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportFormDefinitionsV1202ResponseWithDefaults

`func NewImportFormDefinitionsV1202ResponseWithDefaults() *ImportFormDefinitionsV1202Response`

NewImportFormDefinitionsV1202ResponseWithDefaults instantiates a new ImportFormDefinitionsV1202Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *ImportFormDefinitionsV1202Response) GetErrors() []ImportFormDefinitionsV1202ResponseErrorsInner`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ImportFormDefinitionsV1202Response) GetErrorsOk() (*[]ImportFormDefinitionsV1202ResponseErrorsInner, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ImportFormDefinitionsV1202Response) SetErrors(v []ImportFormDefinitionsV1202ResponseErrorsInner)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ImportFormDefinitionsV1202Response) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetImportedObjects

`func (o *ImportFormDefinitionsV1202Response) GetImportedObjects() []ImportFormDefinitionsV1RequestInner`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *ImportFormDefinitionsV1202Response) GetImportedObjectsOk() (*[]ImportFormDefinitionsV1RequestInner, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *ImportFormDefinitionsV1202Response) SetImportedObjects(v []ImportFormDefinitionsV1RequestInner)`

SetImportedObjects sets ImportedObjects field to given value.

### HasImportedObjects

`func (o *ImportFormDefinitionsV1202Response) HasImportedObjects() bool`

HasImportedObjects returns a boolean if a field has been set.

### GetInfos

`func (o *ImportFormDefinitionsV1202Response) GetInfos() []ImportFormDefinitionsV1202ResponseErrorsInner`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *ImportFormDefinitionsV1202Response) GetInfosOk() (*[]ImportFormDefinitionsV1202ResponseErrorsInner, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *ImportFormDefinitionsV1202Response) SetInfos(v []ImportFormDefinitionsV1202ResponseErrorsInner)`

SetInfos sets Infos field to given value.

### HasInfos

`func (o *ImportFormDefinitionsV1202Response) HasInfos() bool`

HasInfos returns a boolean if a field has been set.

### GetWarnings

`func (o *ImportFormDefinitionsV1202Response) GetWarnings() []ImportFormDefinitionsV1202ResponseErrorsInner`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ImportFormDefinitionsV1202Response) GetWarningsOk() (*[]ImportFormDefinitionsV1202ResponseErrorsInner, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ImportFormDefinitionsV1202Response) SetWarnings(v []ImportFormDefinitionsV1202ResponseErrorsInner)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ImportFormDefinitionsV1202Response) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


