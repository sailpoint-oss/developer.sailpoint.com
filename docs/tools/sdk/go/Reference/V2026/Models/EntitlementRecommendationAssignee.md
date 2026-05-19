---
id: v2026-entitlement-recommendation-assignee
title: EntitlementRecommendationAssignee
pagination_label: EntitlementRecommendationAssignee
sidebar_label: EntitlementRecommendationAssignee
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRecommendationAssignee', 'V2026EntitlementRecommendationAssignee'] 
slug: /tools/sdk/go/v2026/models/entitlement-recommendation-assignee
tags: ['SDK', 'Software Development Kit', 'EntitlementRecommendationAssignee', 'V2026EntitlementRecommendationAssignee']
---

# EntitlementRecommendationAssignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of assignee. | 
**Value** | **string** | The ID of the identity or governance group to assign to. | 

## Methods

### NewEntitlementRecommendationAssignee

`func NewEntitlementRecommendationAssignee(type_ string, value string, ) *EntitlementRecommendationAssignee`

NewEntitlementRecommendationAssignee instantiates a new EntitlementRecommendationAssignee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRecommendationAssigneeWithDefaults

`func NewEntitlementRecommendationAssigneeWithDefaults() *EntitlementRecommendationAssignee`

NewEntitlementRecommendationAssigneeWithDefaults instantiates a new EntitlementRecommendationAssignee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntitlementRecommendationAssignee) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementRecommendationAssignee) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementRecommendationAssignee) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *EntitlementRecommendationAssignee) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementRecommendationAssignee) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementRecommendationAssignee) SetValue(v string)`

SetValue sets Value field to given value.



