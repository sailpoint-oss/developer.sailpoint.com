---
id: v1-accessmodelmetadatabulkupdateresponse
title: Accessmodelmetadatabulkupdateresponse
pagination_label: Accessmodelmetadatabulkupdateresponse
sidebar_label: Accessmodelmetadatabulkupdateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessmodelmetadatabulkupdateresponse', 'V1Accessmodelmetadatabulkupdateresponse'] 
slug: /tools/sdk/go/accessmodelmetadata/models/accessmodelmetadatabulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Accessmodelmetadatabulkupdateresponse', 'V1Accessmodelmetadatabulkupdateresponse']
---

# Accessmodelmetadatabulkupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task which is executing the bulk update. | [optional] 
**Type** | Pointer to **string** | Type of the bulk update object. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request, only list unfinished request's status. | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewAccessmodelmetadatabulkupdateresponse

`func NewAccessmodelmetadatabulkupdateresponse() *Accessmodelmetadatabulkupdateresponse`

NewAccessmodelmetadatabulkupdateresponse instantiates a new Accessmodelmetadatabulkupdateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessmodelmetadatabulkupdateresponseWithDefaults

`func NewAccessmodelmetadatabulkupdateresponseWithDefaults() *Accessmodelmetadatabulkupdateresponse`

NewAccessmodelmetadatabulkupdateresponseWithDefaults instantiates a new Accessmodelmetadatabulkupdateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessmodelmetadatabulkupdateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessmodelmetadatabulkupdateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessmodelmetadatabulkupdateresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessmodelmetadatabulkupdateresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Accessmodelmetadatabulkupdateresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessmodelmetadatabulkupdateresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessmodelmetadatabulkupdateresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessmodelmetadatabulkupdateresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Accessmodelmetadatabulkupdateresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accessmodelmetadatabulkupdateresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accessmodelmetadatabulkupdateresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Accessmodelmetadatabulkupdateresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Accessmodelmetadatabulkupdateresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessmodelmetadatabulkupdateresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessmodelmetadatabulkupdateresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessmodelmetadatabulkupdateresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


