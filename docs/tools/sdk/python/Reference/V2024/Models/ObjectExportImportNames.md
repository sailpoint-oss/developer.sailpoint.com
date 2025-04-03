---
id: v2024-object-export-import-names
title: ObjectExportImportNames
pagination_label: ObjectExportImportNames
sidebar_label: ObjectExportImportNames
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectExportImportNames', 'V2024ObjectExportImportNames'] 
slug: /tools/sdk/go/v2024/models/object-export-import-names
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportNames', 'V2024ObjectExportImportNames']
---

# ObjectExportImportNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | Pointer to **[]string** | Object names to be included in a backup. | [optional] 

## Methods

### NewObjectExportImportNames

`func NewObjectExportImportNames() *ObjectExportImportNames`

NewObjectExportImportNames instantiates a new ObjectExportImportNames object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectExportImportNamesWithDefaults

`func NewObjectExportImportNamesWithDefaults() *ObjectExportImportNames`

NewObjectExportImportNamesWithDefaults instantiates a new ObjectExportImportNames object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludedNames

`func (o *ObjectExportImportNames) GetIncludedNames() []string`

GetIncludedNames returns the IncludedNames field if non-nil, zero value otherwise.

### GetIncludedNamesOk

`func (o *ObjectExportImportNames) GetIncludedNamesOk() (*[]string, bool)`

GetIncludedNamesOk returns a tuple with the IncludedNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedNames

`func (o *ObjectExportImportNames) SetIncludedNames(v []string)`

SetIncludedNames sets IncludedNames field to given value.

### HasIncludedNames

`func (o *ObjectExportImportNames) HasIncludedNames() bool`

HasIncludedNames returns a boolean if a field has been set.


