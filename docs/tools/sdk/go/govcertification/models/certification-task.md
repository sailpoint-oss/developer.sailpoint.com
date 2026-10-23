# CertificationTask

# CertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the task | 
**TargetId** | Pointer to **string** | ID of the item for which the task is targeting | [optional] 
**Type** | Pointer to **string** | Type of the task | [optional] 
**TargetType** | Pointer to **string** | Type of the item being targeted by the task | [optional] 
**Status** | Pointer to **string** | Status of the task | [optional] 
**Errors** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**ReassignmentTrails** | Pointer to [**[]ReassignmentTrail**](reassignment-trail) | Reassignment trails that lead to self certification during the reassignment | [optional] 
**Created** | Pointer to **SailPointTime** | Created time of the task | [optional] [readonly] 

## Methods

### NewCertificationTask

`func NewCertificationTask(id string, ) *CertificationTask`

NewCertificationTask instantiates a new CertificationTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationTaskWithDefaults

`func NewCertificationTaskWithDefaults() *CertificationTask`

NewCertificationTaskWithDefaults instantiates a new CertificationTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificationTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationTask) SetId(v string)`

SetId sets Id field to given value.


### GetTargetId

`func (o *CertificationTask) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *CertificationTask) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *CertificationTask) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *CertificationTask) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetType

`func (o *CertificationTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificationTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificationTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificationTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *CertificationTask) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *CertificationTask) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *CertificationTask) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *CertificationTask) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetStatus

`func (o *CertificationTask) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CertificationTask) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CertificationTask) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CertificationTask) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *CertificationTask) GetErrors() []ErrorMessageDto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *CertificationTask) GetErrorsOk() (*[]ErrorMessageDto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *CertificationTask) SetErrors(v []ErrorMessageDto)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *CertificationTask) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetReassignmentTrails

`func (o *CertificationTask) GetReassignmentTrails() []ReassignmentTrail`

GetReassignmentTrails returns the ReassignmentTrails field if non-nil, zero value otherwise.

### GetReassignmentTrailsOk

`func (o *CertificationTask) GetReassignmentTrailsOk() (*[]ReassignmentTrail, bool)`

GetReassignmentTrailsOk returns a tuple with the ReassignmentTrails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentTrails

`func (o *CertificationTask) SetReassignmentTrails(v []ReassignmentTrail)`

SetReassignmentTrails sets ReassignmentTrails field to given value.

### HasReassignmentTrails

`func (o *CertificationTask) HasReassignmentTrails() bool`

HasReassignmentTrails returns a boolean if a field has been set.

### GetCreated

`func (o *CertificationTask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CertificationTask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CertificationTask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CertificationTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


