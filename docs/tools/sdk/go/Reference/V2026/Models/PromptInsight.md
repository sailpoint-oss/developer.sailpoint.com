---
id: v2026-prompt-insight
title: PromptInsight
pagination_label: PromptInsight
sidebar_label: PromptInsight
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PromptInsight', 'V2026PromptInsight'] 
slug: /tools/sdk/go/v2026/models/prompt-insight
tags: ['SDK', 'Software Development Kit', 'PromptInsight', 'V2026PromptInsight']
---

# PromptInsight

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

### NewPromptInsight

`func NewPromptInsight() *PromptInsight`

NewPromptInsight instantiates a new PromptInsight object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromptInsightWithDefaults

`func NewPromptInsightWithDefaults() *PromptInsight`

NewPromptInsightWithDefaults instantiates a new PromptInsight object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *PromptInsight) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *PromptInsight) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *PromptInsight) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *PromptInsight) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetUser

`func (o *PromptInsight) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *PromptInsight) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *PromptInsight) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *PromptInsight) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetAgent

`func (o *PromptInsight) GetAgent() string`

GetAgent returns the Agent field if non-nil, zero value otherwise.

### GetAgentOk

`func (o *PromptInsight) GetAgentOk() (*string, bool)`

GetAgentOk returns a tuple with the Agent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgent

`func (o *PromptInsight) SetAgent(v string)`

SetAgent sets Agent field to given value.

### HasAgent

`func (o *PromptInsight) HasAgent() bool`

HasAgent returns a boolean if a field has been set.

### GetPolicyDecision

`func (o *PromptInsight) GetPolicyDecision() string`

GetPolicyDecision returns the PolicyDecision field if non-nil, zero value otherwise.

### GetPolicyDecisionOk

`func (o *PromptInsight) GetPolicyDecisionOk() (*string, bool)`

GetPolicyDecisionOk returns a tuple with the PolicyDecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyDecision

`func (o *PromptInsight) SetPolicyDecision(v string)`

SetPolicyDecision sets PolicyDecision field to given value.

### HasPolicyDecision

`func (o *PromptInsight) HasPolicyDecision() bool`

HasPolicyDecision returns a boolean if a field has been set.

### GetCategory

`func (o *PromptInsight) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *PromptInsight) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *PromptInsight) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *PromptInsight) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetSeverity

`func (o *PromptInsight) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *PromptInsight) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *PromptInsight) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *PromptInsight) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetReason

`func (o *PromptInsight) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *PromptInsight) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *PromptInsight) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *PromptInsight) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetRule

`func (o *PromptInsight) GetRule() string`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *PromptInsight) GetRuleOk() (*string, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *PromptInsight) SetRule(v string)`

SetRule sets Rule field to given value.

### HasRule

`func (o *PromptInsight) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetPolicy

`func (o *PromptInsight) GetPolicy() string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *PromptInsight) GetPolicyOk() (*string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *PromptInsight) SetPolicy(v string)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *PromptInsight) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.


