---
id: v1-exportoptions
title: Exportoptions
pagination_label: Exportoptions
sidebar_label: Exportoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Exportoptions', 'V1Exportoptions'] 
slug: /tools/sdk/go/spconfig/models/exportoptions
tags: ['SDK', 'Software Development Kit', 'Exportoptions', 'V1Exportoptions']
---

# Exportoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]Objectexportimportoptions**](objectexportimportoptions) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Methods

### NewExportoptions

`func NewExportoptions() *Exportoptions`

NewExportoptions instantiates a new Exportoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportoptionsWithDefaults

`func NewExportoptionsWithDefaults() *Exportoptions`

NewExportoptionsWithDefaults instantiates a new Exportoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExcludeTypes

`func (o *Exportoptions) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *Exportoptions) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *Exportoptions) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *Exportoptions) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *Exportoptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *Exportoptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *Exportoptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *Exportoptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *Exportoptions) GetObjectOptions() map[string]Objectexportimportoptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *Exportoptions) GetObjectOptionsOk() (*map[string]Objectexportimportoptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *Exportoptions) SetObjectOptions(v map[string]Objectexportimportoptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *Exportoptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


