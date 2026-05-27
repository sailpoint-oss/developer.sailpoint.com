---
id: v2026-entitlement-recommendation-assignee-one-of
title: EntitlementRecommendationAssigneeOneOf
pagination_label: EntitlementRecommendationAssigneeOneOf
sidebar_label: EntitlementRecommendationAssigneeOneOf
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRecommendationAssigneeOneOf', 'V2026EntitlementRecommendationAssigneeOneOf'] 
slug: /tools/sdk/go/v2026/models/entitlement-recommendation-assignee-one-of
tags: ['SDK', 'Software Development Kit', 'EntitlementRecommendationAssigneeOneOf', 'V2026EntitlementRecommendationAssigneeOneOf']
---

# EntitlementRecommendationAssigneeOneOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of assignee. | 
**Value** | **string** | The ID of the identity or governance group to assign to. | 

## Methods

### NewEntitlementRecommendationAssigneeOneOf

`func NewEntitlementRecommendationAssigneeOneOf(type_ string, value string, ) *EntitlementRecommendationAssigneeOneOf`

NewEntitlementRecommendationAssigneeOneOf instantiates a new EntitlementRecommendationAssigneeOneOf object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRecommendationAssigneeOneOfWithDefaults

`func NewEntitlementRecommendationAssigneeOneOfWithDefaults() *EntitlementRecommendationAssigneeOneOf`

NewEntitlementRecommendationAssigneeOneOfWithDefaults instantiates a new EntitlementRecommendationAssigneeOneOf object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntitlementRecommendationAssigneeOneOf) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementRecommendationAssigneeOneOf) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementRecommendationAssigneeOneOf) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *EntitlementRecommendationAssigneeOneOf) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementRecommendationAssigneeOneOf) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementRecommendationAssigneeOneOf) SetValue(v string)`

SetValue sets Value field to given value.



