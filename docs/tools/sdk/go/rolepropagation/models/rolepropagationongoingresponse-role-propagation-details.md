# RolepropagationongoingresponseRolePropagationDetails

# RolepropagationongoingresponseRolePropagationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the Role Propagation process triggered. | [optional] 
**Status** | Pointer to **string** | Status of the Role Propagation process. | [optional] 
**ExecutionStage** | Pointer to **string** | Current execution stage of the Role Propagation process. | [optional] 
**Launched** | Pointer to **SailPointTime** | Time when the Role Propagation process was launched. | [optional] 
**LaunchedBy** | Pointer to [**RolepropagationstatusresponseLaunchedBy**](rolepropagationstatusresponse-launched-by) |  | [optional] 
**TerminatedBy** | Pointer to [**RolepropagationstatusresponseTerminatedBy**](rolepropagationstatusresponse-terminated-by) |  | [optional] 
**Completed** | Pointer to **SailPointTime** | Time when the Role Propagation process was completed. | [optional] 
**FailureReason** | Pointer to **string** | Reason for failure if the Role Propagation process failed. | [optional] 
**SkipRoleRefresh** | Pointer to **bool** | Indicates if the role refresh was skipped during the Role Propagation process. | [optional] [default to false]

## Methods

### NewRolepropagationongoingresponseRolePropagationDetails

`func NewRolepropagationongoingresponseRolePropagationDetails() *RolepropagationongoingresponseRolePropagationDetails`

NewRolepropagationongoingresponseRolePropagationDetails instantiates a new RolepropagationongoingresponseRolePropagationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolepropagationongoingresponseRolePropagationDetailsWithDefaults

`func NewRolepropagationongoingresponseRolePropagationDetailsWithDefaults() *RolepropagationongoingresponseRolePropagationDetails`

NewRolepropagationongoingresponseRolePropagationDetailsWithDefaults instantiates a new RolepropagationongoingresponseRolePropagationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetExecutionStage

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetExecutionStage() string`

GetExecutionStage returns the ExecutionStage field if non-nil, zero value otherwise.

### GetExecutionStageOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetExecutionStageOk() (*string, bool)`

GetExecutionStageOk returns a tuple with the ExecutionStage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStage

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetExecutionStage(v string)`

SetExecutionStage sets ExecutionStage field to given value.

### HasExecutionStage

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasExecutionStage() bool`

HasExecutionStage returns a boolean if a field has been set.

### GetLaunched

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### GetLaunchedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetLaunchedBy() RolepropagationstatusresponseLaunchedBy`

GetLaunchedBy returns the LaunchedBy field if non-nil, zero value otherwise.

### GetLaunchedByOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetLaunchedByOk() (*RolepropagationstatusresponseLaunchedBy, bool)`

GetLaunchedByOk returns a tuple with the LaunchedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunchedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetLaunchedBy(v RolepropagationstatusresponseLaunchedBy)`

SetLaunchedBy sets LaunchedBy field to given value.

### HasLaunchedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasLaunchedBy() bool`

HasLaunchedBy returns a boolean if a field has been set.

### GetTerminatedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetTerminatedBy() RolepropagationstatusresponseTerminatedBy`

GetTerminatedBy returns the TerminatedBy field if non-nil, zero value otherwise.

### GetTerminatedByOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetTerminatedByOk() (*RolepropagationstatusresponseTerminatedBy, bool)`

GetTerminatedByOk returns a tuple with the TerminatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminatedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetTerminatedBy(v RolepropagationstatusresponseTerminatedBy)`

SetTerminatedBy sets TerminatedBy field to given value.

### HasTerminatedBy

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasTerminatedBy() bool`

HasTerminatedBy returns a boolean if a field has been set.

### GetCompleted

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetFailureReason

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetFailureReason() string`

GetFailureReason returns the FailureReason field if non-nil, zero value otherwise.

### GetFailureReasonOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetFailureReasonOk() (*string, bool)`

GetFailureReasonOk returns a tuple with the FailureReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureReason

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetFailureReason(v string)`

SetFailureReason sets FailureReason field to given value.

### HasFailureReason

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasFailureReason() bool`

HasFailureReason returns a boolean if a field has been set.

### GetSkipRoleRefresh

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetSkipRoleRefresh() bool`

GetSkipRoleRefresh returns the SkipRoleRefresh field if non-nil, zero value otherwise.

### GetSkipRoleRefreshOk

`func (o *RolepropagationongoingresponseRolePropagationDetails) GetSkipRoleRefreshOk() (*bool, bool)`

GetSkipRoleRefreshOk returns a tuple with the SkipRoleRefresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipRoleRefresh

`func (o *RolepropagationongoingresponseRolePropagationDetails) SetSkipRoleRefresh(v bool)`

SetSkipRoleRefresh sets SkipRoleRefresh field to given value.

### HasSkipRoleRefresh

`func (o *RolepropagationongoingresponseRolePropagationDetails) HasSkipRoleRefresh() bool`

HasSkipRoleRefresh returns a boolean if a field has been set.


