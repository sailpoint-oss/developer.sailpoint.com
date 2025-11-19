---
id: v2025-user-level-publish-summary
title: UserLevelPublishSummary
pagination_label: UserLevelPublishSummary
sidebar_label: UserLevelPublishSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary'] 
slug: /tools/sdk/go/v2025/models/user-level-publish-summary
tags: ['SDK', 'Software Development Kit', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary']
---

# UserLevelPublishSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserLevelId** | Pointer to **string** | The unique identifier of the UserLevel. | [optional] 
**Publish** | Pointer to **bool** | Indicates whether the API call triggered a publish operation. | [optional] [default to false]
**Status** | Pointer to **string** | The status of the UserLevel publish operation. | [optional] 
**Modified** | Pointer to **SailPointTime** | The last modification timestamp of the UserLevel. | [optional] 

## Methods

### NewUserLevelPublishSummary

`func NewUserLevelPublishSummary() *UserLevelPublishSummary`

NewUserLevelPublishSummary instantiates a new UserLevelPublishSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserLevelPublishSummaryWithDefaults

`func NewUserLevelPublishSummaryWithDefaults() *UserLevelPublishSummary`

NewUserLevelPublishSummaryWithDefaults instantiates a new UserLevelPublishSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserLevelId

`func (o *UserLevelPublishSummary) GetUserLevelId() string`

GetUserLevelId returns the UserLevelId field if non-nil, zero value otherwise.

### GetUserLevelIdOk

`func (o *UserLevelPublishSummary) GetUserLevelIdOk() (*string, bool)`

GetUserLevelIdOk returns a tuple with the UserLevelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserLevelId

`func (o *UserLevelPublishSummary) SetUserLevelId(v string)`

SetUserLevelId sets UserLevelId field to given value.

### HasUserLevelId

`func (o *UserLevelPublishSummary) HasUserLevelId() bool`

HasUserLevelId returns a boolean if a field has been set.

### GetPublish

`func (o *UserLevelPublishSummary) GetPublish() bool`

GetPublish returns the Publish field if non-nil, zero value otherwise.

### GetPublishOk

`func (o *UserLevelPublishSummary) GetPublishOk() (*bool, bool)`

GetPublishOk returns a tuple with the Publish field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublish

`func (o *UserLevelPublishSummary) SetPublish(v bool)`

SetPublish sets Publish field to given value.

### HasPublish

`func (o *UserLevelPublishSummary) HasPublish() bool`

HasPublish returns a boolean if a field has been set.

### GetStatus

`func (o *UserLevelPublishSummary) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UserLevelPublishSummary) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UserLevelPublishSummary) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *UserLevelPublishSummary) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetModified

`func (o *UserLevelPublishSummary) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *UserLevelPublishSummary) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *UserLevelPublishSummary) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *UserLevelPublishSummary) HasModified() bool`

HasModified returns a boolean if a field has been set.


