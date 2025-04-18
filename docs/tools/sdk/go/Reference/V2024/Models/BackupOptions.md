---
id: v2024-backup-options
title: BackupOptions
pagination_label: BackupOptions
sidebar_label: BackupOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BackupOptions', 'V2024BackupOptions'] 
slug: /tools/sdk/go/v2024/models/backup-options
tags: ['SDK', 'Software Development Kit', 'BackupOptions', 'V2024BackupOptions']
---

# BackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Methods

### NewBackupOptions

`func NewBackupOptions() *BackupOptions`

NewBackupOptions instantiates a new BackupOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBackupOptionsWithDefaults

`func NewBackupOptionsWithDefaults() *BackupOptions`

NewBackupOptionsWithDefaults instantiates a new BackupOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *BackupOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *BackupOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *BackupOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *BackupOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *BackupOptions) GetObjectOptions() map[string]ObjectExportImportNames`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *BackupOptions) GetObjectOptionsOk() (*map[string]ObjectExportImportNames, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *BackupOptions) SetObjectOptions(v map[string]ObjectExportImportNames)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *BackupOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


