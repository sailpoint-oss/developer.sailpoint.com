---
id: v2026-entitlement-recommendation-assign-request
title: EntitlementRecommendationAssignRequest
pagination_label: EntitlementRecommendationAssignRequest
sidebar_label: EntitlementRecommendationAssignRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRecommendationAssignRequest', 'V2026EntitlementRecommendationAssignRequest'] 
slug: /tools/sdk/go/v2026/models/entitlement-recommendation-assign-request
tags: ['SDK', 'Software Development Kit', 'EntitlementRecommendationAssignRequest', 'V2026EntitlementRecommendationAssignRequest']
---

# EntitlementRecommendationAssignRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]string** | The list of recommendation record IDs to assign. | 
**Assignee** | [**EntitlementRecommendationAssignee**](entitlement-recommendation-assignee) |  | 

## Methods

### NewEntitlementRecommendationAssignRequest

`func NewEntitlementRecommendationAssignRequest(items []string, assignee EntitlementRecommendationAssignee, ) *EntitlementRecommendationAssignRequest`

NewEntitlementRecommendationAssignRequest instantiates a new EntitlementRecommendationAssignRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRecommendationAssignRequestWithDefaults

`func NewEntitlementRecommendationAssignRequestWithDefaults() *EntitlementRecommendationAssignRequest`

NewEntitlementRecommendationAssignRequestWithDefaults instantiates a new EntitlementRecommendationAssignRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *EntitlementRecommendationAssignRequest) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *EntitlementRecommendationAssignRequest) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *EntitlementRecommendationAssignRequest) SetItems(v []string)`

SetItems sets Items field to given value.


### GetAssignee

`func (o *EntitlementRecommendationAssignRequest) GetAssignee() EntitlementRecommendationAssignee`

GetAssignee returns the Assignee field if non-nil, zero value otherwise.

### GetAssigneeOk

`func (o *EntitlementRecommendationAssignRequest) GetAssigneeOk() (*EntitlementRecommendationAssignee, bool)`

GetAssigneeOk returns a tuple with the Assignee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignee

`func (o *EntitlementRecommendationAssignRequest) SetAssignee(v EntitlementRecommendationAssignee)`

SetAssignee sets Assignee field to given value.



