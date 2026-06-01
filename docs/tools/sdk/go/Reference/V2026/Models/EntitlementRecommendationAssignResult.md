---
id: v2026-entitlement-recommendation-assign-result
title: EntitlementRecommendationAssignResult
pagination_label: EntitlementRecommendationAssignResult
sidebar_label: EntitlementRecommendationAssignResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRecommendationAssignResult', 'V2026EntitlementRecommendationAssignResult'] 
slug: /tools/sdk/go/v2026/models/entitlement-recommendation-assign-result
tags: ['SDK', 'Software Development Kit', 'EntitlementRecommendationAssignResult', 'V2026EntitlementRecommendationAssignResult']
---

# EntitlementRecommendationAssignResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | The unique identifier of the assignment batch created by this request. | [optional] 

## Methods

### NewEntitlementRecommendationAssignResult

`func NewEntitlementRecommendationAssignResult() *EntitlementRecommendationAssignResult`

NewEntitlementRecommendationAssignResult instantiates a new EntitlementRecommendationAssignResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRecommendationAssignResultWithDefaults

`func NewEntitlementRecommendationAssignResultWithDefaults() *EntitlementRecommendationAssignResult`

NewEntitlementRecommendationAssignResultWithDefaults instantiates a new EntitlementRecommendationAssignResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *EntitlementRecommendationAssignResult) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *EntitlementRecommendationAssignResult) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *EntitlementRecommendationAssignResult) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *EntitlementRecommendationAssignResult) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.


