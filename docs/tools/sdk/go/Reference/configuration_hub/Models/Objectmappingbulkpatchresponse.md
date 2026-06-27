---
id: v1-objectmappingbulkpatchresponse
title: Objectmappingbulkpatchresponse
pagination_label: Objectmappingbulkpatchresponse
sidebar_label: Objectmappingbulkpatchresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectmappingbulkpatchresponse', 'V1Objectmappingbulkpatchresponse'] 
slug: /tools/sdk/go/configurationhub/models/objectmappingbulkpatchresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchresponse', 'V1Objectmappingbulkpatchresponse']
---

# Objectmappingbulkpatchresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PatchedObjects** | Pointer to [**[]Objectmappingresponse**](objectmappingresponse) |  | [optional] 

## Methods

### NewObjectmappingbulkpatchresponse

`func NewObjectmappingbulkpatchresponse() *Objectmappingbulkpatchresponse`

NewObjectmappingbulkpatchresponse instantiates a new Objectmappingbulkpatchresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectmappingbulkpatchresponseWithDefaults

`func NewObjectmappingbulkpatchresponseWithDefaults() *Objectmappingbulkpatchresponse`

NewObjectmappingbulkpatchresponseWithDefaults instantiates a new Objectmappingbulkpatchresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPatchedObjects

`func (o *Objectmappingbulkpatchresponse) GetPatchedObjects() []Objectmappingresponse`

GetPatchedObjects returns the PatchedObjects field if non-nil, zero value otherwise.

### GetPatchedObjectsOk

`func (o *Objectmappingbulkpatchresponse) GetPatchedObjectsOk() (*[]Objectmappingresponse, bool)`

GetPatchedObjectsOk returns a tuple with the PatchedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatchedObjects

`func (o *Objectmappingbulkpatchresponse) SetPatchedObjects(v []Objectmappingresponse)`

SetPatchedObjects sets PatchedObjects field to given value.

### HasPatchedObjects

`func (o *Objectmappingbulkpatchresponse) HasPatchedObjects() bool`

HasPatchedObjects returns a boolean if a field has been set.


