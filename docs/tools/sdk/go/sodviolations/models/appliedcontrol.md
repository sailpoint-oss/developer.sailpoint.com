# Appliedcontrol

# Appliedcontrol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The system-generated unique identifier of the applied control record. | 
**Violation** | **string** | The unique identifier of the policy violation the control was applied to. | 
**Control** | [**Referenceresponse**](referenceresponse) |  | 
**Applier** | [**Referenceresponse**](referenceresponse) |  | 
**AppliedDate** | **SailPointTime** | The date and time when the control was applied to the violation. | [readonly] 
**Expiration** | **SailPointTime** | The date and time when the applied control expires. | [readonly] 
**Comments** | Pointer to **string** | Optional comments captured when the control was applied. | [optional] 
**Status** | Pointer to **Appliedcontrolstatus** |  | [optional] 
**WorkflowId** | Pointer to **string** | The identifier of the workflow triggered when the control was applied. | [optional] 

## Methods

### NewAppliedcontrol

`func NewAppliedcontrol(id string, violation string, control Referenceresponse, applier Referenceresponse, appliedDate SailPointTime, expiration SailPointTime, ) *Appliedcontrol`

NewAppliedcontrol instantiates a new Appliedcontrol object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppliedcontrolWithDefaults

`func NewAppliedcontrolWithDefaults() *Appliedcontrol`

NewAppliedcontrolWithDefaults instantiates a new Appliedcontrol object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Appliedcontrol) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Appliedcontrol) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Appliedcontrol) SetId(v string)`

SetId sets Id field to given value.


### GetViolation

`func (o *Appliedcontrol) GetViolation() string`

GetViolation returns the Violation field if non-nil, zero value otherwise.

### GetViolationOk

`func (o *Appliedcontrol) GetViolationOk() (*string, bool)`

GetViolationOk returns a tuple with the Violation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolation

`func (o *Appliedcontrol) SetViolation(v string)`

SetViolation sets Violation field to given value.


### GetControl

`func (o *Appliedcontrol) GetControl() Referenceresponse`

GetControl returns the Control field if non-nil, zero value otherwise.

### GetControlOk

`func (o *Appliedcontrol) GetControlOk() (*Referenceresponse, bool)`

GetControlOk returns a tuple with the Control field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControl

`func (o *Appliedcontrol) SetControl(v Referenceresponse)`

SetControl sets Control field to given value.


### GetApplier

`func (o *Appliedcontrol) GetApplier() Referenceresponse`

GetApplier returns the Applier field if non-nil, zero value otherwise.

### GetApplierOk

`func (o *Appliedcontrol) GetApplierOk() (*Referenceresponse, bool)`

GetApplierOk returns a tuple with the Applier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplier

`func (o *Appliedcontrol) SetApplier(v Referenceresponse)`

SetApplier sets Applier field to given value.


### GetAppliedDate

`func (o *Appliedcontrol) GetAppliedDate() SailPointTime`

GetAppliedDate returns the AppliedDate field if non-nil, zero value otherwise.

### GetAppliedDateOk

`func (o *Appliedcontrol) GetAppliedDateOk() (*SailPointTime, bool)`

GetAppliedDateOk returns a tuple with the AppliedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedDate

`func (o *Appliedcontrol) SetAppliedDate(v SailPointTime)`

SetAppliedDate sets AppliedDate field to given value.


### GetExpiration

`func (o *Appliedcontrol) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Appliedcontrol) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Appliedcontrol) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.


### GetComments

`func (o *Appliedcontrol) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Appliedcontrol) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Appliedcontrol) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Appliedcontrol) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetStatus

`func (o *Appliedcontrol) GetStatus() Appliedcontrolstatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Appliedcontrol) GetStatusOk() (*Appliedcontrolstatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Appliedcontrol) SetStatus(v Appliedcontrolstatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Appliedcontrol) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetWorkflowId

`func (o *Appliedcontrol) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *Appliedcontrol) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *Appliedcontrol) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *Appliedcontrol) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.


