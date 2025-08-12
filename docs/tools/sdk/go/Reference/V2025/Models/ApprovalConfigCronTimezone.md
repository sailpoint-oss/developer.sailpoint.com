---
id: v2025-approval-config-cron-timezone
title: ApprovalConfigCronTimezone
pagination_label: ApprovalConfigCronTimezone
sidebar_label: ApprovalConfigCronTimezone
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone'] 
slug: /tools/sdk/go/v2025/models/approval-config-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone']
---

# ApprovalConfigCronTimezone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Location** | Pointer to **string** | Timezone location for cron schedules. | [optional] 
**Offset** | Pointer to **string** | Timezone offset for cron schedules. | [optional] 

## Methods

### NewApprovalConfigCronTimezone

`func NewApprovalConfigCronTimezone() *ApprovalConfigCronTimezone`

NewApprovalConfigCronTimezone instantiates a new ApprovalConfigCronTimezone object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigCronTimezoneWithDefaults

`func NewApprovalConfigCronTimezoneWithDefaults() *ApprovalConfigCronTimezone`

NewApprovalConfigCronTimezoneWithDefaults instantiates a new ApprovalConfigCronTimezone object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocation

`func (o *ApprovalConfigCronTimezone) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ApprovalConfigCronTimezone) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ApprovalConfigCronTimezone) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ApprovalConfigCronTimezone) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetOffset

`func (o *ApprovalConfigCronTimezone) GetOffset() string`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ApprovalConfigCronTimezone) GetOffsetOk() (*string, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ApprovalConfigCronTimezone) SetOffset(v string)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ApprovalConfigCronTimezone) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


