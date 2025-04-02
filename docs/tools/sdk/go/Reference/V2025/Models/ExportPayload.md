---
id: export-payload
title: ExportPayload
pagination_label: ExportPayload
sidebar_label: ExportPayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExportPayload', 'ExportPayload'] 
slug: /tools/sdk/go//models/export-payload
tags: ['SDK', 'Software Development Kit', 'ExportPayload', 'ExportPayload']
---

# ExportPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Methods

### NewExportPayload

`func NewExportPayload() *ExportPayload`

NewExportPayload instantiates a new ExportPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportPayloadWithDefaults

`func NewExportPayloadWithDefaults() *ExportPayload`

NewExportPayloadWithDefaults instantiates a new ExportPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ExportPayload) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExportPayload) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExportPayload) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExportPayload) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExcludeTypes

`func (o *ExportPayload) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *ExportPayload) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *ExportPayload) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *ExportPayload) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *ExportPayload) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ExportPayload) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ExportPayload) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ExportPayload) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ExportPayload) GetObjectOptions() map[string]ObjectExportImportOptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ExportPayload) GetObjectOptionsOk() (*map[string]ObjectExportImportOptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ExportPayload) SetObjectOptions(v map[string]ObjectExportImportOptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ExportPayload) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


