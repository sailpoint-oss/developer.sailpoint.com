---
id: v2026-intel-identity-risk-body
title: IntelIdentityRiskBody
pagination_label: IntelIdentityRiskBody
sidebar_label: IntelIdentityRiskBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityRiskBody', 'V2026IntelIdentityRiskBody'] 
slug: /tools/sdk/go/v2026/models/intel-identity-risk-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityRiskBody', 'V2026IntelIdentityRiskBody']
---

# IntelIdentityRiskBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Outliers** | [**[]IntelOutlierAccessItem**](intel-outlier-access-item) | Page of outlier access-items associated with the resolved identity outlier. | 
**OutliersTotal** | **NullableInt64** | Total available outlier access-item count from upstream. | 
**Links** | Pointer to [**NullableIntelRiskLinks**](intel-risk-links) | Continuation links map; omitted when no additional page exists. | [optional] 

## Methods

### NewIntelIdentityRiskBody

`func NewIntelIdentityRiskBody(outliers []IntelOutlierAccessItem, outliersTotal NullableInt64, ) *IntelIdentityRiskBody`

NewIntelIdentityRiskBody instantiates a new IntelIdentityRiskBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityRiskBodyWithDefaults

`func NewIntelIdentityRiskBodyWithDefaults() *IntelIdentityRiskBody`

NewIntelIdentityRiskBodyWithDefaults instantiates a new IntelIdentityRiskBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOutliers

`func (o *IntelIdentityRiskBody) GetOutliers() []IntelOutlierAccessItem`

GetOutliers returns the Outliers field if non-nil, zero value otherwise.

### GetOutliersOk

`func (o *IntelIdentityRiskBody) GetOutliersOk() (*[]IntelOutlierAccessItem, bool)`

GetOutliersOk returns a tuple with the Outliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutliers

`func (o *IntelIdentityRiskBody) SetOutliers(v []IntelOutlierAccessItem)`

SetOutliers sets Outliers field to given value.


### GetOutliersTotal

`func (o *IntelIdentityRiskBody) GetOutliersTotal() int64`

GetOutliersTotal returns the OutliersTotal field if non-nil, zero value otherwise.

### GetOutliersTotalOk

`func (o *IntelIdentityRiskBody) GetOutliersTotalOk() (*int64, bool)`

GetOutliersTotalOk returns a tuple with the OutliersTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutliersTotal

`func (o *IntelIdentityRiskBody) SetOutliersTotal(v int64)`

SetOutliersTotal sets OutliersTotal field to given value.


### SetOutliersTotalNil

`func (o *IntelIdentityRiskBody) SetOutliersTotalNil(b bool)`

 SetOutliersTotalNil sets the value for OutliersTotal to be an explicit nil

### UnsetOutliersTotal
`func (o *IntelIdentityRiskBody) UnsetOutliersTotal()`

UnsetOutliersTotal ensures that no value is present for OutliersTotal, not even an explicit nil
### GetLinks

`func (o *IntelIdentityRiskBody) GetLinks() IntelRiskLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IntelIdentityRiskBody) GetLinksOk() (*IntelRiskLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IntelIdentityRiskBody) SetLinks(v IntelRiskLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IntelIdentityRiskBody) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### SetLinksNil

`func (o *IntelIdentityRiskBody) SetLinksNil(b bool)`

 SetLinksNil sets the value for Links to be an explicit nil

### UnsetLinks
`func (o *IntelIdentityRiskBody) UnsetLinks()`

UnsetLinks ensures that no value is present for Links, not even an explicit nil

