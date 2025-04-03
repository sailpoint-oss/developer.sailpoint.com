---
id: v2024-export-options1
title: ExportOptions1
pagination_label: ExportOptions1
sidebar_label: ExportOptions1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExportOptions1', 'V2024ExportOptions1'] 
slug: /tools/sdk/go/v2024/models/export-options1
tags: ['SDK', 'Software Development Kit', 'ExportOptions1', 'V2024ExportOptions1']
---

# ExportOptions1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Methods

### NewExportOptions1

`func NewExportOptions1() *ExportOptions1`

NewExportOptions1 instantiates a new ExportOptions1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportOptions1WithDefaults

`func NewExportOptions1WithDefaults() *ExportOptions1`

NewExportOptions1WithDefaults instantiates a new ExportOptions1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExcludeTypes

`func (o *ExportOptions1) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *ExportOptions1) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *ExportOptions1) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *ExportOptions1) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *ExportOptions1) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ExportOptions1) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ExportOptions1) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ExportOptions1) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ExportOptions1) GetObjectOptions() map[string]ObjectExportImportOptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ExportOptions1) GetObjectOptionsOk() (*map[string]ObjectExportImportOptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ExportOptions1) SetObjectOptions(v map[string]ObjectExportImportOptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ExportOptions1) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


