---
id: v2026-bulk-approve-entitlement-recommendation-request
title: BulkApproveEntitlementRecommendationRequest
pagination_label: BulkApproveEntitlementRecommendationRequest
sidebar_label: BulkApproveEntitlementRecommendationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkApproveEntitlementRecommendationRequest', 'V2026BulkApproveEntitlementRecommendationRequest'] 
slug: /tools/sdk/go/v2026/models/bulk-approve-entitlement-recommendation-request
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationRequest', 'V2026BulkApproveEntitlementRecommendationRequest']
---

# BulkApproveEntitlementRecommendationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]BulkApproveEntitlementRecommendationItem**](bulk-approve-entitlement-recommendation-item) | The list of recommendation items to approve. | 

## Methods

### NewBulkApproveEntitlementRecommendationRequest

`func NewBulkApproveEntitlementRecommendationRequest(items []BulkApproveEntitlementRecommendationItem, ) *BulkApproveEntitlementRecommendationRequest`

NewBulkApproveEntitlementRecommendationRequest instantiates a new BulkApproveEntitlementRecommendationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkApproveEntitlementRecommendationRequestWithDefaults

`func NewBulkApproveEntitlementRecommendationRequestWithDefaults() *BulkApproveEntitlementRecommendationRequest`

NewBulkApproveEntitlementRecommendationRequestWithDefaults instantiates a new BulkApproveEntitlementRecommendationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *BulkApproveEntitlementRecommendationRequest) GetItems() []BulkApproveEntitlementRecommendationItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *BulkApproveEntitlementRecommendationRequest) GetItemsOk() (*[]BulkApproveEntitlementRecommendationItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *BulkApproveEntitlementRecommendationRequest) SetItems(v []BulkApproveEntitlementRecommendationItem)`

SetItems sets Items field to given value.



