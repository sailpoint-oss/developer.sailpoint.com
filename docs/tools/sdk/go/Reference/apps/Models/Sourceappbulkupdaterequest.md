---
id: v1-sourceappbulkupdaterequest
title: Sourceappbulkupdaterequest
pagination_label: Sourceappbulkupdaterequest
sidebar_label: Sourceappbulkupdaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceappbulkupdaterequest', 'V1Sourceappbulkupdaterequest'] 
slug: /tools/sdk/go/apps/models/sourceappbulkupdaterequest
tags: ['SDK', 'Software Development Kit', 'Sourceappbulkupdaterequest', 'V1Sourceappbulkupdaterequest']
---

# Sourceappbulkupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppIds** | **[]string** | List of source app ids to update | 
**JsonPatch** | [**[]Jsonpatchoperation**](jsonpatchoperation) | The JSONPatch payload used to update the source app. | 

## Methods

### NewSourceappbulkupdaterequest

`func NewSourceappbulkupdaterequest(appIds []string, jsonPatch []Jsonpatchoperation, ) *Sourceappbulkupdaterequest`

NewSourceappbulkupdaterequest instantiates a new Sourceappbulkupdaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceappbulkupdaterequestWithDefaults

`func NewSourceappbulkupdaterequestWithDefaults() *Sourceappbulkupdaterequest`

NewSourceappbulkupdaterequestWithDefaults instantiates a new Sourceappbulkupdaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppIds

`func (o *Sourceappbulkupdaterequest) GetAppIds() []string`

GetAppIds returns the AppIds field if non-nil, zero value otherwise.

### GetAppIdsOk

`func (o *Sourceappbulkupdaterequest) GetAppIdsOk() (*[]string, bool)`

GetAppIdsOk returns a tuple with the AppIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppIds

`func (o *Sourceappbulkupdaterequest) SetAppIds(v []string)`

SetAppIds sets AppIds field to given value.


### GetJsonPatch

`func (o *Sourceappbulkupdaterequest) GetJsonPatch() []Jsonpatchoperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *Sourceappbulkupdaterequest) GetJsonPatchOk() (*[]Jsonpatchoperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *Sourceappbulkupdaterequest) SetJsonPatch(v []Jsonpatchoperation)`

SetJsonPatch sets JsonPatch field to given value.



