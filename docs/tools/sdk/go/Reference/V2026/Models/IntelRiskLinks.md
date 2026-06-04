---
id: v2026-intel-risk-links
title: IntelRiskLinks
pagination_label: IntelRiskLinks
sidebar_label: IntelRiskLinks
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelRiskLinks', 'V2026IntelRiskLinks'] 
slug: /tools/sdk/go/v2026/models/intel-risk-links
tags: ['SDK', 'Software Development Kit', 'IntelRiskLinks', 'V2026IntelRiskLinks']
---

# IntelRiskLinks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Outliers** | Pointer to [**IntelHref**](intel-href) | Link to fetch the next outlier page for the same identity. | [optional] 

## Methods

### NewIntelRiskLinks

`func NewIntelRiskLinks() *IntelRiskLinks`

NewIntelRiskLinks instantiates a new IntelRiskLinks object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelRiskLinksWithDefaults

`func NewIntelRiskLinksWithDefaults() *IntelRiskLinks`

NewIntelRiskLinksWithDefaults instantiates a new IntelRiskLinks object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOutliers

`func (o *IntelRiskLinks) GetOutliers() IntelHref`

GetOutliers returns the Outliers field if non-nil, zero value otherwise.

### GetOutliersOk

`func (o *IntelRiskLinks) GetOutliersOk() (*IntelHref, bool)`

GetOutliersOk returns a tuple with the Outliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutliers

`func (o *IntelRiskLinks) SetOutliers(v IntelHref)`

SetOutliers sets Outliers field to given value.

### HasOutliers

`func (o *IntelRiskLinks) HasOutliers() bool`

HasOutliers returns a boolean if a field has been set.


