---
id: backup-options1
title: BackupOptions1
pagination_label: BackupOptions1
sidebar_label: BackupOptions1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BackupOptions1', 'BackupOptions1'] 
slug: /tools/sdk/go//models/backup-options1
tags: ['SDK', 'Software Development Kit', 'BackupOptions1', 'BackupOptions1']
---

# BackupOptions1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Methods

### NewBackupOptions1

`func NewBackupOptions1() *BackupOptions1`

NewBackupOptions1 instantiates a new BackupOptions1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBackupOptions1WithDefaults

`func NewBackupOptions1WithDefaults() *BackupOptions1`

NewBackupOptions1WithDefaults instantiates a new BackupOptions1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *BackupOptions1) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *BackupOptions1) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *BackupOptions1) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *BackupOptions1) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *BackupOptions1) GetObjectOptions() map[string]ObjectExportImportNames`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *BackupOptions1) GetObjectOptionsOk() (*map[string]ObjectExportImportNames, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *BackupOptions1) SetObjectOptions(v map[string]ObjectExportImportNames)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *BackupOptions1) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


