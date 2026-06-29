---
id: v1-promptinsight
title: Promptinsight
pagination_label: Promptinsight
sidebar_label: Promptinsight
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Promptinsight', 'V1Promptinsight'] 
slug: /tools/sdk/go/promptinsights/models/promptinsight
tags: ['SDK', 'Software Development Kit', 'Promptinsight', 'V1Promptinsight']
---

# Promptinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **SailPointTime** | Event time in UTC. | [optional] 
**User** | Pointer to **string** | User identifier or display name. | [optional] 
**Agent** | Pointer to **string** | The AI agent that processed the prompt. | [optional] 
**PolicyDecision** | Pointer to **string** | The policy decision applied to the prompt. | [optional] 
**Category** | Pointer to **string** | The category of the prompt security finding. | [optional] 
**Severity** | Pointer to **string** | The severity of the prompt security finding. | [optional] 
**Reason** | Pointer to **string** | Human-readable or structured reason for the policy decision. | [optional] 
**Rule** | Pointer to **string** | The rule that matched the prompt. | [optional] 
**Policy** | Pointer to **string** | The policy that matched the prompt. | [optional] 

## Methods

### NewPromptinsight

`func NewPromptinsight() *Promptinsight`

NewPromptinsight instantiates a new Promptinsight object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromptinsightWithDefaults

`func NewPromptinsightWithDefaults() *Promptinsight`

NewPromptinsightWithDefaults instantiates a new Promptinsight object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *Promptinsight) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Promptinsight) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Promptinsight) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Promptinsight) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetUser

`func (o *Promptinsight) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *Promptinsight) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *Promptinsight) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *Promptinsight) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetAgent

`func (o *Promptinsight) GetAgent() string`

GetAgent returns the Agent field if non-nil, zero value otherwise.

### GetAgentOk

`func (o *Promptinsight) GetAgentOk() (*string, bool)`

GetAgentOk returns a tuple with the Agent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgent

`func (o *Promptinsight) SetAgent(v string)`

SetAgent sets Agent field to given value.

### HasAgent

`func (o *Promptinsight) HasAgent() bool`

HasAgent returns a boolean if a field has been set.

### GetPolicyDecision

`func (o *Promptinsight) GetPolicyDecision() string`

GetPolicyDecision returns the PolicyDecision field if non-nil, zero value otherwise.

### GetPolicyDecisionOk

`func (o *Promptinsight) GetPolicyDecisionOk() (*string, bool)`

GetPolicyDecisionOk returns a tuple with the PolicyDecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyDecision

`func (o *Promptinsight) SetPolicyDecision(v string)`

SetPolicyDecision sets PolicyDecision field to given value.

### HasPolicyDecision

`func (o *Promptinsight) HasPolicyDecision() bool`

HasPolicyDecision returns a boolean if a field has been set.

### GetCategory

`func (o *Promptinsight) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Promptinsight) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Promptinsight) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Promptinsight) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetSeverity

`func (o *Promptinsight) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *Promptinsight) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *Promptinsight) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *Promptinsight) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetReason

`func (o *Promptinsight) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Promptinsight) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Promptinsight) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Promptinsight) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetRule

`func (o *Promptinsight) GetRule() string`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *Promptinsight) GetRuleOk() (*string, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *Promptinsight) SetRule(v string)`

SetRule sets Rule field to given value.

### HasRule

`func (o *Promptinsight) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetPolicy

`func (o *Promptinsight) GetPolicy() string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *Promptinsight) GetPolicyOk() (*string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *Promptinsight) SetPolicy(v string)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *Promptinsight) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.


