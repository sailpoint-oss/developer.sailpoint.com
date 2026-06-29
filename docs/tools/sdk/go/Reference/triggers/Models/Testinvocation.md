---
id: v1-testinvocation
title: Testinvocation
pagination_label: Testinvocation
sidebar_label: Testinvocation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Testinvocation', 'V1Testinvocation'] 
slug: /tools/sdk/go/triggers/models/testinvocation
tags: ['SDK', 'Software Development Kit', 'Testinvocation', 'V1Testinvocation']
---

# Testinvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | **string** | Trigger ID | 
**Input** | Pointer to **map[string]interface{}** | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [optional] 
**ContentJson** | **map[string]interface{}** | JSON map of invocation metadata. | 
**SubscriptionIds** | Pointer to **[]string** | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [optional] 

## Methods

### NewTestinvocation

`func NewTestinvocation(triggerId string, contentJson map[string]interface{}, ) *Testinvocation`

NewTestinvocation instantiates a new Testinvocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestinvocationWithDefaults

`func NewTestinvocationWithDefaults() *Testinvocation`

NewTestinvocationWithDefaults instantiates a new Testinvocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTriggerId

`func (o *Testinvocation) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *Testinvocation) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *Testinvocation) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.


### GetInput

`func (o *Testinvocation) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *Testinvocation) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *Testinvocation) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *Testinvocation) HasInput() bool`

HasInput returns a boolean if a field has been set.

### GetContentJson

`func (o *Testinvocation) GetContentJson() map[string]interface{}`

GetContentJson returns the ContentJson field if non-nil, zero value otherwise.

### GetContentJsonOk

`func (o *Testinvocation) GetContentJsonOk() (*map[string]interface{}, bool)`

GetContentJsonOk returns a tuple with the ContentJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentJson

`func (o *Testinvocation) SetContentJson(v map[string]interface{})`

SetContentJson sets ContentJson field to given value.


### GetSubscriptionIds

`func (o *Testinvocation) GetSubscriptionIds() []string`

GetSubscriptionIds returns the SubscriptionIds field if non-nil, zero value otherwise.

### GetSubscriptionIdsOk

`func (o *Testinvocation) GetSubscriptionIdsOk() (*[]string, bool)`

GetSubscriptionIdsOk returns a tuple with the SubscriptionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionIds

`func (o *Testinvocation) SetSubscriptionIds(v []string)`

SetSubscriptionIds sets SubscriptionIds field to given value.

### HasSubscriptionIds

`func (o *Testinvocation) HasSubscriptionIds() bool`

HasSubscriptionIds returns a boolean if a field has been set.


