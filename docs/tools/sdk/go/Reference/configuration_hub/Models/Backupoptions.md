---
id: v1-backupoptions
title: Backupoptions
pagination_label: Backupoptions
sidebar_label: Backupoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Backupoptions', 'V1Backupoptions'] 
slug: /tools/sdk/go/configurationhub/models/backupoptions
tags: ['SDK', 'Software Development Kit', 'Backupoptions', 'V1Backupoptions']
---

# Backupoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | Pointer to [**map[string]Objectexportimportnames**](objectexportimportnames) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Methods

### NewBackupoptions

`func NewBackupoptions() *Backupoptions`

NewBackupoptions instantiates a new Backupoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBackupoptionsWithDefaults

`func NewBackupoptionsWithDefaults() *Backupoptions`

NewBackupoptionsWithDefaults instantiates a new Backupoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *Backupoptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *Backupoptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *Backupoptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *Backupoptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *Backupoptions) GetObjectOptions() map[string]Objectexportimportnames`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *Backupoptions) GetObjectOptionsOk() (*map[string]Objectexportimportnames, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *Backupoptions) SetObjectOptions(v map[string]Objectexportimportnames)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *Backupoptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


