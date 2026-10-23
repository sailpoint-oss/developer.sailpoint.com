# Responseactioncontext

# Responseactioncontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **string** | External system that initiated the action. | 
**ExternalAlertId** | Pointer to **string** | External alert or case identifier. | [optional] 
**Reason** | Pointer to **string** | Human-readable reason for the action. | [optional] 
**Operator** | Pointer to **string** | Operator or analyst who initiated the action. | [optional] 

## Methods

### NewResponseactioncontext

`func NewResponseactioncontext(source string, ) *Responseactioncontext`

NewResponseactioncontext instantiates a new Responseactioncontext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseactioncontextWithDefaults

`func NewResponseactioncontextWithDefaults() *Responseactioncontext`

NewResponseactioncontextWithDefaults instantiates a new Responseactioncontext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *Responseactioncontext) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Responseactioncontext) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Responseactioncontext) SetSource(v string)`

SetSource sets Source field to given value.


### GetExternalAlertId

`func (o *Responseactioncontext) GetExternalAlertId() string`

GetExternalAlertId returns the ExternalAlertId field if non-nil, zero value otherwise.

### GetExternalAlertIdOk

`func (o *Responseactioncontext) GetExternalAlertIdOk() (*string, bool)`

GetExternalAlertIdOk returns a tuple with the ExternalAlertId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAlertId

`func (o *Responseactioncontext) SetExternalAlertId(v string)`

SetExternalAlertId sets ExternalAlertId field to given value.

### HasExternalAlertId

`func (o *Responseactioncontext) HasExternalAlertId() bool`

HasExternalAlertId returns a boolean if a field has been set.

### GetReason

`func (o *Responseactioncontext) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Responseactioncontext) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Responseactioncontext) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Responseactioncontext) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetOperator

`func (o *Responseactioncontext) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Responseactioncontext) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Responseactioncontext) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Responseactioncontext) HasOperator() bool`

HasOperator returns a boolean if a field has been set.


