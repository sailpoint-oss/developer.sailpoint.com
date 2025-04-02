---
id: update-detail
title: UpdateDetail
pagination_label: UpdateDetail
sidebar_label: UpdateDetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UpdateDetail', 'UpdateDetail'] 
slug: /tools/sdk/go//models/update-detail
tags: ['SDK', 'Software Development Kit', 'UpdateDetail', 'UpdateDetail']
---

# UpdateDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | The detailed message for an update. Typically the relevent error message when status is error. | [optional] 
**ScriptName** | Pointer to **string** | The connector script name | [optional] 
**UpdatedFiles** | Pointer to **[]string** | The list of updated files supported by the connector | [optional] 
**Status** | Pointer to **string** | The connector update status | [optional] 

## Methods

### NewUpdateDetail

`func NewUpdateDetail() *UpdateDetail`

NewUpdateDetail instantiates a new UpdateDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateDetailWithDefaults

`func NewUpdateDetailWithDefaults() *UpdateDetail`

NewUpdateDetailWithDefaults instantiates a new UpdateDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *UpdateDetail) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UpdateDetail) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UpdateDetail) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UpdateDetail) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetScriptName

`func (o *UpdateDetail) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *UpdateDetail) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *UpdateDetail) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.

### HasScriptName

`func (o *UpdateDetail) HasScriptName() bool`

HasScriptName returns a boolean if a field has been set.

### GetUpdatedFiles

`func (o *UpdateDetail) GetUpdatedFiles() []string`

GetUpdatedFiles returns the UpdatedFiles field if non-nil, zero value otherwise.

### GetUpdatedFilesOk

`func (o *UpdateDetail) GetUpdatedFilesOk() (*[]string, bool)`

GetUpdatedFilesOk returns a tuple with the UpdatedFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedFiles

`func (o *UpdateDetail) SetUpdatedFiles(v []string)`

SetUpdatedFiles sets UpdatedFiles field to given value.

### HasUpdatedFiles

`func (o *UpdateDetail) HasUpdatedFiles() bool`

HasUpdatedFiles returns a boolean if a field has been set.

### SetUpdatedFilesNil

`func (o *UpdateDetail) SetUpdatedFilesNil(b bool)`

 SetUpdatedFilesNil sets the value for UpdatedFiles to be an explicit nil

### UnsetUpdatedFiles
`func (o *UpdateDetail) UnsetUpdatedFiles()`

UnsetUpdatedFiles ensures that no value is present for UpdatedFiles, not even an explicit nil
### GetStatus

`func (o *UpdateDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UpdateDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UpdateDetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *UpdateDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


