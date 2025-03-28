---
id: beta-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExportOptions', 'BetaExportOptions'] 
slug: /tools/sdk/go/beta/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions', 'BetaExportOptions']
---

# ExportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Methods

### NewExportOptions

`func NewExportOptions() *ExportOptions`

NewExportOptions instantiates a new ExportOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportOptionsWithDefaults

`func NewExportOptionsWithDefaults() *ExportOptions`

NewExportOptionsWithDefaults instantiates a new ExportOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExcludeTypes

`func (o *ExportOptions) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *ExportOptions) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *ExportOptions) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *ExportOptions) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *ExportOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ExportOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ExportOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ExportOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ExportOptions) GetObjectOptions() map[string]ObjectExportImportOptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ExportOptions) GetObjectOptionsOk() (*map[string]ObjectExportImportOptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ExportOptions) SetObjectOptions(v map[string]ObjectExportImportOptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ExportOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


