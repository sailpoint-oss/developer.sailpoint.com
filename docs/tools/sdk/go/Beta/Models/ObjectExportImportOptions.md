---
id: object-export-import-options
title: ObjectExportImportOptions
pagination_label: ObjectExportImportOptions
sidebar_label: ObjectExportImportOptions
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ObjectExportImportOptions'] 
slug: /tools/sdk/go/beta/models/object-export-import-options
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportOptions']
---

# ObjectExportImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedIds** |  Pointer to **[]string** | Object ids to be included in an import or export. | [optional] 
**IncludedNames** |  Pointer to **[]string** | Object names to be included in an import or export. | [optional] 

## Methods

### NewObjectExportImportOptions

`func NewObjectExportImportOptions() *ObjectExportImportOptions`

NewObjectExportImportOptions instantiates a new ObjectExportImportOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectExportImportOptionsWithDefaults

`func NewObjectExportImportOptionsWithDefaults() *ObjectExportImportOptions`

NewObjectExportImportOptionsWithDefaults instantiates a new ObjectExportImportOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludedIds

`func (o *ObjectExportImportOptions) GetIncludedIds() []string`

GetIncludedIds returns the IncludedIds field if non-nil, zero value otherwise.

### GetIncludedIdsOk

`func (o *ObjectExportImportOptions) GetIncludedIdsOk() (*[]string, bool)`

GetIncludedIdsOk returns a tuple with the IncludedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedIds

`func (o *ObjectExportImportOptions) SetIncludedIds(v []string)`

SetIncludedIds sets IncludedIds field to given value.

### HasIncludedIds

`func (o *ObjectExportImportOptions) HasIncludedIds() bool`

HasIncludedIds returns a boolean if a field has been set.

### GetIncludedNames

`func (o *ObjectExportImportOptions) GetIncludedNames() []string`

GetIncludedNames returns the IncludedNames field if non-nil, zero value otherwise.

### GetIncludedNamesOk

`func (o *ObjectExportImportOptions) GetIncludedNamesOk() (*[]string, bool)`

GetIncludedNamesOk returns a tuple with the IncludedNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedNames

`func (o *ObjectExportImportOptions) SetIncludedNames(v []string)`

SetIncludedNames sets IncludedNames field to given value.

### HasIncludedNames

`func (o *ObjectExportImportOptions) HasIncludedNames() bool`

HasIncludedNames returns a boolean if a field has been set.


[[Back to top]](#) 


