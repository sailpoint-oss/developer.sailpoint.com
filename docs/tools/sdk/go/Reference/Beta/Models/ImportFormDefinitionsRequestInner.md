---
id: beta-import-form-definitions-request-inner
title: ImportFormDefinitionsRequestInner
pagination_label: ImportFormDefinitionsRequestInner
sidebar_label: ImportFormDefinitionsRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner'] 
slug: /tools/sdk/go/beta/models/import-form-definitions-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner']
---

# ImportFormDefinitionsRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | Pointer to [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewImportFormDefinitionsRequestInner

`func NewImportFormDefinitionsRequestInner() *ImportFormDefinitionsRequestInner`

NewImportFormDefinitionsRequestInner instantiates a new ImportFormDefinitionsRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportFormDefinitionsRequestInnerWithDefaults

`func NewImportFormDefinitionsRequestInnerWithDefaults() *ImportFormDefinitionsRequestInner`

NewImportFormDefinitionsRequestInnerWithDefaults instantiates a new ImportFormDefinitionsRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObject

`func (o *ImportFormDefinitionsRequestInner) GetObject() FormDefinitionResponse`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ImportFormDefinitionsRequestInner) GetObjectOk() (*FormDefinitionResponse, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ImportFormDefinitionsRequestInner) SetObject(v FormDefinitionResponse)`

SetObject sets Object field to given value.

### HasObject

`func (o *ImportFormDefinitionsRequestInner) HasObject() bool`

HasObject returns a boolean if a field has been set.

### GetSelf

`func (o *ImportFormDefinitionsRequestInner) GetSelf() string`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *ImportFormDefinitionsRequestInner) GetSelfOk() (*string, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *ImportFormDefinitionsRequestInner) SetSelf(v string)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *ImportFormDefinitionsRequestInner) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetVersion

`func (o *ImportFormDefinitionsRequestInner) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ImportFormDefinitionsRequestInner) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ImportFormDefinitionsRequestInner) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ImportFormDefinitionsRequestInner) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


