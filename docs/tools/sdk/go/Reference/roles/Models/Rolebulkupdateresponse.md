---
id: v1-rolebulkupdateresponse
title: Rolebulkupdateresponse
pagination_label: Rolebulkupdateresponse
sidebar_label: Rolebulkupdateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolebulkupdateresponse', 'V1Rolebulkupdateresponse'] 
slug: /tools/sdk/go/roles/models/rolebulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Rolebulkupdateresponse', 'V1Rolebulkupdateresponse']
---

# Rolebulkupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [optional] 
**Type** | Pointer to **string** | Type of the bulk update object. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request, could also checked by getBulkUpdateStatus API | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewRolebulkupdateresponse

`func NewRolebulkupdateresponse() *Rolebulkupdateresponse`

NewRolebulkupdateresponse instantiates a new Rolebulkupdateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolebulkupdateresponseWithDefaults

`func NewRolebulkupdateresponseWithDefaults() *Rolebulkupdateresponse`

NewRolebulkupdateresponseWithDefaults instantiates a new Rolebulkupdateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Rolebulkupdateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Rolebulkupdateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Rolebulkupdateresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Rolebulkupdateresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Rolebulkupdateresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Rolebulkupdateresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Rolebulkupdateresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Rolebulkupdateresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Rolebulkupdateresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Rolebulkupdateresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Rolebulkupdateresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Rolebulkupdateresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *Rolebulkupdateresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Rolebulkupdateresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Rolebulkupdateresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Rolebulkupdateresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


