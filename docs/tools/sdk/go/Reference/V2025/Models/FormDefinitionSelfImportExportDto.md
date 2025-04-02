---
id: form-definition-self-import-export-dto
title: FormDefinitionSelfImportExportDto
pagination_label: FormDefinitionSelfImportExportDto
sidebar_label: FormDefinitionSelfImportExportDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionSelfImportExportDto', 'FormDefinitionSelfImportExportDto'] 
slug: /tools/sdk/go//models/form-definition-self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'FormDefinitionSelfImportExportDto', 'FormDefinitionSelfImportExportDto']
---

# FormDefinitionSelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Imported/exported object's DTO type. | [optional] 
**Id** | Pointer to **string** | Imported/exported object's ID. | [optional] 
**Name** | Pointer to **string** | Imported/exported object's display name. | [optional] 

## Methods

### NewFormDefinitionSelfImportExportDto

`func NewFormDefinitionSelfImportExportDto() *FormDefinitionSelfImportExportDto`

NewFormDefinitionSelfImportExportDto instantiates a new FormDefinitionSelfImportExportDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionSelfImportExportDtoWithDefaults

`func NewFormDefinitionSelfImportExportDtoWithDefaults() *FormDefinitionSelfImportExportDto`

NewFormDefinitionSelfImportExportDtoWithDefaults instantiates a new FormDefinitionSelfImportExportDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FormDefinitionSelfImportExportDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormDefinitionSelfImportExportDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormDefinitionSelfImportExportDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormDefinitionSelfImportExportDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *FormDefinitionSelfImportExportDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormDefinitionSelfImportExportDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormDefinitionSelfImportExportDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormDefinitionSelfImportExportDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *FormDefinitionSelfImportExportDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormDefinitionSelfImportExportDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormDefinitionSelfImportExportDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormDefinitionSelfImportExportDto) HasName() bool`

HasName returns a boolean if a field has been set.


