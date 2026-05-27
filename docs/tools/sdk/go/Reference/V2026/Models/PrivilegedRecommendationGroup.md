---
id: v2026-privileged-recommendation-group
title: PrivilegedRecommendationGroup
pagination_label: PrivilegedRecommendationGroup
sidebar_label: PrivilegedRecommendationGroup
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegedRecommendationGroup', 'V2026PrivilegedRecommendationGroup'] 
slug: /tools/sdk/go/v2026/models/privileged-recommendation-group
tags: ['SDK', 'Software Development Kit', 'PrivilegedRecommendationGroup', 'V2026PrivilegedRecommendationGroup']
---

# PrivilegedRecommendationGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementName** | Pointer to **string** | The name of the entitlement shared across all instances in this group. | [optional] 
**ConnectorType** | Pointer to **string** | The connector type associated with all instances in this group. | [optional] 
**RecommendationScore** | Pointer to **string** | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [optional] 
**OrgCount** | Pointer to **int32** | The number of organizations in which this entitlement appears as privileged. | [optional] 
**InstanceCount** | Pointer to **int32** | The total number of individual entitlement instances in this group. | [optional] 
**Instances** | Pointer to [**[]PrivilegedRecommendationInstance**](privileged-recommendation-instance) | The individual entitlement instances belonging to this group. | [optional] 

## Methods

### NewPrivilegedRecommendationGroup

`func NewPrivilegedRecommendationGroup() *PrivilegedRecommendationGroup`

NewPrivilegedRecommendationGroup instantiates a new PrivilegedRecommendationGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegedRecommendationGroupWithDefaults

`func NewPrivilegedRecommendationGroupWithDefaults() *PrivilegedRecommendationGroup`

NewPrivilegedRecommendationGroupWithDefaults instantiates a new PrivilegedRecommendationGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementName

`func (o *PrivilegedRecommendationGroup) GetEntitlementName() string`

GetEntitlementName returns the EntitlementName field if non-nil, zero value otherwise.

### GetEntitlementNameOk

`func (o *PrivilegedRecommendationGroup) GetEntitlementNameOk() (*string, bool)`

GetEntitlementNameOk returns a tuple with the EntitlementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementName

`func (o *PrivilegedRecommendationGroup) SetEntitlementName(v string)`

SetEntitlementName sets EntitlementName field to given value.

### HasEntitlementName

`func (o *PrivilegedRecommendationGroup) HasEntitlementName() bool`

HasEntitlementName returns a boolean if a field has been set.

### GetConnectorType

`func (o *PrivilegedRecommendationGroup) GetConnectorType() string`

GetConnectorType returns the ConnectorType field if non-nil, zero value otherwise.

### GetConnectorTypeOk

`func (o *PrivilegedRecommendationGroup) GetConnectorTypeOk() (*string, bool)`

GetConnectorTypeOk returns a tuple with the ConnectorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorType

`func (o *PrivilegedRecommendationGroup) SetConnectorType(v string)`

SetConnectorType sets ConnectorType field to given value.

### HasConnectorType

`func (o *PrivilegedRecommendationGroup) HasConnectorType() bool`

HasConnectorType returns a boolean if a field has been set.

### GetRecommendationScore

`func (o *PrivilegedRecommendationGroup) GetRecommendationScore() string`

GetRecommendationScore returns the RecommendationScore field if non-nil, zero value otherwise.

### GetRecommendationScoreOk

`func (o *PrivilegedRecommendationGroup) GetRecommendationScoreOk() (*string, bool)`

GetRecommendationScoreOk returns a tuple with the RecommendationScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationScore

`func (o *PrivilegedRecommendationGroup) SetRecommendationScore(v string)`

SetRecommendationScore sets RecommendationScore field to given value.

### HasRecommendationScore

`func (o *PrivilegedRecommendationGroup) HasRecommendationScore() bool`

HasRecommendationScore returns a boolean if a field has been set.

### GetOrgCount

`func (o *PrivilegedRecommendationGroup) GetOrgCount() int32`

GetOrgCount returns the OrgCount field if non-nil, zero value otherwise.

### GetOrgCountOk

`func (o *PrivilegedRecommendationGroup) GetOrgCountOk() (*int32, bool)`

GetOrgCountOk returns a tuple with the OrgCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgCount

`func (o *PrivilegedRecommendationGroup) SetOrgCount(v int32)`

SetOrgCount sets OrgCount field to given value.

### HasOrgCount

`func (o *PrivilegedRecommendationGroup) HasOrgCount() bool`

HasOrgCount returns a boolean if a field has been set.

### GetInstanceCount

`func (o *PrivilegedRecommendationGroup) GetInstanceCount() int32`

GetInstanceCount returns the InstanceCount field if non-nil, zero value otherwise.

### GetInstanceCountOk

`func (o *PrivilegedRecommendationGroup) GetInstanceCountOk() (*int32, bool)`

GetInstanceCountOk returns a tuple with the InstanceCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceCount

`func (o *PrivilegedRecommendationGroup) SetInstanceCount(v int32)`

SetInstanceCount sets InstanceCount field to given value.

### HasInstanceCount

`func (o *PrivilegedRecommendationGroup) HasInstanceCount() bool`

HasInstanceCount returns a boolean if a field has been set.

### GetInstances

`func (o *PrivilegedRecommendationGroup) GetInstances() []PrivilegedRecommendationInstance`

GetInstances returns the Instances field if non-nil, zero value otherwise.

### GetInstancesOk

`func (o *PrivilegedRecommendationGroup) GetInstancesOk() (*[]PrivilegedRecommendationInstance, bool)`

GetInstancesOk returns a tuple with the Instances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstances

`func (o *PrivilegedRecommendationGroup) SetInstances(v []PrivilegedRecommendationInstance)`

SetInstances sets Instances field to given value.

### HasInstances

`func (o *PrivilegedRecommendationGroup) HasInstances() bool`

HasInstances returns a boolean if a field has been set.


