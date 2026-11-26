# Compensatingcontrolcreate

# Compensatingcontrolcreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The display name of the compensating control. | 
**Description** | Pointer to **string** | A human-readable description of the compensating control. | [optional] 
**Owner** | [**Referenceinput**](referenceinput) |  | 
**SecondaryOwners** | Pointer to [**[]Referenceinput**](referenceinput) | References to additional identities or governance groups that share ownership of the compensating control (maximum 10). | [optional] 
**Type** | **string** | The type of compensating control that determines how a violation is addressed. | 
**Action** | Pointer to **string** | The action performed when the compensating control is applied. | [optional] 
**Expiration** | Pointer to **string** | The duration after which the applied control expires, expressed as a duration string. | [optional] 
**JustificationRequired** | Pointer to **bool** | Indicates whether a justification is required when applying this control. | [optional] [default to false]
**WorkflowID** | Pointer to **string** | Workflow definition ID used when the control action is a workflow. | [optional] 

## Methods

### NewCompensatingcontrolcreate

`func NewCompensatingcontrolcreate(name string, owner Referenceinput, type_ string, ) *Compensatingcontrolcreate`

NewCompensatingcontrolcreate instantiates a new Compensatingcontrolcreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompensatingcontrolcreateWithDefaults

`func NewCompensatingcontrolcreateWithDefaults() *Compensatingcontrolcreate`

NewCompensatingcontrolcreateWithDefaults instantiates a new Compensatingcontrolcreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Compensatingcontrolcreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Compensatingcontrolcreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Compensatingcontrolcreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Compensatingcontrolcreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Compensatingcontrolcreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Compensatingcontrolcreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Compensatingcontrolcreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Compensatingcontrolcreate) GetOwner() Referenceinput`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Compensatingcontrolcreate) GetOwnerOk() (*Referenceinput, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Compensatingcontrolcreate) SetOwner(v Referenceinput)`

SetOwner sets Owner field to given value.


### GetSecondaryOwners

`func (o *Compensatingcontrolcreate) GetSecondaryOwners() []Referenceinput`

GetSecondaryOwners returns the SecondaryOwners field if non-nil, zero value otherwise.

### GetSecondaryOwnersOk

`func (o *Compensatingcontrolcreate) GetSecondaryOwnersOk() (*[]Referenceinput, bool)`

GetSecondaryOwnersOk returns a tuple with the SecondaryOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryOwners

`func (o *Compensatingcontrolcreate) SetSecondaryOwners(v []Referenceinput)`

SetSecondaryOwners sets SecondaryOwners field to given value.

### HasSecondaryOwners

`func (o *Compensatingcontrolcreate) HasSecondaryOwners() bool`

HasSecondaryOwners returns a boolean if a field has been set.

### GetType

`func (o *Compensatingcontrolcreate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Compensatingcontrolcreate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Compensatingcontrolcreate) SetType(v string)`

SetType sets Type field to given value.


### GetAction

`func (o *Compensatingcontrolcreate) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Compensatingcontrolcreate) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Compensatingcontrolcreate) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Compensatingcontrolcreate) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetExpiration

`func (o *Compensatingcontrolcreate) GetExpiration() string`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Compensatingcontrolcreate) GetExpirationOk() (*string, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Compensatingcontrolcreate) SetExpiration(v string)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Compensatingcontrolcreate) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetJustificationRequired

`func (o *Compensatingcontrolcreate) GetJustificationRequired() bool`

GetJustificationRequired returns the JustificationRequired field if non-nil, zero value otherwise.

### GetJustificationRequiredOk

`func (o *Compensatingcontrolcreate) GetJustificationRequiredOk() (*bool, bool)`

GetJustificationRequiredOk returns a tuple with the JustificationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJustificationRequired

`func (o *Compensatingcontrolcreate) SetJustificationRequired(v bool)`

SetJustificationRequired sets JustificationRequired field to given value.

### HasJustificationRequired

`func (o *Compensatingcontrolcreate) HasJustificationRequired() bool`

HasJustificationRequired returns a boolean if a field has been set.

### GetWorkflowID

`func (o *Compensatingcontrolcreate) GetWorkflowID() string`

GetWorkflowID returns the WorkflowID field if non-nil, zero value otherwise.

### GetWorkflowIDOk

`func (o *Compensatingcontrolcreate) GetWorkflowIDOk() (*string, bool)`

GetWorkflowIDOk returns a tuple with the WorkflowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowID

`func (o *Compensatingcontrolcreate) SetWorkflowID(v string)`

SetWorkflowID sets WorkflowID field to given value.

### HasWorkflowID

`func (o *Compensatingcontrolcreate) HasWorkflowID() bool`

HasWorkflowID returns a boolean if a field has been set.


