---
id: v2025-role-propagation-ongoing-response-role-propagation-details
title: RolePropagationOngoingResponseRolePropagationDetails
pagination_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagationOngoingResponseRolePropagationDetails', 'V2025RolePropagationOngoingResponseRolePropagationDetails'] 
slug: /tools/sdk/go/v2025/models/role-propagation-ongoing-response-role-propagation-details
tags: ['SDK', 'Software Development Kit', 'RolePropagationOngoingResponseRolePropagationDetails', 'V2025RolePropagationOngoingResponseRolePropagationDetails']
---

# RolePropagationOngoingResponseRolePropagationDetails

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

### NewRolePropagationOngoingResponseRolePropagationDetails

`func NewRolePropagationOngoingResponseRolePropagationDetails() *RolePropagationOngoingResponseRolePropagationDetails`

NewRolePropagationOngoingResponseRolePropagationDetails instantiates a new RolePropagationOngoingResponseRolePropagationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePropagationOngoingResponseRolePropagationDetailsWithDefaults

`func NewRolePropagationOngoingResponseRolePropagationDetailsWithDefaults() *RolePropagationOngoingResponseRolePropagationDetails`

NewRolePropagationOngoingResponseRolePropagationDetailsWithDefaults instantiates a new RolePropagationOngoingResponseRolePropagationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetExecutionStage

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetExecutionStage() string`

GetExecutionStage returns the ExecutionStage field if non-nil, zero value otherwise.

### GetExecutionStageOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetExecutionStageOk() (*string, bool)`

GetExecutionStageOk returns a tuple with the ExecutionStage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStage

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetExecutionStage(v string)`

SetExecutionStage sets ExecutionStage field to given value.

### HasExecutionStage

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasExecutionStage() bool`

HasExecutionStage returns a boolean if a field has been set.

### GetLaunched

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### GetLaunchedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetLaunchedBy() RolePropagationStatusResponseLaunchedBy`

GetLaunchedBy returns the LaunchedBy field if non-nil, zero value otherwise.

### GetLaunchedByOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetLaunchedByOk() (*RolePropagationStatusResponseLaunchedBy, bool)`

GetLaunchedByOk returns a tuple with the LaunchedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunchedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetLaunchedBy(v RolePropagationStatusResponseLaunchedBy)`

SetLaunchedBy sets LaunchedBy field to given value.

### HasLaunchedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasLaunchedBy() bool`

HasLaunchedBy returns a boolean if a field has been set.

### GetTerminatedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetTerminatedBy() RolePropagationStatusResponseTerminatedBy`

GetTerminatedBy returns the TerminatedBy field if non-nil, zero value otherwise.

### GetTerminatedByOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetTerminatedByOk() (*RolePropagationStatusResponseTerminatedBy, bool)`

GetTerminatedByOk returns a tuple with the TerminatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminatedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetTerminatedBy(v RolePropagationStatusResponseTerminatedBy)`

SetTerminatedBy sets TerminatedBy field to given value.

### HasTerminatedBy

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasTerminatedBy() bool`

HasTerminatedBy returns a boolean if a field has been set.

### GetCompleted

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetFailureReason

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetFailureReason() string`

GetFailureReason returns the FailureReason field if non-nil, zero value otherwise.

### GetFailureReasonOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetFailureReasonOk() (*string, bool)`

GetFailureReasonOk returns a tuple with the FailureReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureReason

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetFailureReason(v string)`

SetFailureReason sets FailureReason field to given value.

### HasFailureReason

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasFailureReason() bool`

HasFailureReason returns a boolean if a field has been set.

### GetSkipRoleRefresh

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetSkipRoleRefresh() bool`

GetSkipRoleRefresh returns the SkipRoleRefresh field if non-nil, zero value otherwise.

### GetSkipRoleRefreshOk

`func (o *RolePropagationOngoingResponseRolePropagationDetails) GetSkipRoleRefreshOk() (*bool, bool)`

GetSkipRoleRefreshOk returns a tuple with the SkipRoleRefresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipRoleRefresh

`func (o *RolePropagationOngoingResponseRolePropagationDetails) SetSkipRoleRefresh(v bool)`

SetSkipRoleRefresh sets SkipRoleRefresh field to given value.

### HasSkipRoleRefresh

`func (o *RolePropagationOngoingResponseRolePropagationDetails) HasSkipRoleRefresh() bool`

HasSkipRoleRefresh returns a boolean if a field has been set.


