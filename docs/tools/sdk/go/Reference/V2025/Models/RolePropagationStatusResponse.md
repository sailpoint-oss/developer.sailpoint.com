---
id: v2025-role-propagation-status-response
title: RolePropagationStatusResponse
pagination_label: RolePropagationStatusResponse
sidebar_label: RolePropagationStatusResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagationStatusResponse', 'V2025RolePropagationStatusResponse'] 
slug: /tools/sdk/go/v2025/models/role-propagation-status-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponse', 'V2025RolePropagationStatusResponse']
---

# RolePropagationStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the Role Propagation process triggered. | [optional] 
**Status** | Pointer to **string** | Status of the Role Propagation process. | [optional] 
**ExecutionStage** | Pointer to **string** | Current execution stage of the Role Propagation process. | [optional] 
**Launched** | Pointer to **SailPointTime** | Time when the Role Propagation process was launched. | [optional] 
**LaunchedBy** | Pointer to [**RolePropagationStatusResponseLaunchedBy**](role-propagation-status-response-launched-by) |  | [optional] 
**TerminatedBy** | Pointer to [**RolePropagationStatusResponseTerminatedBy**](role-propagation-status-response-terminated-by) |  | [optional] 
**Completed** | Pointer to **SailPointTime** | Time when the Role Propagation process was completed. | [optional] 
**FailureReason** | Pointer to **string** | Reason for failure if the Role Propagation process failed. | [optional] 
**SkipRoleRefresh** | Pointer to **bool** | Indicates if the role refresh was skipped during the Role Propagation process. | [optional] [default to false]

## Methods

### NewRolePropagationStatusResponse

`func NewRolePropagationStatusResponse() *RolePropagationStatusResponse`

NewRolePropagationStatusResponse instantiates a new RolePropagationStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePropagationStatusResponseWithDefaults

`func NewRolePropagationStatusResponseWithDefaults() *RolePropagationStatusResponse`

NewRolePropagationStatusResponseWithDefaults instantiates a new RolePropagationStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RolePropagationStatusResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RolePropagationStatusResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RolePropagationStatusResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RolePropagationStatusResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *RolePropagationStatusResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RolePropagationStatusResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RolePropagationStatusResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RolePropagationStatusResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetExecutionStage

`func (o *RolePropagationStatusResponse) GetExecutionStage() string`

GetExecutionStage returns the ExecutionStage field if non-nil, zero value otherwise.

### GetExecutionStageOk

`func (o *RolePropagationStatusResponse) GetExecutionStageOk() (*string, bool)`

GetExecutionStageOk returns a tuple with the ExecutionStage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStage

`func (o *RolePropagationStatusResponse) SetExecutionStage(v string)`

SetExecutionStage sets ExecutionStage field to given value.

### HasExecutionStage

`func (o *RolePropagationStatusResponse) HasExecutionStage() bool`

HasExecutionStage returns a boolean if a field has been set.

### GetLaunched

`func (o *RolePropagationStatusResponse) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *RolePropagationStatusResponse) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *RolePropagationStatusResponse) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *RolePropagationStatusResponse) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### GetLaunchedBy

`func (o *RolePropagationStatusResponse) GetLaunchedBy() RolePropagationStatusResponseLaunchedBy`

GetLaunchedBy returns the LaunchedBy field if non-nil, zero value otherwise.

### GetLaunchedByOk

`func (o *RolePropagationStatusResponse) GetLaunchedByOk() (*RolePropagationStatusResponseLaunchedBy, bool)`

GetLaunchedByOk returns a tuple with the LaunchedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunchedBy

`func (o *RolePropagationStatusResponse) SetLaunchedBy(v RolePropagationStatusResponseLaunchedBy)`

SetLaunchedBy sets LaunchedBy field to given value.

### HasLaunchedBy

`func (o *RolePropagationStatusResponse) HasLaunchedBy() bool`

HasLaunchedBy returns a boolean if a field has been set.

### GetTerminatedBy

`func (o *RolePropagationStatusResponse) GetTerminatedBy() RolePropagationStatusResponseTerminatedBy`

GetTerminatedBy returns the TerminatedBy field if non-nil, zero value otherwise.

### GetTerminatedByOk

`func (o *RolePropagationStatusResponse) GetTerminatedByOk() (*RolePropagationStatusResponseTerminatedBy, bool)`

GetTerminatedByOk returns a tuple with the TerminatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminatedBy

`func (o *RolePropagationStatusResponse) SetTerminatedBy(v RolePropagationStatusResponseTerminatedBy)`

SetTerminatedBy sets TerminatedBy field to given value.

### HasTerminatedBy

`func (o *RolePropagationStatusResponse) HasTerminatedBy() bool`

HasTerminatedBy returns a boolean if a field has been set.

### GetCompleted

`func (o *RolePropagationStatusResponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *RolePropagationStatusResponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *RolePropagationStatusResponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *RolePropagationStatusResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetFailureReason

`func (o *RolePropagationStatusResponse) GetFailureReason() string`

GetFailureReason returns the FailureReason field if non-nil, zero value otherwise.

### GetFailureReasonOk

`func (o *RolePropagationStatusResponse) GetFailureReasonOk() (*string, bool)`

GetFailureReasonOk returns a tuple with the FailureReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureReason

`func (o *RolePropagationStatusResponse) SetFailureReason(v string)`

SetFailureReason sets FailureReason field to given value.

### HasFailureReason

`func (o *RolePropagationStatusResponse) HasFailureReason() bool`

HasFailureReason returns a boolean if a field has been set.

### GetSkipRoleRefresh

`func (o *RolePropagationStatusResponse) GetSkipRoleRefresh() bool`

GetSkipRoleRefresh returns the SkipRoleRefresh field if non-nil, zero value otherwise.

### GetSkipRoleRefreshOk

`func (o *RolePropagationStatusResponse) GetSkipRoleRefreshOk() (*bool, bool)`

GetSkipRoleRefreshOk returns a tuple with the SkipRoleRefresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipRoleRefresh

`func (o *RolePropagationStatusResponse) SetSkipRoleRefresh(v bool)`

SetSkipRoleRefresh sets SkipRoleRefresh field to given value.

### HasSkipRoleRefresh

`func (o *RolePropagationStatusResponse) HasSkipRoleRefresh() bool`

HasSkipRoleRefresh returns a boolean if a field has been set.


