---
id: v1-userlevelpublishsummary
title: Userlevelpublishsummary
pagination_label: Userlevelpublishsummary
sidebar_label: Userlevelpublishsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Userlevelpublishsummary', 'V1Userlevelpublishsummary'] 
slug: /tools/sdk/go/customuserlevels/models/userlevelpublishsummary
tags: ['SDK', 'Software Development Kit', 'Userlevelpublishsummary', 'V1Userlevelpublishsummary']
---

# Userlevelpublishsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserLevelId** | Pointer to **string** | The unique identifier of the UserLevel. | [optional] 
**Publish** | Pointer to **bool** | Indicates whether the API call triggered a publish operation. | [optional] [default to false]
**Status** | Pointer to **string** | The status of the UserLevel publish operation. | [optional] 
**Modified** | Pointer to **SailPointTime** | The last modification timestamp of the UserLevel. | [optional] 

## Methods

### NewUserlevelpublishsummary

`func NewUserlevelpublishsummary() *Userlevelpublishsummary`

NewUserlevelpublishsummary instantiates a new Userlevelpublishsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserlevelpublishsummaryWithDefaults

`func NewUserlevelpublishsummaryWithDefaults() *Userlevelpublishsummary`

NewUserlevelpublishsummaryWithDefaults instantiates a new Userlevelpublishsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserLevelId

`func (o *Userlevelpublishsummary) GetUserLevelId() string`

GetUserLevelId returns the UserLevelId field if non-nil, zero value otherwise.

### GetUserLevelIdOk

`func (o *Userlevelpublishsummary) GetUserLevelIdOk() (*string, bool)`

GetUserLevelIdOk returns a tuple with the UserLevelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserLevelId

`func (o *Userlevelpublishsummary) SetUserLevelId(v string)`

SetUserLevelId sets UserLevelId field to given value.

### HasUserLevelId

`func (o *Userlevelpublishsummary) HasUserLevelId() bool`

HasUserLevelId returns a boolean if a field has been set.

### GetPublish

`func (o *Userlevelpublishsummary) GetPublish() bool`

GetPublish returns the Publish field if non-nil, zero value otherwise.

### GetPublishOk

`func (o *Userlevelpublishsummary) GetPublishOk() (*bool, bool)`

GetPublishOk returns a tuple with the Publish field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublish

`func (o *Userlevelpublishsummary) SetPublish(v bool)`

SetPublish sets Publish field to given value.

### HasPublish

`func (o *Userlevelpublishsummary) HasPublish() bool`

HasPublish returns a boolean if a field has been set.

### GetStatus

`func (o *Userlevelpublishsummary) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Userlevelpublishsummary) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Userlevelpublishsummary) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Userlevelpublishsummary) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetModified

`func (o *Userlevelpublishsummary) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Userlevelpublishsummary) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Userlevelpublishsummary) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Userlevelpublishsummary) HasModified() bool`

HasModified returns a boolean if a field has been set.


