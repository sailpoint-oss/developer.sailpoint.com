---
id: v1-updatedetail
title: Updatedetail
pagination_label: Updatedetail
sidebar_label: Updatedetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Updatedetail', 'V1Updatedetail'] 
slug: /tools/sdk/go/connectors/models/updatedetail
tags: ['SDK', 'Software Development Kit', 'Updatedetail', 'V1Updatedetail']
---

# Updatedetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | The detailed message for an update. Typically the relevent error message when status is error. | [optional] 
**ScriptName** | Pointer to **string** | The connector script name | [optional] 
**UpdatedFiles** | Pointer to **[]string** | The list of updated files supported by the connector | [optional] 
**Status** | Pointer to **string** | The connector update status | [optional] 

## Methods

### NewUpdatedetail

`func NewUpdatedetail() *Updatedetail`

NewUpdatedetail instantiates a new Updatedetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatedetailWithDefaults

`func NewUpdatedetailWithDefaults() *Updatedetail`

NewUpdatedetailWithDefaults instantiates a new Updatedetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *Updatedetail) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Updatedetail) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Updatedetail) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Updatedetail) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetScriptName

`func (o *Updatedetail) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *Updatedetail) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *Updatedetail) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.

### HasScriptName

`func (o *Updatedetail) HasScriptName() bool`

HasScriptName returns a boolean if a field has been set.

### GetUpdatedFiles

`func (o *Updatedetail) GetUpdatedFiles() []string`

GetUpdatedFiles returns the UpdatedFiles field if non-nil, zero value otherwise.

### GetUpdatedFilesOk

`func (o *Updatedetail) GetUpdatedFilesOk() (*[]string, bool)`

GetUpdatedFilesOk returns a tuple with the UpdatedFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedFiles

`func (o *Updatedetail) SetUpdatedFiles(v []string)`

SetUpdatedFiles sets UpdatedFiles field to given value.

### HasUpdatedFiles

`func (o *Updatedetail) HasUpdatedFiles() bool`

HasUpdatedFiles returns a boolean if a field has been set.

### SetUpdatedFilesNil

`func (o *Updatedetail) SetUpdatedFilesNil(b bool)`

 SetUpdatedFilesNil sets the value for UpdatedFiles to be an explicit nil

### UnsetUpdatedFiles
`func (o *Updatedetail) UnsetUpdatedFiles()`

UnsetUpdatedFiles ensures that no value is present for UpdatedFiles, not even an explicit nil
### GetStatus

`func (o *Updatedetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Updatedetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Updatedetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Updatedetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


