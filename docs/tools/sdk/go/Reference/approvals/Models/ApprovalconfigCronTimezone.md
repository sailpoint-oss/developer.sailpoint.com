---
id: v1-approvalconfig-cron-timezone
title: ApprovalconfigCronTimezone
pagination_label: ApprovalconfigCronTimezone
sidebar_label: ApprovalconfigCronTimezone
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigCronTimezone', 'V1ApprovalconfigCronTimezone'] 
slug: /tools/sdk/go/approvals/models/approvalconfig-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigCronTimezone', 'V1ApprovalconfigCronTimezone']
---

# ApprovalconfigCronTimezone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Location** | Pointer to **string** | Timezone location for cron schedules. | [optional] 
**Offset** | Pointer to **string** | Timezone offset for cron schedules. | [optional] 

## Methods

### NewApprovalconfigCronTimezone

`func NewApprovalconfigCronTimezone() *ApprovalconfigCronTimezone`

NewApprovalconfigCronTimezone instantiates a new ApprovalconfigCronTimezone object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigCronTimezoneWithDefaults

`func NewApprovalconfigCronTimezoneWithDefaults() *ApprovalconfigCronTimezone`

NewApprovalconfigCronTimezoneWithDefaults instantiates a new ApprovalconfigCronTimezone object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocation

`func (o *ApprovalconfigCronTimezone) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ApprovalconfigCronTimezone) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ApprovalconfigCronTimezone) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ApprovalconfigCronTimezone) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetOffset

`func (o *ApprovalconfigCronTimezone) GetOffset() string`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ApprovalconfigCronTimezone) GetOffsetOk() (*string, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ApprovalconfigCronTimezone) SetOffset(v string)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ApprovalconfigCronTimezone) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


