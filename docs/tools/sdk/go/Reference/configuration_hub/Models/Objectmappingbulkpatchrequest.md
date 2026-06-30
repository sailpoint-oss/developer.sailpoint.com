---
id: v1-objectmappingbulkpatchrequest
title: Objectmappingbulkpatchrequest
pagination_label: Objectmappingbulkpatchrequest
sidebar_label: Objectmappingbulkpatchrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectmappingbulkpatchrequest', 'V1Objectmappingbulkpatchrequest'] 
slug: /tools/sdk/go/configurationhub/models/objectmappingbulkpatchrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchrequest', 'V1Objectmappingbulkpatchrequest']
---

# Objectmappingbulkpatchrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Patches** | [**map[string][]Jsonpatchoperation**](https://go.dev/tour/moretypes/6) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | 

## Methods

### NewObjectmappingbulkpatchrequest

`func NewObjectmappingbulkpatchrequest(patches map[string][]Jsonpatchoperation, ) *Objectmappingbulkpatchrequest`

NewObjectmappingbulkpatchrequest instantiates a new Objectmappingbulkpatchrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectmappingbulkpatchrequestWithDefaults

`func NewObjectmappingbulkpatchrequestWithDefaults() *Objectmappingbulkpatchrequest`

NewObjectmappingbulkpatchrequestWithDefaults instantiates a new Objectmappingbulkpatchrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPatches

`func (o *Objectmappingbulkpatchrequest) GetPatches() map[string][]Jsonpatchoperation`

GetPatches returns the Patches field if non-nil, zero value otherwise.

### GetPatchesOk

`func (o *Objectmappingbulkpatchrequest) GetPatchesOk() (*map[string][]Jsonpatchoperation, bool)`

GetPatchesOk returns a tuple with the Patches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatches

`func (o *Objectmappingbulkpatchrequest) SetPatches(v map[string][]Jsonpatchoperation)`

SetPatches sets Patches field to given value.



