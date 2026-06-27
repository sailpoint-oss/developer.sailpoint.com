---
id: v1-accessprofilebulkdeleteresponse
title: Accessprofilebulkdeleteresponse
pagination_label: Accessprofilebulkdeleteresponse
sidebar_label: Accessprofilebulkdeleteresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofilebulkdeleteresponse', 'V1Accessprofilebulkdeleteresponse'] 
slug: /tools/sdk/go/accessprofiles/models/accessprofilebulkdeleteresponse
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleteresponse', 'V1Accessprofilebulkdeleteresponse']
---

# Accessprofilebulkdeleteresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | Pointer to **string** | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [optional] 
**Pending** | Pointer to **[]string** | List of IDs of Access Profiles which are pending deletion. | [optional] 
**InUse** | Pointer to [**[]Accessprofileusage**](accessprofileusage) | List of usages of Access Profiles targeted for deletion. | [optional] 

## Methods

### NewAccessprofilebulkdeleteresponse

`func NewAccessprofilebulkdeleteresponse() *Accessprofilebulkdeleteresponse`

NewAccessprofilebulkdeleteresponse instantiates a new Accessprofilebulkdeleteresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilebulkdeleteresponseWithDefaults

`func NewAccessprofilebulkdeleteresponseWithDefaults() *Accessprofilebulkdeleteresponse`

NewAccessprofilebulkdeleteresponseWithDefaults instantiates a new Accessprofilebulkdeleteresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskId

`func (o *Accessprofilebulkdeleteresponse) GetTaskId() string`

GetTaskId returns the TaskId field if non-nil, zero value otherwise.

### GetTaskIdOk

`func (o *Accessprofilebulkdeleteresponse) GetTaskIdOk() (*string, bool)`

GetTaskIdOk returns a tuple with the TaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskId

`func (o *Accessprofilebulkdeleteresponse) SetTaskId(v string)`

SetTaskId sets TaskId field to given value.

### HasTaskId

`func (o *Accessprofilebulkdeleteresponse) HasTaskId() bool`

HasTaskId returns a boolean if a field has been set.

### GetPending

`func (o *Accessprofilebulkdeleteresponse) GetPending() []string`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *Accessprofilebulkdeleteresponse) GetPendingOk() (*[]string, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *Accessprofilebulkdeleteresponse) SetPending(v []string)`

SetPending sets Pending field to given value.

### HasPending

`func (o *Accessprofilebulkdeleteresponse) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetInUse

`func (o *Accessprofilebulkdeleteresponse) GetInUse() []Accessprofileusage`

GetInUse returns the InUse field if non-nil, zero value otherwise.

### GetInUseOk

`func (o *Accessprofilebulkdeleteresponse) GetInUseOk() (*[]Accessprofileusage, bool)`

GetInUseOk returns a tuple with the InUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInUse

`func (o *Accessprofilebulkdeleteresponse) SetInUse(v []Accessprofileusage)`

SetInUse sets InUse field to given value.

### HasInUse

`func (o *Accessprofilebulkdeleteresponse) HasInUse() bool`

HasInUse returns a boolean if a field has been set.


