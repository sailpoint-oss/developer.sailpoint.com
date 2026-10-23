# DecisionStatistics

# DecisionStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | Pointer to **int32** | Count of approval decisions for this item type. | [optional] 
**Revoked** | Pointer to **int32** | Count of revoke decisions for this item type. | [optional] 
**Acknowledged** | Pointer to **int32** | Count of acknowledge decisions for this item type. | [optional] 
**DecisionsMade** | Pointer to **int32** | Count of decisions made so far for this item type. | [optional] 
**DecisionsTotal** | Pointer to **int32** | Count of all decisions for this item type, both made and yet-to-be-made. | [optional] 

## Methods

### NewDecisionStatistics

`func NewDecisionStatistics() *DecisionStatistics`

NewDecisionStatistics instantiates a new DecisionStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDecisionStatisticsWithDefaults

`func NewDecisionStatisticsWithDefaults() *DecisionStatistics`

NewDecisionStatisticsWithDefaults instantiates a new DecisionStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *DecisionStatistics) GetApproved() int32`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *DecisionStatistics) GetApprovedOk() (*int32, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *DecisionStatistics) SetApproved(v int32)`

SetApproved sets Approved field to given value.

### HasApproved

`func (o *DecisionStatistics) HasApproved() bool`

HasApproved returns a boolean if a field has been set.

### GetRevoked

`func (o *DecisionStatistics) GetRevoked() int32`

GetRevoked returns the Revoked field if non-nil, zero value otherwise.

### GetRevokedOk

`func (o *DecisionStatistics) GetRevokedOk() (*int32, bool)`

GetRevokedOk returns a tuple with the Revoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevoked

`func (o *DecisionStatistics) SetRevoked(v int32)`

SetRevoked sets Revoked field to given value.

### HasRevoked

`func (o *DecisionStatistics) HasRevoked() bool`

HasRevoked returns a boolean if a field has been set.

### GetAcknowledged

`func (o *DecisionStatistics) GetAcknowledged() int32`

GetAcknowledged returns the Acknowledged field if non-nil, zero value otherwise.

### GetAcknowledgedOk

`func (o *DecisionStatistics) GetAcknowledgedOk() (*int32, bool)`

GetAcknowledgedOk returns a tuple with the Acknowledged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcknowledged

`func (o *DecisionStatistics) SetAcknowledged(v int32)`

SetAcknowledged sets Acknowledged field to given value.

### HasAcknowledged

`func (o *DecisionStatistics) HasAcknowledged() bool`

HasAcknowledged returns a boolean if a field has been set.

### GetDecisionsMade

`func (o *DecisionStatistics) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *DecisionStatistics) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *DecisionStatistics) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.

### HasDecisionsMade

`func (o *DecisionStatistics) HasDecisionsMade() bool`

HasDecisionsMade returns a boolean if a field has been set.

### GetDecisionsTotal

`func (o *DecisionStatistics) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *DecisionStatistics) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *DecisionStatistics) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.

### HasDecisionsTotal

`func (o *DecisionStatistics) HasDecisionsTotal() bool`

HasDecisionsTotal returns a boolean if a field has been set.


