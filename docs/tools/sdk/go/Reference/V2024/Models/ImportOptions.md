---
id: v2024-import-options
title: ImportOptions
pagination_label: ImportOptions
sidebar_label: ImportOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportOptions', 'V2024ImportOptions'] 
slug: /tools/sdk/go/v2024/models/import-options
tags: ['SDK', 'Software Development Kit', 'ImportOptions', 'V2024ImportOptions']
---

# ImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
**DefaultReferences** | Pointer to **[]string** | List of object types that can be used to resolve references on import. | [optional] 
**ExcludeBackup** | Pointer to **bool** | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [optional] [default to false]

## Methods

### NewImportOptions

`func NewImportOptions() *ImportOptions`

NewImportOptions instantiates a new ImportOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportOptionsWithDefaults

`func NewImportOptionsWithDefaults() *ImportOptions`

NewImportOptionsWithDefaults instantiates a new ImportOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExcludeTypes

`func (o *ImportOptions) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *ImportOptions) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *ImportOptions) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *ImportOptions) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *ImportOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ImportOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ImportOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ImportOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ImportOptions) GetObjectOptions() map[string]ObjectExportImportOptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ImportOptions) GetObjectOptionsOk() (*map[string]ObjectExportImportOptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ImportOptions) SetObjectOptions(v map[string]ObjectExportImportOptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ImportOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.

### GetDefaultReferences

`func (o *ImportOptions) GetDefaultReferences() []string`

GetDefaultReferences returns the DefaultReferences field if non-nil, zero value otherwise.

### GetDefaultReferencesOk

`func (o *ImportOptions) GetDefaultReferencesOk() (*[]string, bool)`

GetDefaultReferencesOk returns a tuple with the DefaultReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultReferences

`func (o *ImportOptions) SetDefaultReferences(v []string)`

SetDefaultReferences sets DefaultReferences field to given value.

### HasDefaultReferences

`func (o *ImportOptions) HasDefaultReferences() bool`

HasDefaultReferences returns a boolean if a field has been set.

### GetExcludeBackup

`func (o *ImportOptions) GetExcludeBackup() bool`

GetExcludeBackup returns the ExcludeBackup field if non-nil, zero value otherwise.

### GetExcludeBackupOk

`func (o *ImportOptions) GetExcludeBackupOk() (*bool, bool)`

GetExcludeBackupOk returns a tuple with the ExcludeBackup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeBackup

`func (o *ImportOptions) SetExcludeBackup(v bool)`

SetExcludeBackup sets ExcludeBackup field to given value.

### HasExcludeBackup

`func (o *ImportOptions) HasExcludeBackup() bool`

HasExcludeBackup returns a boolean if a field has been set.


