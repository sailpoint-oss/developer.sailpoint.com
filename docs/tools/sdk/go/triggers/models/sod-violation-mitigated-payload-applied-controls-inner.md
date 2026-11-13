# SODViolationMitigatedPayloadAppliedControlsInner

# SODViolationMitigatedPayloadAppliedControlsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppliedDate** | Pointer to **SailPointTime** | When the control was applied. | [optional] 
**Applier** | Pointer to [**SODViolationMitigatedPayloadAppliedControlsInnerApplier**](sod-violation-mitigated-payload-applied-controls-inner-applier) |  | [optional] 
**Comments** | Pointer to **NullableString** | Optional comments from the applier. | [optional] 
**Control** | Pointer to [**SODViolationMitigatedPayloadAppliedControlsInnerControl**](sod-violation-mitigated-payload-applied-controls-inner-control) |  | [optional] 
**Expiration** | Pointer to **SailPointTime** | When this application of the control expires. | [optional] 
**Id** | Pointer to **string** | ID of the control application record. | [optional] 
**Status** | Pointer to **ViolationAppliedControlStatus** |  | [optional] 
**Violation** | Pointer to **string** | ID of the violation this application belongs to. | [optional] 
**WorkflowId** | Pointer to **NullableString** | Optional workflow correlation ID. | [optional] 

## Methods

### NewSODViolationMitigatedPayloadAppliedControlsInner

`func NewSODViolationMitigatedPayloadAppliedControlsInner() *SODViolationMitigatedPayloadAppliedControlsInner`

NewSODViolationMitigatedPayloadAppliedControlsInner instantiates a new SODViolationMitigatedPayloadAppliedControlsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationMitigatedPayloadAppliedControlsInnerWithDefaults

`func NewSODViolationMitigatedPayloadAppliedControlsInnerWithDefaults() *SODViolationMitigatedPayloadAppliedControlsInner`

NewSODViolationMitigatedPayloadAppliedControlsInnerWithDefaults instantiates a new SODViolationMitigatedPayloadAppliedControlsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppliedDate

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetAppliedDate() SailPointTime`

GetAppliedDate returns the AppliedDate field if non-nil, zero value otherwise.

### GetAppliedDateOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetAppliedDateOk() (*SailPointTime, bool)`

GetAppliedDateOk returns a tuple with the AppliedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedDate

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetAppliedDate(v SailPointTime)`

SetAppliedDate sets AppliedDate field to given value.

### HasAppliedDate

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasAppliedDate() bool`

HasAppliedDate returns a boolean if a field has been set.

### GetApplier

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetApplier() SODViolationMitigatedPayloadAppliedControlsInnerApplier`

GetApplier returns the Applier field if non-nil, zero value otherwise.

### GetApplierOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetApplierOk() (*SODViolationMitigatedPayloadAppliedControlsInnerApplier, bool)`

GetApplierOk returns a tuple with the Applier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplier

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetApplier(v SODViolationMitigatedPayloadAppliedControlsInnerApplier)`

SetApplier sets Applier field to given value.

### HasApplier

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasApplier() bool`

HasApplier returns a boolean if a field has been set.

### GetComments

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *SODViolationMitigatedPayloadAppliedControlsInner) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetControl

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetControl() SODViolationMitigatedPayloadAppliedControlsInnerControl`

GetControl returns the Control field if non-nil, zero value otherwise.

### GetControlOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetControlOk() (*SODViolationMitigatedPayloadAppliedControlsInnerControl, bool)`

GetControlOk returns a tuple with the Control field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControl

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetControl(v SODViolationMitigatedPayloadAppliedControlsInnerControl)`

SetControl sets Control field to given value.

### HasControl

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasControl() bool`

HasControl returns a boolean if a field has been set.

### GetExpiration

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetStatus() ViolationAppliedControlStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetStatusOk() (*ViolationAppliedControlStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetStatus(v ViolationAppliedControlStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetViolation

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetViolation() string`

GetViolation returns the Violation field if non-nil, zero value otherwise.

### GetViolationOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetViolationOk() (*string, bool)`

GetViolationOk returns a tuple with the Violation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolation

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetViolation(v string)`

SetViolation sets Violation field to given value.

### HasViolation

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasViolation() bool`

HasViolation returns a boolean if a field has been set.

### GetWorkflowId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### SetWorkflowIdNil

`func (o *SODViolationMitigatedPayloadAppliedControlsInner) SetWorkflowIdNil(b bool)`

 SetWorkflowIdNil sets the value for WorkflowId to be an explicit nil

### UnsetWorkflowId
`func (o *SODViolationMitigatedPayloadAppliedControlsInner) UnsetWorkflowId()`

UnsetWorkflowId ensures that no value is present for WorkflowId, not even an explicit nil

