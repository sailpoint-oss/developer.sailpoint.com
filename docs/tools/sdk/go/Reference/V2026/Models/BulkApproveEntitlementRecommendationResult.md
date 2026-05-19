---
id: v2026-bulk-approve-entitlement-recommendation-result
title: BulkApproveEntitlementRecommendationResult
pagination_label: BulkApproveEntitlementRecommendationResult
sidebar_label: BulkApproveEntitlementRecommendationResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkApproveEntitlementRecommendationResult', 'V2026BulkApproveEntitlementRecommendationResult'] 
slug: /tools/sdk/go/v2026/models/bulk-approve-entitlement-recommendation-result
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationResult', 'V2026BulkApproveEntitlementRecommendationResult']
---

# BulkApproveEntitlementRecommendationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the processed recommendation record. | [optional] 
**Status** | Pointer to **string** | The outcome of the approval for this item. | [optional] 
**FailedReason** | Pointer to **NullableString** | The reason for failure if status is FAILURE; null on success. | [optional] 

## Methods

### NewBulkApproveEntitlementRecommendationResult

`func NewBulkApproveEntitlementRecommendationResult() *BulkApproveEntitlementRecommendationResult`

NewBulkApproveEntitlementRecommendationResult instantiates a new BulkApproveEntitlementRecommendationResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkApproveEntitlementRecommendationResultWithDefaults

`func NewBulkApproveEntitlementRecommendationResultWithDefaults() *BulkApproveEntitlementRecommendationResult`

NewBulkApproveEntitlementRecommendationResultWithDefaults instantiates a new BulkApproveEntitlementRecommendationResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BulkApproveEntitlementRecommendationResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkApproveEntitlementRecommendationResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkApproveEntitlementRecommendationResult) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BulkApproveEntitlementRecommendationResult) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *BulkApproveEntitlementRecommendationResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkApproveEntitlementRecommendationResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkApproveEntitlementRecommendationResult) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BulkApproveEntitlementRecommendationResult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetFailedReason

`func (o *BulkApproveEntitlementRecommendationResult) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *BulkApproveEntitlementRecommendationResult) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *BulkApproveEntitlementRecommendationResult) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *BulkApproveEntitlementRecommendationResult) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### SetFailedReasonNil

`func (o *BulkApproveEntitlementRecommendationResult) SetFailedReasonNil(b bool)`

 SetFailedReasonNil sets the value for FailedReason to be an explicit nil

### UnsetFailedReason
`func (o *BulkApproveEntitlementRecommendationResult) UnsetFailedReason()`

UnsetFailedReason ensures that no value is present for FailedReason, not even an explicit nil

