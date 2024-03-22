---
id: access-profile-bulk-delete-response
title: AccessProfileBulkDeleteResponse
pagination_label: AccessProfileBulkDeleteResponse
sidebar_label: AccessProfileBulkDeleteResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessProfileBulkDeleteResponse'] 
slug: /tools/sdk/go/beta/models/access-profile-bulk-delete-response
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteResponse']
---

# AccessProfileBulkDeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** |  Pointer to **string** | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [optional] 
**Pending** |  Pointer to **[]string** | List of IDs of Access Profiles which are pending deletion. | [optional] 
**InUse** |  Pointer to [**[]AccessProfileUsage**](access-profile-usage) | List of usages of Access Profiles targeted for deletion. | [optional] 

## Methods

### NewAccessProfileBulkDeleteResponse

`func NewAccessProfileBulkDeleteResponse() *AccessProfileBulkDeleteResponse`

NewAccessProfileBulkDeleteResponse instantiates a new AccessProfileBulkDeleteResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileBulkDeleteResponseWithDefaults

`func NewAccessProfileBulkDeleteResponseWithDefaults() *AccessProfileBulkDeleteResponse`

NewAccessProfileBulkDeleteResponseWithDefaults instantiates a new AccessProfileBulkDeleteResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskId

`func (o *AccessProfileBulkDeleteResponse) GetTaskId() string`

GetTaskId returns the TaskId field if non-nil, zero value otherwise.

### GetTaskIdOk

`func (o *AccessProfileBulkDeleteResponse) GetTaskIdOk() (*string, bool)`

GetTaskIdOk returns a tuple with the TaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskId

`func (o *AccessProfileBulkDeleteResponse) SetTaskId(v string)`

SetTaskId sets TaskId field to given value.

### HasTaskId

`func (o *AccessProfileBulkDeleteResponse) HasTaskId() bool`

HasTaskId returns a boolean if a field has been set.

### GetPending

`func (o *AccessProfileBulkDeleteResponse) GetPending() []string`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *AccessProfileBulkDeleteResponse) GetPendingOk() (*[]string, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *AccessProfileBulkDeleteResponse) SetPending(v []string)`

SetPending sets Pending field to given value.

### HasPending

`func (o *AccessProfileBulkDeleteResponse) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetInUse

`func (o *AccessProfileBulkDeleteResponse) GetInUse() []AccessProfileUsage`

GetInUse returns the InUse field if non-nil, zero value otherwise.

### GetInUseOk

`func (o *AccessProfileBulkDeleteResponse) GetInUseOk() (*[]AccessProfileUsage, bool)`

GetInUseOk returns a tuple with the InUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInUse

`func (o *AccessProfileBulkDeleteResponse) SetInUse(v []AccessProfileUsage)`

SetInUse sets InUse field to given value.

### HasInUse

`func (o *AccessProfileBulkDeleteResponse) HasInUse() bool`

HasInUse returns a boolean if a field has been set.


[[Back to top]](#) 


