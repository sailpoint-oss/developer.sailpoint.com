---
id: v1-exportpayload
title: Exportpayload
pagination_label: Exportpayload
sidebar_label: Exportpayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Exportpayload', 'V1Exportpayload'] 
slug: /tools/sdk/go/spconfig/models/exportpayload
tags: ['SDK', 'Software Development Kit', 'Exportpayload', 'V1Exportpayload']
---

# Exportpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 
**ExcludeTypes** | Pointer to **[]string** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | Pointer to [**map[string]Objectexportimportoptions**](objectexportimportoptions) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Methods

### NewExportpayload

`func NewExportpayload() *Exportpayload`

NewExportpayload instantiates a new Exportpayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportpayloadWithDefaults

`func NewExportpayloadWithDefaults() *Exportpayload`

NewExportpayloadWithDefaults instantiates a new Exportpayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *Exportpayload) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Exportpayload) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Exportpayload) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Exportpayload) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExcludeTypes

`func (o *Exportpayload) GetExcludeTypes() []string`

GetExcludeTypes returns the ExcludeTypes field if non-nil, zero value otherwise.

### GetExcludeTypesOk

`func (o *Exportpayload) GetExcludeTypesOk() (*[]string, bool)`

GetExcludeTypesOk returns a tuple with the ExcludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeTypes

`func (o *Exportpayload) SetExcludeTypes(v []string)`

SetExcludeTypes sets ExcludeTypes field to given value.

### HasExcludeTypes

`func (o *Exportpayload) HasExcludeTypes() bool`

HasExcludeTypes returns a boolean if a field has been set.

### GetIncludeTypes

`func (o *Exportpayload) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *Exportpayload) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *Exportpayload) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *Exportpayload) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *Exportpayload) GetObjectOptions() map[string]Objectexportimportoptions`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *Exportpayload) GetObjectOptionsOk() (*map[string]Objectexportimportoptions, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *Exportpayload) SetObjectOptions(v map[string]Objectexportimportoptions)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *Exportpayload) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


