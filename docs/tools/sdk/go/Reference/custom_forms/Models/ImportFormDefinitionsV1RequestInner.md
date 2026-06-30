---
id: v1-import-form-definitions-v1-request-inner
title: ImportFormDefinitionsV1RequestInner
pagination_label: ImportFormDefinitionsV1RequestInner
sidebar_label: ImportFormDefinitionsV1RequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportFormDefinitionsV1RequestInner', 'V1ImportFormDefinitionsV1RequestInner'] 
slug: /tools/sdk/go/customforms/models/import-form-definitions-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1RequestInner', 'V1ImportFormDefinitionsV1RequestInner']
---

# ImportFormDefinitionsV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | Pointer to [**Formdefinitionresponse**](formdefinitionresponse) |  | [optional] 
**Self** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewImportFormDefinitionsV1RequestInner

`func NewImportFormDefinitionsV1RequestInner() *ImportFormDefinitionsV1RequestInner`

NewImportFormDefinitionsV1RequestInner instantiates a new ImportFormDefinitionsV1RequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportFormDefinitionsV1RequestInnerWithDefaults

`func NewImportFormDefinitionsV1RequestInnerWithDefaults() *ImportFormDefinitionsV1RequestInner`

NewImportFormDefinitionsV1RequestInnerWithDefaults instantiates a new ImportFormDefinitionsV1RequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObject

`func (o *ImportFormDefinitionsV1RequestInner) GetObject() Formdefinitionresponse`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ImportFormDefinitionsV1RequestInner) GetObjectOk() (*Formdefinitionresponse, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ImportFormDefinitionsV1RequestInner) SetObject(v Formdefinitionresponse)`

SetObject sets Object field to given value.

### HasObject

`func (o *ImportFormDefinitionsV1RequestInner) HasObject() bool`

HasObject returns a boolean if a field has been set.

### GetSelf

`func (o *ImportFormDefinitionsV1RequestInner) GetSelf() string`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *ImportFormDefinitionsV1RequestInner) GetSelfOk() (*string, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *ImportFormDefinitionsV1RequestInner) SetSelf(v string)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *ImportFormDefinitionsV1RequestInner) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetVersion

`func (o *ImportFormDefinitionsV1RequestInner) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ImportFormDefinitionsV1RequestInner) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ImportFormDefinitionsV1RequestInner) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ImportFormDefinitionsV1RequestInner) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


