# DetailedDecisionSummary

# DetailedDecisionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementDecisions** | Pointer to [**DecisionStatistics**](decision-statistics) |  | [optional] 
**AccessProfileDecisions** | Pointer to [**DecisionStatistics**](decision-statistics) |  | [optional] 
**RoleDecisions** | Pointer to [**DecisionStatistics**](decision-statistics) |  | [optional] 

## Methods

### NewDetailedDecisionSummary

`func NewDetailedDecisionSummary() *DetailedDecisionSummary`

NewDetailedDecisionSummary instantiates a new DetailedDecisionSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDetailedDecisionSummaryWithDefaults

`func NewDetailedDecisionSummaryWithDefaults() *DetailedDecisionSummary`

NewDetailedDecisionSummaryWithDefaults instantiates a new DetailedDecisionSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementDecisions

`func (o *DetailedDecisionSummary) GetEntitlementDecisions() DecisionStatistics`

GetEntitlementDecisions returns the EntitlementDecisions field if non-nil, zero value otherwise.

### GetEntitlementDecisionsOk

`func (o *DetailedDecisionSummary) GetEntitlementDecisionsOk() (*DecisionStatistics, bool)`

GetEntitlementDecisionsOk returns a tuple with the EntitlementDecisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementDecisions

`func (o *DetailedDecisionSummary) SetEntitlementDecisions(v DecisionStatistics)`

SetEntitlementDecisions sets EntitlementDecisions field to given value.

### HasEntitlementDecisions

`func (o *DetailedDecisionSummary) HasEntitlementDecisions() bool`

HasEntitlementDecisions returns a boolean if a field has been set.

### GetAccessProfileDecisions

`func (o *DetailedDecisionSummary) GetAccessProfileDecisions() DecisionStatistics`

GetAccessProfileDecisions returns the AccessProfileDecisions field if non-nil, zero value otherwise.

### GetAccessProfileDecisionsOk

`func (o *DetailedDecisionSummary) GetAccessProfileDecisionsOk() (*DecisionStatistics, bool)`

GetAccessProfileDecisionsOk returns a tuple with the AccessProfileDecisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileDecisions

`func (o *DetailedDecisionSummary) SetAccessProfileDecisions(v DecisionStatistics)`

SetAccessProfileDecisions sets AccessProfileDecisions field to given value.

### HasAccessProfileDecisions

`func (o *DetailedDecisionSummary) HasAccessProfileDecisions() bool`

HasAccessProfileDecisions returns a boolean if a field has been set.

### GetRoleDecisions

`func (o *DetailedDecisionSummary) GetRoleDecisions() DecisionStatistics`

GetRoleDecisions returns the RoleDecisions field if non-nil, zero value otherwise.

### GetRoleDecisionsOk

`func (o *DetailedDecisionSummary) GetRoleDecisionsOk() (*DecisionStatistics, bool)`

GetRoleDecisionsOk returns a tuple with the RoleDecisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDecisions

`func (o *DetailedDecisionSummary) SetRoleDecisions(v DecisionStatistics)`

SetRoleDecisions sets RoleDecisions field to given value.

### HasRoleDecisions

`func (o *DetailedDecisionSummary) HasRoleDecisions() bool`

HasRoleDecisions returns a boolean if a field has been set.


