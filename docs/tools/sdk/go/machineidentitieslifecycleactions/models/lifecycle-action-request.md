# LifecycleActionRequest

# LifecycleActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Lifecycle request identifier. | [optional] 
**TenantId** | Pointer to **string** | Tenant identifier for the lifecycle request. | [optional] 
**StatusType** | Pointer to **string** | Generic request status type discriminator. | [optional] 
**RequestedBy** | Pointer to **string** | Identity id of the principal that submitted the request. | [optional] 
**TargetType** | Pointer to **string** | Resource type targeted by the lifecycle request. | [optional] 
**TargetId** | Pointer to **string** | Internal machine identity UUID for the lifecycle target. | [optional] 
**OperationType** | Pointer to **Lifecycleaction** |  | [optional] 
**WorkflowId** | Pointer to **string** | Temporal workflow identifier for the lifecycle request. | [optional] 
**Completed** | Pointer to **bool** | Indicates whether the lifecycle request has reached a terminal state. | [optional] [default to false]
**Details** | Pointer to [**LifecycleActionRequestDetails**](lifecycle-action-request-details) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the lifecycle request was created (ISO-8601). | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the lifecycle request was last modified (ISO-8601). | [optional] 

## Methods

### NewLifecycleActionRequest

`func NewLifecycleActionRequest() *LifecycleActionRequest`

NewLifecycleActionRequest instantiates a new LifecycleActionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleActionRequestWithDefaults

`func NewLifecycleActionRequestWithDefaults() *LifecycleActionRequest`

NewLifecycleActionRequestWithDefaults instantiates a new LifecycleActionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LifecycleActionRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LifecycleActionRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LifecycleActionRequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LifecycleActionRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTenantId

`func (o *LifecycleActionRequest) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *LifecycleActionRequest) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *LifecycleActionRequest) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *LifecycleActionRequest) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetStatusType

`func (o *LifecycleActionRequest) GetStatusType() string`

GetStatusType returns the StatusType field if non-nil, zero value otherwise.

### GetStatusTypeOk

`func (o *LifecycleActionRequest) GetStatusTypeOk() (*string, bool)`

GetStatusTypeOk returns a tuple with the StatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusType

`func (o *LifecycleActionRequest) SetStatusType(v string)`

SetStatusType sets StatusType field to given value.

### HasStatusType

`func (o *LifecycleActionRequest) HasStatusType() bool`

HasStatusType returns a boolean if a field has been set.

### GetRequestedBy

`func (o *LifecycleActionRequest) GetRequestedBy() string`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *LifecycleActionRequest) GetRequestedByOk() (*string, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *LifecycleActionRequest) SetRequestedBy(v string)`

SetRequestedBy sets RequestedBy field to given value.

### HasRequestedBy

`func (o *LifecycleActionRequest) HasRequestedBy() bool`

HasRequestedBy returns a boolean if a field has been set.

### GetTargetType

`func (o *LifecycleActionRequest) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *LifecycleActionRequest) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *LifecycleActionRequest) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *LifecycleActionRequest) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *LifecycleActionRequest) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *LifecycleActionRequest) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *LifecycleActionRequest) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *LifecycleActionRequest) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetOperationType

`func (o *LifecycleActionRequest) GetOperationType() Lifecycleaction`

GetOperationType returns the OperationType field if non-nil, zero value otherwise.

### GetOperationTypeOk

`func (o *LifecycleActionRequest) GetOperationTypeOk() (*Lifecycleaction, bool)`

GetOperationTypeOk returns a tuple with the OperationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationType

`func (o *LifecycleActionRequest) SetOperationType(v Lifecycleaction)`

SetOperationType sets OperationType field to given value.

### HasOperationType

`func (o *LifecycleActionRequest) HasOperationType() bool`

HasOperationType returns a boolean if a field has been set.

### GetWorkflowId

`func (o *LifecycleActionRequest) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *LifecycleActionRequest) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *LifecycleActionRequest) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *LifecycleActionRequest) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### GetCompleted

`func (o *LifecycleActionRequest) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *LifecycleActionRequest) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *LifecycleActionRequest) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *LifecycleActionRequest) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetDetails

`func (o *LifecycleActionRequest) GetDetails() LifecycleActionRequestDetails`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *LifecycleActionRequest) GetDetailsOk() (*LifecycleActionRequestDetails, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *LifecycleActionRequest) SetDetails(v LifecycleActionRequestDetails)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *LifecycleActionRequest) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetCreated

`func (o *LifecycleActionRequest) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LifecycleActionRequest) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LifecycleActionRequest) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LifecycleActionRequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *LifecycleActionRequest) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *LifecycleActionRequest) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *LifecycleActionRequest) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *LifecycleActionRequest) HasModified() bool`

HasModified returns a boolean if a field has been set.


